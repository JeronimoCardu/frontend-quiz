import ToggleColorMode from "./components/ToggleColorMode";
import { quizzes } from "./data.json";
import Option from "./components/Option";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname == "/";
  console.log(isHome);
  return (
    <div className="homeBg">
      <header className="relative z-10">
        <ToggleColorMode />
      </header>
      {isHome ? (
        <main className="tablet:!px-[2em] relative z-10 !px-[1.5em]">
          <section className="!space-y-200 !pt-[2em]">
            <h1 className="textPreset2MobileLight tablet:!text-[4rem] text-blue-900 dark:text-white">
              Welcome to the <br />
              <span className="textPreset2MobileMedium dark:text-white">
                Frontend Quiz!
              </span>
            </h1>
            <p className="textPreset6Mobile tablet:!text-[1.25rem] text-gray-500 dark:text-blue-300">
              Pick a subject to get started.
            </p>
          </section>
          <section className="tablet:!space-y-300 !space-y-200 !pt-[2.5em]">
            {quizzes.map((quiz, index) => (
              <Option
                key={index}
                imgToShow={quiz.icon}
                optionValue={quiz.title}
              />
            ))}
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
