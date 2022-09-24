import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import {
	Amount,
	Bottom,
	Circularbar,
	Container,
	Description,
	Item,
	ItemAmount,
	ItemResult,
	ItemTitle,
	Summary,
	Title,
	Top,
} from "./featuredStyle";

function Featured() {
	return (
		<Container>
			<Top>
				<Title>Total Revenue</Title>
				<MoreVertIcon fontSize='small' />
			</Top>

			<Bottom>
				<Circularbar>
					<CircularProgressbar value={70} text='70%' strokeWidth={5} />
				</Circularbar>
				<Title>Total sales made today</Title>
				<Amount>$420</Amount>
				<Description>
					Previous transactions processing. Last payments may not be included.
				</Description>

				<Summary>
					<Item>
						<ItemTitle>Target</ItemTitle>
						<ItemResult className='negative'>
							<KeyboardArrowDownIcon fontSize='small' />
							<ItemAmount>$12.4k</ItemAmount>
						</ItemResult>
					</Item>
					<Item>
						<ItemTitle>Last Week</ItemTitle>
						<ItemResult className='positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<ItemAmount>$12.4k</ItemAmount>
						</ItemResult>
					</Item>
					<Item>
						<ItemTitle>Last Month</ItemTitle>
						<ItemResult className='positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<ItemAmount>$12.4k</ItemAmount>
						</ItemResult>
					</Item>
				</Summary>
			</Bottom>
		</Container>
	);
}

export default Featured;
