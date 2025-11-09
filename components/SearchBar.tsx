import { Image, TextInput, View} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
interface Props{
    placeholder:string,
    onPress?:()=>void
}
const SearchBar = ({placeholder, onPress}:Props) => {
  return (
    <View className='flex-row items-center bg-black rounded-full p-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' />
      <TextInput onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={()=>{}}
        className='text-white'
        />
    </View>
  )
}

export default SearchBar