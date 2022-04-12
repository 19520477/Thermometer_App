import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import login_bg_img from '../images/background_img/login_background.png';

const Detail = props => {
    return (
        <ImageBackground style = {styles.background} source = {login_bg_img} resizeMode='stretch'>
            <ScrollView>
                <Text style = {styles.title}>LOGIN</Text>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    background: {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
    },
    title:{
        position: 'absolute',
        width: 170,
        height: 71,
        left: 73,
        top: 185,
        fontSize: 30,
        //justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        //alignItems: 'center',
        color: '#FBFBFB',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu',
        lineHeight: 34,
        textTransform: 'uppercase',
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
});

export default Detail;