import ToggleColorMode from "@/components/ToggleColorMode";
import { useLocation } from "react-router-dom";
import Option from "@/components/Option";
import { quizzes } from "../../data.json";

export default function Question() {
  const { pathname } = useLocation();
  const location = pathname
    .split("")
    .filter((letter) => letter != "/")
    .join("");
  const quiz = quizzes[quizzes.findIndex((quiz) => quiz.title == location)];
  const currentQuestion = 1;
  const optionsLetter = ["A", "B", "C", "D"];
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
    <>
      <header className="flex justify-between !px-[1.5em] tablet:!px-[2em] desktop:!px-[15em] desktop:!py-[3em] !py-[1em]">
        <div className="flex items-center !space-x-200">
          <img
            className={`rounded-[0.375em] !p-1.5 ${quiz.title == "HTML" ? colors.html : quiz.title == "CSS" ? colors.css : quiz.title == "JavaScript" ? colors.js : colors.accessibility}`}
            src={quiz.icon}
          />
          <p className="dark:text-white tablet:!text-[1.75em] textPreset4Mobile text-blue-900">{location}</p>
        </div>
        <ToggleColorMode />
      </header>
      <main className="!px-[1.5em] tablet:!px-[2em] desktop:!px-[15em] desktop:grid desktop:grid-cols-2 desktop:!space-x-1600">
        <section>
          <p className="textPreset6Mobile tablet:!text-[1.25em] dark:text-blue-300 !pb-[1em] text-gray-500">
            Question {currentQuestion} of {quiz.questions.length}
          </p>
          <h1 className="textPreset3Mobile tablet:!text-[2.25em] dark:text-white !pb-[1.5em] text-gray-900">
            {quiz.questions[currentQuestion - 1].question}
          </h1>
          <div className="h-[1em] w-full rounded-full bg-white dark:bg-blue-850 !p-[0.25em]">
            <div
              style={{
                width: `${(currentQuestion / quiz.questions.length) * 100}%`,
              }}
              className={`h-full rounded-full bg-purple-600`}
            ></div>
          </div>
        </section>
        <section className="tablet:!space-y-300 desktop:!py-0 !space-y-200 !pt-[2.5em]">
          {quiz.questions[currentQuestion - 1].options.map((quest, index) => {
            return (
              <Option
                key={index}
                imgToShow={optionsLetter[index]}
                optionValue={quest}
              />
            );
          })}
          <button className="textPreset4Mobile w-full tablet:!text-[1.75em] cursor-pointer rounded-[0.75em] tablet:!p-[1.5 em] !bg-purple-600 !p-[1em] !text-white outline-0">
            Submit Answer
          </button>
        </section>
      </main>
    </>
  );
}
