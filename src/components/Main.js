import Boxes from "./Boxes";
import { Switch, Route } from "react-router-dom";
import Forms from "./Forms";
const Home = () => {
  return (
    <div>
      <h1>This is the HOME page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is the About page</h1>
    </div>
  );
};
const Contacts = () => {
  return (
    <div>
      <h1>This is the Contacts page</h1>
    </div>
  );
};
const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/boxes" component={Boxes} />
        <Route path="/forms" component={Forms} />
      </Switch>
    </main>
  );
};

export default Main;
