"use client";
import dynamic from "next/dynamic";

const Quiz = dynamic(() => import("./Quiz"), { ssr: false });

export default function QuizClientWrapper(props: Record<string, unknown>) {
  return <Quiz {...props} />;
} 