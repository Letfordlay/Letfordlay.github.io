import { Menu } from "@/components/Menu";
import { Html, Head, Main, NextScript } from "next/head";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://unpkg.com/@ruffle-rs/ruffle" async />
            </Head>
            <body>
                <Menu />

                <center className="content">
                    <p>Welcome to Letfordlay Gaming!</p>

                    <Main />
                </center>

                <NextScript />
            </body>
        </Html>
    );
}
