import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchResumeData } from "../services/api";

const ResumeContext = createContext(null);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        setLoading(true);
        const data = await fetchResumeData();
        setResumeData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load resume data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadResumeData();
  }, []);

  return (
    <ResumeContext.Provider value={{ resumeData, loading, error }}>
      {children}
    </ResumeContext.Provider>
  );
};
