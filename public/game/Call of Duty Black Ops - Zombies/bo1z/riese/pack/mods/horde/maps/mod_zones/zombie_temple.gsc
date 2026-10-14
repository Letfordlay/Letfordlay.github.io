// mod: HORDE MOD - run by the engine after the level main only when +set kisak_mod_zones zombie_temple loaded
// zombie_temple.ff (Scr_LoadLevel, g_modZoneLevelScripts). Registers the enemy modules that need Shangri-La's scripts.
// Not part of the original game.

main()
{
	maps\horde\_horde::horde_enemy_register( maps\horde\enemies\_napalm::init );
	maps\horde\_horde::horde_enemy_register( maps\horde\enemies\_sonic::init );
}
