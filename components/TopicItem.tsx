import React from "react";

interface Topic {
  name: string;
  completed: boolean;
}

interface TopicItemProps {
  topic: Topic;
  onToggle: () => void;
}

const TopicItem: React.FC<TopicItemProps> = ({ topic, onToggle }) => (
  <label
    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
      topic.completed
        ? "bg-green-50 border border-green-200"
        : "hover:bg-gray-50 border border-gray-200"
    }`}
  >
    <input
      type="checkbox"
      checked={topic.completed}
      onChange={onToggle}
      className="w-6 h-6 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
    />
    <span
      className={`ml-3 text-gray-700 ${topic.completed ? "line-through opacity-60" : ""}`}
    >
      {topic.name}
    </span>
  </label>
);

export default TopicItem;
