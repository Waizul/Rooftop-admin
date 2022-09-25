import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import useDarkMode from '../../hooks/useDarkMode'
import { StyledLink } from "../../globalStyles";
import {
	Bottom,
	Center,
	ColorOption,
	ColorOptions,
	Container,
	Hr,
	Icon,
	List,
	ListItem,
	Logo,
	Span,
	Title,
	Top,
} from "./sidebarStyle";

const dashboard_list = [
	{
		listItem: "Users",
		link: "/users",
		icon: <PersonOutlineIcon />,
	},
	{
		listItem: "Properties",
		link: "/properties",
		icon: <StoreIcon />,
	},
	{
		listItem: "Orders",
		link: "/orders",
		icon: <CreditCardIcon />,
	},
	{
		listItem: "Delivery",
		link: "/delivery",
		icon: <LocalShippingIcon />,
	},
];

const useful_list = [
	{ listItem: "Statistics", link: "/stats", icon: <InsertChartIcon /> },
	{
		listItem: "Notifications",
		link: "/notifications",
		icon: <NotificationsNoneIcon />,
	},
];

const service_list = [
	{
		listItem: "System Health",
		link: "",
		icon: <SettingsSystemDaydreamOutlinedIcon />,
	},
	{
		listItem: "Logs",
		link: "",
		icon: <PsychologyOutlinedIcon />,
	},
	{
		listItem: "Settings",
		link: "/settings",
		icon: <SettingsApplicationsIcon />,
	},
];

const user_items = [
	{
		listItem: "Profile",
		link: "",
		icon: <AccountCircleOutlinedIcon />,
	},
	{
		listItem: "Logout",
		link: "",
		icon: <ExitToAppIcon />,
	},
];
const Sidebar = () => {
	const {darkMode, dispatch} = useDarkMode()
	console.log(darkMode)
	return (
		<Container darkMode={darkMode}>
			<Top>
				<StyledLink to='/'>
					<Logo darkMode={darkMode}>Rooftop.com</Logo>
				</StyledLink>
			</Top>
			<Hr darkMode={darkMode} />
			<Center>
				<List>
					<Title>MAIN</Title>
					<StyledLink to='/'>
						<ListItem darkMode={darkMode}>
							<Icon darkMode={darkMode}>
								<DashboardIcon />
							</Icon>

							<Span>Dashboard</Span>
						</ListItem>
					</StyledLink>

					<Title>LISTS</Title>
					{dashboard_list.map((item) => (
						<StyledLink to={item.link} key={item.listItem}>
							<ListItem darkMode={darkMode}>
								<Icon darkMode={darkMode}>{item.icon}</Icon>
								<Span>{item.listItem}</Span>
							</ListItem>
						</StyledLink>
					))}

					<Title>USEFUL</Title>
					{useful_list.map((item) => (
						<StyledLink to={item.link} key={item.listItem}>
							<ListItem darkMode={darkMode}>
								<Icon darkMode={darkMode}>{item.icon}</Icon>
								<Span>{item.listItem}</Span>
							</ListItem>
						</StyledLink>
					))}

					<Title>SERVICE</Title>
					{service_list.map((item) => (
						<StyledLink to={item.link} key={item.listItem}>
							<ListItem darkMode={darkMode}>
								<Icon darkMode={darkMode}>{item.icon}</Icon>
								<Span>{item.listItem}</Span>
							</ListItem>
						</StyledLink>
					))}

					<Title>USER</Title>
					{user_items.map((item) => (
						<StyledLink to={item.link} key={item.listItem}>
							<ListItem darkMode={darkMode}>
								<Icon darkMode={darkMode}>{item.icon}</Icon>
								<Span>{item.listItem}</Span>
							</ListItem>
						</StyledLink>
					))}
				</List>
			</Center>

			<Bottom>
				<ColorOption onClick={() => dispatch({type:'LIGHT'})} />
				<ColorOption onClick={() => dispatch({type:'DARK'})} />
			</Bottom>
		</Container>
	);
};

export default Sidebar;
