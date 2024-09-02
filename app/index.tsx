import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

type Props = {}

const Home = (props: Props) => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>Welcome Page</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)')}>
                <Text>Go to Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})