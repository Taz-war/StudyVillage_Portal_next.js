import "../styles/globals.css";
import { BuildTheme } from "../assets/global/Theme-variable";
// import { CssBaseline, ThemeProvider } from "@mui/material";
import FullLayout from "../layouts/full-layout/FullLayout";
import BlankLayout from "../layouts/blank-layout/BlankLayout";
import { CacheProvider } from "@emotion/react";
import {
    useSession,
    signIn,
    signOut,
    getSession,
    Provider as AuthProvider,
} from "next-auth/client";
import Head from "next/head";
import loader from "../public/loader.gif";
import Layout from "../components/Layout/Layout";
import { nanoid } from "nanoid";
import "../assets/css/all.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
// CSS For Agents
import "../assets/agents/css/responsive.css";
import "../assets/agents/css/style.css";
import "../assets/mentors/style.css";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import "../styles/globals.css";

import createEmotionCache from "../src/createEmotionCache";


//Smartmates Development
import "keen-slider/keen-slider.min.css"
import "../components/ss-task-monitor/SsTaskMonitor.css"
import "../components/pdf-slider/PdfSlider.css"
import "../components/PDF_Carousel/PDFCarousel.css"
import "@madzadev/image-slider/dist/index.css";
import "./agents/profile.css"
import "./agents/resources.css"
import "./agents/outline.css"
import "./agents/index.css"
import "../components/HomeStudent/SingleUserProfile.css"

import "../components/Shared/Navbar/Navbar-Agent.css"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Router } from "next/router";
import Image from "next/image";
import StateProvider from '../pages/Context/StateProvider'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// some comment

function MyApp({
    Component,
    pageProps,
    session,
    emotionCache = clientSideEmotionCache,
}) {

    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      const start = () => {
        setLoading(true);
      };
      const end = () => {
        setLoading(false);
      };
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
    }, []);

    const customizer = {
        direction: "ltr",
        theme: "PURPLE_THEME",
        activeMode: "light",
    };
    const theme = BuildTheme(customizer);

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <script
                    src='https://code.jquery.com/jquery-1.12.4.min.js'
                    integrity='sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ'
                    crossorigin='anonymous'></script>
                <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
                    crossorigin='anonymous'
                />
                <script
                    src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
                    integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
                    crossorigin='anonymous'></script>
                <script
                    src='https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js'
                    integrity='sha512-9CWGXFSJ+/X0LWzSRCZFsOPhSfm6jbnL+Mpqo0o8Ke2SYr8rCTqb4/wGm+9n13HtDE1NQpAEOrMecDZw4FXQGg=='
                    crossorigin='anonymous'
                    referrerpolicy='no-referrer'></script>
            </Head>
            <StateProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <BlankLayout>
                        <AuthProvider session={session}>
                            {/* <Layout customizer={customizer}> */}
                            {
                                loading ?
                                    // <img src={loader} alt="loader gif" />
                                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                                        <Image width={200} height={200} src={loader} alt="loader gif" />
                                    </Box>
                                :
                                <Component {...pageProps} customizer={customizer} />
                            }
                            
                            {/* </Layout> */}
                        </AuthProvider>
                    </BlankLayout>
                </ThemeProvider>
            </CacheProvider>
            </StateProvider>
        </>
    );
}

export default MyApp;
