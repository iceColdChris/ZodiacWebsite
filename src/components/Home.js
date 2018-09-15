import React from 'react';

const Home = () => {

    const images = [
        {
            original: "http://lorempixel.com/1000/600/nature/1/",
            thumbnail: "http://lorempixel.com/250/150/nature/1/"
        },
        {
            original: "http://lorempixel.com/1000/600/nature/2/",
            thumbnail: "http://lorempixel.com/250/150/nature/2/"
        },
        {
            original: "http://lorempixel.com/1000/600/nature/3/",
            thumbnail: "http://lorempixel.com/250/150/nature/3/"
        }
    ];

    const state = {
        images: [
            // put array of image objects in here with image and description to use below
            {
                //image one
                image: require('../assets/aquarius-1.svg'),
                textDescription: "zodiac sign one"
            },
            {
                // image 2
                image: "",
                textDescription: "zodiac sign two"
            },
            {
                // image 3
                image: "",
                textDescription: "zodiac sign three"
            }
        ]
    };

    return (
        <div className="App">
            <header className="App-header">
                <ImageGallery items={images} />
                <img src={this.state.images[0]} />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
};

export default Home;