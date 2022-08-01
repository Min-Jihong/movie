
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function MovieList(props:any) {
    type Movie = {
        adult:boolean;
        backdrop_path:string;
        genre_ids:string[];
        id:number;
        original_language:string;
        original_title:string;
        overview:string;
        popularity:number;
        poster_path:string;
        release_date:string;
        title:string;
        video:boolean;
        vote_average:number;
        vote_count:number;
    };

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={5}
        >
            {
                props.movieList.map((item:Movie) => (
                    <SwiperSlide key={item.id}>
                    <img 
                        style={{width:'100%', objectFit: 'fill'}}
                        src={'https://image.tmdb.org/t/p/original' + item.poster_path }
                        alt={item.title}
                    />
                    <ImageListItemBar
                        title={item.title}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                                aria-describedby = {String(item.id)}
                                onClick={function(){
                                    props.id(String(item.id));
                                    props.overview(item.overview);
                                    props.open(true);
                                }}
                            >
                                <InfoIcon/>
                            </IconButton>
                        }
                    />
                </SwiperSlide>
                ))
            }
        </Swiper>
        
    )
}

export default MovieList;