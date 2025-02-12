"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const AdminPage = () => {
  // Replace these with your actual data source if needed.
  const router = useRouter();
  const existingSubjects = ["Mathematics", "Science", "History"];
  const existingUnits = ["Unit 1", "Unit 2", "Unit 3"];
  const [loading, setLoading] = useState(true);

  const [subjectSelection, setSubjectSelection] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [unitSelection, setUnitSelection] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubjectSelection(e.target.value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnitSelection(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If "new" is selected, use the text input; otherwise, use the dropdown value.
    const finalSubject =
      subjectSelection === "new" ? newSubject : subjectSelection;
    const finalUnit = unitSelection === "new" ? newUnit : unitSelection;

    const formData = {
      subject: finalSubject,
      unit: finalUnit,
      topic,
    };

    console.log("Submitted Data:", formData);
    // You can replace the console.log with your API call or submission logic.
  };

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Admin Page
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={subjectSelection}
                onChange={handleSubjectChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Select Subject --</option>
                {existingSubjects.map((subject, idx) => (
                  <option key={idx} value={subject}>
                    {subject}
                  </option>
                ))}
                <option value="new">New Subject</option>
              </select>
              {subjectSelection === "new" && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter new subject"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Unit Field */}
            <div>
              <label
                htmlFor="unit"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Unit
              </label>
              <select
                id="unit"
                name="unit"
                value={unitSelection}
                onChange={handleUnitChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Select Unit --</option>
                {existingUnits.map((unit, idx) => (
                  <option key={idx} value={unit}>
                    {unit}
                  </option>
                ))}
                <option value="new">New Unit</option>
              </select>
              {unitSelection === "new" && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter new unit"
                    value={newUnit}
                    onChange={(e) => setNewUnit(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Topic Field */}
            <div>
              <label
                htmlFor="topic"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Topic
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                placeholder="Enter topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
