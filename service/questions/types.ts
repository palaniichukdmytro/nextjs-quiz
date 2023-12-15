export type QuizType = "single" | "multiple";

export type Question<T = string[]> = {
  id: string;
  type: QuizType;
  question: string;
  options: string[];
  answers?: T;
};
