import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  caption: string;
  action?: { label: string; href: string };
};

export default function EditorialHero({ eyebrow, title, description, image, alt, caption, action }: Props) {
  return (
    <header className="editorial-hero">
      <div className="editorial-hero-copy">
        <span className="stag">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {action && (
          <Link className="hbtn-p" href={action.href}>
            {action.label}<Icon name="arrow" size={14} strokeWidth={2.5} />
          </Link>
        )}
      </div>
      <figure className="editorial-hero-image">
        <Image src={image} fill priority sizes="(max-width: 900px) 100vw, 46vw" alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    </header>
  );
}
