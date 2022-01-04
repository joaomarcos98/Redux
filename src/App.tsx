import { Provider } from "react-redux";
import { Catalog } from "./componnets/Catalog";
import store from "./store";



function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
