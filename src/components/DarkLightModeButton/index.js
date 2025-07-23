import { Image } from "../Image";
import lightIcon from "../../assets/dark-mode/light-mode.png";
import darkIcon from "../../assets/dark-mode/dark-mode-purple.png";

export function DarkLightModeButton({ theme, setTheme }) {
  return (
    <button
      className="button-mode"
      onClick={() => setTheme(theme === "light" ? "dark-mode" : "light")}
    >
      {theme === "light" ? (
        <Image className={"img-mode"} url={darkIcon} txtAlt={"dark-mode"} />
      ) : (
        <Image className={"img-mode"} url={lightIcon} txtAlt={"light-mode"} />
      )}
    </button>
  );
}
