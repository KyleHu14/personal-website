// React Components
import Icon from "./Icon";
import HeaderLink from "./HeaderLink";
import HorizontalLine from "../HorizontalLine/HorizointalLine";

// Constants
import { LINKEDIN_LINK, GITHUB_LINK } from "../../consts";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="flex justify-between w-full">
				<div className="py-2">
					<HeaderLink href="/" linkText="Home" />
				</div>

				<div className="py-2 flex justify-between gap-3">
					<HeaderLink href="/blog" linkText="Blog" />
					<HeaderLink href="/tags" linkText="Tags" />
				</div>
			</nav>
			<HorizontalLine />
		</>
	);
}
