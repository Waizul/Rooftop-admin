import { DataGrid } from "@mui/x-data-grid";

import "./datatable.css";
import { Container } from "./datatableStyle";
import { userRows, userColumns } from "../../datatablesource";
import { StyledLink } from "../../globalStyles";
import useDarkMode from "../../hooks/useDarkMode";
import { useState } from "react";

const Datatable = () => {
	const [data, setData] = useState(userRows)
	const { darkMode } = useDarkMode();
    
	const deleteFunction = id => {
		setData(data.filter(item => item.id !== id))
	}

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
							onClick={() => deleteFunction(params.row.id)}
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
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</Container>
	);
};

export default Datatable;
