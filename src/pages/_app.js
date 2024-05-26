import "@/styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalComponentsProvider } from "@/states/globalComponents";
import { WebsocketProvider } from "@/states/websocket";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { SnackbarProvider  } from "notistack";
import Script from "next/script";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "black",
          textTransform: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/*<Script*/}
      {/*  async*/}
      {/*  src="https://www.googletagmanager.com/gtag/js?id=G-7EMKTRW285"*/}
      {/*/>*/}
      {/*<Script*/}
      {/*  id="google-analytics"*/}
      {/*  strategy="afterInteractive"*/}
      {/*  dangerouslySetInnerHTML={{*/}
      {/*    __html: `*/}
      {/*    window.dataLayer = window.dataLayer || [];*/}
      {/*    function gtag(){dataLayer.push(arguments);}*/}
      {/*    gtag('js', new Date());*/}
      {/*    gtag('config', 'G-7EMKTRW285', {*/}
      {/*      page_path: window.location.pathname,*/}
      {/*    });*/}
      {/*  `,*/}
      {/*  }}*/}
      {/*/>*/}

      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={10}
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <WebsocketProvider>
            <GlobalComponentsProvider>
              <ReCaptchaProvider reCaptchaKey="6LdDZucpAAAAALH6XAErX6kSTrGGAmgO3fmihtjB">
                <Component {...pageProps} />
              </ReCaptchaProvider>
            </GlobalComponentsProvider>
          </WebsocketProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}
