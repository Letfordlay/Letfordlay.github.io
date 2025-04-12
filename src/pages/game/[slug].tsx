import { flashGames, games, mcversions, inprogress } from "@/games";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticPaths = (async () => {
    const paths: { params: { slug: string } }[] = [];

    Object.keys(games).forEach((slug) => paths.push({ params: { slug: slug } }));
    Object.keys(flashGames).forEach((slug) => paths.push({ params: { slug: slug } }));
	Object.keys(mcversions).forEach((slug) => paths.push({ params: { slug: slug } }));
    Object.keys(inprogress).forEach((slug) => paths.push({ params: { slug: slug } }));

    return {
        paths: paths,
        fallback: false
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    return { props: { slug: context.params?.slug as string } };
}) satisfies GetStaticProps<{
    slug: string;
}>;

export default function Game({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
    const game = games[slug] || flashGames[slug] || mcversions[slug] || inprogress[slug];

    return (
        <>
            <Head>
                <title>{game.name} - Letfordlay Gaming</title>
            </Head>

			<center>
				<p>{game.name}</p>

				{game.content}
			</center>
        </>
    );
}