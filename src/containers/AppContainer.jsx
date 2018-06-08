import React from "react";
import { Provider } from "react-redux";

import AppLayout from "../layouts/AppLayout";
import store from "../store";

// wrap rest of the App in a provider
const AppContainer = () => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

export default AppContainer;
