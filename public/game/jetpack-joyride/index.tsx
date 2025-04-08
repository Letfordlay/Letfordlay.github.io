import { Menu } from "@/components/Menu";
export function Jetpack() {
	return (
	<>
		<Menu />
		<iframe
                 src="./game.html"
                 style={{ "border" : "0", "width" : "85.4166vw", "height" : "36.3541vw" }}
        />
		</>
	);
}