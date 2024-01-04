import React from "react";
import { Link } from "../Link";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa6";
import { Icon } from "../Icon";

const dataSocialMedias = [
  {
    id: 1,
    url: "http://linkedin.com/in/luzyla",
    icon: FaLinkedin,
    iconTitle: "LinkedIn",
  },
  {
    id: 2,
    url: "https://github.com/Luzyla",
    icon: FaGithub,
    iconTitle: "GitHub",
  },
  {
    id: 3,
    url: "http://luzyla.medium.com",
    icon: FaMedium,
    iconTitle: "Medium",
  },
  {
    id: 4,
    url: "http://instagram.com/luzyla.dev",
    icon: FaInstagram,
    iconTitle: "Instagram",
  },
];

export function SocialMediaIcons() {
  return (
    <div className="contenedor-icon-socialmedia">
      {dataSocialMedias.map((socialmedia) => (
        <Link
          url={socialmedia.url}
          target="_blank"
          key={socialmedia.id}
          className={`${socialmedia.className}`}
        >
          <Icon
            component={socialmedia.icon}
            title={socialmedia.iconTitle}
            size="2.5rem"
            color="#007b67"
            className="icon-socialmedia"
          ></Icon>
        </Link>
      ))}
    </div>
  );
}
