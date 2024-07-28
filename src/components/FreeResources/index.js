import React from "react";
import { Link } from "../Link";

const dataResources = [
  {
    id: 1,
    url: "https://stories.freepik.com/web",
    children: "Illustration by Stories by Freepik",
    title: "Illustration by Stories by Freepik",
  },
  {
    id: 2,
    url: "https://fontawesome.com/icons",
    children: "Icons by Fontawesome",
    title: "Icons by Fontawesome",
  },
  {
    id: 3,
    url: "https://www.flaticon.com/authors/darius-dan",
    children: "favicon by Darius Dan",
    title: "favicon by Darius Dan",
  },
  {
    id: 4,
    url: "https://www.flaticon.com/free-icons/",
    children: "Flaticon Free Icons",
    title: "Flaticon Free Icons",
  },
  {
    id: 5,
    url: "https://storyset.com/online",
    children: "Online illustrations by Storyset",
    title: "Online illustrations by Storyset",
  },
]

export function FreeResources() {
  return (
    <div className="footer-recursos">
      {dataResources.map((data) => (
        <span className="footer-cada-recurso">
          <Link url={data.url} target="_blank" title={data?.title} key={data.id} className={""}>
          {data.children}
          </Link>
        </span>
      ))}
    </div>
  );
}
