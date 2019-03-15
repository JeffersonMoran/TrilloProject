import React, { Component } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hotel from "./layouts/Hotel";

class App extends Component {
    state = {
        navigationData : [
            { name: 'Hotel', icon: 'home', alt: 'Hotel', active: true },
            { name: 'Passagens', icon: 'aircraft-take-off', alt: 'Passagens',  active: false },
            { name: 'Aluguéis', icon: 'key', alt: 'Aluguéis', active: false },
            { name: 'Passeios', icon: 'map', alt: 'Passeios', active: false },
        ]
    }


    render() {
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <Navigation navigationData={this.state.navigationData} />
                    <Hotel />
                </div>
            </div>
        );
    }
}

export default App;
