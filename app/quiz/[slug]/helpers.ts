import { getLocalStorageData } from "@/lib/utils";
import { Question } from "@/service/questions/types";
import { STORAGE_KEYS, Slug } from "@/types";

export function getQuestionsForSlug({
  slug,
  questions,
}: Slug & { questions: Question[] }) {
  const storedQuizData = getLocalStorageData(STORAGE_KEYS.Quiz);

  const questionData = questions.find(
    (question: Question) => question.id === slug
  );

  if (questionData) {
    const answers = storedQuizData?.[slug]?.answers;
    return { ...questionData, answers };
  }

  return undefined;
}
