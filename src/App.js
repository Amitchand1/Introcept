import "./App.css";
import FormDetail from "./components/FormDetail.jsx";
import InitialPage from "./components/InitialPage";
import { Route, Switch } from "react-router-dom";
import CounterApp from "./components/CounterApp";
function App() {
  return (
    <>
      <InitialPage />
      <Switch>
        <Route exact path="/" component={CounterApp} />
        <Route path="/backend" component={FormDetail} />
      </Switch>
    </>
  );
}

export default App;
