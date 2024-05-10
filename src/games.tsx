/* eslint-disable @next/next/no-img-element */
export type GameEntry = { name: string; content: React.ReactNode };

export const games: Record<string, GameEntry> = {
    "google-pacman": {
        name: "Google Pacman",
        content: (
            <iframe
                src="/Games/GooglePacman/GooglePacman.html"
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
    btd5: {
        name: "Bloons Tower Defense 5",
        content: (
            <object>
                <embed src="/Games/BTD5.swf" width="600" height="465" />
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
    "double-wires": {
        name: "Double Wires",
        content: (
            <object>
                <embed src="/Games/DoubleWires.swf" width="700" height="400" />
            </object>
        )
    },
    "happy-wheels": {
        name: "Happy Wheels",
        content: (
            <object>
                <embed src="/Games/Happy Wheels/Happy-Wheels.swf" />
            </object>
        )
    },
    mcgruff: {
        name: "McGruff's Brick Smash",
        content: (
            <object>
                <embed src="/Games/McGruff Bricksmash/bricksmash.swf" width="600" height="465" />
            </object>
        )
    },
    portal: {
        name: "Portal",
        content: (
            <object>
                <embed src="/Games/Portal.swf" width="600" height="320" />
            </object>
        )
    },
    twhg: {
        name: "The World's Hardest Game",
        content: (
            <object>
                <embed src="/Games/TheWorldsHardestGame.swf" width="600" height="465" />
            </object>
        )
    },
};
