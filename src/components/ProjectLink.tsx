interface Props {
	link: string
	text: string
}

export default function ProjectLink({ link, text }: Props) {
	return (
		<a
			className="transition duration-300 ease-in text-[#2337ff]"
			href={link}>
			{text}
		</a>
	)
}
