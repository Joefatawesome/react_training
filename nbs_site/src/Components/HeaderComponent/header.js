import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

import nbs_icon from '../../imagesIcons/rectangles_icon_final.png';
import $darkGrey from '../../Assets/scss/config.scss'

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
            //TODO: trying to position drop down before working on making the button work
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
        ctx.font = "24px Sans-Serif";
        ctx.fillStyle = $darkGrey;
        ctx.fillText("Norwalk Business Service", 100, 52);
    }
    //TODO: Modernize here.
    render() {
        return (
            <header>
                <canvas ref={this.setCanvasRef} width={900} height={90}/>
                <div className="dropdown" style={{float: "right"}}>
                    <button onClick="myFunction()" className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
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
                    </div>
                </div>
            </header>
        );
    }

/*    /!* When the user clicks on the button,
    toggle between hiding and showing the dropdown content *!/
    myFunction() =>{
        document.getElementById("myDropdown").classList.toggle("show");
    }

// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }*/

}
/*<ul>
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
</ul>*/

export default Header;
