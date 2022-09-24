import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Container, Wrapper } from "./globalStyles";
import Sidebar from "./components/sidebar/Sidebar";
import {userInputs, productInputs} from './formSource'
import useDarkMode from "./hooks/useDarkMode";


function App() {
	const {darkMode} = useDarkMode()

	return (
		<div className={darkMode ? 'dark': 'app'}>
			<BrowserRouter>
				{/* <Container> */}
					{/* <Sidebar /> */}
					{/* <Wrapper> */}
						<Routes>
							<Route path='/'>
								<Route index element={<Home />} />
								<Route path='login' element={<Login />} />

								<Route path='users'>
									<Route index element={<List />} />
									<Route path=':userId' element={<Single />} />
									<Route path='new' element={<New inputs={userInputs} title='Add New User' />} />
								</Route>

								<Route path='products'>
									<Route index element={<List />} />
									<Route path=':productId' element={<Single />} />
									<Route path='new' element={<New inputs={productInputs} title='Add New Product' />} />
								</Route>
							</Route>
						</Routes>
					{/* </Wrapper> */}
				{/* </Container> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
