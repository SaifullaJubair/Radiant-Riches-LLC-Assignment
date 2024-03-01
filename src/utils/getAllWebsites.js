export const getAllWebsites = async () => {
  const response = await fetch(
    "https://radiant-riches-llc-job-task.vercel.app/website"
  );
  const data = await response.json();
  return data;
};
