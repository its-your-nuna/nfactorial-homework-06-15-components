//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = ({ fan,light }) => {
  return (
    <header>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      {light? <img src="data:image/png;base64,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"/>:<StarWarsLogoSVG />}
      <div className="search-layout">
        <IconSearchSVG className="search-icon" />
        <input placeholder="Search Star Wars" type="text" />
        <div style={{ color: "rgb(138, 137, 223)", paddingTop: "1rem" }}>
          I am fan of: {fan}
        </div>
      </div>
    </header>
  );
};
