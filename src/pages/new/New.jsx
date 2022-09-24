import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { Container, Wrapper } from "../../globalStyles";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {
	Bottom,
	Button,
	Form,
	FormInput,
	Image,
	Input,
	Label,
	Left,
	Right,
	Title,
	Top,
} from "./newStyle";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	const { darkMode } = useDarkMode();

	return (
		<Container>
			<Sidebar />
			<Wrapper>
				<Navbar />

				<Top>
					<Title>{title}</Title>
				</Top>

				<Bottom>
					<Left>
						<Image
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=''
						/>
					</Left>

					<Right>
						<Form>
							<FormInput>
								<Label htmlFor='file'>
									Image: <DriveFolderUploadOutlinedIcon className='icon' />
								</Label>
								<Input
									style={{ display: "none" }}
									type='file'
									id='file'
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</FormInput>

							{inputs.map((input) => (
								<FormInput key={input.id}>
									<Label>{input.label}</Label>
									<Input
										darkMode={darkMode}
										type={input.type}
										placeholder={input.placeholder}
									/>
								</FormInput>
							))}
							<Button>Send</Button>
						</Form>
					</Right>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default New;
