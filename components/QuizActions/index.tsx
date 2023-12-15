"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function QuizActions({ maxSteps }: { maxSteps: number }) {
  const params = useParams();
  const slug = Number(params?.slug) || 0;

  const activeStep = slug <= maxSteps ? slug : 0;

  const nextStepLink =
    activeStep < maxSteps ? `/quiz/${activeStep + 1}` : "/success";

  const prevStepLink = activeStep > 1 ? `/quiz/${activeStep - 1}` : "/";

  const isBackDisabled = activeStep <= 1;

  return (
    <div className="flex justify-between w-full mb-2">
      <Button asChild variant={isBackDisabled ? "secondary" : "default"}>
        <Link
          aria-disabled={isBackDisabled}
          href={prevStepLink}
          className={isBackDisabled ? "pointer-events-none" : ""}
        >
          Back
        </Link>
      </Button>
      <Button asChild>
        <Link href={nextStepLink}>Next</Link>
      </Button>
    </div>
  );
}
