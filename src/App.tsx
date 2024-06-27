import { RouterProvider } from "react-router-dom";
import mainRouter from "routes";
import GlobalStyle from "style/globalStyle";
import { Provider } from 'react-redux';
import store from 'store';
import { NftProvider } from "NftContext";

function App() {
  return (
    <>
      <NftProvider>
        <GlobalStyle />
        <Provider store={store}>
          <RouterProvider router={mainRouter} />
        </Provider>
      </NftProvider>
    </>
  );
}

export default App;