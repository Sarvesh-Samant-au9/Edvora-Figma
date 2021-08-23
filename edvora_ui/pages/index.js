import { Flex } from "@chakra-ui/layout";
import MainBar from "../Components/MainBar";
import Head from "next/head";
import SideBar from "../Components/SideBar";
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Flex
        minH="100vh"
        width="98vw"
        justifyContent="space-between"
        bgColor="#fff"
        // overflowX="none"
      >
        <MainBar />
        <SideBar />
      </Flex>
    </div>
  );
}
