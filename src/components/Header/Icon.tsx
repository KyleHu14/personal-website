interface IconProps {
	href: string;
	d: string;
	width: string;
	height: string;
}

export default function Icon({ href, d, width, height }: IconProps) {
	return (
		<a className="text-black px-2 py-2" href={href} target="_blank">
			<svg
				viewBox="0 0 16 16"
				aria-hidden="true"
				width={width}
				height={height}>
				<path fill="currentColor" d={d}></path>
			</svg>
		</a>
	);
}
