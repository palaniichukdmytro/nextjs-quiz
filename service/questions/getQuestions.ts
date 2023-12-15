import questions from "./questions.json";
import { Question } from "./types";

export default function getQuestions(): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questions as Question[]);
    }, 500);
  });
}
