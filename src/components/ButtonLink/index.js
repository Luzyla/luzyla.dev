import React from "react";
import { Link } from "../Link";

export function ButtonLink({ url, target, className, txtButton }) {
  return (
    <Link url={url} target={target}>
      {<li className={className}>{txtButton}</li>}
    </Link>
  );
}
