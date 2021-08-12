import React, {Component} from "react";
import {Product} from "./components/Product";
import "./css/text_below_picture.css";
import BackgroundImage from "./components/BackgroundImage";

export class ProductTag extends Component<any, Product> {

    constructor(props: Product) {
        super(props);

        this.state = {
            img: props.img,
            id: props.id,
            name: props.name,
            sellers: props.sellers,
            category: props.category,
            rating: props.rating,
            price: props.price
        };

        this.edit = this.edit.bind(this);
    }

    edit(e) {

    }

    render() {

        return (
            <div className="background">
                <div className="image">
                    <div className="imagehover">

                        <BackgroundImage img={this.state.img}>

                            <div className="imageinfo">
                                <table>
                                    <tr>
                                        <td>Name</td>
                                        <td>{this.state.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{this.state.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating</td>
                                        <td>{this.state.rating}</td>
                                    </tr>
                                </table>
                            </div>
                        </BackgroundImage>
                    </div>
                    <div className="align-content-md-center tcl-hero-parallax__heading">
                        {this.state.name}
                    </div>
                </div>

            </div>);


    }
}

