import React, {Component} from "react";
import {ProductTag} from "./ProductTag";

import "./css/site.css"
import NavigationMenu from "./NavigationMenu";

export class HomeConstructor extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

    }

    refreshList() {
        let string = process.env.REACT_APP_API + 'home/get';
        fetch(string)
            .then(response => response.json())
            .then(data => {
                this.setState({products: data})
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const {products} = this.state;
        return <div>
            <NavigationMenu/>
            <div className="fl-r">
                {
                    products.map(product =>
                        <ProductTag name={product.Name} id={product.id}
                                    price={product.Price} category={product.Category}
                                    rating={product.Rating} sellers={product.Sellers}
                                    img={product.Img}
                        />
                    )
                }
            </div>
        </div>;
    }
}