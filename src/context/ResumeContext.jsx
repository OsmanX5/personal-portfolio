import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { fetchResumeData } from "../services/api";
import { normalizeResume } from "../services/normalizeResume";

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

  // Normalized, UI-ready model. Memoized so it only recomputes on new data.
  const resume = useMemo(
    () => (resumeData ? normalizeResume(resumeData) : null),
    [resumeData]
  );

  return (
    <ResumeContext.Provider value={{ resume, resumeData, loading, error }}>
      {children}
    </ResumeContext.Provider>
  );
};
