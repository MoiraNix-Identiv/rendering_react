import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MuiButton from '@mui/material/Button';
import StyledButton from '../buttons/StyledButton';
import Container from '@mui/material/Container';
import theme from './Theme';
import { ThemeProvider } from '@emotion/react';

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

	return (
		<ThemeProvider theme = {theme}>
			<AppBar position='static' color='primary'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						{pages.map(page => (
							<ThemeProvider theme = {theme}>
								<MuiButton key={page} text={page} variant='gradient' color='grey' component='a' href={RouteTabClick(page)}>
									{page}
								</MuiButton>
							</ThemeProvider>
						))}
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
}
export default ResponsiveAppBar;
