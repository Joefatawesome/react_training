import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

import nbs_icon from '../../imagesIcons/rectangles_icon_final.png';

const iconWidth = 255;
const iconHeight = 110;
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
        }
    }

    render() {
        return (
            <header>
                <canvas ref={this.setCanvasRef} width={iconWidth} height={iconHeight}/>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Products'>Products</Link>
                        </li>
                        <li className="last">
                            <Link to='/'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
