import QuizStep from "@/components/QuizStep";
import getQuestions from "@/service/questions/getQuestions";
import { Slug } from "@/types";

export async function generateStaticParams() {
  const questions = await getQuestions();

  return questions.map(({ id }) => ({
    slug: id,
  }));
}

export default async function Step({ params: { slug } }: { params: Slug }) {
  const questions = await getQuestions();

  return (
    <section>
      {/* <Suspense fallback={"....skeleton might be here :)"}> */}
      <QuizStep slug={slug} questions={questions} />
      {/* </Suspense> */}
    </section>
  );
}
