import { Menu } from "@/components/Menu";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.coi = { coepCredentialless: () => true };`
                    }}
                />
                <script src="/coi-serviceworker.js" />
                <script src="https://unpkg.com/@ruffle-rs/ruffle" async />
            </Head>
            <body>
                <Menu />

                <center className="content">
                    <p className="menu-title">Letfordlay Gaming</p>

                    <Main />
                </center>

                <NextScript />
            </body>
        </Html>
    );
}