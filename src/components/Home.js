import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/main.scss'
import Header from './Header'
const Index = () => (

<div className="wrapper">
<Header/>


</div>

    );

class Home extends React.Component {
    render() {
      return (
    <Router>
        <Route path="/" exact component={Index} />
    </Router>
      );
    }
  }


export default Home
