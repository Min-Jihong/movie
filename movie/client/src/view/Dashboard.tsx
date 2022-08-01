import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { API_URL} from '../components/Config';
import axios from 'axios';

function Dashboard(props:any){
    
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
            },
        },
    }));
    
    // const [searchKw,setSearchKw] = React.useState<string>('');
    const handleFocusout = (event:React.FocusEvent<HTMLInputElement>) => {
        event.target.value = '';
    }

    const handleSearch = async (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            // await (getData('/movie/popular',event.target.value));
        }
    }
    
    function getData(url:string, search:string) {
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
            props.movie(response.data.results);
        });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    최신 영화
                    </Typography>
                    <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onBlur={handleFocusout}
                        onKeyUp={handleSearch}
                    />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Dashboard;