import {
  ApiResponse,
  Color,
  COLORS_API_URL,
  fetchApi,
  User,
  USERS_API_URL,
} from './api.ts';

export const getUserList = async () => {
  const usersResponse = await fetchApi<ApiResponse<User>>(USERS_API_URL);
  console.log('users', usersResponse);

  const colorsResponse = await fetchApi<ApiResponse<Color>>(COLORS_API_URL);
  console.log('colors', colorsResponse);

  return updateUsersWithColor(usersResponse.data, colorsResponse.data);
};

const updateUsersWithColor = (users: User[], colors: Color[]) => {
  return users.map((user) => {
    return { ...user, color: getRandomColor(colors) };
  });
};

const getRandomColor = (colors: Color[]) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
