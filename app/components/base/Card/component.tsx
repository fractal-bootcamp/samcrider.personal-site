import { Fields } from "./types";

const Card = ({ image, text, link, links }: Fields) => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <figure className="px-10 pt-10">
        {image ? (
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
            width={100}
            height={100}
          />
        ) : null}
      </figure>
      <div className="card-body items-center text-center">
        {text ? <h2 className="card-title">{text.title}</h2> : null}
        {text ? <p>{text.text}</p> : null}
        {link ? (
          <div className="card-actions">
            <a href={link} className="btn btn-accent">
              Click me!
            </a>
          </div>
        ) : null}
        {links ? (
          <div className="card-actions">
            {links.map((l, index) => {
              return (
                <a
                  className="btn btn-accent"
                  key={index}
                  href={l.link}
                  target="_blank"
                >
                  {l.name}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
