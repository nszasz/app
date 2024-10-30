export interface ApiResponse<T> {
  total: number;
  data: T[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export interface Color {
  name: string;
  hex: string;
  rgb: string;
}

export const USERS_API_URL = 'users.json';
export const COLORS_API_URL = 'colors.json';

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });

export const fetchApi = async <TData>(url: string): Promise<TData> => {
  await delay(1000);
  return fetch(url).then((response) => response.json());
};
