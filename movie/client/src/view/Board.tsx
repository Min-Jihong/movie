import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from '@mui/material/Button';
import MovieList from './MovieList';

function Board(props:any) {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [id, setId] = React.useState('');
    const [overview,setOverview] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <MovieList 
                movieList= {props.movieList} 
                id={setId} 
                overview={setOverview}
                open={setOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id={id} sx={{ mt: 2 }}>
                        {overview}
                        <br />
                        <Button variant="contained" style={{float: 'right'}}>more</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

// <ImageList sx={{ height: 450, overflow: 'auto', display: 'flex'}}>
        // {props.movieList.map((item:Movie) => (
        //         <ImageListItem 
        //             sx={{paddingRight: 5}}
        //             key={item.id}
        //         >
        //             <img 
        //                 style={{width : 500, height:100,objectFit: 'fill'}}
        //                 src={'https://image.tmdb.org/t/p/original' + item.poster_path + '?w=248&fit=crop&auto=format'}
        //                 alt={item.title}
        //             />
        //         {/* <ImageListItemBar
        //             title={
        //                 item.title
        //             }
        //             subtitle={item.overview}
        //             actionIcon={
        //             <IconButton
        //                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        //                 aria-label={`info about ${item.title}`}
        //             >
        //                 <InfoIcon />
        //             </IconButton>
        //             }
        //             onMouseOver={handleShowSubTit}
        //         /> */}
        //         </ImageListItem>
        //     ))}
        // </ImageList>

export default Board;