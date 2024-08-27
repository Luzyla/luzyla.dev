import React from "react";
import { Link } from "../Link";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaSpotify,
  FaEnvelope,
} from "react-icons/fa6";
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
    showInContactMe: true,
  },
  {
    id: 4,
    url: "http://instagram.com/luzyla.dev",
    icon: FaInstagram,
    iconTitle: "Instagram",
  },
  {
    id: 5,
    url: "https://open.spotify.com/playlist/4IgxTSpDQbDWZ1YTfQkgqf?si=a7d6af49f60c4e89",
    icon: FaSpotify,
    iconTitle: "Spotify",
    showInContactMe: true,
  },
  {
    id: 6,
    url: "mailto:coder@luzyla.dev",
    icon: FaEnvelope,
    iconTitle: "E-mail",
    showInContactMe: false,
  },
];

/* 
Para Proyectos:
import { FaInfoCircle } from "react-icons/fa";
<FaInfoCircle />

import { TbWorldWww } from "react-icons/tb";
<TbWorldWww />
import { FaLink } from "react-icons/fa";
<FaLink />

import { FaGithub } from "react-icons/fa6";
<FaGithub />
import { GrGithub } from "react-icons/gr";
<GrGithub />

import { FaShareAlt } from "react-icons/fa";
<FaShareAlt />

*/

export function SocialMediaIcons({
  classNameContainer,
  colorIcon,
  sizeIcon,
  classNameIcon,
  classNameIconsTitle,
  contactMe,
}) {
  return (
    <div className={classNameContainer}>
      {dataSocialMedias
        .filter((i) => i.showInContactMe !== contactMe)
        .map((socialmedia) => (
          <Link
            url={socialmedia.url}
            target="_blank"
            key={socialmedia.id}
            className={`${socialmedia.className}`}
          >
            <Icon
              component={socialmedia.icon}
              title={socialmedia.iconTitle}
              size={sizeIcon}
              color={colorIcon}
              className={classNameIcon}
            ></Icon>
            <p className={classNameIconsTitle}>{socialmedia.iconTitle}</p>
          </Link>
        ))}
    </div>
  );
}

SocialMediaIcons.defaultProps = {
  classNameContainer: "contenedor-icon-socialmedia",
  colorIcon: "#007b67",
  sizeIcon: "2.5rem",
  classNameIcon: "icon-socialmedia",
  classNameIconsTitle: "hidden",
};
