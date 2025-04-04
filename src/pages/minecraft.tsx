import Head from "next/head";
import Link from "next/link";
import { mcversions } from "@/games";

export default function Minecraft() {
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
