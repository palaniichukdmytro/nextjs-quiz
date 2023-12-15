import QuizActions from "@/components/QuizActions";
import QuizHeader from "@/components/QuizHeader";
import getQuestions from "@/service/questions/getQuestions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promova Quiz",
  description: "Generated by Promova",
};

export default async function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const questions = await getQuestions();
  const maxSteps = questions.length;
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-screen-sm mx-auto">
      <QuizHeader maxSteps={maxSteps} />
      {children}
      <QuizActions maxSteps={maxSteps} />
    </main>
  );
}
