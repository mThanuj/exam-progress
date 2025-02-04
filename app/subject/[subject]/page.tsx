"use client";

import ProgressIndicator from "@/components/ProgressIndicator";
import UnitCard from "@/components/UnitCard";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { initialUnits, SUBJECTS, Unit } from "@/lib/constants";
import { calculateProgress } from "@/utils/calculateProgress";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const params = useParams();
  const subject = params.subject as keyof typeof SUBJECTS;

  const router = useRouter();
  const storageKey = `${subject}-checklist`;
  let allUnits = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (!allUnits || allUnits.length === 0) {
    allUnits = initialUnits[SUBJECTS[subject]];
  }
  const [units, setUnits] = useLocalStorage<Unit[]>(storageKey, allUnits);

  const toggleTopic = (unitIndex: number, topicIndex: number) => {
    const updatedUnits = units.map((unit, uIndex) => {
      if (uIndex === unitIndex) {
        const updatedTopics = unit.topics.map((topic, tIndex) =>
          tIndex === topicIndex
            ? { ...topic, completed: !topic.completed }
            : topic,
        );
        return { ...unit, topics: updatedTopics };
      }
      return unit;
    });
    setUnits(updatedUnits);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {subject} Learning Tracker
        </h1>
        <div className="space-y-6">
          {units?.map((unit, unitIndex) => (
            <UnitCard
              key={unitIndex}
              unit={unit}
              unitIndex={unitIndex}
              onToggleTopic={toggleTopic}
            />
          ))}
        </div>
        <div className="fixed bottom-6 right-6 bg-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <ProgressIndicator progress={calculateProgress(units)} />
        </div>
      </div>
      <button
        onClick={() => router.back()}
        className="fixed bottom-6 left-6 hover:bg-blue-100 rounded-full p-4 shadow-md transition text-white bg-blue-600 hover:text-blue-700"
      >
        Go Back
      </button>
    </div>
  );
}
