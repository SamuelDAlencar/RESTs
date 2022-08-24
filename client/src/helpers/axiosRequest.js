import axios from 'axios';

export default async (method, body, headers, url) => {
  const BASE_URL = 'http://localhost:3001';

  try {
    const { data, status } = await axios({
      method, data: body, headers, url: `${BASE_URL}/${url}`
    });

    return { data, status };
  } catch (error) {
    const { data, status } = error.response;

    return { data, status, error: true };
  }
};
