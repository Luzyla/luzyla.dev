export function Button({url, className,txtButton}) {
    return <a href={url}>
    <li className={className}>{txtButton}</li>
  </a>
}