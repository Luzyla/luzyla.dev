import React from "react";

export function Image({className,url,txtAlt}) {
    return <img className={className} src={url} alt={txtAlt}></img>
}