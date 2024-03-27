import { socialsMetaData } from "../../../config";

export default function SocialLinks() {
	return (
		<div className="flex gap-1">
			<div>Social Links :</div>
			<div className="flex justify-between gap-2">
				{socialsMetaData
					.filter((social) => social.active)
					.map((social) => (
						<div key={social.name}>{social.name}</div>
					))}
			</div>
		</div>
	);
}
