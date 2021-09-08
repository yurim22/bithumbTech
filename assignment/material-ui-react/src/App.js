import { Route } from 'react-router';
import './App.css';
import { SignIn, SignUp, Dashboard, Pricing, Album } from './components';

function App() {
  return (
    <div>
      <Route path="/dashboard" component={Dashboard} exact/>
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/price" component={Pricing} />
      <Route path="/album" component={Album} />
    </div>
  );
}

export default App;
