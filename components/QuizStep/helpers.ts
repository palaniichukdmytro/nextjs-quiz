import { getLocalStorageData } from "@/lib/utils";
import { Question } from "@/service/questions/types";
import { STORAGE_KEYS } from "@/types";

export const handleMultipleChange = (
  option: string,
  value: boolean | string,
  data: Question
) => {
  const storedQuizData = getLocalStorageData(STORAGE_KEYS.Quiz);

  const currentAnswers = new Set(storedQuizData[data.id]?.answers || []);

  if (value) {
    currentAnswers.add(option);
  } else {
    currentAnswers.delete(option);
  }

  const updatedAnswers = Array.from(currentAnswers);

  const answerData = {
    ...data,
    answers: updatedAnswers,
  };

  storedQuizData[data.id] = answerData;

  localStorage.setItem(STORAGE_KEYS.Quiz, JSON.stringify(storedQuizData));
};

export const handleSingleChange = (value: boolean | string, data: Question) => {
  const storedQuizData = getLocalStorageData(STORAGE_KEYS.Quiz);

  const updatedAnswer = value ? value : null;

  const answerData = {
    ...data,
    answers: updatedAnswer,
  };

  storedQuizData[data.id] = answerData;

  localStorage.setItem(STORAGE_KEYS.Quiz, JSON.stringify(storedQuizData));
};
