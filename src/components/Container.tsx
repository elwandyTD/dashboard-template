import { type JSXElement, type Component } from "solid-js";
import { Title, Meta } from "@solidjs/meta";

type ContainerProps = {
	children: JSXElement;
	title: string;
};

const Container: Component<ContainerProps> = (props) => {
	return (
		<main>
			<Title>{props.title} | Metaverse</Title>
			<Meta name="description" content="Dashboard Metaverse for Games" />

			{props.children}
		</main>
	);
};

export default Container;
