import { Drawer, Stack, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
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
      {props.children}
    </Stack>
  );
}

interface PropsType {
  children: React.ReactNode;
}

export default CreateRequestLayout;
