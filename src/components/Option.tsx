import useAnswerStore from "@/hooks/store";
import { NavLink, useLocation } from "react-router-dom";

type Props = {
  imgToShow: string;
  optionValue: string;
};

export default function Option({ imgToShow, optionValue }: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  const correctAnswer = useAnswerStore((state) => state.correctAnswer);
  const statusOption = useAnswerStore((state) => state.statusOption);
  const answerSelected = useAnswerStore((state) => state.answerSelected);
  const btnActive = useAnswerStore((state) => state.btnActive);
  const setBtnActive = useAnswerStore((state) => state.setBtnActive);
  const colors = useAnswerStore((state) => state.colors);

  return (
    <NavLink
      onClick={() => {
        setBtnActive(true);
      }}
      to={`${pathname.length == 1 ? `/${optionValue}` : ""}`}
      className={`${btnActive && answerSelected == optionValue && "!border-4 !border-purple-600"} ${statusOption == "correct" && answerSelected == optionValue ? "!border-4 !border-green-500" : statusOption == "incorrect" && answerSelected == optionValue ? "!border-4 !border-red-500" : ""} shadowOption dark:bg-blue-850 flex items-center gap-[1em] rounded-[0.75em] bg-white !p-[1em]`}
    >
      <div>
        {imgToShow.length > 1 ? (
          <img
            className={`rounded-[0.375em] !p-1.5 ${optionValue == "HTML" ? colors.html : optionValue == "CSS" ? colors.css : optionValue == "JavaScript" ? colors.js : colors.accessibility}`}
            src={imgToShow}
          />
        ) : (
          <p
            className={`${statusOption == "correct" && answerSelected == optionValue ? "!bg-green-500 !text-white" : statusOption == "incorrect" && answerSelected == optionValue ? "!bg-red-500 !text-white" : ""} textPreset4Mobile tablet:!text-[1.75em] flex h-[2.5em] w-[2.5em] items-center justify-center rounded-[0.375em] bg-gray-50 text-gray-500`}
          >
            {imgToShow}
          </p>
        )}
      </div>
      <p className="textPreset4Mobile tablet:!text-[1.75rem] w-full text-blue-900 dark:text-white">
        {optionValue}
      </p>
      {statusOption != "" && correctAnswer == optionValue ? (
        <img className="" src="/images/icon-correct.svg" />
      ) : statusOption == "incorrect" && answerSelected == optionValue ? (
        <img className="" src="/images/icon-error.svg" />
      ) : (
        ""
      )}
    </NavLink>
  );
}
