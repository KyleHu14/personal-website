interface FigureProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	caption: string;
}

import css from "./Figure.module.css";

// prettier-ignore
export default function Figure({src, alt, width, height, caption} : FigureProps ) {
    return(
        <figure className={css.figureContainer}>
            <img src={src}></img>
            <figcaption className="text-lg">{caption}</figcaption>
        </figure>
    )
}
