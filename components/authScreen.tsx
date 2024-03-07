import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function AuthScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🥳 Welcome to Drink Activity!🎉</Text>
            <Text style={styles.subtitle}>Enjoy your party 👏</Text>
            <Button
                title="Login"
                color="#841584"
                onPress={() => {
                    // Add your login logic here
                    // After login, navigate to the main app
                    navigation.navigate('MainApp');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    subtitle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});