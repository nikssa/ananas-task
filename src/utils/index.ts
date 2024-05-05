import { UserProps } from '../types';

export const getUserByUserId = (
  userId: number | undefined,
  users: UserProps[]
) => {
  const user = users.find((user) => user.id === userId);
  return user;
};
