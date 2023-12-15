"use client";
import { Button } from "@/components/ui/button";
import { getLocalStorageData } from "@/lib/utils";
import { Question } from "@/service/questions/types";
import { STORAGE_KEYS } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function QuizSuccess() {
  const storedQuizData = getLocalStorageData(STORAGE_KEYS.Quiz);

  const isStoredQuizDataEmpty = Object.keys(storedQuizData).length === 0;

  if (isStoredQuizDataEmpty) {
    redirect("/");
  }

  const answersByStep: Record<string, Question[]> = Object.entries(
    storedQuizData
  ).reduce((acc, [step, data]: [string, unknown]) => {
    const stepAnswers = acc[step] || [];
    return {
      ...acc,
      [step]: [...stepAnswers, data as Question],
    };
  }, {} as Record<string, Question[]>);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="mb-4">Success screen 🏆✅🎯🚀</h2>

      {Object.entries(answersByStep).map(([step, answers]) => (
        <div key={step}>
          <ul>
            {answers.map(({ question, answers: answer }) => (
              <li key={question} className="mb-4">
                {question}: {Array.isArray(answer) ? answer.join(", ") : answer}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Button asChild>
        <Link
          href="/quiz/1"
          onClick={() => localStorage.removeItem(STORAGE_KEYS.Quiz)}
        >
          Start Again
        </Link>
      </Button>
    </main>
  );
}
