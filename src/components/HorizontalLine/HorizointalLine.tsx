interface HorizontalLineProps {
	marginValue: string;
}

export default function HorizontalLine({ marginValue }: HorizontalLineProps) {
	return (
		<div className={`max-w-3xl mx-auto my-${marginValue}`}>
			<hr className="border-gray-600" />
		</div>
	);
}
