import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function Board(props:any) {
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
        <ImageList>
            {props.movieList.map((item:Movie) => (
                <ImageListItem key={item.id}>
                    <img
                        src={'https://image.tmdb.org/t/p/original' + item.poster_path}
                        alt={item.title}
                    />
                <ImageListItemBar
                    title={
                        item.title
                    }
                    subtitle={item.overview}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                    >
                        <InfoIcon />
                    </IconButton>
                    }
                />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Board;