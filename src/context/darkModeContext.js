import { useContext, useReducer } from "react";
import { createContext } from "react";
import DarkModeReducer from "./darkModeReducer";

const initial_state = {
	darkMode: false,
};

export const DarkModeContext = createContext(initial_state);

const DarkModeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(DarkModeReducer, initial_state);
	return (
		<DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export default DarkModeProvider;
