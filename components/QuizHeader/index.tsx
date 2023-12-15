"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { STORAGE_KEYS } from "@/types";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

export default function QuizHeader({ maxSteps }: { maxSteps: number }) {
  const params = useParams();
  const slug = Number(params?.slug) || 0;
  if (!slug) {
    redirect("/quiz/1");
  }

  const activeStep = slug <= maxSteps ? slug : 0;

  return (
    <>
      <div className="flex justify-between w-full mb-2">
        <p>{`${activeStep}/${maxSteps}`}</p>
        <Button asChild>
          <Link
            href="/"
            onClick={() => localStorage.removeItem(STORAGE_KEYS.Quiz)}
          >
            Quit
          </Link>
        </Button>
      </div>
      <Progress value={activeStep} max={maxSteps} />
    </>
  );
}
