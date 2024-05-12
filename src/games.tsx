/* eslint-disable @next/next/no-img-element */
export type GameEntry = { name: string; content: React.ReactNode };

export const games: Record<string, GameEntry> = {
    "google-pacman": {
        name: "Google Pacman",
        content: (
            <iframe
                src="/Games/Google Pacman/GooglePacman.html"
                height="400"
                width="700"
                style={{ border: 0 }}
            />
        )
    },
    "marble-blast": {
        name: "Marble Blast",
        content: (
            <>
                <object data="https://marbleblast.vaniverse.io/" width="600" height="400">
                    <embed src="https://marbleblast.vaniverse.io/" />
                    Error: Embedded data could not be displayed.
                </object>

                <br />

                <a href="https://github.com/Vanilagy/MarbleBlast">
                    <img width="240px" alt="Original on Github" src="/img/github.png" />
                </a>
            </>
        )
    },
    "minecraft-classic": {
        name: "Minecraft Classic",
        content: (
            <iframe
                src="/Games/Minecraft Classic/index.html"
                height="400"
                width="700"
                style={{ border: 0 }}
            />
        )
    },
    "powder-game": {
        name: "Powder Game",
        content: (
            <iframe
                src="/Games/PowderGame/powdergame.html"
                width="440"
                height="496"
                style={{ border: 0 }}
            />
        )
    },
    "stick-ranger": {
        name: "Stick Ranger",
        content: (
            <iframe
                src="/Games/StickRanger/StickRanger.html"
                height="700"
                width="700"
                style={{ border: 0 }}
            />
        )
    },
    twist: {
        name: "Twist",
        content: (
            <>
                <iframe
                    src="/Games/Twist/index.html"
                    width="550"
                    height="550"
                    style={{ border: 0 }}
                />
            </>
        )
    }
};

export const flashGames: Record<string, GameEntry> = {
    "bloons-tower-defense-3": {
        name: "Bloons Tower Defense 3",
        content: (
            <object>
                <embed src="/Games/bloonstowerdefense3.swf" width="600" height="465" />
            </object>
        )
    },
    "bloons-tower-defense-4": {
        name: "Bloons Tower Defense 4",
        content: (
            <object>
                <embed src="/Games/bloonstowerdefense4.swf" width="600" height="465" />
            </object>
        )
    },
    "bloons-tower-defense-5": {
        name: "Bloons Tower Defense 5",
        content: (
            <object>
                <embed src="/Games/bloonstowerdefense5.swf" width="600" height="465" />
            </object>
        )
    },
    boombot: {
        name: "Boombot",
        content: (
            <object>
                <embed src="/Games/boombot.swf" width="600" height="465" />
            </object>
        )
    },
    "boombot-2": {
        name: "Boombot 2",
        content: (
            <object>
                <embed src="/Games/boombot2.swf" width="600" height="465" />
            </object>
        )
    },
    "bowman-2": {
        name: "Bowman 2",
        content: (
            <object>
                <embed src="/Games/Bowman 2.swf" width="600" height="465" />
            </object>
        )
    },
    "cat-mario": {
        name: "Cat Mario",
        content: (
            <object>
                <embed src="/Games/cat mario.swf" width="750" height="660" />
            </object>
        )
    },
    cubefield: {
        name: "Cubefield",
        content: (
            <object>
                <embed src="/Games/cubefield.swf" width="600" height="465" />
            </object>
        )
    },
    "double-wires": {
        name: "Double Wires",
        content: (
            <object>
                <embed src="/Games/DoubleWires.swf" width="700" height="400" />
            </object>
        )
    },
	"dune-buggy": {
        name: "Dune Buggy",
        content: (
            <object>
                <embed src="/Games/dunebuggy.swf" width="700" height="400" />
            </object>
        )
    },
    "free-rider-2": {
        name: "Free Rider 2",
        content: (
            <object>
                <embed src="/Games/freerider2.swf" width="600" height="465" />
            </object>
        )
    },
    "happy-wheels": {
        name: "Happy Wheels",
        content: (
            <object>
                <embed src="/Games/Happy Wheels/hwpreloader.swf" />
            </object>
        )
    },
    "interactive-buddy": {
        name: "Interactive Buddy",
        content: (
            <object>
                <embed src="/Games/interactivebuddy.swf" width="600" height="465" />
            </object>
        )
    },
    "interactive-buddy-2": {
        name: "Interactive Buddy 2",
        content: (
            <object>
                <embed src="/Games/interactivebuddy2.swf" width="600" height="465" />
            </object>
        )
    },
    "line-rider-2": {
        name: "Line Rider 2",
        content: (
            <object>
                <embed src="/Games/linerider2.swf" width="600" height="465" />
            </object>
        )
    },
    "mcgruff-bricksmash": {
        name: "McGruff's Brick Smash",
        content: (
            <iframe
                src="/Games/McGruff Bricksmash/index.html"
                width="640"
                height="485"
                style={{ border: 0 }}
            />
        )
    },
    portal: {
        name: "Portal",
        content: (
            <object>
                <embed src="/Games/portal.swf" width="600" height="320" />
            </object>
        )
    },
    "raft-wars": {
        name: "Raft Wars",
        content: (
            <object>
                <embed src="/Games/raftwars.swf" width="600" height="320" />
            </object>
        )
    },
    "the-worlds-hardest-game": {
        name: "The World's Hardest Game",
        content: (
            <object>
                <embed src="/Games/theworldshardestgame.swf" width="600" height="465" />
            </object>
        )
    }
};