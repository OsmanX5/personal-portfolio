const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RESUME_ID = import.meta.env.VITE_RESUME_ID;

export const fetchResumeData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Resumes/${RESUME_ID}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching resume data:", error);
    throw error;
  }
};
