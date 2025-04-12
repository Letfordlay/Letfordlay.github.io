import Link from "next/link";
import { games, flashGames, mcversions, inprogress } from "@/games";

export function Menu() {
    return (
        <aside className="menu">
            <center>
                <Link href="/">Home</Link>

                <p className="menu-title">Games</p>

                {Object.entries(games).map(([slug, entry]) => (
                    <>
                        <Link href={`/game/${slug}`}>{entry.name}</Link>
                    </>
                ))}

                <p className="menu-title">Flash Games</p>

                {Object.entries(flashGames).map(([slug, entry]) => (
                    <>
                        <Link href={`/game/${slug}`}>{entry.name}</Link>
                    </>
                ))}

                <p className="menu-title">General</p>

                <Link href="/videos">Videos</Link>
            </center>
        </aside>
    );
}

export function Minecraft() {
    return (
            <center className="list">
                <p className="list-title">Versions</p>

                {Object.entries(mcversions).map(([slug, entry]) => (
                    <>
                        <Link href={`/game/${slug}`}>{entry.name}</Link>
                    </>
                ))}
            </center>
    );
}

export function In-Progress() {
    return (
            <center className="warning">
                <p className="warning-title">"These games are currently in progress of being added to the website and may have issues running currently."</p>

                {Object.entries(inprogress).map(([slug, entry]) => (
                    <>
                        <Link href={`/game/${slug}`}>{entry.name}</Link>
                    </>
                ))}
            </center>
    );
}