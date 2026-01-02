import Head from "next/head";

export default function Videos() {
    return (
        <>
            <Head>
                <title>Videos - Letfordlay Gaming</title>
            </Head>

            <p>Videos</p>

            <iframe
                width="720"
                height="480"
                src="https://www.youtube.com/embed/v7v-1cUWtzs"
                style={{ border: 0 }}
            />
        </>
    );
}
