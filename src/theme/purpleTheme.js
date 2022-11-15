import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main:'#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main:red.A400
        }
    }

})