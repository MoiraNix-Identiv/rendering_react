import * as React from 'react';
import MuiAppBar from '@mui/material/MuiAppBar';
import MuiToolbar from '@mui/material/MuiToolbar';
import MuiButton from '@mui/material/Button';
import StyledButton from '../buttons/StyledButton';
import Container from '@mui/material/Container';
import {theme} from './Theme';
import { ThemeProvider } from '@emotion/react';
//import logo from '../../../public/favicon.ico'

const pages = ['Home', 'Testing', 'Employees', 'PACS'];

function ResponsiveAppBar() {
	function RouteTabClick(page) {
		if (page === 'Home') {
			return '/';
		} else if (page === 'Testing') {
			return '/Testing';
		} else if (page === 'Employees') {
			return '/Employees';
		} else if (page === 'PACS') {
			return '/PACS';
		}
	}
	const logo = '../../../public/favicon.ico';

	return (
			<MuiAppBar position='static' sx={{color : "secondary.dark"}} title = {logo}>
				<Container maxWidth='xl'>
					<MuiToolbar disableGutters>
						{pages.map(page => (
						<MuiButton key={page} text={page} variant = 'outlined' component='a' href={RouteTabClick(page)}>
							{page}
						</MuiButton>
						))}

					</MuiToolbar>
				</Container>

			</MuiAppBar>
	);
}
export default ResponsiveAppBar;
