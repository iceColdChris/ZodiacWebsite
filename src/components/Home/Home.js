import React from 'react';
import ImageGallery from "react-image-gallery";
import "../../index.css";
import images from './images';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images
        };
    }

    render() {

        console.log(this.state);

        return (
            <div className="App">
                <header className="App-header">
                    <ImageGallery
                        items={this.state.images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showThumbnails={false}
                    />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;