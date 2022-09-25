import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Container, Wrapper } from "./globalStyles";
import Sidebar from "./components/sidebar/Sidebar";
import { userInputs, productInputs as propertyInputs } from "./formSource";
import useDarkMode from "./hooks/useDarkMode";
import useAuth from "./hooks/useAuth";

function App() {
	const { darkMode } = useDarkMode();

	const ProtectedRoute = ({ children }) => {
		const { user } = useAuth();

		if (!user) {
			return <Navigate to='/login' />;
		}

		return children;
	};

	return (
		<div className={darkMode ? "dark" : "app"}>
			<BrowserRouter>
				{/* <Container> */}
				{/* <Sidebar /> */}
				{/* <Wrapper> */}
				<Routes>
					<Route path='/'>
						<Route path='login' element={<Login />} />
						<Route
							index
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>

						<Route path='users'>
							<Route
								index
								element={
									<ProtectedRoute>
										<List />
									</ProtectedRoute>
								}
							/>
							<Route
								path=':userId'
								element={
									<ProtectedRoute>
										<Single />
									</ProtectedRoute>
								}
							/>
							<Route
								path='new'
								element={
									<ProtectedRoute>
										<New inputs={userInputs} title='Add New User' />
									</ProtectedRoute>
								}
							/>
						</Route>

						<Route path='properties'>
							<Route
								index
								element={
									<ProtectedRoute>
										<List />
									</ProtectedRoute>
								}
							/>
							<Route path=':propertyId' element={<Single />} />
							<Route
								path='new'
								element={
									<ProtectedRoute>
										<New inputs={propertyInputs} title='Add New Property' />
									</ProtectedRoute>
								}
							/>
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
