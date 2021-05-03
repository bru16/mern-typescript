import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VideoForm from "./components/Videos/VideoForm";
import VideosList from "./components/Videos/VideosList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideosList} />
          <Route path="/new" component={VideoForm} />
          <Route path="/update/:id" component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
