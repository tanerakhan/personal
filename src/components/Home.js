import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/main.scss'
import Header from './Header'

const Index = () => (
    <div className="wrapper">
        <Header/>
    </div>
    );

export default function Home(){
      return (
        <Router>
            <Route path="/" exact component={Index} />
        </Router>
      );
  }
