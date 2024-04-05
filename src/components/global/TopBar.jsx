import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const TopBar = () => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box position= "absolute" top={10} right={10}>
            <Box display = "flex">
                <IconButton onClick = {colorMode.toggleColorMode} size="large">
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
                </IconButton>
                <IconButton size="large" >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton size="large">
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
};

export default TopBar;