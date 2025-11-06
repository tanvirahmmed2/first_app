
import React from 'react'
import { Tabs } from 'expo-router'
import { Image, } from 'react-native'
import { icons } from '@/constants/icons'

const _layout = () => {
    return (
        <Tabs
            screenOptions={{

                tabBarItemStyle: {
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    
                    
                },
                tabBarStyle: {
                    backgroundColor: 'black',
                    margin: 20,
                    borderRadius: 50,
                    marginBottom: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',

                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (


                        <Image source={icons.home}/>

                    ),
                    tabBarLabel: 'Home'

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
                    tabBarLabel: 'Saved'
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
                    tabBarLabel: 'Profile'
                }}
            />
            <Tabs.Screen
                name='cart'
                options={{
                    title: 'cart',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (


                        <Image source={icons.star} />

                    ),
                    tabBarLabel: 'Cart'
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
                    tabBarLabel: 'Search'
                }}
            />

        </Tabs>
    )
}

export default _layout