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
};

const useAnswerStore = create<AnswerStore>((set) => ({
  answerSelected: "",
  correctAnswer: "",
  btnActive: false,
  statusOption: "",
  setAnswerSelected: (selected: string) => set({ answerSelected: selected }),
  setAnswer: (answer: string) => set({ correctAnswer: answer }),
  setBtnActive: (a: boolean) => set({ btnActive: a }),
  setStatusOption: (status: string) => set({ statusOption: status }),
}));

export default useAnswerStore;
