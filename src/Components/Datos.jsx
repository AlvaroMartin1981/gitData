import React from 'react';
import { useSelector } from 'react-redux';

export function Datos() {
  const gitUser = useSelector(state => state.gitUser);

  return (
    <>
      <h1>Datos usuario GitHub</h1>
      <ul>
        <li>Name: {gitUser.name}</li>
        <li>Username: {gitUser.username}</li>
        <li>Followers: {gitUser.followers}</li>
        <li>Repositories: {gitUser.public_repos}</li>
        <li>Image: <img src={gitUser.image} alt='Avatar'/></li>
      </ul>
    </>
  );
}
