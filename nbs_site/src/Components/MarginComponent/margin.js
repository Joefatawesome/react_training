import React, {Component} from 'react';

import $darkGrey from '../../Assets/scss/config.scss'

let canvas;
let ctx;

class Margin extends Component {
    constructor(props) {
        super(props);

        canvas = null;
        this.setCanvasRef = element => {
            canvas = element;
        };
    }

    componentDidMount() {
        ctx = canvas.getContext("2d");
        ctx.fillStyle = $darkGrey;
    };

    render() {

        return (
            <header>
                <canvas ref={this.setCanvasRef} width={100} height={1080}/>

                <div className="leftMargin" style={{float: "right"}}>
                    <div id="myLeftMargin" className="myLeftMargin-content">

                    </div>
                </div>
            </header>
        );
    }

}

export default Margin;
