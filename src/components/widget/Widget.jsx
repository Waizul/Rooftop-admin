import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import {
	Container,
	Counter,
	Icon,
	Left,
	Link,
	Percentage,
	Right,
	Title,
} from "./widgetStyle";

const Widget = ({ type }) => {
	let data;

	//temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
				icon: (
					<PersonOutlinedIcon
						className='icon'
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all orders",
				icon: (
					<ShoppingCartOutlinedIcon
						className='icon'
						style={{
							backgroundColor: "rgba(218, 165, 32, 0.2)",
							color: "goldenrod",
						}}
					/>
				),
			};
			break;
		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				icon: (
					<MonetizationOnOutlinedIcon
						className='icon'
						style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
					/>
				),
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className='icon'
						style={{
							backgroundColor: "rgba(128, 0, 128, 0.2)",
							color: "purple",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<Container>
			<Left>
				<Title>{data.title}</Title>
				<Counter>
					{data.isMoney && "$"} {amount}
				</Counter>
				<Link to=''>{data.link}</Link>
			</Left>

			<Right>
				<Percentage className="positive">
					<KeyboardArrowUpIcon />
					{diff} %
				</Percentage>
				<Icon>{data.icon}</Icon>
			</Right>
		</Container>
	);
};

export default Widget;
