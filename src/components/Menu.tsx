import Link from "next/link";
import { games, flashGames } from "@/games";

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
