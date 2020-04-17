import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

import nbs_icon from '../../imagesIcons/rectangles_icon_final.png';

let img;
let canvas;
let ctx;


class Header extends Component {
    constructor(props) {
        super(props);

        img = new Image();
        img.src = nbs_icon;

        canvas = null;
        this.setCanvasRef = element => {
            canvas = element;
        };

    }

    componentDidMount() {
        ctx = canvas.getContext("2d");
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 1563, 879, -45, -22, 250, 150);
            //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            //sx/sy is the starting point of the cropping square
            //sWidth/sHeight is the width and height of the cropping square
            //dx/dy is the starting point of the drawn image
            //dWidth/dHeight is the width and height of the displayed imaged
            //ctx.drawImage(img, 0, 0, MaxLength, MaxHeight, left margin, top margin, 50, 50);
        };
        ctx.font = "48px Sans-Serif";
        ctx.fillStyle = "white";
        ctx.fillText("Norwalk Business Service", 100, 65);
    }

    render() {
        return (
            <header>
                <canvas ref={this.setCanvasRef} width={900} height={90}/>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/News'>News</Link>
                        </li>
                        <li>
                            <Link to={'/Forms'}>Client Forms</Link>
                        </li>
                        <li>
                            <Link to={'/About'}>About Us</Link>
                        </li>
                        <li className="last">
                            <Link to='/Contact'>Contact Info</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
