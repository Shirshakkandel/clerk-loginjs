import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/global/NavBar";
import DashboardTab from "./components/Dashboard/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./components/global/TopBar"

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Dashboard">
          <Navbar isSidebar={isSidebar}/>
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/dashboard" element={<DashboardTab />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboard;