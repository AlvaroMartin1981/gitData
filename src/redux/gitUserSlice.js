import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  username: null,
  followers: null,
  public_repos: null,
  image: null
};

export const gitUserSlice = createSlice({
  name: 'gitUser',
  initialState,
  reducers: {
    addGitUser: (state, action) => {
      const { name, login, followers, public_repos, avatar_url } = action.payload[0];
      state.name = name;
      state.username = login;
      state.followers = followers;
      state.public_repos = public_repos;
      state.image = avatar_url;
    }
  }
});

export const { addGitUser } = gitUserSlice.actions;

export default gitUserSlice.reducer;
