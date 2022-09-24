import styled from "styled-components";
import { StyledLink } from "../../globalStyles";

export const Container = styled.div`
	height: 100px;
	flex: 1;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	-webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
	box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
	border-radius: 10px;
`;
export const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Title = styled.span`
	font-weight: bold;
	font-size: 14px;
	color: rgb(160, 160, 160);
`;
export const Counter = styled.span`
	font-size: 28px;
	font-weight: 300;
`;
export const Link = styled(StyledLink)`
	width: max-content;
	font-size: 12px;
	border-bottom: 1px solid gray;
`;
export const Right = styled(Left)``;
export const Percentage = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;

	&.positive {
		color: green;
	}
	&.negative {
		color: red;
	}
`;
export const Icon = styled.span`
	font-size: 18px;
	padding: 5px;
	border-radius: 5px;
	align-self: flex-end;
`;
