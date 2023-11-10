import { useSelector, connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAuthActions } from '../app/actions/authActions';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const Navbar = ({ setUserDetails }) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pages = [{ name: "Home", url: "/" }, { name: "Hall Rules", url: "/" }, { name: "Facilities", url: "/" }, { name: "Gallery", url: "/" }, { name: "Complaints", url: "/complaint" }, { name: "Suggestions", url: "/suggestion" }, { name: "Contact Us", url: "/" }];
    const settings = [{ name: "Profile", url: "/profile" }, { name: "Profile", url: "/profile" }, { name: "Profile", url: "/profile" }];



    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);
    const handleLogout = () => {
        setUserDetails(null);
        navigate("/");
    }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name}>
                                    <Typography textAlign="center" onClick={() => navigate(page.url)}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => navigate(page.url)}
                                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>

                        {(!user) ?
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key="signupstudent" onClick={() => navigate('/signupstudent')}>
                                    <Typography textAlign="center">SignupStudent</Typography>
                                </MenuItem>
                                <MenuItem key="signupstaff" onClick={() => navigate('/signupstaff')}>
                                    <Typography textAlign="center">SignupStaff</Typography>
                                </MenuItem>
                                <MenuItem key="login" onClick={() => navigate('/login')}>
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                            </Menu>
                            :
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key="profile" onClick={() => navigate('/profile')}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem key="logout" onClick={handleLogout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>



        // <div>
        //     <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
        //         <div className='container-fluid'>
        //             <Link className='navbar-brand fs-1 fst-italic' to="/">HostelHub</Link>
        //             <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
        //                 <span className='navbar-toggler-icon'></span>
        //             </button>
        //             <div className='collapse navbar-collapse'>
        //                 <ul className='navbar-nav'>
        //                     <li className='nav-item'>
        //                         <Link className='nav-link' aria-current="page" to="/">Home</Link>
        //                     </li>
        //                     {(!user) ?
        //                         <div>
        //                             <li className='nav-item'>
        //                                 <Link className='nav-link' to="/signupstudent">SignupStudent</Link>
        //                             </li>
        //                             <li className='nav-item'>
        //                                 <Link className='nav-link' to="/signupstaff">SignupStaff</Link>
        //                             </li>
        //                             <li className='nav-item'>
        //                                 <Link className='nav-link' to="/login">Login</Link>
        //                             </li>
        //                         </div> :
        //                         <div>
        //                             <div className='btn' onClick={handleLogout}>Logout</div>
        //                         </div>
        //                     }


        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getAuthActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(Navbar);

