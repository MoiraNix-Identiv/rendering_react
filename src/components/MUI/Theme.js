import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
 const theme = createTheme({
    palette: {
        primary: {
        main: grey[900],
        },
        //purple
        secondary: {
        main: 0x4a2347,
        dark: 0x7638B4,
        },
        //red
        error: {
        main: 0x045c85
        },
        //blue
        info: {
        main: 0x045c85,
        dark: 0x68BDF7,
        },
    }
});


export default theme;

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