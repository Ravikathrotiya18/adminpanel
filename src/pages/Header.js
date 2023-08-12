/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MdDashboardCustomize } from "react-icons/md";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { FaBars, FaTachometerAlt } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import './css/Header.css'
import { TbTableShortcut } from "react-icons/tb";
import { PiCaretDownBold, PiCaretUpBold, PiBracketsRound } from "react-icons/pi";
import { BiSolidEdit, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: 240,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export default function Header() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [tableOpen, setTableOpen] = React.useState(false);
    const [dashboardOpen, setDashboardOpen] = React.useState(false);
    const [formOpen, setFormOpen] = React.useState(false)
    const [tableIconSelect, setTableIconSelect] = React.useState([false, false, false]);
    const [dashboardIconSelect, setDashboardIconSelect] = React.useState([false, false, false]);
    const [formIcons, setFormIcons] = React.useState([false, false, false, false]);

    const token = localStorage.getItem('token')
    const handleTableOpen = () => {
        setTableOpen(!tableOpen);
    };

    const handleDashboarOpen = () => {
        setDashboardOpen(!dashboardOpen)
    }
    const FormIcons = (index) => {
        const newFormIcons = [...formIcons];
        newFormIcons[index] = !newFormIcons[index];
        setFormIcons(newFormIcons);
    };
    const TableIcons = (index) => {
        const newTableIcons = [...tableIconSelect];
        newTableIcons[index] = !newTableIcons[index];
        setTableIconSelect(newTableIcons);
    };
    const DashboardIcons = (index) => {
        const newTableIcons = [...dashboardIconSelect];
        newTableIcons[index] = !newTableIcons[index];
        setDashboardIconSelect(newTableIcons);
    };
    const clearStorage = () => {
        localStorage.clear();
        navigate('/')
    }
    const navigate = useNavigate();
    return (
        <div>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <div className="logo_div">
                            <img className='logo' src={require(`./Image/logo.png`)} alt="" />
                        </div>
                        <Divider orientation="vertical" flexItem className='vertical_divider'></Divider>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={()=>setOpen(!open)}
                            edge="start"
                            sx={{
                                marginRight: 5,
                            }}
                        >
                            <FaBars />
                        </IconButton>
                        <div className="r_main_menu">
                            <nav className='nav_div'>
                                <ul className="r_nav_menu d-flex">
                                    <li>
                                        <Button className='button' onclick={() => { navigate('/Home') }} variant="text">Home</Button>
                                    </li>
                                    <li>
                                        <Button className='button' variant="text">Contact</Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Toolbar>


                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Stack direction="row" spacing={2}>
                    </Stack>
                    <Divider />
                    <DrawerHeader>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <img className='drawer_logo logo' src={require(`./Image/logo.png`)} alt="" />
                            <div className="logo_text">
                                RK Education
                            </div>
                        </Box>
                    </DrawerHeader>
                    <Divider />
                    <DrawerHeader>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <div className="user_text">
                                Ravi Katharotiya
                            </div>
                        </Box>
                    </DrawerHeader>

                    <Divider />
                    <List>
                        <div className=" main_flex">
                            <nav className="">
                                <ul className="main_menu">
                                    <li>
                                        <a href="#" onClick={handleTableOpen}>
                                            <div className="main_div Dashboard_div">
                                                <FaTachometerAlt className=' dashboard_icon' />
                                                <div className="main_text">Dashboard</div>
                                                {tableOpen ? <PiCaretDownBold className='icon' /> : <PiCaretUpBold className='icon' />}
                                            </div>
                                        </a>
                                        {tableOpen === true && (
                                            <ul className="sub_menu">
                                                <li>
                                                    <a href="#">
                                                        <Button variant="outlined" className='sub_button' onClick={() => TableIcons(0)}>
                                                            {tableIconSelect[0] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">Dashboard v1</div>
                                                        </Button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Button variant="outlined" className='sub_button' onClick={() => {
                                                            TableIcons(1)
                                                            navigate('/Home')
                                                        }}>
                                                            {tableIconSelect[1] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">Dashboard v2</div>
                                                        </Button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Button variant="outlined" className='sub_button' onClick={() => TableIcons(2)}>
                                                            {tableIconSelect[2] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">Dashboard v3</div>
                                                        </Button>
                                                    </a>
                                                </li>
                                            </ul>

                                        )}
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="main_div">
                                                <MdDashboardCustomize className=' dashboard_icon' />
                                                <div className="main_text">Widgets</div>
                                                <Badge badgeContent={'NEW'} color="error" className='me-2 icon'></Badge>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => setFormOpen(!formOpen)}>
                                            <div className="main_div">
                                                <BiSolidEdit className='dashboard_icon' />
                                                <div className="main_text">Forms</div>
                                                {formOpen ? <PiCaretDownBold className='icon' /> : <PiCaretUpBold className='icon' />}
                                            </div>
                                        </a>
                                        {formOpen === true && (
                                            <ul className="sub_menu">
                                                <li>
                                                    <a href="#" >
                                                        <Button variant="outlined" className='sub_button' onClick={
                                                            () => {
                                                                FormIcons(0)
                                                                navigate('/forms/generalform')
                                                            }
                                                        }
                                                        >
                                                            {formIcons[0] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">General Elements</div>
                                                        </Button>
                                                    </a>
                                                </li>
                                                <li><a href="#" >
                                                    <Button variant="outlined" className='sub_button' onClick={() => FormIcons(1)}>
                                                        {formIcons[1] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                        <div className="sub_text">Advanced Elements</div>
                                                    </Button>
                                                </a></li>
                                                <li><a href="#" >
                                                    <Button variant="outlined" className='sub_button' onClick={() => FormIcons(2)}>
                                                        {formIcons[2] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                        <div className="sub_text">Editors</div>
                                                    </Button>
                                                </a></li>
                                                <li><a href="#" >
                                                    <Button variant="outlined" className='sub_button' onClick={() => FormIcons(3)}>
                                                        {formIcons[3] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                        <div className="sub_text">Validation</div>
                                                    </Button>
                                                </a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <div href="#" onClick={handleDashboarOpen}>
                                            <div className="main_div">
                                                <TbTableShortcut className='dashboard_icon' />
                                                <div className="main_text">Tables</div>
                                                {dashboardOpen ? <PiCaretDownBold className='icon' /> : <PiCaretUpBold className='icon' />}
                                            </div>
                                        </div>
                                        {dashboardOpen === true && (
                                            <ul className="sub_menu">
                                                <li>
                                                    <div href="#">
                                                        <Button variant="outlined" className='sub_button' onClick={() => {
                                                            DashboardIcons(0)
                                                            navigate('/tables/simpletable')
                                                        }
                                                        }>
                                                            {dashboardIconSelect[0] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">Simple Tables</div>
                                                        </Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Button variant="outlined" className='sub_button' onClick={() => DashboardIcons(1)}>
                                                            {dashboardIconSelect[1] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">Data Tables</div>
                                                        </Button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Button variant="outlined" className='sub_button' onClick={() => DashboardIcons(2)}>
                                                            {dashboardIconSelect[2] ? <FaCircleDot className='green_icon sub_icon' /> : <PiBracketsRound className='sub_icon' />}
                                                            <div className="sub_text">JsGrid</div>
                                                        </Button>
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <ul className='secon_ul'>
                                    <li>
                                        <Button className='log_out_btn' variant="text" onClick={clearStorage} startIcon={<BiLogOutCircle />}>
                                            <div className="btn_text">
                                                Log out
                                            </div>
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </List>
                </Drawer>
            </Box>
        </div >
    );
}