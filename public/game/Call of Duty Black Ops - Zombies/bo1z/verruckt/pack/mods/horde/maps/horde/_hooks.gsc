// HORDE MOD - not part of the original game. Loaded with +set fs_mods "horde zinfo" (tools/horde_flags.js); on a mapkit
// map "mapkit horde zinfo" (the layout's hooks run first: it builds the map). The Tab counter is mods/zinfo, the
// no-perks option mods/noperks. Registered in the fs_mods base hooks (mods/_stack/maps/_modstack.gsc).

register()
{
	// Five's own "fix for the day" hook, start and end of maps\zombie_pentagon::main()
	maps\_modstack::add( "zombie_pentagon_ffotd::main_start", maps\horde\_horde::main_start );
	maps\_modstack::add( "zombie_pentagon_ffotd::main_end", maps\horde\_horde::main_end );
	// every other map: the shared hook of maps\_zombiemode::main()
	maps\_modstack::add( "_zombiemode_ffotd::main_end", ::main_end_any_map );
}

// Five keeps its own hook (above); every other map gets horde here. Runs straight away (no wait): the enemy modules'
// LoadFX/precache calls only work before the first frame.
main_end_any_map()
{
	if ( Tolower( GetDvar( #"mapname" ) ) == "zombie_pentagon" || IsDefined( level.horde_main_end_done ) )
	{
		return;
	}
	level.horde_main_end_done = true;
	maps\horde\_horde::main_end();
}
