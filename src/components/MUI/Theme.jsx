import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
    root: {
        display: "flex",
        },
    palette: {
        primary: {
            main: '#444444',
            dark: '#000000',
            light: '#636363',
            contrastText: '#ffffff',
        },
        //purple
        secondary: {
            main: '#4a2347',
            dark: '#381C36',
            light: '#7A3E75',
            contrastText: '#ffcc00',
        },
        //red
        error: {
            main: '#ce202f',
            dark: '#A11B27',
            light: '#D64551',
            contrastText: '#0B5394',
        },
        //blue
        info: {
            main: '#045c85',
            dark: '#033A54',
            light: '#68BDF7',
            contrastText: '#E88824',

        },
    },
    typography: {
        fontFamily: ["Times New Roman", "serif"].join(","),
        fontSize: 14,
        h1: {
          fontFamily: ["Cinzel", "sans-serif"].join(","),
          fontSize: 36,
        },
        h2: {
            fontFamily: "Lato, Arial",
            fontSize: 20,
            fontWeight: 700,
            paddingBottom: 20,
          },
      },

      overrides: {
        MuiButton:  {

        cursor: 'Pointer',

           variants: 
           [
                {       
                    props: { variant: "gradient", color: "grey" },
                    style: {
                    background: `linear-gradient(45deg, ${'#000000'} 35%, ${'#444444'} 90%)`,
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
        DataGrid:  {
           /*variants: 
           [
                {   */    
                    props: { variant: "primary"},
                    style: {
                    background: '#444444',
                    color: "#ffffff",
                    m: 2,
                    boxShadow: 2,
                    border: 2,
                    borderColor: '#68BDF7',
                    '& .MuiDataGrid-cell:hover': {
                        color: '#045c85',
                      },
                    }
                /*},
                

        ],*/
         
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#662E9B", 
            },
        },
    }
      
});


export default theme;