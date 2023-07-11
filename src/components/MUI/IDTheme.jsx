import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

 const idTheme = createTheme({
    palette: {
        primary: {
            main: grey[900],
            contrastText: '#ffffff',
        },
        //purple
        secondary: {
            main: '#4a2347',
            dark: '#7638B4',
            contrastText: '#ffcc00',
        },
        //red
        error: {
            main: '#045c85',
            contrastText: '#ffcc00',
        },
        //blue
        info: {
            main: '#045c85',
            dark: '#68BDF7',
            contrastText: '#ffffff',

        },
    }
});


export default idTheme;

/*
    switch(numColor)
    {
        case 1:
            //light blue from site, subbed out for a tint with more colour pop
            //colorString = 0x045c85;
            colorString = 0x68BDF7;
            break;
        case 2:
            //purple from site, subbed out for a purple with upped magenta for more colour pop
            //colorString = 0x4a2347;
            colorString = 0x7638B4;
            break;
        case 3:
            //red
            colorString = 0xD21425;
            break;
        default:
            colorString = 0xffffff;
            break;
*/