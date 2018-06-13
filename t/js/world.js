// ==========================================
// World container
//
// This class contains the elements that make up the game world.
// Other modules retrieve information from the world or alter it
// using this class.
// ==========================================

// Constructor( sx, sy, sz )
//
// Creates a new world container with the specified world size.
// Up and down should always be aligned with the Z-direction.
//
// sx - World size in the X-direction.
// sy - World size in the Y-direction.
// sz - World size in the Z-direction.
if (typeof generate == 'undefined' && typeof require != 'undefined') generate = require('./generator.js');

function World(sx, sy, sz, roughness, smoothAmount, smoothAmt){

	this.blocks = new Array( sx );
	for ( var x = 0; x < sx; x++ )
	{
		this.blocks[x] = new Array( sy );
		for ( var y = 0; y < sy; y++ )
		{
			this.blocks[x][y] = new Array( sz );
		}
	}
	for(var x = 0; x < sx;x++){
		for(var y = 0; y < sy;y++){
			for(var z = 0; z < sz;z++){
				this.blocks[x][y][z] = BLOCK.AIR;
			}
		}
	}

	this.sx = sx;
	this.sy = sy;
	this.sz = sz;
	
	this.roughness = roughness;
	this.smoothAmount = smoothAmount;
	this.smoothAmt = smoothAmt;

	this.players = {};
}

World.prototype.getPower = function(a,b){
	if(b == 0)return 1;
	var d = a;
	for(var c = 1;c < b;c++)a = a*d;
	return a;
}

World.prototype.getPowerOfTwo = function(a,b){
	if(a<b)a = b;
	for(b = 0;this.getPower(2, b) <= a;b++);
	return b;
}

World.prototype.createWorld = function()
{

	var map = generate(this.getPower(2, this.getPowerOfTwo(this.sx, this.sy)), this.roughness, this.smoothAmount, this.smoothAmt);
	
	for ( var x = 0; x < this.sx; x++ ){
		for ( var y = 0; y < this.sy; y++ ){
			this.blocks[x][y][0] = BLOCK.BEDROCK;
			var pointHeight = map[x][y] * (this.sz - 10);
			for(var z = 1; z < this.sz;z++){
				if(z < pointHeight){
					if(!(z < pointHeight - 1))this.blocks[x][y][z] = BLOCK.GRASS;
					else if(z < pointHeight - 3){
						var random = Math.random() * 100;
						if(random < 1){
							this.blocks[x][y][z] = BLOCK.DIAMOND_ORE;
						}
						else if(random < 3){
							this.blocks[x][y][z] = BLOCK.GOLD_ORE;
						}
						else if(random < 6){
							this.blocks[x][y][z] = BLOCK.REDSTONE_ORE;
						}
						else if(random < 14){
							this.blocks[x][y][z] = BLOCK.IRON_ORE;
						}
						else if(random < 24){
							this.blocks[x][y][z] = BLOCK.COAL_ORE;
						}
						else this.blocks[x][y][z] = BLOCK.CONCRETE;
					}
					else this.blocks[x][y][z] = BLOCK.DIRT;
				}
				else if(z < 42){
					this.blocks[x][y][z] = BLOCK.WATER;
				}
				else if(y != this.sy/2 && x != this.sx/2 && ( z < pointHeight + 1 && z > pointHeight - 1) && (x > 2 && x < this.sx - 2) && (y > 2 && y < this.sy - 2)){
					var random = Math.random() * 100;
					if(random < 1){
						this.createTree(x,y,z,5,3,2);
					}
				}
			}
		}
	}
	this.spawnPoint = new Vector( this.sx/2 + 0.5, this.sy/2 + 0.5, map[this.sx/2][this.sy/2] * (this.sz - 10));
};

World.prototype.createTree = function(x,y,z,trunkHeight,leavesHeight,range)
{
	for(iz = 0;iz < trunkHeight;iz++){
		this.blocks[x][y][z + iz] = BLOCK.WOOD;
	}	

	for(var ix = -1*range;ix <= range;ix++){
		for(var iy = -1*range;iy <= range;iy++){
			for(iz = 0;iz < leavesHeight;iz++){
				if(!((Math.abs(iy) == range) && (Math.abs(ix) == range) && (iz == (leavesHeight - 1))))
				this.setBlock(x + ix, y + iy, z + iz + trunkHeight, BLOCK.LEAVES);
			}
		}
	}
};

// createFromString( str )
//
// Creates a world from a string representation.
// This is the opposite of toNetworkString().
//
// NOTE: The world must have already been created
// with the appropriate size!

World.prototype.createFromString = function( str )
{
	var i = 0;
	
	for ( var x = 0; x < this.sx; x++ ) {
		for ( var y = 0; y < this.sy; y++ ) {
			for ( var z = 0; z < this.sz; z++ ) {
				this.blocks[x][y][z] = BLOCK.fromId( str.charCodeAt( i ) - 97 );
				i = i + 1;
			}
		}
	}
};

// getBlock( x, y, z )
//
// Get the type of the block at the specified position.
// Mostly for neatness, since accessing the array
// directly is easier and faster.

World.prototype.getBlock = function( x, y, z )
{
	if ( x < 0 || y < 0 || z < 0 || x > this.sx - 1 || y > this.sy - 1 || z > this.sz - 1 ) return BLOCK.AIR;
	return this.blocks[x][y][z];
};

// setBlock( x, y, z )

World.prototype.setBlock = function( x, y, z, type )
{	
	this.blocks[x][y][z] = type;
	if ( this.renderer != null ){
		this.renderer.onBlockChanged( x, y, z );
	}
};

// toNetworkString()
//
// Returns a string representation of this world.

World.prototype.toNetworkString = function()
{
	var blockArray = [];
	
	for ( var x = 0; x < this.sx; x++ )
		for ( var y = 0; y < this.sy; y++ )
			for ( var z = 0; z < this.sz; z++ )
				blockArray.push( String.fromCharCode( 97 + this.blocks[x][y][z].id ) );
	
	return blockArray.join( "" );
};

// Export to node.js
if ( typeof( exports ) != "undefined" )
{
	// loadFromFile( filename )
	//
	// Load a world from a file previously saved with saveToFile().
	// The world must have already been allocated with the
	// appropriate dimensions.
	
	World.prototype.loadFromFile = function( filename )
	{
		var fs = require( "fs" );
		try {
			fs.lstatSync( filename );
			var data = fs.readFileSync( filename, "utf8" ).split( "," );
			this.createFromString( data[3] );
			this.spawnPoint = new Vector( parseInt( data[0] ), parseInt( data[1] ), parseInt( data[2] ) );
			return true;
		} catch ( e ) {
			return false;
		}
	};
	
	// saveToFile( filename )
	//
	// Saves a world and the spawn point to a file.
	// The world can be loaded from it afterwards with loadFromFile().
	
	World.prototype.saveToFile = function( filename )
	{
		var data = this.spawnPoint.x + "," + this.spawnPoint.y + "," + this.spawnPoint.z + "," + this.toNetworkString();
		require( "fs" ).writeFileSync( filename, data );	
	};
	
	exports.World = World;
}
