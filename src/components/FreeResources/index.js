import React from "react";
import { Link } from "../Link";

const dataResources = [
  {
    id: 1,
    url: "https://stories.freepik.com/web",
    children: "Illustration by Stories by Freepik",
  },
  {
    id: 2,
    url: "https://fontawesome.com/icons",
    children: "Icons by Fontawesome",
  },
  {
    id: 3,
    url: "https://www.flaticon.com/authors/darius-dan",
    children: "favicon by Darius Dan",
    title: "Darius Dan",
  },
  {
    id: 4,
    url: "https://www.flaticon.com/",
    children: "www.flaticon.com",
    title: "Flaticon",
  },
];

export function FreeResources() {
  return (
    <div className="footer-recursos">
      {dataResources.map((data) => (
        <Link url={data.url} target="_blank" title={data?.title} key={data.id}>
          {data.children}
        </Link>
      ))}
      ,
    </div>
  );
}
