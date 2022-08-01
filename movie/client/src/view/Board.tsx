import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from '@mui/material/Button';
import MovieList from './MovieList';
import Youtube from './Youtube';

function Board(props:any) {
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
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography 
                        id={id} 
                        sx={{ mt: 2}}
                        component={'span'}
                    >   
                        <Youtube 
                            movieId = {id}
                            overview= {overview}
                        />
                        <Button 
                            variant="contained" 
                            style={{float: 'right'}}
                        >
                            more
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Board;