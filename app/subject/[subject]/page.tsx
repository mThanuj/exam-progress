"use client";

import Main from "@/components/Main";
import { SUBJECTS } from "@/lib/constants";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const subject = params.subject as keyof typeof SUBJECTS;

  return <Main subject={subject} />;
}
