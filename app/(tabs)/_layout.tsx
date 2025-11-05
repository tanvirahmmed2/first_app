
import React from 'react'
import { Tabs } from 'expo-router'
import { Image, } from 'react-native'
import { icons } from '@/constants/icons'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (


                        <Image source={icons.home} />

                    ),
                    tabBarLabel:'Home'

                }}
            />

            <Tabs.Screen
                name='saved'
                options={{
                    title: 'saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (


                        <Image source={icons.save} />

                    ),
                    tabBarLabel:'Saved'
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (


                        <Image source={icons.person} />

                    ),
                    tabBarLabel:'Profile'
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (


                        <Image source={icons.search} />

                    ),
                    tabBarLabel:'Search'
                }}
            />

        </Tabs>
    )
}

export default _layout