import axios, { AxiosRequestHeaders } from 'axios';

type TypeAxios = {
  baseURL: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Record<string, unknown>;
  headers?: AxiosRequestHeaders;
};

async function Axios({ baseURL, method, data, headers }: TypeAxios) {
  const Response = await axios({ headers, data, method, baseURL });

  return Response;
}

export default Axios;
