import React, {useEffect, useState} from 'react';
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
import bg_img from '../images/background_img/hot_bg_img.png';

const ConnectedDevice = props => {
    const [greet, setGreet] = useState();
    
    const findGreet = () => {
        const hours = new Date().getHours()
        if(hours === 0 || hours < 12) return setGreet('Morning');
        if(hours === 12 || hours < 18) return setGreet('Afternoon');
        else return setGreet('Evening');
    }

    useEffect(() => {
        findGreet();
    }, []);
    return (
        <ImageBackground style = {styles.background} source = {bg_img} resizeMode='stretch'>
            <ScrollView style = {styles.container}>
                <Text style = {styles.greeting}>{`Good ${greet}, Mai Dung`}</Text>
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
    container: {
        flex: 1,
        width: '100%',
        height: 1635,
    },   
    greeting: {
        paddingTop: 18,
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        color: '#000000',
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
});

export default ConnectedDevice;