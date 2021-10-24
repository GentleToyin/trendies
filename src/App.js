import './App.css';

import { Route } from 'react-router';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1> This is HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
