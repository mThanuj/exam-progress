import React from "react";
import TopicItem from "./TopicItem";
import { Unit } from "@/lib/constants";

interface UnitCardProps {
  unit: Unit;
  unitIndex: number;
  onToggleTopic: (unitIndex: number, topicIndex: number) => void;
}

const UnitCard: React.FC<UnitCardProps> = ({
  unit,
  unitIndex,
  onToggleTopic,
}) => {
  const completedCount = unit.topics.filter((t) => t.completed).length;
  const totalCount = unit.topics.length;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{unit.title}</h2>
        <span className="text-sm font-medium text-blue-600">
          {completedCount}/{totalCount} completed
        </span>
      </div>
      <div className="relative pt-1 mb-4">
        <div className="flex mb-2 items-center justify-between">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full h-2 transition-all duration-500"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        {unit.topics.map((topic, topicIndex) => (
          <TopicItem
            key={topicIndex}
            topic={topic}
            onToggle={() => onToggleTopic(unitIndex, topicIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default UnitCard;
