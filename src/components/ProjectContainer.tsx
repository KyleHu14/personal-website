import ProjectLink from "./ProjectLink"

interface Props {
	title: string
	repoLink: string
	blogLink: string
	description: string
}

export function ProjectContainer({
	title,
	repoLink,
	blogLink,
	description,
}: Props) {
	return (
		<div>
			<h3 className="text-2xl">{title}</h3>
			<h4 className="text-lg">
				<ProjectLink link={repoLink} text="Repo" /> |{" "}
				<ProjectLink link={blogLink} text="Blog" />
			</h4>
			<p className="text-xl">{description}</p>
		</div>
	)
}
