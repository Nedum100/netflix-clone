const key = "92db5a3884dc46ba309f72d1627f0927";
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/trending/movie/day?api_key=${key}`, // Corrected endpoint for trending movies
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`, // Corrected endpoint for comedy movies
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

export function createImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}
export default endpoints;
