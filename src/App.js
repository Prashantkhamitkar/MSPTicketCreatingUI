import React from "react";
import Routes from "./Routes/index";

// Import Scss
import "./assets/scss/theme.scss";

// Fake Backend
import fakeBackend from "./helpers/AuthType/fakeBackend";
import { MsalProvider } from "@azure/msal-react";

// Activating fake backend
fakeBackend();

// Firebase
// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// }

// init firebase backend
// initFirebaseBackend(firebaseConfig)

// <MsalProvider instance={instance}>
//         <WrappedView/>
//    </MsalProvider>

function App({ instance }) {
  return (
    <React.Fragment>
      <MsalProvider instance={instance}>
        <Routes />
      </MsalProvider>
    </React.Fragment>
  );
}

export default App;
