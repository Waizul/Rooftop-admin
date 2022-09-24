import styled from "styled-components";

export const Nav = styled.nav`
	height: 50px;
	font-size: 14px;
	color: ${({darkMode}) => darkMode ? '#999' : '#555'};
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid rgb(231, 228, 228);
	border-color: ${({darkMode}) => darkMode && '#333'};
`;
export const Wrapper = styled.div`
	width: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Search = styled.div`
	padding: 3px;
	display: flex;
	align-items: center;
	border: 0.5px solid lightgray;
	border-color:${({darkMode}) => darkMode && 'gray'};
`;
export const Input = styled.input`
	border: none;
	outline: none;
	background: transparent;
    color: ${({darkMode}) => darkMode && 'lightgray'};
	&::placeholder {
		font-size: 12px;
	}
`;
export const Items = styled.div`
	display: flex;
	align-items: center;
`;
export const Item = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;
	position: relative;
`;
export const Icon = styled.span`
	font-size: 20px;
    cursor: pointer;
`;
export const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
    cursor: pointer;
`;
export const Counter = styled.div`
	width: 15px;
	height: 15px;
	background-color: red;
	border-radius: 50%;
	color: white;
	font-size: 10px;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -5px;
	right: -5px;
`;
