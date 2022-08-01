import Dashboard from './view/Dashboard';
import Board from './view/Board';
import * as React from 'react';
import { API_URL} from './components/Config';
import axios from 'axios';

const App:React.FC = () => {
  const [movie,setMovie] = React.useState<object>([]);
  
  React.useEffect(function(){
    getData('/movie/popular');
  },[]);

  function getData(url:string) {
    // 옵션 기본 값은 *로 강조
    return axios.get(API_URL + url,{
        params : {
            api_key : '97e69180e91b511c8ecf31bcf00b9f49',
            language : 'ko-KR',
            page : 1
        }
    }).then((response)=> {
        if(response.status !== 200){
            alert("에러");
            return;
        }
        setMovie(response.data.results);
    });
}
  return (
    <div className="App">      
      <Dashboard movie={setMovie}/>
      <Board movieList = {movie}/>
    </div>
  );
}

export default App;