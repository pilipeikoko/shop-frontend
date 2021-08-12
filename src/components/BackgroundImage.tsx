import React, {Component} from 'react';
import {View, Image} from 'react-native';

class BackgroundImage extends Component<any, any> {

    constructor(props) {
        super(props);
        this.setState({
            background: props.img
        })
    }

    render() {
        return (
            <View>
                {this.props.children}
                <img
                    src={`data:image/jpeg;base64,${this.props.img}`}
                />
            </View>
        );
    }
}

export default BackgroundImage;