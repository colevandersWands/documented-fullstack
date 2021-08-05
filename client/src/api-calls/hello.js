/**
 * Fetches text from the /api/hello route.
 *
 * @async
 * @returns {Promise<string>} - A promise resolving to the /api/hello text.
 *
 * @throws {Error} HTTP error! Status: {number}.
 */
export const hello = async () => {
  // --- declare your resource's URL ---
  const URL = `${window.location.origin}/api/hello`;

  // --- fetch, validate and parse the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}\n-> ${URL}`);
  }
  const helloData = await response.text();

  // --- return the final data ---
  return helloData;
};
