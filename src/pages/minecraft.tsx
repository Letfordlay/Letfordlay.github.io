import Head from "next/head";
import Link from "next/link";
import { mcversions } from "@/games";

export default function Home() {
    return (
            <center className="menu">
                <p className="menu-title">Versions</p>

                {Object.entries(mcversions).map(([slug, entry]) => (
                    <>
                        <Link href={`/game/${slug}`}>{entry.name}</Link>
                    </>
                ))}
            </center>
    );
}
