import { NavLink, useLocation } from "react-router-dom";
import { quizzes } from "../../data.json";
import ToggleColorMode from "@/components/ToggleColorMode";
import useAnswerStore from "@/hooks/store";

export default function Scored() {
  const location = useLocation();
  const pathname = location.pathname;
  const quiz = quizzes[quizzes.findIndex((q) => pathname.includes(q.title))];
  console.log(quiz.icon)
  const colors = useAnswerStore((state) => state.colors);
  const myScored = useAnswerStore((state) => state.myScored);
  const setMyScored = useAnswerStore((state) => state.setMyScored);
  const setCurrentQuestion = useAnswerStore(
    (state) => state.setCurrentQuestion,
  );

  return (
    <>
      <header className="tablet:!px-[2em] desktop:!mx-[8em] desktop:!py-[3em] flex justify-between !px-[1.5em] !py-[1em]">
        <div className="flex items-center !space-x-200">
          <img
            className={`rounded-[0.375em] !p-1.5 ${quiz.title == "HTML" ? colors.html : quiz.title == "CSS" ? colors.css : quiz.title == "JavaScript" ? colors.js : colors.accessibility}`}
            src={quiz.icon}
          />
          <p className="tablet:!text-[1.75em] textPreset4Mobile text-blue-900 dark:text-white">
            {quiz.title}
          </p>
        </div>
        <ToggleColorMode />
      </header>
      <main className="desktop:grid desktop:grid-cols-2 tablet:!px-[2em] desktop:!mx-[8em] !px-[1.5em]">
        <h1 className="textPreset2MobileLight tablet:!text-[4rem] !pt-[2rem] !pb-[2.5rem] text-blue-900 dark:text-white">
          Quiz completed <br />
          <span className="tablet:!text-[4rem] textPreset2MobileMedium">
            You scored...
          </span>
        </h1>
        <section>
          <div className="dark:bg-blue-850 flex flex-col items-center !space-y-200 rounded-[0.75rem] bg-white !p-[2rem]">
            <div className="flex items-center !space-x-200">
              <img
                className={`rounded-[0.375rem] !p-1.5 ${quiz.title == "HTML" ? colors.html : quiz.title == "CSS" ? colors.css : quiz.title == "JavaScript" ? colors.js : colors.accessibility}`}
                src={String(quiz.icon)}
              />
              <p className="tablet:!text-[1.75rem] textPreset4Mobile text-blue-900 dark:text-white">
                {quiz.title}
              </p>
            </div>
            <h1 className="textPreset1Mobile tablet:!text-[9rem] text-blue-900 dark:text-white">
              {myScored}
            </h1>
            <p className="textPreset4Mobile tablet:!text-[1.5rem] text-gray-500 dark:text-blue-300">
              out of {quiz.questions.length}
            </p>
          </div>
          <NavLink to={"/"}>
            <button
              onClick={() => {
                setMyScored(0);
                setCurrentQuestion(0);
              }}
              className="textPreset4Mobile tablet:!text-[1.75rem] tablet:!p-[1.5rem] !mt-[1rem] w-full cursor-pointer rounded-[0.75rem] !bg-purple-600 !p-[1rem] !text-white outline-0"
            >
              Play Again
            </button>
          </NavLink>
        </section>
      </main>
    </>
  );
}
