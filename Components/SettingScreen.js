import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';

export default class SettingScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}