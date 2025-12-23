import { Minecraft } from "@/components/Menu";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
export type GameEntry = { name: string; content: React.ReactNode };

function CutTheRopeGame() {
  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    (async () => {
      await loadScript("/game/cut-the-rope/ytgame.js");
      await loadScript("/game/cut-the-rope/ctrr.js");

      // @ts-ignore – legacy global
      if (window.Ctrr?.main) {
        // @ts-ignore
        window.Ctrr.main();
      }
    })();
  }, []);

  return (
    <div
      id="game"
      suppressHydrationWarning
    />
  );
}

export const games: Record<string, GameEntry> = {
 	"call-of-duty-zombies": {
         name: "Call of Duty: Zombies",
         content: (
             <>
 				<iframe
 					src="/game/Call of Duty Zombies/index.html"
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
         content: <CutTheRopeGame />
     },
     "google-pacman": {
         name: "Google Pacman",
         content: (
             <iframe
                 src="/game/Google Pacman/GooglePacman.html"
                 height="325"
                 width="582"
                 style={{ border: 0 }}
             />
         )
     },
     "jellycar-worlds": {
         name: "JellyCar Worlds",
         content: (
             <>
                <iframe
					src="/game/JellyCar Worlds/index.html"
 					style={{ "border" : "0", "width" : "41.6666vw", "height" : "31.25vw" }}
                    scrolling="no"
 				/>
             </>
         )
     },
     "marble-blast-ultra": {
         name: "Marble Blast Ultra",
         content: (
             <>
                 <iframe
 					src="/game/Marble Blast Ultra/index.html"
 					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
 				/>
 
                 <br />
 
                 <a href="https://github.com/RandomityGuy/MBHaxe">
                     <img alt="Original on Github" src="/img/github.png" />
                 </a>
             </>
         )
     },
     "mari0": {
         name: "Mari0",
         content: (
             <>
                 <iframe
 					src="/game/Mari0/index.html"
 					style={{ "border" : "0", "width" : 800, "height" : 600 }}
 				/>
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
	 "pac-man-superfast": {
         name: "Pac-Man SuperFast",
         content: (
             <iframe
                 src="/game/Pac-Man SuperFast/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
     "powder-game": {
         name: "Powder Game",
         content: (
             <iframe
                 src="/game/PowderGame/powdergame.html"
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
 				src="/game/Q1 Infinity/index.html"
 				style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
 			/>
         )
     },
 	q1k3: {
         name: "Q1K3",
         content: (
             <>
 				<iframe
 					src="/game/Q1K3/index.html"
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
                 src="/game/Soccer Physics/index.html"
				 scrolling="no"
                 style={{ "border" : "0", "width" : "46.875vw", "height" : "26.0416vw" }}
             />
         )
     },
     "stick-ranger": {
         name: "Stick Ranger",
         content: (
             <iframe
                 src="/game/StickRanger/StickRanger.html"
                 height="700"
                 width="700"
                 style={{ border: 0 }}
             />
         )
     },
	 "tomb-of-the-mask": {
         name: "Tomb of the Mask",
         content: (
             <iframe
                 src="/game/Tomb of the Mask/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
     twist: {
         name: "Twist",
         content: (
             <>
                 <iframe
                     src="/game/Twist/index.html"
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
					src="/game/bloonstowerdefense3.swf"
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
					src="/game/bloonstowerdefense4.swf"
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
					src="/game/bloonstowerdefense5.swf"
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
					src="/game/boombot.swf"
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
					src="/game/boombot2.swf"
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
					src="/game/bowman2.swf"
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
					src="/game/catmario.swf"
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
					src="/game/cubefield.swf"
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
					src="/game/doublewires.swf"
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
					src="/game/ducklife2.swf"
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
					src="/game/dunebuggy.swf"
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
					src="/game/freerider2.swf"
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
					src="/game/happywheels.swf"
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
					src="/game/interactivebuddy.swf"
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
					src="/game/linerider2.swf"
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
					src="/game/McGruff Bricksmash/bricksmash.swf"
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
					src="/game/portal.swf"
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
					src="/game/raftwars.swf"
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
					src="/game/run2.swf"
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
					src="/game/theworldshardestgame.swf"
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
					src="/game/Minecraft/minecraft1.12.2.html"
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
					src="/game/Minecraft/minecraft1.8.8.html"
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
					src="/game/Minecraft/minecraft1.5.2.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-1-2-5": {
        name: "Minecraft 1.2.5",
        content: (
            <>
				<iframe
					src="/game/Minecraft/minecraft1.2.5.html"
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
					src="/game/Minecraft/minecraftbeta1.7.3.html"
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
					src="/game/Minecraft/minecraftbeta1.3.html"
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
					src="/game/Minecraft/minecraftalpha1.2.6.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-infdev": {
        name: "Minecraft Infdev",
        content: (
            <>
				<iframe
					src="/game/Minecraft/minecraftinfdev.html"
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
					src="/game/Minecraft/minecraftindev.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>

                <br />

                <a href="https://eaglercraft.com/">
                    <img alt="Original on Github" src="/img/eaglercraft.png" />
                </a>
            </>
        )
    },
	"minecraft-0-30": {
        name: "Minecraft 0.30",
        content: (
            <>
				<iframe
					src="/game/Minecraft/minecraft0.30.html"
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
					src="/game/Minecraft/Minecraft Classic/index.html"
					style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
				/>
			</div>
        )
    }
};

export const inprogress: Record<string, GameEntry> = {
     "crossy-road": {
         name: "Crossy Road",
         content: (
             <iframe
                 src="/game/Crossy Road/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
     "fruit-ninja": {
         name: "Fruit Ninja",
         content: (
             <iframe
                 src="/game/Fruit Ninja/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
	 "hill-climb-racing": {
         name: "Hill Climb Racing Lite",
         content: (
             <iframe
                 src="/game/Hill Climb Racing/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
     "jetpack-joyride": {
         name: "Jetpack Joyride",
         content: (
             <iframe
                 src="/game/Jetpack Joyride/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     },
	 pou: {
         name: "Pou",
         content: (
             <iframe
                 src="/game/Pou/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
             />
         )
     }
};