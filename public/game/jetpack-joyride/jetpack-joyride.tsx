import { Menu } from "@/components/Menu";
export function Jetpack() {
	return (
	<>
		<Menu />
		<iframe
                 src="/game/Cut the Rope/index.html"
                 style={{ "border" : "0", "width" : "66.66vw", "height" : "37.5vw" }}
        />
		<NextScript />
		</>
	);
}