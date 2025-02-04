"use client";

import { initialUnits, SUBJECTS, Unit } from "@/lib/constants";
import { useState, useEffect } from "react";

const Main = ({ subject }: { subject: keyof typeof SUBJECTS }) => {
  const [units, setUnits] = useState<Unit[]>(initialUnits[SUBJECTS[subject]]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`${subject}-checklist`);
      if (saved) {
        setUnits(JSON.parse(saved));
      }
      setLoaded(true);
    }
  }, [subject]);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(`${subject}-checklist`, JSON.stringify(units));
    }
  }, [units, loaded, subject]);

  const toggleTopic = (unitIndex: number, topicIndex: number) => {
    const updatedUnits = [...units];
    updatedUnits[unitIndex].topics[topicIndex].completed =
      !updatedUnits[unitIndex].topics[topicIndex].completed;
    setUnits(updatedUnits);
  };

  const calculateProgress = (): number => {
    const totalTopics = units.flatMap((unit) => unit.topics).length;
    const completedTopics = units.flatMap((unit) =>
      unit.topics.filter((topic) => topic.completed),
    ).length;
    return Math.round((completedTopics / totalTopics) * 100);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {subject} Learning Tracker
        </h1>
        <div className="space-y-6">
          {units.map((unit, unitIndex) => {
            const completed = unit.topics.filter((t) => t.completed).length;
            const total = unit.topics.length;

            return (
              <div
                key={unitIndex}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {unit.title}
                  </h2>
                  <span className="text-sm font-medium text-blue-600">
                    {completed}/{total} completed
                  </span>
                </div>

                <div className="relative pt-1 mb-4">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full h-2 transition-all duration-500"
                        style={{ width: `${(completed / total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  {unit.topics.map((topic, topicIndex) => (
                    <label
                      key={topicIndex}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                        topic.completed
                          ? "bg-green-50 border border-green-200"
                          : "hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={topic.completed}
                        onChange={() => toggleTopic(unitIndex, topicIndex)}
                        className="w-6 h-6 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                      />
                      <span
                        className={`ml-3 text-gray-700 ${
                          topic.completed ? "line-through opacity-60" : ""
                        }`}
                      >
                        {topic.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="fixed bottom-6 right-6 bg-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-4">
          <div
            className="radial-progress text-blue-600"
            style={
              {
                "--value": calculateProgress(),
                "--size": "3rem",
              } as React.CSSProperties
            }
          >
            <span className="text-xs font-bold">{calculateProgress()}%</span>
          </div>
        </div>
      </div>
      <button
        onClick={goBack}
        className="fixed bottom-6 left-6 hover:bg-gray-100 rounded-full p-4 shadow-md transition text-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default Main;
