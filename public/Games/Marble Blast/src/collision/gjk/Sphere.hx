package collision.gjk;

import h3d.Vector;

@:publicFields
class Sphere implements GJKShape {
	var position:Vector;
	var radius:Float;

	public function new() {}

	public function support(direction:Vector) {
		var c = position.clone();
		var d = direction.normalized();
		d = d.multiply(radius);
		c = c.add(d);
		return c;
	}

	public function getCenter() {
		return position;
	}
}
