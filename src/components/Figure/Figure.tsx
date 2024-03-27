interface FigureProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	caption: string;
}

// prettier-ignore
export default function Figure({src, alt, width, height, caption} : FigureProps ) {
    return(
        <figure className="flex justify-center">
            <img src={src}></img>
            <figcaption className="text-lg">{caption}</figcaption>
        </figure>
    )
}
