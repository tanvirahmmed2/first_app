import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const SearchBar = () => {
  return (
    <View>
       <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', paddingBottom:10}}>
              <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
            </ScrollView>
      
    </View>
  )
}

export default SearchBar