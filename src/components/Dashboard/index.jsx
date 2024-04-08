import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Calendar from "../Calendar/calendar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
      <Box display={"initial"}>
        <Calendar />
        {/* <div style={{ background: "red", width: "500px", height: "500px" }}>
          Hello
        </div> */}
      </Box>
    </Box>
  );
};
export default Dashboard;
