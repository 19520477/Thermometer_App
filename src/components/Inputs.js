import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import { Input } from "react-native-elements";

class Inputs extends Component {
    state = {isFocused: false};
    onFocusChange = () => {
        this.setState({isFocused: true})
    }
    render() {
        return(
            <View style = {[styles.container, {borderColor: this.state.isFocused? '#283ACF' : '#c2d1d9'}]}>
                <Input
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        marginVertical: 10,
        borderWidth: 2,
    },
    inputContainer: {
        borderBottomWidth: 0,
    },
    inputText: {
        color: '#000',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '80%',
        height: 20,
        top: 50% - 18/2,

        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    }
});

export default Inputs;