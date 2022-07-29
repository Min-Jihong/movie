import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function Board(props:any) {
    type Movie = {
        actor:string;
        director:string;
        image:string;
        link:string;
        pubDate:string;
        subtitle:string;
        title:string;
        userRating:string;
    };
    
    return (
        <ImageList>
            {/* {props.movieList.map((item:Movie) => (
                <ImageListItem key={item.image}>
                    <a
                        href={item.link}
                        target="_blank"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                        />
                    </a>
                <ImageListItemBar
                    title={
                        item.title
                    }
                    subtitle={item.subtitle}
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
            ))} */}
        </ImageList>
    );
}

export default Board;