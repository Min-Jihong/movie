import Dashboard from './view/Dashboard';
import Board from './view/Board';
import * as React from 'react';

const App:React.FC = () => {
  const [movie,setMovie] = React.useState<object>([]);
  console.log(movie);
  return (
    <div className="App">      
      <Dashboard movie={setMovie}/>
      <Board movieList = {movie}/>
    </div>
  );
}

export default App;