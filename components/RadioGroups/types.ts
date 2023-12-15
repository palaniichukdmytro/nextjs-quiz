import { Question } from "@/service/questions/types";

export type RadioGroupsProps = {
  data: Question<string>;
  onValueChange: (value: string) => void;
};
