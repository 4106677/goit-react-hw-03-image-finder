import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30824727-fc7ffdf52eca2e0011c5b9076';

const fetchImages = async (value, pageNumber) => {
  const data = await axios.get(
    `/?q=${value}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  //   console.log(response.data.hits);

  return data.data;
};

// const fetchImages = async (query, currentPage) => {
//   const { data } = await axios.get(
//     `/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );

//   return data;
// };

export default fetchImages;
