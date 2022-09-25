import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Button = styled.button`
	width: ${({fullWidth}) => fullWidth ? '100%' : 'max-content'};
	background-color: ${({ secondary }) => (secondary ? "white" : "#0071c2")};
	color: ${({ secondary }) => (secondary ? "#0071c2" : "white")};
	font-weight: 500;
	border: none;
	padding: 10px;
	border-radius: 2px;
	cursor: pointer;

	&.transparent {
		background-color: transparent;
		color: white;
		padding: 9px;
		border: 1px solid white;
	}
	&:hover {
		background-color: #00224f;
		color: white;
	}
	&:disabled {
		background-color: #0071c28c;
		cursor: not-allowed;
	}
`;

export const Container = styled.div`
	margin-top: 20px;
	width: 100%;
	max-width: 1024px;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	gap: 20px;
	/* overflow: hidden; */
`;

export const Image = styled.img`
	/* width: ${({ small }) => (small ? "250px" : "300px")}; */
	width: 100%;
	height: ${({ small }) => (small ? "200px" : "250px")};
	object-fit: cover;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

export const SubTitle = styled.h3`
	font-size: 14px;
	font-weight: 300;
	color: #444;
`;
export const Title = styled.h1`
	/* margin: ${({ small }) => (small ? "0px" : "30px")}; */
	width: 1024px;
	font-size: ${({ small }) => (small ? "20px" : "24px")};
	font-weight: ${({ small }) => (small ? "500" : "bold")};
	color: #444;
	text-transform: ${({small}) => small && 'capitalize'};
`;