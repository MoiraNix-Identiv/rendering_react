import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import theme from './Theme';
import { ThemeProvider } from '@emotion/react';



export default function BasicTable() {
	const [rows, setRows] = useState([]);
	const fetchUsers = async () => {
		await axios
		.get('https://dummyjson.com/users')
		.then((res) => setRows(res.data.users));
		};

	useEffect(() => {
		fetchUsers();
	}, []);

	

	const columns = 
	[
		{ field: "id", headerName: "ID", width: 150 },
		{ field: "firstName", headerName: "First Name", width: 150 },
		{ field: "lastName", headerName: "Last Name", width: 150 },
		{ field: "email", headerName: "Email", width: 150 },
		{ field: "phone", headerName: "Phone", width: 150 },
		{ field: item()?["bank.cardNumber", headerName: "Badge Number", width: 150 },
		{ field: "bank.cardExpire", headerName: "Credentials Expire", width: 150 },
		{ field: "address.Address", headerName: "Address", width: 150 },
		
	];

	return (	
	<>
		{rows.length === 0 ? (
			<>
				<div style={{ position: 'absolute', left: '50%', top: '50%' }}>
					<CircularProgress />
				</div>
			</>)
		: 
		(<ThemeProvider theme = {theme}>
			<DataGrid 
				rows = {rows}
				columns = {columns}
				autoHeight
				initialState={{
					sorting: {
						sortModel: [{field: "", sort: "asc"}],
					},
				}}
				checkboxSelection={true}
				disableSelectionOnClick
				/>;
		</ThemeProvider>)}
		</>
	);
}

