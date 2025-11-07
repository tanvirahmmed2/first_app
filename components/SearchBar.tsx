import { Image, TextInput, View} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const SearchBar = () => {
  return (
    <View className='flex-row items-center bg-black rounded-full p-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' />
      <TextInput onPress={()=>{}}
        placeholder='search'
        value='search'
        onChangeText={()=>{}}
        />
    </View>
  )
}

export default SearchBar