"use client";

import { SUBJECTS } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProgressIndicator from "@/components/ProgressIndicator";
import { calculateProgress } from "@/utils/calculateProgress";

interface SubjectProgress {
  [key: string]: number;
}

const Page = () => {
  const router = useRouter();
  const [subjectProgress, setSubjectProgress] = useState<SubjectProgress>({});
  const [loading, setLoading] = useState(true);

  // Check for a valid session
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (!data.session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    })();
  }, [router]);

  // Calculate progress for each subject
  useEffect(() => {
    const progressMap: SubjectProgress = {};
    Object.entries(SUBJECTS).forEach(([key]) => {
      if (typeof window !== "undefined") {
        const units = JSON.parse(
          localStorage.getItem(`${key}-checklist`) || "[]",
        );
        progressMap[key] = calculateProgress(units);
      }
    });
    setSubjectProgress(progressMap);
  }, []);

  const handleClick = (subject: string) => {
    router.push(`/subject/${subject}`);
  };

  // Render a beautiful loader until the session is validated
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-gray-200"></div>
          <p className="mt-4 text-xl text-blue-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Render the main page once the session is valid
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Available Subjects
        </h1>
        <div className="space-y-6">
          {Object.entries(SUBJECTS).map(([key, name]) => {
            const progress = subjectProgress[key] || 0;
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
