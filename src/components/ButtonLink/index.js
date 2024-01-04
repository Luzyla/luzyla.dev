import React from "react";
import { Link } from "../Link";

export function ButtonLink({
  url,
  target,
  className,
  txtButton,
  classNameLink,
}) {
  return (
    <Link url={url} target={target} className={classNameLink}>
      {<li className={className}>{txtButton}</li>}
    </Link>
  );
}
