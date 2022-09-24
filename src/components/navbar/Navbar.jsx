import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import {
	Counter,
	Icon,
	Image,
	Input,
	Item,
	Items,
	Nav,
	Search,
	Wrapper,
} from "./navbarStyle";
import useDarkMode from '../../hooks/useDarkMode'

const Navbar = () => {
	const {darkMode, dispatch} = useDarkMode()
	return (
		<Nav darkMode={darkMode}>
			<Wrapper>
				<Search darkMode={darkMode}>
					<Input darkMode={darkMode}placeholder='Search...' />
					<Icon style={{fontSize:14}}>
						<SearchOutlinedIcon />
					</Icon>
				</Search>

				<Items>
					<Item>
						<Icon>
							<LanguageOutlinedIcon />
						</Icon>
					</Item>
					<Item>
						<Icon onClick={()=> dispatch({type: 'TOGGLE'})}>
							<DarkModeOutlinedIcon />
						</Icon>
					</Item>
					<Item>
						<Icon>
							<FullscreenExitOutlinedIcon />
						</Icon>
					</Item>
					<Item>
						<Icon>
							<NotificationsNoneOutlinedIcon />
						</Icon>
						<Counter>1</Counter>
					</Item>
					<Item>
						<Icon>
							<ChatBubbleOutlineOutlinedIcon />
						</Icon>
						<Counter>2</Counter>
					</Item>
					<Item>
						<Icon>
							<ListOutlinedIcon />
						</Icon>
					</Item>
					<Item>
						<Image
							src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							alt=''
						/>
					</Item>
				</Items>
			</Wrapper>
		</Nav>
	);
};

export default Navbar;
