interface Props {
	link: string
	text: string
}

export default function ProjectLink({ link, text }: Props) {
	return (
		<a
			className="transition duration-300 ease-in text-blue-500 hover:text-blue-900"
			href={link}>
			{text}
		</a>
	)
}
