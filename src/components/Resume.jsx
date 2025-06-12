// ResumeButton.jsx
import React from "react";

const Resume = () => {
  return (
    <div className="flex gap-2 mt-2">
      {/* View Resume */}
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Resume View
      </a>

      {/* Download Resume */}
      <a
        href="/Resume.pdf"
        download
        className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download
      </a>
    </div>
  );
};

export default Resume;
