import React from 'react';
import "antd/dist/antd.css";
import HomePage from './Components/HomePage/HomePage'
import Grid from './Components/Grid/Grid'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/grid" component={Grid} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
