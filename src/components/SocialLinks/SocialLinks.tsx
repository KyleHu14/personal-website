import { socialsMetaData } from "../../../config";
import socialIcons from "../../../socialIcons";

// Components
import Icon from "../Icon/Icon.astro";

export default function SocialLinks() {
	return (
		<div className="flex gap-1">
			<div>Social Links :</div>
			<div className="flex gap-2">
				{socialsMetaData
					.filter((social) => social.active)
					.map((social) => (
						<a
							href={social.href}
							className="flex items-center"
							dangerouslySetInnerHTML={{
								__html: socialIcons[social.name],
							}}></a>
					))}
			</div>
		</div>
	);
}
