"use client";

import { SUBJECTS } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleClick = (subject: string) => {
    router.push(`/subject/${subject}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Available Subjects
        </h1>
        <div className="space-y-6">
          {Object.entries(SUBJECTS).map(([key, name]) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <span className="text-sm font-medium text-blue-600">{key}</span>
              </div>
              <div className="grid gap-2">
                <p className="text-gray-700">
                  <strong>Code:</strong> {key}
                </p>
                <p className="text-gray-700">
                  <strong>Description:</strong> {name} is an in-depth course
                  focused on the fundamental and advanced topics of{" "}
                  {name.toLowerCase()}.
                </p>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-xl transition-all"
                  onClick={() => handleClick(key)}
                >
                  Go to {key} Tracker
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
