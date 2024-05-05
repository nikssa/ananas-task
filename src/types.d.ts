import { ReactNode } from 'react';

export type AppContextProviderProps = {
  children: ReactNode;
};

export type LogProps = {
  log: (message: string, name: string) => void;
};

export type PostProps = {
  id: number;
  userId: number;
  body: string;
  title: string;
};

export type CommentProps = {
  id: number;
  postId: number;
  body: string;
  email: string;
  name: string;
};

type AddressProps = {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
};

type CompanyProps = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type UserProps = {
  id: number;
  address: AddressProps;
  company: CompanyProps;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type FilterProps = {
  log: (message: string, name: string) => void;
  filteredPosts: PostProps[];
  setKeyword: Dispatch<SetStateAction<string | null>>;
};

export type PostListProps = {
  log: (message: string, name: string) => void;
  filteredPosts: PostProps[];
};

export type CommentListProps = {
  log: (message: string, name: string) => void;
  postId?: number;
  comments?: CommentProps[];
  showBody?: boolean;
};
