"use client";
import { getQuestionsForSlug } from "@/app/quiz/[slug]/helpers";
import RadioGroups from "@/components/RadioGroups";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect } from "next/navigation";
import { handleMultipleChange, handleSingleChange } from "./helpers";
import { QuizStepProps } from "./types";

export default function QuizStep({ slug, questions }: QuizStepProps) {
  const data = getQuestionsForSlug({ slug, questions });

  if (!data) {
    redirect("/");
  }

  const quizType = data.type;

  return (
    <div>
      <h2 className="text-xl mb-2">{data.question}</h2>
      {quizType === "multiple" ? (
        <h4 className="text-sm mb-4">You can choose more than one option</h4>
      ) : null}
      {quizType === "multiple" ? (
        data.options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={option}
              defaultChecked={(data?.answers || []).includes(option)}
              onCheckedChange={(value) =>
                handleMultipleChange(option, value, data)
              }
            />
            <label
              htmlFor={option}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option}
            </label>
          </div>
        ))
      ) : (
        <RadioGroups
          data={data}
          onValueChange={(value: string) => handleSingleChange(value, data)}
        />
      )}
    </div>
  );
}
