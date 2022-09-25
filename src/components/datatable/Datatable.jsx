import { DataGrid } from "@mui/x-data-grid";

import "./datatable.css";
import { Container } from "./datatableStyle";
import { userRows, userColumns } from "../../datatablesource";
import { StyledLink } from "../../globalStyles";
import useDarkMode from "../../hooks/useDarkMode";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Datatable = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];

	const [list, setList] = useState([]);
	const { darkMode } = useDarkMode();
	const { data, loading, error } = useFetch(
		"http://localhost:8800/api/v1/users"
	);
	// console.log(data, error)
	useEffect(() => {
		setList(data);
	}, [data]);

	const handleDelete = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:8800/api/v1/${path}/${id}`);
			window.alert(res.data)
			setList(list.filter((item) => item._id !== id));
		} catch (err) {}
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className='cellAction'>
						<StyledLink to='/users/1234'>
							<div className={darkMode ? "viewButton dark" : "viewButton"}>
								View
							</div>
						</StyledLink>
						<div
							className={darkMode ? "deleteButton dark" : "deleteButton"}
							onClick={() => handleDelete(params.row._id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<Container>
			<div className='datatableTitle'>
				Add New User
				<StyledLink to='/users/new' className='link'>
					Add New
				</StyledLink>
			</div>

			<DataGrid
				style={{ color: darkMode && "gray", border: darkMode && "none" }}
				rows={list}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
				getRowId={(row) => row._id}
			/>
		</Container>
	);
};

export default Datatable;
