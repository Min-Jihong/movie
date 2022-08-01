
import * as React from 'react';
import { API_URL} from '../components/Config';
import axios from 'axios';

function Youtube(props:any) {
    
    const [ytKey,setYtKey] = React.useState('');
    
    React.useEffect(function(){
        getData(`/movie/${props.movieId}/videos`);
    },[]);

    function getData(url:string) {
        // 옵션 기본 값은 *로 강조
        return axios.get(API_URL + url,{
            params : {
                api_key : '97e69180e91b511c8ecf31bcf00b9f49',
                language : 'en-US'
            }
        }).then((response)=> {
            if(response.status !== 200){
                alert("에러");
                return;
            }
            for( const movieInfo of response.data.results){
                if(movieInfo.type === "Teaser"){
                    setYtKey(movieInfo.key);
                    return;
                }
            }
            setYtKey(response.data.results[0].key);
        });
    }

    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%'
                }}   
            >
                <iframe 
                    title={'youtube'}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                    }}
                    src={`https://www.youtube.com/embed/${ytKey}`}
                    allowFullScreen 
                ></iframe>
            </div>
            <div>{props.overview}</div>
        </div>
    )
}

export default Youtube;