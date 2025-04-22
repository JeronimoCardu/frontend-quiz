import { create } from "zustand";

type AnswerStore = {
  answerSelected: string;
  setAnswerSelected: (selected: string) => void;
  correctAnswer: string;
  setAnswer: (answer: string) => void;
  btnActive: boolean;
  setBtnActive: (a: boolean) => void;
  statusOption: string;
  setStatusOption: (status: string) => void;
  myScored: number;
  setMyScored: (newNumber: number) => void;
  currentQuestion: number;
  setCurrentQuestion: (newCurrentQuesiton: number) => void;
  colors: {
    html: string;
    css: string;
    js: string;
    accessibility: string;
  };
};

const useAnswerStore = create<AnswerStore>((set) => ({
  colors: {
    html: "bg-orange-50",
    css: "bg-green-100",
    js: "bg-blue-50",
    accessibility: "bg-purple-100",
  },
  answerSelected: "",
  correctAnswer: "",
  btnActive: false,
  statusOption: "",
  myScored: 0,
  currentQuestion: 0,
  setAnswerSelected: (selected: string) => set({ answerSelected: selected }),
  setAnswer: (answer: string) => set({ correctAnswer: answer }),
  setBtnActive: (a: boolean) => set({ btnActive: a }),
  setStatusOption: (status: string) => set({ statusOption: status }),
  setMyScored: (newNumber: number) => set({ myScored: newNumber }),
  setCurrentQuestion: (newCurrentQuesiton: number) =>
    set({ currentQuestion: newCurrentQuesiton }),
}));

export default useAnswerStore;
