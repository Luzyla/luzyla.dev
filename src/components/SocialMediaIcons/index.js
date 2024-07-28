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

export function SocialMediaIcons({ classNameContainer, colorIcon, sizeIcon, classNameIcon}) {
  const claseContainer = classNameContainer || "contenedor-icon-socialmedia";
  const claseColorIcono = colorIcon || "#007b67";
  const claseIconSize = sizeIcon || "2.5rem";
const claseIcon = classNameIcon || "icon-socialmedia";
  return (
    <div className={claseContainer}>
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
            size={claseIconSize}
            color={claseColorIcono}
            className={claseIcon}
          ></Icon>
        </Link>
      ))}
    </div>
  );
}
