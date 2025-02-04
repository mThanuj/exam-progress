import { Unit } from "@/lib/constants";

export function calculateProgress(units: Unit[]): number {
  const topics = units.flatMap((unit) => unit.topics);
  const totalTopics = topics.length;
  const completedTopics = topics.filter((topic) => topic.completed).length;
  return totalTopics ? Math.round((completedTopics / totalTopics) * 100) : 0;
}
