package gui;

import hxd.Window;
import src.Console;
import src.MarbleGame;
import h3d.Vector;
import h2d.Scene;
import gui.GuiControl.MouseState;

@:publicFields
class Canvas extends GuiControl {
	var scene2d:Scene;
	var marbleGame:MarbleGame;
	var content:GuiControl;

	public function new(scene, marbleGame:MarbleGame) {
		super();
		Console.log("Creating canvas");
		this.scene2d = scene;
		this.marbleGame = marbleGame;

		this.position = new Vector();
		this.extent = new Vector(640, 480);
		this.horizSizing = Width;
		this.vertSizing = Height;
		#if hl
		Window.getInstance().addResizeEvent(() -> {
			var wnd = Window.getInstance();
			onResize(wnd.width, wnd.height);
			Console.log('Window resized to ${wnd.width} x ${wnd.height}, scene ${scene2d.width} x ${scene2d.height}');
		});
		#end
	}

	public function setContent(content:GuiControl) {
		this.dispose();
		this.content = content;
		this.addChild(content);
		this.render(scene2d);
	}

	public function pushDialog(content:GuiControl) {
		this.addChild(content);
		content.render(scene2d, @:privateAccess this._flow);
		// this.render(scene2d);
	}

	public function popDialog(content:GuiControl, dispose:Bool = true) {
		if (dispose)
			content.dispose();
		this.removeChild(content);
		this.render(scene2d);
	}

	public function clearContent() {
		this.dispose();
		this.render(scene2d);
	}

	public override function update(dt:Float, mouseState:MouseState) {
		// Update ONLY the last one
		if (children.length > 0) {
			children[children.length - 1].update(dt, mouseState);
		}
	}

	public override function renderEngine(e:h3d.Engine) {
		if (children.length > 0) {
			children[children.length - 1].renderEngine(e);
		}
	}
}
