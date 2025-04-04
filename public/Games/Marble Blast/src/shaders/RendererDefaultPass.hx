package shaders;

import h3d.pass.PassObject;
import h3d.pass.ShaderManager;
import h3d.pass.Base;
import h3d.pass.SortByMaterial;

@:build(hxsl.Macros.buildGlobals())
@:access(h3d.mat.Pass)
class RendererDefaultPass extends Base {
	var manager:ShaderManager;
	var globals(get, never):hxsl.Globals;
	var defaultSort = new SortByMaterial().sort;

	inline function get_globals()
		return manager.globals;

	@global("camera.view") var cameraView:h3d.Matrix = ctx.camera.mcam;
	@global("camera.zNear") var cameraNear:Float = ctx.camera.zNear;
	@global("camera.zFar") var cameraFar:Float = ctx.camera.zFar;
	@global("camera.proj") var cameraProj:h3d.Matrix = ctx.camera.mproj;
	@global("camera.position") var cameraPos:h3d.Vector = ctx.camera.pos;
	@global("camera.projDiag") var cameraProjDiag:h3d.Vector = new h3d.Vector(ctx.camera.mproj._11, ctx.camera.mproj._22, ctx.camera.mproj._33,
		ctx.camera.mproj._44);
	@global("camera.projFlip") var cameraProjFlip:Float = ctx.engine.driver.hasFeature(BottomLeftCoords)
		&& ctx.engine.getCurrentTarget() != null ? -1 : 1;
	@global("camera.viewProj") var cameraViewProj:h3d.Matrix = ctx.camera.m;
	@global("camera.inverseViewProj") var cameraInverseViewProj:h3d.Matrix = ctx.camera.getInverseViewProj();
	@global("global.time") var globalTime:Float = ctx.time;
	@global("global.pixelSize") var pixelSize:h3d.Vector = getCurrentPixelSize();
	@global("global.modelView") var globalModelView:h3d.Matrix;
	@global("global.modelViewInverse") var globalModelViewInverse:h3d.Matrix;
	@global("global.modelViewTranspose") var globalModelViewTranspose:h3d.Matrix;

	public function new(name) {
		super(name);
		manager = new ShaderManager(getOutputs());
		initGlobals();
	}

	function getCurrentPixelSize() {
		var t = ctx.engine.getCurrentTarget();
		return new h3d.Vector(2 / (t == null ? ctx.engine.width : t.width), 2 / (t == null ? ctx.engine.height : t.height));
	}

	function getOutputs():Array<hxsl.Output> {
		return [Value("output.color")];
	}

	override function compileShader(p:h3d.mat.Pass) {
		var o = @:privateAccess new h3d.pass.PassObject();
		o.pass = p;
		setupShaders(new h3d.pass.PassList(o));
		return manager.compileShaders(o.shaders, p.batchMode);
	}

	function processShaders(p:h3d.pass.PassObject, shaders:hxsl.ShaderList) {
		var p = ctx.extraShaders;
		while (p != null) {
			shaders = ctx.allocShaderList(p.s, shaders);
			p = p.next;
		}
		return shaders;
	}

	@:access(h3d.scene)
	function setupShaders(passes:h3d.pass.PassList) {
		var lightInit = false;
		for (p in passes) {
			var shaders = p.pass.getShadersRec();
			shaders = processShaders(p, shaders);
			if (p.pass.enableLights && ctx.lightSystem != null) {
				if (!lightInit) {
					ctx.lightSystem.initGlobals(globals);
					lightInit = true;
				}
				shaders = ctx.lightSystem.computeLight(p.obj, shaders);
			}
			p.shader = manager.compileShaders(shaders, p.pass.batchMode);
			p.shaders = shaders;
			var t = p.shader.fragment.textures;
			if (t == null || t.type.match(TArray(_)))
				p.texture = 0;
			else {
				var t:h3d.mat.Texture = manager.getParamValue(t, shaders, true);
				p.texture = t == null ? 0 : t.id;
			}
		}
	}

	inline function log(str:String) {
		ctx.engine.driver.log(str);
	}

	function drawObject(p:h3d.pass.PassObject) {
		ctx.drawPass = p;
		ctx.engine.selectMaterial(p.pass);
		@:privateAccess p.obj.draw(ctx);
	}

	static public dynamic function onShaderError(e:Dynamic, p:PassObject) {
		throw e;
	}

	@:access(h3d.scene)
	override function draw(passes:h3d.pass.PassList, ?sort:h3d.pass.PassList->Void) {
		if (passes.isEmpty())
			return;
		#if sceneprof h3d.impl.SceneProf.begin("draw", ctx.frame); #end
		for (g in ctx.sharedGlobals)
			globals.fastSet(g.gid, g.value);
		setGlobals();
		setupShaders(passes);
		if (sort == null)
			defaultSort(passes);
		else
			sort(passes);
		ctx.currentManager = manager;
		var buf = ctx.shaderBuffers, prevShader = null;
		for (p in passes) {
			#if sceneprof h3d.impl.SceneProf.mark(p.obj); #end
			globalModelView = p.obj.absPos;
			if (p.shader.hasGlobal(globalModelViewTranspose_id.toInt())) {
				globalModelViewTranspose = globalModelView.clone();
				globalModelViewTranspose.transpose();
			}
			if (p.shader.hasGlobal(globalModelViewInverse_id.toInt()))
				globalModelViewInverse = p.obj.getInvPos();
			if (prevShader != p.shader) {
				prevShader = p.shader;
				try {
					ctx.engine.selectShader(p.shader);
				} catch (e:Dynamic) {
					onShaderError(e, p);
					continue;
				}
				if (buf == null)
					buf = ctx.shaderBuffers = new h3d.shader.Buffers(p.shader);
				else
					buf.grow(p.shader);
				manager.fillGlobals(buf, p.shader);
				ctx.engine.uploadShaderBuffers(buf, Globals);
			}
			if (!p.pass.dynamicParameters) {
				manager.fillParams(buf, p.shader, p.shaders);
				ctx.engine.uploadShaderBuffers(buf, Params);
				ctx.engine.uploadShaderBuffers(buf, Textures);
				ctx.engine.uploadShaderBuffers(buf, Buffers);
			}
			drawObject(p);
		}
		#if sceneprof h3d.impl.SceneProf.end(); #end
		ctx.nextPass();
	}
}
