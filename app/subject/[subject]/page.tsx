"use client";

import ProgressIndicator from "@/components/ProgressIndicator";
import UnitCard from "@/components/UnitCard";
import { SUBJECTS, Unit } from "@/lib/constants";
import { calculateProgress } from "@/utils/calculateProgress";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const subject = params.subject as keyof typeof SUBJECTS;

  const router = useRouter();
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUnits = async () => {
      const res = await fetch(`/api/progress?subject=${SUBJECTS[subject]}`);
      const data = await res.json();
      if (data.error) {
        console.error("Error fetching data:", data.error);
      } else {
        setUnits(data);
      }
      setLoading(false);
    };

    fetchUnits();
  }, [subject]);

  const toggleTopic = async (unitIndex: number, topicIndex: number) => {
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

    await fetch(`/api/progress`, {
      method: "PUT",
      body: JSON.stringify({ subject: SUBJECTS[subject], units: updatedUnits }),
      headers: { "Content-Type": "application/json" },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
