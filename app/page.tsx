"use client";

import { SUBJECTS, Unit } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProgressIndicator from "@/components/ProgressIndicator";
import { calculateProgress } from "@/utils/calculateProgress";
import Loader from "@/components/Loader";
import { signOutAction } from "@/actions/auth.action";

interface SubjectProgress {
  [key: string]: number;
}

const Page = () => {
  const router = useRouter();
  const [subjectProgress, setSubjectProgress] = useState<SubjectProgress>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (!data.session) {
        router.push("/login");
      } else if (data.session.user.email === "mullagurithanuj0@gmail.com") {
        router.push("/admin");
      } else {
        setLoading(false);
      }
    })();
  }, [router]);

  useEffect(() => {
    const fetchProgress = async () => {
      const res = await fetch("/api/progress");
      const data = await res.json();

      const progressMap: SubjectProgress = {};

      data.forEach((element: { subject: string; data: Unit[] }) => {
        progressMap[element.subject] = calculateProgress(element.data);
      });

      setSubjectProgress(progressMap);
    };

    fetchProgress();
  }, [router]);

  const handleClick = (subject: string) => {
    router.push(`/subject/${subject}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Available Subjects
          </h1>
          <form
            action={signOutAction}
            className="w-full md:w-auto flex justify-center md:justify-end"
          >
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all w-full md:w-auto"
            >
              Sign Out
            </button>
          </form>
        </div>
        <div className="space-y-6">
          {Object.entries(SUBJECTS).map(([key, name]) => {
            const curSub = key as keyof typeof SUBJECTS;
            const progress = subjectProgress[SUBJECTS[curSub]] || 0;

            return (
              <div
                key={key}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {name}
                  </h2>
                  <div className="flex items-center mt-4 space-x-4">
                    <ProgressIndicator
                      progress={progress}
                      size={48}
                      strokeWidth={4}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <p className="text-gray-700">
                    <strong>Code:</strong> {key}
                  </p>
                  <button
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-xl transition-all"
                    onClick={() => handleClick(key)}
                  >
                    Go to {key} Tracker
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
