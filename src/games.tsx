import { Minecraft } from "@/components/Menu";

/* eslint-disable @next/next/no-img-element */
export type GameEntry = { name: string; content: React.ReactNode };

export const games: Record<string, GameEntry> = {
 	"call-of-duty-zombies": {
         name: "Call of Duty: Zombies",
         content: (
             <>
 				<iframe
 					src="/Games/Call of Duty Zombies/index.html"
 					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
 				/>
 
                 <br />
 
                 <a href="https://github.com/nzp-team/nzp-team.github.io/tree/main">
                     <img alt="Original on Github" src="/img/github.png" />
                 </a>
             </>
         )
     },
     "cut-the-rope": {
         name: "Cut the Rope",
         content: (
             <iframe
                 src="/Games/Cut the Rope/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
     "google-pacman": {
         name: "Google Pacman",
         content: (
             <iframe
                 src="/Games/Google Pacman/GooglePacman.html"
                 height="287"
                 width="582"
                 style={{ border: 0 }}
             />
         )
     },
     "jetpack-joyride": {
         name: "Jetpack Joyride",
         content: (
             <iframe
                 src="/Games/Jetpack Joyride/index.html"
                 style={{ "border" : "0", "width" : "85.4166vw", "height" : "36.3541vw" }}
             />
         )
     },
     "marble-blast-ultra": {
         name: "Marble Blast Ultra",
         content: (
             <>
                 <iframe
 					src="/Games/Marble Blast Ultra/index.html"
 					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
 				/>
 
                 <br />
 
                 <a href="https://github.com/RandomityGuy/MBHaxe">
                     <img alt="Original on Github" src="/img/github.png" />
                 </a>
             </>
         )
     },
 	minecraft: {
         name: "Minecraft",
         content: (
 			<>
 				<Minecraft />
 			</>
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
 	"q1-infinity": {
         name: "Q1 Infinity",
         content: (
 			<iframe
 				src="/Games/Q1 Infinity/index.html"
 				style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
 			/>
         )
     },
 	q1k3: {
         name: "Q1K3",
         content: (
             <>
 				<iframe
 					src="/Games/Q1K3/index.html"
 					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
 				/>
 
                 <br />
 
                 <a href="https://github.com/phoboslab/q1k3">
                     <img alt="Original on Github" src="/img/github.png" />
                 </a>
             </>
         )
     },
     "soccer-physics": {
         name: "Soccer Physics",
         content: (
             <iframe
                 src="/Games/Soccer Physics/index.html"
				 scrolling="no"
                 style={{ "border" : "0", "width" : "46.875vw", "height" : "26.0416vw" }}
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
                <embed
					src="/Games/bloonstowerdefense3.swf"
					style={{ "border" : "0", "width" : "42.76vw", "height" : "32.08vw" }}
				/>
            </object>
        )
    },
    "bloons-tower-defense-4": {
        name: "Bloons Tower Defense 4",
        content: (
            <object>
                <embed 
					src="/Games/bloonstowerdefense4.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "36.4583vw" }}
				/>
            </object>
        )
    },
    "bloons-tower-defense-5": {
        name: "Bloons Tower Defense 5",
        content: (
            <object>
                <embed 
					src="/Games/bloonstowerdefense5.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "28.31597vw" }}
				/>
            </object>
        )
    },
    boombot: {
        name: "Boombot",
        content: (
            <object>
                <embed
					src="/Games/boombot.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "27.34375vw" }}
				/>
            </object>
        )
    },
    "boombot-2": {
        name: "Boombot 2",
        content: (
            <object>
                <embed
					src="/Games/boombot2.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "27.34375vw" }}
				/>
            </object>
        )
    },
    "bowman-2": {
        name: "Bowman 2",
        content: (
            <object>
                <embed
					src="/Games/bowman2.swf"
					style={{ "border" : "0", "width" : "35.3125vw", "height" : "22.2916vw" }}
				/>
            </object>
        )
    },
    "cat-mario": {
        name: "Cat Mario",
        content: (
            <object>
                <embed
					src="/Games/catmario.swf"
					style={{ "border" : "0", "width" : "39.0625vw", "height" : "34.375vw" }}
				/>
            </object>
        )
    },
    cubefield: {
        name: "Cubefield",
        content: (
            <object>
                <embed
					src="/Games/cubefield.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "28.2552vw" }}
				/>
            </object>
        )
    },
    "double-wires": {
        name: "Double Wires",
        content: (
            <object>
                <embed
					src="/Games/doublewires.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "20.8333vw" }}
				/>
            </object>
        )
    },
	"duck-life-2": {
        name: "Duck Life 2",
        content: (
            <object>
                <embed
					src="/Games/ducklife2.swf"
					style={{ "border" : "0", "width" : "40.2vw", "height" : "30.15625vw" }}
				/>
            </object>
        )
    },
	"dune-buggy": {
        name: "Dune Buggy",
        content: (
            <object>
                <embed
					src="/Games/dunebuggy.swf"
					style={{ "border" : "0", "width" : "37.1875vw", "height" : "26.0416vw" }}
				/>
            </object>
        )
    },
    "free-rider-2": {
        name: "Free Rider 2",
        content: (
            <object>
                <embed
					src="/Games/freerider2.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "29.13738vw" }}
				/>
            </object>
        )
    },
    "happy-wheels": {
        name: "Happy Wheels",
        content: (
            <object>
                <embed
					src="/Games/happywheels.swf"
					style={{ "border" : "0", "width" : "46.875vw", "height" : "26.0416vw" }}
				/>
            </object>
        )
    },
    "interactive-buddy": {
        name: "Interactive Buddy",
        content: (
            <object>
                <embed
					src="/Games/interactivebuddy.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "26.49305vw" }}
				/>
            </object>
        )
    },
    "line-rider-2": {
        name: "Line Rider 2",
        content: (
            <object>
                <embed 
					src="/Games/linerider2.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "26.0416vw" }}
				/>
            </object>
        )
    },
    "mcgruff-bricksmash": {
        name: "McGruff's Brick Smash",
        content: (
            <object>
                <embed 
					src="/Games/McGruff Bricksmash/bricksmash.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "27.34375vw" }}
				/>
            </object>
        )
    },
    portal: {
        name: "Portal",
        content: (
            <object>
                <embed 
					src="/Games/portal.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "20.5208vw" }}
				/>
            </object>
        )
    },
    "raft-wars": {
        name: "Raft Wars",
        content: (
            <object>
                <embed 
					src="/Games/raftwars.swf"
					style={{ "border" : "0", "width" : "34.6875vw", "height" : "26.0416vw" }}
				/>
            </object>
        )
    },
    "run-2": {
        name: "Run 2",
        content: (
            <object>
                <embed 
					src="/Games/run2.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "26.6vw" }}
				/>
            </object>
        )
    },
    "the-worlds-hardest-game": {
        name: "The World's Hardest Game",
        content: (
            <object>
                <embed 
					src="/Games/theworldshardestgame.swf"
					style={{ "border" : "0", "width" : "36.4583vw", "height" : "28.2552vw" }}
				/>
            </object>
        )
    }
};

export const mcversions: Record<string, GameEntry> = {
	"minecraft-1-12-2": {
        name: "Minecraft 1.12.2",
        content: (
            <>
				<iframe
					src="/Games/Minecraft 1.12.2/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-1-8-8": {
        name: "Minecraft 1.8.8",
        content: (
            <>
				<iframe
					src="/Games/Minecraft 1.8.8/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-1-5-2": {
        name: "Minecraft 1.5.2",
        content: (
            <>
				<iframe
					src="/Games/Minecraft 1.5.2/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-beta-1-7-3": {
        name: "Minecraft Beta 1.7.3",
        content: (
            <>
				<iframe
					src="/Games/Minecraft Beta 1.7.3/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-beta-1-3": {
        name: "Minecraft Beta 1.3",
        content: (
            <>
				<iframe
					src="/Games/Minecraft Beta 1.3/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-alpha-1-2-6": {
        name: "Minecraft Alpha 1.2.6",
        content: (
            <>
				<iframe
					src="/Games/Minecraft Alpha 1.2.6/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-indev": {
        name: "Minecraft Indev",
        content: (
            <>
				<iframe
					src="/Games/Minecraft Indev/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
    "minecraft-classic": {
        name: "Minecraft Classic",
        content: (
            <div className="responsive">
				<iframe
					src="/Games/Minecraft Classic/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>
			</div>
        )
    }
};