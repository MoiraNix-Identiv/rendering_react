import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import myTheme from './Theme';
import { ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';



export default function BasicTable() {
	const theme = useTheme();
	const [rows, setRows, bankJson] = useState([]);

	const fetchUsers = async () => {
		//vs code lies here about being able to remove this await
		 await axios.get('https://dummyjson.com/users')
		.then(
			(res) => setRows(res.data.users))
			 .catch
			 {
				//this calls at the beginning of the data fetch...?
				//alert(['error fetching data']);
			 };
		 //bankJson = res.data.users.bank; 
		};

	useEffect(() => {
		fetchUsers();
	}, []);

	

	let columns = 
	[
		{ field: "id", headerName: "ID", width: 150 },
		{ field: "firstName", headerName: "First Name", width: 150 },
		{ field: "lastName", headerName: "Last Name", width: 150 },
		{ field: "email", headerName: "Email", width: 150 },
		{ field: "phone", headerName: "Phone", width: 150 },
		{ field: "bankJson.cardNumber", headerName: "Badge Number", width: 150 },
		{ field: "bankJson.cardExpire", headerName: "Credentials Expire", width: 150 },
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
		(<ThemeProvider theme = {myTheme}>
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

