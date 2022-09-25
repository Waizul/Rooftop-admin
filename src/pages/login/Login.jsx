import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
	Container,
	Error,
	Input,
	InputContainer,
	Label,
	NoAccount,
	Wrapper,
} from "./loginStyle";
import useAuth from "../../hooks/useAuth";
import { Button } from "../../styles/commonStyles";

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useAuth();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("http://localhost:8800/api/v1/auth/login", credentials);

			if (res.data.isAdmin) {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

				navigate("/");
			} else {
				dispatch({
					type: "LOGIN_FAILURE",
					payload: { message: "You are not allowed!" },
				});
			}
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return (
		<Container>
			<Wrapper>
				<InputContainer>
					<Label>Username:</Label>
					<Input
						required
						type='text'
						id='username'
						placeholder='Please enter your username.'
						onChange={handleChange}
					/>
				</InputContainer>
				<InputContainer>
					<Label>Password:</Label>
					<Input
						required
						type='password'
						placeholder='Please enter your password.'
						id='password'
						onChange={handleChange}
					/>
				</InputContainer>
				{/* <NoAccount>
					Don't have an account ?{" "}
					<b onClick={() => navigate("/register")}>Create One</b>
				</NoAccount> */}
				<Button
					fullWidth
					type='submit'
					disabled={loading}
					onClick={handleSubmit}
				>
					Login
				</Button>
				{error && <Error>{error.message}</Error>}
			</Wrapper>
		</Container>
	);
};

export default Login;
