import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import DomainIcon from '@material-ui/icons/Domain';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../images/user_logo.png'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    button: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleMenuClose}
        />
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    color="inherit" >
                    <PetsRoundedIcon />
                </IconButton>
                <p>단체용</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    color="inherit" >
                    <MenuIcon />
                </IconButton>
                <p><Link to = "/MyDonation" style={{textDecoration: 'none', color:'inherit'}}>후원 내역</Link></p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    color="inherit" >
                    <DomainIcon />
                </IconButton>
                <p><Link to = "/MySupport" style={{textDecoration: 'none', color:'inherit'}}>봉사 내역</Link></p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p><Link to = "/SignIn" style={{textDecoration: 'none', color:'inherit'}}>Profile</Link></p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 12 new notifications" color="inherit">
                    <Badge badgeContent={12} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="#000000">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <Link to = "/" ><Avatar src={Logo} /></Link>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to = "/" style={{ textDecoration: 'none' }}>Secret hands</Link>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button className={classes.button} color="inherit">
                            단체용
                        </Button>
                        <Button className={classes.button} color="inherit">
                            <Link to = "/MyDonation" style={{ textDecoration: 'none' }}>후원 내역</Link></Button>
                        <Button className={classes.button} color="inherit">
                            <Link to = "/MySupport" style={{ textDecoration: 'none' }}>봉사 내역</Link></Button>
                        <Link to = "/SignIn" style={{color: 'inherit'}}><IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton></Link>
                        <IconButton aria-label="show 12 new notifications" color="inherit">
                            <Badge badgeContent={12} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}