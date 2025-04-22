import sunLight from "/images/icon-sun-light.svg";
import sunDark from "/images/icon-sun-dark.svg";
import moonLight from "/images/icon-moon-light.svg";
import moonDark from "/images/icon-moon-dark.svg";
import { useColorMode } from "./ui/color-mode";

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      onClick={toggleColorMode}
      className="flex cursor-pointer items-center justify-end gap-[0.5em]"
    >
      <img
        className="tablet:w-[1.5em] tablet:h-[1.5em] h-[1em] w-[1em]"
        src={colorMode == "light" ? sunDark : sunLight}
        alt="light"
      />
      <div className="tablet:w-[3em] tablet:h-[1.75em] flex h-[1.25em] w-[2em] items-center rounded-full bg-purple-600 !px-1 dark:justify-end">
        <div className="tablet:w-[1.25em] tablet:h-[1.25em] h-[0.75em] w-[0.75em] rounded-full bg-white"></div>
      </div>
      <img
        className="tablet:w-[1.5em] tablet:h-[1.5em] h-[1em] w-[1em]"
        src={colorMode == "light" ? moonDark : moonLight}
        alt="dark"
      />
    </div>
  );
}
