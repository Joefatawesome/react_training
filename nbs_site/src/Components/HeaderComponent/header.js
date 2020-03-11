import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

import nbs_icon from '../../images_icons/nbs_icon.ico';

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
        /*this.setImgRef = element => {
            img  = element;
        };*/

        canvas = null;
        this.setCanvasRef = element => {
            canvas = element;
        };

    }

    componentDidMount() {
        ctx = canvas.getContext("2d");
        img.onload = () => {
            ctx.drawImage(img, 0, -75);
            //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth);
            //sx/sy is the starting point of the cropping square
            //sWidth/sHeight is the width and height of the cropping square
            //dx/dy is the starting point of the drawn image
            //dWidth/dHeight is the width and height of the displayed imaged
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
