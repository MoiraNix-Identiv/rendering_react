import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
 const theme = createTheme({
    palette: {
        primary: {
            main: grey[900],
            //contrastText: '#ffffff',
        },
        //purple
        secondary: {
            main: '#4a2347',
            dark: '#7638B4',
            //contrastText: '#ffcc00',
        },
        //red
        error: {
            main: '#045c85',
           // contrastText: '#ffcc00',
        },
        //blue
        info: {
            main: '#045c85',
            dark: '#68BDF7',
            //contrastText: '#ffffff',

        },
    },
    typography: {
        fontFamily: ["Times New Roman", "serif"].join(","),
        fontSize: 14,
        h1: {
          fontFamily: ["Cinzel", "sans-serif"].join(","),
          fontSize: 36,
        }
      },

      components: {
        MuiButton: 
        {
           variants: 
           [
                {       
                    props: { variant: "gradient", color: "grey" },
                    style: {
                    background: `linear-gradient(45deg, ${grey[900]} 35%, ${grey[500]} 90%)`,
                    color: "#fff"
                    }
                },
                {
                        props: { variant: "gradient", color: "purple" },
                        style: {
                            background: `linear-gradient(45deg, ${'#7638B4'} 35%, ${'#4a2347'} 90%)`,
                            color: "#fff"
                    }
                },
                {
                        props: { variant: "gradient", color: "info" },
                        style: {
                            background: `linear-gradient(45deg, ${'#68BDF7'} 35%, ${'#045c85'} 90%)`,
                            color: "#fff"
                    }
                }   

        ],
         
        },
        DataGrid: 
        {
           variants: 
           [
                {       
                    props: { variant: "primary"},
                    style: {
                    background: `${grey[900]}`,
                    color: "#ffffff",
                    m: 2,
                    boxShadow: 2,
                    border: 2,
                    borderColor: '#68BDF7',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'secondary.main',
                      },
                    }
                },
                {
                        props: { variant: "gradient", color: "purple" },
                        style: {
                            background: `linear-gradient(45deg, ${'#7638B4'} 35%, ${'#4a2347'} 90%)`,
                            color: "#ffffff"
                    }
                },
                {
                        props: { variant: "gradient", color: "info" },
                        style: {
                            background: `linear-gradient(45deg, ${'#68BDF7'} 35%, ${'#045c85'} 90%)`,
                            color: "#ffffff"
                    }
                }   

        ],
         
        }
    }
      
});


export default theme;