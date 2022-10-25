
const axios = require('axios').default;
const base_url = 'https://pixabay.com/api/';
const KEY = '30770270-1c512d3309800b706c0d5f4a2';

export async function fetchImages(searchQuery, page) {
  const response = await axios.get(
    `${base_url}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  console.log(response.data);
  return response.data;
}