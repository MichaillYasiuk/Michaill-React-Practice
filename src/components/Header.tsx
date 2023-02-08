import React from 'react';
import { User } from '../types';

interface HeaderProps {
  userData: Pick<User, 'name' | 'username' | 'email'>;
}

export const Header = ({
  userData: { name, username, email },
}: HeaderProps) => {
  return (
    <header>
      <h2>User Data</h2>
      <p>Name: {name}</p>
      <p>User name: {username}</p>
      <p>Email: {email}</p>
    </header>
  );
};
