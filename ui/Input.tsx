import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = (props: any) => {
  return (
    <TextInput style={styles.textInput} cursorColor='#73843D' placeholderTextColor="black" {...props}></TextInput>
  )
}

export default Input

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderColor: '#B5B5B5',
        alignSelf: 'center',
        paddingHorizontal: 50,
        borderRadius: 10,
        fontSize: 15
      }
})