import { NavLink } from "react-router-dom";

type Props = {
  imgToShow: string;
  optionValue: string;
};

export default function Option({ imgToShow, optionValue }: Props) {
  const colors = {
    html: "bg-orange-50",
    css: "bg-green-100",
    js: "bg-blue-50",
    accessibility: "bg-purple-100",
    incorrect: "bg-red-500",
    correct: "bg-green-500",
    activeHover: "bg-purple-600",
  };
  return (
    <NavLink
      to={`/${optionValue.toLowerCase()}`}
      className="dark:bg-blue-850 flex items-center gap-[1em] rounded-[0.75em] bg-white !p-[1em]"
    >
      <div>
        {imgToShow.length > 1 ? (
          <img
            className={`rounded-[0.375em] !p-1.5 ${optionValue == "HTML" ? colors.html : optionValue == "CSS" ? colors.css : optionValue == "JavaScript" ? colors.js : colors.accessibility}`}
            src={imgToShow}
          />
        ) : (
          <p className="">{imgToShow}</p>
        )}
      </div>
      <p className="textPreset4Mobile tablet:!text-[1.75rem] text-blue-900 dark:text-white">
        {optionValue}
      </p>
    </NavLink>
  );
}
