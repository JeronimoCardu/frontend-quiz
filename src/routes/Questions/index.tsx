import ToggleColorMode from "@/components/ToggleColorMode";
import { useLocation, useNavigate } from "react-router-dom";
import Option from "@/components/Option";
import { quizzes } from "../../data.json";
import useAnswerStore from "@/hooks/store";
import { useState } from "react";

export default function Question() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const location = pathname
    .split("")
    .filter((letter) => letter != "/")
    .join("");
  const quiz = quizzes[quizzes.findIndex((quiz) => quiz.title == location)];
  const [showError, setShowError] = useState(false);
  const optionsLetter = ["A", "B", "C", "D"];

  const setAnswerSelected = useAnswerStore((state) => state.setAnswerSelected);
  const answerSelected = useAnswerStore((state) => state.answerSelected);
  const setAnswer = useAnswerStore((state) => state.setAnswer);
  const setBtnActive = useAnswerStore((state) => state.setBtnActive);
  const setStatusOption = useAnswerStore((state) => state.setStatusOption);
  const myScored = useAnswerStore((state) => state.myScored);
  const setMyScored = useAnswerStore((state) => state.setMyScored);
  const currentQuestion = useAnswerStore((state) => state.currentQuestion);
  const setCurrentQuestion = useAnswerStore(
    (state) => state.setCurrentQuestion,
  );

  const colors = useAnswerStore((state) => state.colors);

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const content = (e.target as HTMLElement).textContent;
    if (target.tagName == "P" && content && content != "Submit Answer") {
      setAnswerSelected(content);
    }
    if (target.tagName == "A" && content && content != "Submit Answer") {
      setAnswerSelected(content.slice(1));
    }
    setAnswer(quiz.questions[currentQuestion].answer);
  };
  const submitAnswer = () => {
    if (answerSelected == "") {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    if (answerSelected == quiz.questions[currentQuestion].answer) {
      setBtnActive(false);
      setStatusOption("correct");
      setMyScored(myScored + 1);
    } else {
      setStatusOption("incorrect");
    }
    setTimeout(() => {
      if (currentQuestion + 1 === quiz.questions.length) {
        navigate(`/${pathname.slice(1)}/scored`);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
      setStatusOption("");
      setBtnActive(false);
      setAnswerSelected("");
    }, 2000);
  };
  return (
    <>
      <header className="tablet:!px-[2em] desktop:!mx-[8em] desktop:!py-[3em] flex justify-between !px-[1.5em] !py-[1em]">
        <div className="flex items-center !space-x-200">
          <img
            className={`rounded-[0.375em] !p-1.5 ${quiz.title == "HTML" ? colors.html : quiz.title == "CSS" ? colors.css : quiz.title == "JavaScript" ? colors.js : colors.accessibility}`}
            src={quiz.icon}
          />
          <p className="tablet:!text-[1.75em] textPreset4Mobile text-blue-900 dark:text-white">
            {location}
          </p>
        </div>
        <ToggleColorMode />
      </header>
      <main className="tablet:!px-[2em] desktop:!mx-[8em] desktop:grid desktop:grid-cols-2 desktop:!space-x-1600 !px-[1.5em]">
        <section>
          <p className="textPreset6Mobile tablet:!text-[1.25em] !pb-[1em] text-gray-500 dark:text-blue-300">
            Question {currentQuestion} of {quiz.questions.length}
          </p>
          <h1 className="textPreset3Mobile tablet:!text-[2.25em] !pb-[1.5em] text-gray-900 dark:text-white">
            {quiz.questions[currentQuestion].question}
          </h1>
          <div className="dark:bg-blue-850 h-[1em] w-full rounded-full bg-white !p-[0.25em]">
            <div
              style={{
                width: `${(currentQuestion / quiz.questions.length) * 100}%`,
              }}
              className={`h-full rounded-full bg-purple-600`}
            ></div>
          </div>
        </section>
        <section
          onClick={(e) => handleSubmit(e)}
          className="tablet:!space-y-300 desktop:!py-0 !space-y-200 !pt-[1em]"
        >
          {quiz.questions[currentQuestion].options.map((quest, index) => {
            return (
              <Option
                key={index}
                imgToShow={optionsLetter[index]}
                optionValue={quest}
              />
            );
          })}
          <button
            onClick={() => {
              submitAnswer();
            }}
            className="textPreset4Mobile tablet:!text-[1.75em] tablet:!p-[1.5 em] w-full cursor-pointer rounded-[0.75em] !bg-purple-600 !p-[1em] !text-white outline-0"
          >
            Submit Answer
          </button>
          {showError && (
            <div className="flex items-center justify-center !pb-2 text-red-500 dark:text-gray-50">
              <img src="/images/icon-error.svg" />
              <p className="textPreset4Mobile tablet:textPreset5Regular">
                Please select an answer
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
