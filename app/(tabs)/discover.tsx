import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Discover = () => {
    return (
        <View style={styles.container}>
            <Text>Discover Screen</Text>
        </View>
    )
}

export default Discover
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})