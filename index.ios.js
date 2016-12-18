/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import SSH from 'react-native-ssh';
const config = {
    user: 'root',
    host: '192.168.1.1',
    password: 'notconnected'
};
window.testSSH = function (command = 'cat /etc/banner') {
    console.log(command);
    console.log(config);
    SSH.execute(config, command).then(
        result => {
            console.log(result)
        },
        error => console.log('Error:', error)
    );
};

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class oconnect extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome i to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('oconnect', () => oconnect);
