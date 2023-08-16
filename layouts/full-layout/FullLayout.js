import React, { useState } from "react";
// import {
//     experimentalStyled,
//     useMediaQuery,
//     Container,
//     Box,
// } from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { TopbarHeight } from "../../assets/global/Theme-variable";
import { Box, Container, experimentalStyled, useMediaQuery } from "@mui/material";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",

    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("lg")]: {
        paddingTop: TopbarHeight,
    },
    [theme.breakpoints.down("lg")]: {
        paddingTop: "64px",
    },
}));

const FullLayout = ({ customizer, children }) => {
    //
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    return (
        <MainWrapper
            className={customizer.activeMode === "dark" ? "darkbg" : ""}>
            <Header
                sx={{
                    paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
                    backgroundColor:
                        customizer.activeMode === "dark"
                            ? "#282C34"
                            : "#ffffff",
                }}
                toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                toggleMobileSidebar={() => setMobileSidebarOpen(true)}
                customizer={customizer}
            />

            <Sidebar
                isSidebardir={customizer.activeDir === "ltr" ? "left" : "right"}
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
                customizer={customizer}
            />

            <PageWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        paddingTop: "20px",
                        paddingLeft:
                            isSidebarOpen && lgUp ? "280px!important" : "",
                    }}>
                    <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                        {children}
                    </Box>
                    <Footer customizer={customizer} />
                </Container>
            </PageWrapper>
        </MainWrapper>
    );
};

export default FullLayout;
