import Router from './router/router';
import { useState } from 'react';
import { SongsContext } from './context/songs.context';

//Styles
import './App.scss';

function App() {
  const [songs, setSongs] = useState([])

  return (
      <SongsContext.Provider value={{songs, setSongs}}>
        <div className="app">
          <Router />
        </div>
      </SongsContext.Provider>
  );
}

export default App;
