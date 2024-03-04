interface HeaderLinkProps {
	href: string;
	linkText: string;
}

export default function HeaderLink({ href, linkText }: HeaderLinkProps) {
	return (
		<a href={href} className="text-black px-2 text-2xl">
			{linkText}
		</a>
	);
}
