import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	background-color: ${({darkMode}) => darkMode ? '#111' : 'white'};
	border-right:${({darkMode}) => darkMode ? '0.5px solid #333' : '0.5px solid rgb(230, 227, 227)'} ;
	min-height: 100vh;
`;
export const Hr = styled.hr`
	height: 0;
	border-color: ${({darkMode}) => darkMode ? '#333' : '0.5px solid rgb(230, 227, 227)'};
	margin: 0;
	padding: 0;
`;
export const Top = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Logo = styled.span`
	font-size: 20px;
	font-weight: bold;
	color: ${({darkMode}) => darkMode ? '#999' : '#6439ff'};
`;
export const Center = styled.div`
	padding-left: 10px;
`;
export const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;
export const ListItem = styled.li`
	display: flex;
	align-items: center;
	padding: 2.5px;
	cursor: pointer;

	&:hover {
		background-color: ${({darkMode}) => darkMode ? '#333' : '#ece8ff' } ;
	}
`;
export const Title = styled.h4`
	font-size: 10px;
	font-weight: bold;
	color: #999;
	margin-top: 15px;
	margin-bottom: 5px;
`;
export const Icon = styled.span`
	font-size: 16px;
	color: ${({darkMode}) => darkMode ? '#999' : '#7451f8' };
`;
export const Span = styled.span`
	font-size: 13px;
	font-weight: 600;
	color: #888;
	margin-left: 10px;
`;
export const Bottom = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
`;
export const ColorOption = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 5px;
	margin: 5px;
	border: 1px solid #7451f8;
	cursor: pointer;

	&:nth-child(1) {
		background-color: white;
	}
	&:nth-child(2) {
		background-color: #333;
	}
	&:nth-child(3) {
		background-color: darkblue;
	}
`;
