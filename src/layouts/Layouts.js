import Head from "next/head";
import { Fragment, useContext, useEffect } from "react";
import ColorContext from "../context/colorContext";
import NavContext from "../context/navContext";
import useWindowSize from "../useWindowSize";
import BackMobile from "./BackMobile";
import Header from "./Header";
import Switcher from "./Switcher";

const Layouts = ({ children, bodyCls, extraPage, light }) => {
  useEffect(() => {
    document.querySelector("body").classList = bodyCls
      ? bodyCls
      : "dark fullscreendark";
  }, []);
  const { changeMobileMenu, mobileMenu } = useContext(NavContext);
  const { color } = useContext(ColorContext);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1025) {
      changeMobileMenu(false);
    }
  }, [width]);
  return (
    <Fragment>
      <Head>
        <link
          type="text/css"
          media="all"
          href={`css/skins/${color}.css`}
          rel="stylesheet"
        />{" "}
        <title>Dario Ernesto Roca - Web Developer</title>
        <link rel="icon" href="img/favicon.ico" />

        <meta property="og:title" content="Dario Ernesto Roca - Web Developer" />
        <meta property="og:description" content="I'm a polyglot Full Stack Web developer from Colombia, passionate by developing Websites and Web applications, using both front-end and back-end technologies." />
        <meta property="og:image" content="https://darioernestoroca.com/img/dark-about.jpg" />
        <meta property="og:url" content="https://darioernestoroca.com/" />
        <meta name="twitter:card" content="summary_large_image" />


      </Head>
      <div className="page animated" style={{ animationDuration: "500ms" }}>
        <Switcher />
        {/* Header Starts */}
        {!extraPage && <Header light={light} />}
        {/* Main Content Starts */}{" "}
        {extraPage ? (
          children
        ) : (
          <main
            id="main"
            className={`${width < 1025 ? (mobileMenu ? "open" : "") : ""}`}
          >
            {/* Back To Home Starts [ONLY MOBILE] */}
            <BackMobile
              changeMobileMenu={changeMobileMenu}
              mobileMenu={mobileMenu}
            />
            {children}
          </main>
        )}
      </div>{" "}
    </Fragment>
  );
};
export default Layouts;
