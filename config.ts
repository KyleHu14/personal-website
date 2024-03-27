import socialIcons from "./socialIcons";

export type SocialObjects = {
	name: keyof typeof socialIcons;
	href: string;
	active: boolean;
	linkTitle: string;
}[];

export const socialsMetaData: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/KyleHu14",
		linkTitle: "Kyle on Github",
		active: true,
	},
	{
		name: "Facebook",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Facebook",
		active: false,
	},
	{
		name: "Instagram",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Instagram",
		active: false,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/kyle-vic-hu/",
		linkTitle: "Kyle on LinkedIn",
		active: true,
	},
	{
		name: "Mail",
		href: "mailto:yourmail@gmail.com",
		linkTitle: "Send an email to Kyle",
		active: true,
	},
	{
		name: "Twitter",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Twitter",
		active: false,
	},
	{
		name: "Twitch",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Twitch",
		active: false,
	},
	{
		name: "YouTube",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on YouTube",
		active: false,
	},
	{
		name: "WhatsApp",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on WhatsApp",
		active: false,
	},
	{
		name: "Snapchat",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Snapchat",
		active: false,
	},
	{
		name: "Pinterest",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Pinterest",
		active: false,
	},
	{
		name: "TikTok",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on TikTok",
		active: false,
	},
	{
		name: "CodePen",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on CodePen",
		active: false,
	},
	{
		name: "Discord",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Discord",
		active: false,
	},
	{
		name: "GitLab",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on GitLab",
		active: false,
	},
	{
		name: "Reddit",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Reddit",
		active: false,
	},
	{
		name: "Skype",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Skype",
		active: false,
	},
	{
		name: "Steam",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Steam",
		active: false,
	},
	{
		name: "Telegram",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Telegram",
		active: false,
	},
	{
		name: "Mastodon",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: "Kyle on Mastodon",
		active: false,
	},
];
