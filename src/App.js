import React, { Component } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hotel from "./layouts/Hotel";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    <Navigation />
                    <Hotel />
                </div>
            </div>
        );
    }
}

export default App;
