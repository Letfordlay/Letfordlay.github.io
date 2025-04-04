package shaders;

import src.Renderer;
import src.Sky;
import h3d.Vector;
import h3d.scene.Scene;
import h3d.Engine;
import h3d.Camera;
import src.MarbleGame;
import h3d.mat.Texture;
import src.Settings;

class CubemapRenderer {
	public var cubemap:Texture;
	public var sky:Sky;
	public var position:Vector;

	var camera:Camera;
	var scene:Scene;
	var nextFaceToRender:Int;
	var facesPerRender:Int = 2;
	var updateFps:Float = 360.0; // 6 faces in (1/60) seconds, 1 face in (1/360) seconds
	var lastRenderTime:Float = 0;
	var usingSky:Bool = false;

	public function new(scene:Scene, sky:Sky, useSky = false) {
		this.scene = scene;
		this.sky = sky;
		this.usingSky = useSky;
		if (useSky)
			this.cubemap = sky.cubemap;
		else {
			this.cubemap = new Texture(128, 128, [Cube, Dynamic, Target], h3d.mat.Data.TextureFormat.RGBA);
			this.cubemap.depthBuffer = new h3d.mat.DepthBuffer(128, 128, h3d.mat.DepthBuffer.DepthFormat.Depth16);
		}
		this.camera = new Camera(90, 1, 1, 0.1, 1000);
		this.position = new Vector();
		this.nextFaceToRender = 0;
	}

	public function render(e:Engine) {
		if (usingSky)
			return;
		var start = haxe.Timer.stamp();
		if (start - lastRenderTime > facesPerRender * 1.0 / updateFps) {
			lastRenderTime = start;
		} else {
			return;
		}

		var scenecam = scene.camera;
		scene.camera = camera;

		var renderedFaces = 0;
		Renderer.cubemapPass = true;
		for (i in 0...facesPerRender) {
			var index = (nextFaceToRender + i) % 6;
			if (Settings.optionsSettings.reflectionDetail >= 4)
				Renderer.dirtyBuffers = true;

			e.pushTarget(cubemap, index);
			var ourRenderer = cast(scene.renderer, Renderer);
			// ourRenderer.setCubemapBuffer(cubemap, index);
			this.camera.setCubeMap(index, position);
			this.camera.update();
			e.clear(0, 1);
			scene.render(e);
			e.popTarget();

			renderedFaces++;
			var time = haxe.Timer.stamp();
			var elapsed = time - start;
			var elapsedPerFace = elapsed / renderedFaces;

			if (elapsedPerFace * (renderedFaces + 1) >= 0.002)
				break;
		}
		Renderer.cubemapPass = false;
		scene.camera = scenecam;

		this.nextFaceToRender += renderedFaces;
		this.nextFaceToRender %= 6;
	}

	public function getCameraFrustums() {
		var frustums = [];
		var prevFar = this.camera.zFar;
		this.camera.zFar = 300; // Max draw distance
		for (i in 0...6) {
			this.camera.setCubeMap(i, position);
			this.camera.update();
			frustums.push(camera.frustum.clone());
		}
		this.camera.zFar = prevFar;
		return frustums;
	}
}
