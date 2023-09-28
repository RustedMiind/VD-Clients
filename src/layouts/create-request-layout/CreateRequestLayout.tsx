import { Drawer, Stack, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import CustomizedSteppers from "./components/Stepper";
import CreateRequest from "./pages/CreateRequest";
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function CreateRequestLayout(props: PropsType) {
  const [isSidebarOpen, setIsDrawerOpen] = useState(false);
  const closeSidebarHandler = () => {
    setIsDrawerOpen(false);
  };
  const openSidebarHandler = () => {
    setIsDrawerOpen(true);
  };
  return (
    <Stack>
      <Navbar openSidebar={openSidebarHandler} />
      <Sidebar
        isOpen={isSidebarOpen}
        close={closeSidebarHandler}
        open={openSidebarHandler}
      />
      <DrawerHeader />
      <Stack sx={{ p: { xs: 4, xl: "8" } }}>
        <Routes>
          <Route path="/request/create" element={<CreateRequest />} />
          <Route path="*" element={<Navigate to={"auth/service"} />} />
        </Routes>
      </Stack>
    </Stack>
  );
}

interface PropsType {
  children: React.ReactNode;
}

export default CreateRequestLayout;
