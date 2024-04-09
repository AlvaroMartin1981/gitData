import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Datos } from './Components/Datos';
import { useDispatch } from 'react-redux';
import { addGitUser } from './redux/gitUserSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.github.com/users/')
      .then(response => response.json())
      .then(data => dispatch(addGitUser(data)))
      .catch(error => console.error('Error fetching data:', error));
  }, [dispatch]);
  
  return (
    <Provider store={store}>
      <Datos />
    </Provider>
  );
}

export default App;
