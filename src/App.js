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
        ],
        hotelData: [
            { image: 'hotel-1', alt: 'Foto 1 do Hotel'},
            { image: 'hotel-2', alt: 'Foto 2 do Hotel'},
            { image: 'hotel-3', alt: 'Foto 3 do Hotel'},
        ]
    }

    handleNavigationClick = (event) => {
        const navigationData = this.state.navigationData.map((item) => {
            item.name === event.target.id ? item.active = true : item.active = false;
            return item;
        })
        this.setState({ navigationData });
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <Navigation
                        handleClick={this.handleNavigationClick}
                        navigationData={this.state.navigationData} />
                    <Hotel hotelData={this.state.hotelData}/>
                </div>
            </div>
        );
    }
}

export default App;
