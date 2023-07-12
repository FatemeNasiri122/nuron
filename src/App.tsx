import React from "react";
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes";
import { store } from "./app/store";
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <React.Suspense>
          <Routes />
        </React.Suspense>  
      </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
