import Head from "next/head";
import Link from "next/link";
import { mcversions } from "@/games";

export default function Minecraft() {
    return (
            <p>
                <Link href="/game/minecraft-1-12-2">Minecraft 1.12.2</Link>
            </p>
			<p>
                <Link href="/game/minecraft-1-8-8">Minecraft 1.8.8</Link>
            </p>
			<p>
                <Link href="/game/minecraft-1-5-2">Minecraft 1.5.2</Link>
            </p>
			<p>
                <Link href="/game/minecraft-beta-1-7-3">Minecraft Beta 1.7.3</Link>
            </p>
			<p>
                <Link href="/game/minecraft-beta-1-3">Minecraft Beta 1.3</Link>
            </p>
			<p>
                <Link href="/game/minecraft-alpha-1-2-6">Minecraft Alpha 1.2.6</Link>
            </p>
			<p>
                <Link href="/game/minecraft-indev">Minecraft Indev</Link>
            </p>
			<p>
                <Link href="/game/minecraft-classic">Minecraft Classic</Link>
            </p>
    );
}