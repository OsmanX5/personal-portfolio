const API_BASE_URL = "http://api.dev-resume.com/api";
const RESUME_ID = "6949443c0a10599e07445233";

export const fetchResumeData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/resume/${RESUME_ID}`);

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
