import Dashboard from './view/Dashboard';
import Board from './view/Board';
import * as React from 'react';
import { API_URL} from './components/Config';
import axios from 'axios';

const App:React.FC = () => {
  type MovieUrl = {
    title: string;
    url: string;
  }

  type MovieInfo = {
    title : string;
    result : object;
  }
  const [movieList,setMovieList] = React.useState<object[]>([]);
  const movieOption:MovieUrl[] = [{   //ㅠㅠ DB를 안만든 죄
    title : '최신인기작',
    url : '/movie/popular'
  },{
    title : '개봉예정작',
    url : '/movie/upcoming'
  },{
    title : '현재상영작',
    url : '/movie/now_playing'
  }];

  React.useEffect(function(){
    getData(movieOption);
  },[]);

  async function getData(urlList:MovieUrl[]) {
    let arr:MovieInfo[]= [];
    // 옵션 기본 값은 *로 강조
    for(const data of urlList) {
      await axios.get(API_URL + data.url,{
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
          console.log(response.data.results);
          arr.push({
            title : data.title,
            result : response.data.results
          });
      });
    }
    setMovieList(arr);
}
  return (
    <div className="App">      
      <Dashboard movie={setMovieList}/>
      {
        movieList.map((movie) => {
          const data = movie as MovieInfo;
          return <div>
            <h2>{data.title}</h2>
            <Board movieList = {data.result}/>
          </div>
        })
      }
    </div>
  );
}

export default App;