import React from "react";
import { Link } from "../Link";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaSpotify,
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
}) {
  return (
    <div className={classNameContainer}>
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
            size={sizeIcon}
            color={colorIcon}
            className={classNameIcon}
          ></Icon>
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
};
