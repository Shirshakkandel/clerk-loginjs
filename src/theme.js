import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//colors
export const tokens = (mode) => ( {
    ...(mode === 'dark'
        ?{
            black: {
                100: "#d0d0d0",
                200: "#a0a0a0",
                300: "#717171",
                400: "#414141",
                500: "#121212",
                600: "#0e0e0e",
                700: "#0b0b0b",
                800: "#070707",
                900: "#040404"
            },
            
            blue: {
                100: "#dae0e6",
                200: "#b6c1cd",
                300: "#91a3b3",
                400: "#6d849a",
                500: "#486581",
                600: "#3a5167",
                700: "#2b3d4d",
                800: "#1d2834",
                900: "#0e141a"
            },

            white: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333"
            },
        } : {
            black: {
                100: "#d0d0d0",
                200: "#a0a0a0",
                300: "#717171",
                400: "#414141",
                500: "#121212",
                600: "#0e0e0e",
                700: "#0b0b0b",
                800: "#070707",
                900: "#040404"
            },

            blue: {
                100: "#eef3f5",
                200: "#dde7eb",
                300: "#cddbe1",
                400: "#bccfd7",
                500: "#abc3cd",
                600: "#899ca4",
                700: "#67757b",
                800: "#444e52",
                900: "#222729"
            },
            white: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333"
            },
        }),
})

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                background: {
                    main: colors.black[500],
                },
                primary: {
                    main: colors.blue[500],
                },
                text: { 
                    main: colors.white[500],
                    dark: colors.white[800],
                }
            } : {
                background: {
                    main: colors.white[800],
                },
                primary: {
                    main: colors.blue[500],
                },
                text: {
                    main: colors.black[500],
                    dark: colors.black[800],
                },
            }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
              fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
              fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
              fontSize: 14,
            },
          },
    }
}


export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });

export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };


