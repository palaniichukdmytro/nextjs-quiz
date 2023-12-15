import { Question } from "@/service/questions/types";
import { Slug } from "@/types";

export type QuizStepProps = Slug & {
  questions: Question[];
};
