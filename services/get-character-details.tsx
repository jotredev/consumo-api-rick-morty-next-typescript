import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';

const getCharacter = async (id: string) => {
  const { data } = await axios.get(`${URL}/${id}`);

  return data;
};

export default getCharacter;
