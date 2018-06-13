// ==========================================
// Player
//
// This class contains the code that manages the local player.
// ==========================================

// Mouse event enumeration
var MOUSE = {};
MOUSE.DOWN = 1;
MOUSE.UP = 2;
MOUSE.MOVE = 3;

// Podzial na wersje
var VERSION = {};
VERSION.DESKTOP = 1;
VERSION.MOBILE = 2;
VERSION.DEBUG = 3;

// Constructor()
//
// Creates a new local player manager.
function Player()
{
	this.onLockedMouseMove = this.onLockedMouseMove.bind(this);
	this.onPointerLockChange = this.onPointerLockChange.bind(this);
	this.onLockedMouseDown = this.onLockedMouseDown.bind(this);
    this.keys = {};
    this.falling = false;
   	this.buildMaterial = BLOCK.DIRT;
	this.eventHandlers = {};
	this.velocity = new Vector( 0, 0, 0 );
	this.angles = [ 0, Math.PI, 0 ];
}

// setWorld( world )
//
// Assign the local player to a world.

Player.prototype.setWorld = function( world )
{
	this.world = world;
	this.world.localPlayer = this;
	this.pos = world.spawnPoint;
};

Player.prototype.setClient = function( client )	
{	
	this.client = client;	
};
// setInputCanvas( id, version )
//
// Set the canvas the renderer uses for some input operations.

Player.prototype.setInputCanvas = function( id , version){
	var canvas = this.canvas = document.getElementById( id );
	var t = this;
	
	if(version == VERSION.MOBILE){
		var pad = this.pad = {center: document.getElementById("pad_center"), up: document.getElementById("pad_up"), down: document.getElementById("pad_down"), left: document.getElementById("pad_left"), right: document.getElementById("pad_right")};
		var itemSelector = this.itemSelector = document.getElementById("active_item");
		itemSelector.ontouchend = function( e ) { t.openEq() };
		itemSelector.onmouseup = function( e ) { t.openEq() };
		pad.center.ontouchstart = function( e ) { t.onKeyEvent( "32" , true) };
		pad.center.ontouchend = function( e ) { t.onKeyEvent( "32" , false) };
		pad.up.ontouchstart = function( e ) { t.onKeyEvent( "119" , true) };
		pad.up.ontouchend = function( e ) { t.onKeyEvent( "119" , false) };
		pad.down.ontouchstart = function( e ) { t.onKeyEvent( "115" , true) };
		pad.down.ontouchend = function( e ) { t.onKeyEvent( "115" , false) };
		pad.left.ontouchstart = function( e ) { t.onKeyEvent( "97" , true) };
		pad.left.ontouchend = function( e ) { t.onKeyEvent( "97" , false) };
		pad.right.ontouchstart = function( e ) { t.onKeyEvent( "100" , true) };
		pad.right.ontouchend = function( e ) { t.onKeyEvent( "100" , false) };
		canvas.ontouchstart = function( e ) {
			var touches = e.changedTouches;
			var length = touches.length;
			t.onTouchEvent( e.changedTouches[length - 1].pageX, e.changedTouches[length - 1].pageY, MOUSE.DOWN, e.which == 3 );
			return false;
		};
		canvas.ontouchend = function( e ) {  
			var touches = e.changedTouches;
			var length = touches.length;
			t.onTouchEvent( e.changedTouches[length - 1].pageX, e.changedTouches[length - 1].pageY, MOUSE.UP, e.which == 3 );
			return false;
		};
		canvas.ontouchleave = function( e ) {
			var touches = e.changedTouches;
			var length = touches.length;
			t.onTouchEvent( e.changedTouches[length - 1].pageX, e.changedTouches[length - 1].pageY, MOUSE.UP, e.which == 3 );
			return false;
		};
		canvas.ontouchmove = function( e ) {
			var touches = e.changedTouches;
			var length = touches.length;
			t.onTouchEvent(e.changedTouches[length - 1].pageX, e.changedTouches[length - 1].pageY, MOUSE.MOVE, e.which == 3 );
			return false;
		};
	}else if(version == VERSION.DESKTOP){
		document.onkeydown = function( e ) { if ( e.target.tagName != "INPUT" ) { t.onKeyEvent( e.keyCode, true ); return false; } };
		document.onkeyup = function( e ) { if ( e.target.tagName != "INPUT" ) { t.onKeyEvent( e.keyCode, false ); return false; } };
		canvas.onclick = function ( e ) { t.requestPointerLock(); };
		window.onmousewheel = function(e) {
			e.stopPropagation();
			e.preventDefault();
		}
		document.addEventListener('pointerlockchange', t.onPointerLockChange, false);
		document.addEventListener('mozpointerlockchange', t.onPointerLockChange, false);
		document.addEventListener('webkitpointerlockchange', t.onPointerLockChange, false);
	}else if(version == VERSION.DEBUG){
	    // Moze nie dzialac !
		var debugInput = this.debugInput = {roughness: document.getElementById("roughness"), smoothAmount: document.getElementById("smoothAmount"), smoothAmt: document.getElementById("smoothAmt"), visible: document.getElementById("debugVisible")};

		debugInput.roughness.onblur = debugInput.smoothAmount.onblur = debugInput.smoothAmt.onblur = function(e){
			world = new World(60, 60, 100, debugInput.roughness.value, debugInput.smoothAmount.value, debugInput.smoothAmt.value);
			world.createWorld();
			render = new Renderer( "renderSurface" );
			render.setWorld( world, 8 );
			render.setPerspective( 80, 0.01, 220 );
			player.setWorld( world );
		 };

		debugInput.visible.onclick = function(e) {
			debugInput.roughness.blur();
			debugInput.smoothAmount.blur();
			debugInput.smoothAmt.blur();
			debugInput.visible.blur();
		}


		document.onkeydown = function( e ) { if ( e.target.tagName != "INPUT" ) { t.onKeyEvent( e.keyCode, true ); return false; } };
		document.onkeyup = function( e ) { if ( e.target.tagName != "INPUT" ) { t.onKeyEvent( e.keyCode, false ); return false; } };
		canvas.onmousedown = function( e ) { t.onMouseEvent( e.clientX, e.clientY, MOUSE.DOWN, e.which == 3 ); return false; };
		canvas.onmouseup = function( e ) { t.onMouseEvent( e.clientX, e.clientY, MOUSE.UP, e.which == 3 ); return false; };
		canvas.onmousemove = function( e ) { t.onMouseEvent( e.clientX, e.clientY, MOUSE.MOVE, e.which == 3 ); return false; };
	}
};

Player.prototype.requestPointerLock = function() {
	this.canvas.requestPointerLock = this.canvas.requestPointerLock ||
		this.canvas.mozRequestPointerLock ||
		this.canvas.webkitRequestPointerLock;

	this.canvas.requestPointerLock();
};

document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock ||
                           document.webkitExitPointerLock;
                           

Player.prototype.onPointerLockChange = function(event) {
  var pointerLockElement = document.pointerLockElement ||
  	document.mozPointerLockElement ||
    document.webkitPointerLockElement;

	if (!!pointerLockElement) {
		document.addEventListener("mousemove", this.onLockedMouseMove, false);
		document.addEventListener("mousedown", this.onLockedMouseDown, false);
  } else {
		document.removeEventListener("mousemove", this.onLockedMouseMove, false);
		document.removeEventListener("mousedown", this.onLockedMouseDown, false);
  }
};

Player.prototype.onLockedMouseMove = function(e) {
  var movementX = e.movementX       ||
                  e.mozMovementX    ||
                  e.webkitMovementX ||
                  0,
      movementY = e.movementY       ||
                  e.mozMovementY    ||
                  e.webkitMovementY ||
                  0;
 
    //this.mouseDown = false;
    this.dragging = true;
	this.scrolling= true;
	this.targetPitch = this.angles[0] - movementY*0.001213423;
	this.targetYaw = this.angles[1] + movementX*0.001213423;
};

Player.prototype.onLockedMouseDown = function(e) {
	var middleX = window.innerWidth / 2;
	var middleY = window.innerHeight / 2;
	this.doBlockAction( middleX, middleY, !(e.which == 3 || e.ctrlKey) );
};



// openEq()
//
// Open inventory

Player.prototype.openEq = function() {
	document.getElementById("pad").style.display = "none";	
	document.getElementById("chatbox").style.display = "none";
	document.getElementById("active_block").style.display = "none";	
	document.getElementById("eq").style.display = "block";		
}

// setMaterialSelector( id )
//
// Sets the table with the material selectors.
//
// >>> UNUSED <<<
//


Player.prototype.setMaterialSelector = function( id )
{
	var tableRow = document.getElementById( id ).getElementsByTagName( "tr" )[0];
	var texOffset = 0;

	for ( var mat in BLOCK )
	{
		if ( typeof( BLOCK[mat] ) == "object" && BLOCK[mat].spawnable == true )
		{
			var selector = document.createElement( "td" );
			selector.style.backgroundPosition = texOffset + "px 0px";

			var pl = this;
			selector.material = BLOCK[mat];
			selector.onclick = function()
			{
				this.style.opacity = "1.0";

				pl.prevSelector.style.opacity = null;
				pl.prevSelector = this;

				pl.buildMaterial = this.material;
			};

			if ( mat == "DIRT" ) {
				this.prevSelector = selector;
				selector.style.opacity = "1.0";
			}

			tableRow.appendChild( selector );
			texOffset -= 70;
		}
	}
};


// on( event, callback )
//
// Hook a player event.

Player.prototype.on = function( event, callback )
{
	this.eventHandlers[event] = callback;
};

// onKeyEvent( keyCode, down )
//
// Hook for keyboard input.

Player.prototype.onKeyEvent = function( keyCode, down )
{
	var key = String.fromCharCode( keyCode ).toLowerCase();
	this.keys[key] = down;
	this.keys[keyCode] = down;
	
	if (!down && key == "r" ){
        this.pos = this.world.spawnPoint;
	}else if (!down && key == "e"){
		var blockSelect = document.getElementById("blocks").style;
        document.exitPointerLock();
		if(blockSelect.display == "none"){
			blockSelect.display = "";
		}
        return;
	}else if (!down && keyCode == 27){
		var blockSelect = document.getElementById("blocks").style;
		if(blockSelect.display == ""){
			blockSelect.display = "none";
            requestPointerLock();
            return;
		}
	}
};

// onMouseEvent( x, y, type, rmb )
//
// Hook for mouse input.

Player.prototype.onMouseEvent = function( x, y, type, rmb )
{
	if ( type == MOUSE.DOWN ) {
		this.dragStart = { x: x, y: y };
		this.mouseDown = true;
		this.yawStart = this.targetYaw = this.angles[1];
		this.pitchStart = this.targetPitch = this.angles[0];
	}else if ( type == MOUSE.UP ) {
		if ( Math.abs( this.dragStart.x - x ) + Math.abs( this.dragStart.y - y ) < 4 )	
			this.doBlockAction( x, y, !rmb );
		this.dragging = false;
		this.mouseDown = false;
		this.canvas.style.cursor = "default";
	}else if ( type == MOUSE.MOVE && this.mouseDown) {
		this.dragging = true;
		this.angles[0] = this.targetPitch = this.pitchStart - ( y - this.dragStart.y ) / 200;
		this.angles[1] = this.targetYaw = this.yawStart + ( x - this.dragStart.x ) / 200;
		this.canvas.style.cursor = "default";
	}
};


Player.prototype.onTouchEvent = function( x, y, type, rmb )
{
	if ( type == MOUSE.DOWN ) {
		this.dragStart = { x: x, y: y };
		this.mouseDown = true;
		this.yawStart = this.targetYaw = this.angles[1];
		this.pitchStart = this.targetPitch = this.angles[0];
	} else if ( type == MOUSE.UP ) {
		if ( Math.abs( this.dragStart.x - x ) + Math.abs( this.dragStart.y - y ) < 4 )	
			this.doBlockAction( x, y, !rmb );

		this.dragging = false;
		this.mouseDown = false;
		this.canvas.style.cursor = "default";
	} else if ( type == MOUSE.MOVE && this.mouseDown ) {
		this.dragging = true;
		this.angles[0] = this.targetPitch = this.pitchStart + ( y - this.dragStart.y ) / 200;
		this.angles[1] = this.targetYaw = this.yawStart - ( x - this.dragStart.x ) / 200;

		this.canvas.style.cursor = "default";
	}
};


// doBlockAction( x, y )
//
// Called to perform an action based on the player's block selection and input.

Player.prototype.doBlockAction = function( x, y, destroy )
{
	var bPos = new Vector( Math.floor( this.pos.x ), Math.floor( this.pos.y ), Math.floor( this.pos.z ) );
	var block = this.canvas.renderer.pickAt( new Vector( bPos.x - 4, bPos.y - 4, bPos.z - 4 ), new Vector( bPos.x + 4, bPos.y + 4, bPos.z + 4 ), x, y );
	
	if ( block !== false )
	{
		var obj = this.client ? this.client : this.world;
		if (destroy){
			obj.setBlock( block.x, block.y, block.z, BLOCK.AIR );
		}
		else
			obj.setBlock( block.x + block.n.x, block.y + block.n.y, block.z + block.n.z, this.buildMaterial );
	}
};

// getEyePos()
//
// Returns the position of the eyes of the player for rendering.

Player.prototype.getEyePos = function()
{
	return this.pos.add( new Vector( 0.0, 0.0, 1.7 ) );
};

// Updates this local player (gravity, movement)

Player.prototype.update = function()
{
	var velocity = this.velocity;
	var pos = this.pos;

	if ( this.lastUpdate != null )
	{
		var bPos = new Vector( Math.floor( pos.x ), Math.floor( pos.y ), Math.floor( pos.z ) );
		var delta = ( new Date().getTime() - this.lastUpdate ) / 1000;

		// View
		if ( this.dragging )
		{
			this.angles[0] += ( this.targetPitch - this.angles[0] ) * 30 * delta;
			this.angles[1] += ( this.targetYaw - this.angles[1] ) * 30 * delta;
			if ( this.angles[0] < -Math.PI/2 ) this.angles[0] = -Math.PI/2;
			if ( this.angles[0] > Math.PI/2 ) this.angles[0] = Math.PI/2;
		}

		// Gravity
		if ( this.falling )
			velocity.z += -0.5;

		// Jumping
		if ( this.keys[" "] && !this.falling )
			velocity.z = 8;

		// Moving
		var walkVelocity = new Vector( 0, 0, 0 );
		if ( this.keys["w"] ) {
			//walkVelocity.x += Math.cos( Math.PI / 2 - this.angles[1] );
            walkVelocity.x += Math.cos(1.57 - this.angles[1]); 
			//walkVelocity.y += Math.sin( Math.PI / 2 - this.angles[1] );
            walkVelocity.y += Math.sin(1.57 - this.angles[1]);
		}
		if ( this.keys["s"] ) {
			//walkVelocity.x += Math.cos( Math.PI + Math.PI / 2 - this.angles[1] );
            walkVelocity.x += Math.cos(4.71 - this.angles[1]);
			//walkVelocity.y += Math.sin( Math.PI + Math.PI / 2 - this.angles[1] );
            walkVelocity.y += Math.sin(4.71 - this.angles[1]);
		}
		if ( this.keys["a"] ) {
			//walkVelocity.x += Math.cos( Math.PI / 2 + Math.PI / 2 - this.angles[1] );
            walkVelocity.x += Math.cos(3.14 - this.angles[1]);
			//walkVelocity.y += Math.sin( Math.PI / 2 + Math.PI / 2 - this.angles[1] );
            walkVelocity.y += Math.sin(3.14 - this.angles[1]);
		}
		if ( this.keys["d"] ) {
			//walkVelocity.x += Math.cos( -Math.PI / 2 + Math.PI / 2 - this.angles[1] );
            walkVelocity.x += Math.cos(-this.angles[1]);
			//walkVelocity.y += Math.sin( -Math.PI / 2 + Math.PI / 2 - this.angles[1] );
            walkVelocity.y += Math.sin(-this.angles[1]);
		}
		
		if ( walkVelocity.length() > 0 ) {
				walkVelocity = walkVelocity.normal();
				velocity.x = walkVelocity.x * 4;
				velocity.y = walkVelocity.y * 4;
		}else {
			velocity.x /= this.falling ? 1.013 : 1.51;
			velocity.y /= this.falling ? 1.013 : 1.51;
		}
		// Resolve collision
		this.pos = this.resolveCollision( pos, bPos, velocity.mul( delta ) );
	}
	if(this.pos.z < -4){
		this.pos = this.world.spawnPoint;
	}
    
   	this.lastUpdate = new Date().getTime();
};

// resolveCollision( pos, bPos, velocity )
//
// Resolves collisions between the player and blocks on XY level for the next movement step.

Player.prototype.resolveCollision = function( pos, bPos, velocity )
{
	var world = this.world;
	var playerRect = { x: pos.x + velocity.x, y: pos.y + velocity.y, size: 0.25 };

	// Collect XY collision sides
	var collisionCandidates = [];

	for ( var x = bPos.x - 1; x <= bPos.x + 1; x++ ){
		for ( var y = bPos.y - 1; y <= bPos.y + 1; y++ ){
			for ( var z = bPos.z; z <= bPos.z + 1; z++ ){
				if (world.getBlock( x, y, z ) !== BLOCK.AIR){
					if (world.getBlock( x - 1, y, z ) == BLOCK.AIR ) collisionCandidates.push( { x: x, dir: -1, y1: y, y2: y + 1 } );
					else if (world.getBlock( x + 1, y, z ) == BLOCK.AIR ) collisionCandidates.push( { x: x + 1, dir: 1, y1: y, y2: y + 1 } );
					else if (world.getBlock( x, y - 1, z ) == BLOCK.AIR ) collisionCandidates.push( { y: y, dir: -1, x1: x, x2: x + 1 } );
					else if (world.getBlock( x, y + 1, z ) == BLOCK.AIR ) collisionCandidates.push( { y: y + 1, dir: 1, x1: x, x2: x + 1 } );
				}
			}
		}
	}

	// Solve XY collisions
	for( var i in collisionCandidates ) {
		var side = collisionCandidates[i];

		if ( lineRectCollide( side, playerRect ) ){
			if ( side.x != null && velocity.x * side.dir < 0 ){
				pos.x = side.x + playerRect.size / 2 * ( velocity.x > 0 ? -1 : 1 );
				velocity.x = 0;
			}else if ( side.y != null && velocity.y * side.dir < 0 ) {
				pos.y = side.y + playerRect.size / 2 * ( velocity.y > 0 ? -1 : 1 );
				velocity.y = 0;
			}
		}
	}

	var playerFace = { x1: pos.x + velocity.x - 0.125, y1: pos.y + velocity.y - 0.125, x2: pos.x + velocity.x + 0.125, y2: pos.y + velocity.y + 0.125 };
	var newBZLower = Math.floor( pos.z + velocity.z );
	var newBZUpper = Math.floor( pos.z + 1.7 + velocity.z * 1.1 );

	// Collect Z collision sides
	collisionCandidates = [];

	for ( var x = bPos.x - 1; x <= bPos.x + 1; x++ ) {
		for ( var y = bPos.y - 1; y <= bPos.y + 1; y++ ){
			if ( world.getBlock( x, y, newBZLower ) != BLOCK.AIR )
				collisionCandidates.push( { z: newBZLower + 1, dir: 1, x1: x, y1: y, x2: x + 1, y2: y + 1 } );
			else if ( world.getBlock( x, y, newBZUpper ) != BLOCK.AIR )
				collisionCandidates.push( { z: newBZUpper, dir: -1, x1: x, y1: y, x2: x + 1, y2: y + 1 } );
		}
	}

	// Solve Z collisions
	this.falling = true;
	for ( var i in collisionCandidates )
	{
		var face = collisionCandidates[i];

		if ( rectRectCollide( face, playerFace ) && velocity.z * face.dir < 0 )
		{
			if ( velocity.z < 0 ) {
				this.falling = false;
				pos.z = face.z;
				velocity.z = 0;
				this.velocity.z = 0;
			} else {
				pos.z = face.z - 1.8;
				velocity.z = 0;
				this.velocity.z = 0;
			}

			break;
		}
	}

	// Return solution
	return pos.add( velocity );
};
