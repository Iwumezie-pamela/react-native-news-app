import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

type Props = {}

const Home = (props: Props) => {
    const router = useRouter()
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>Welcome Page</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)')}>
                <Text>Go to Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home