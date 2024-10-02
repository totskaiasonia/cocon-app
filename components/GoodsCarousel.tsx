import { Dimensions, StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React, { useRef, useState } from 'react'
// import Carousel from 'react-native-snap-carousel';
import GoodCard from './GoodCard';

const data = [
    { name: 'Image 1', url: 'https://example.com/image1.jpg' },
    { name: 'Image 2', url: 'https://example.com/image2.jpg' },
    { name: 'Image 3', url: 'https://example.com/image3.jpg' },
  ];

const GoodsCarousel = ({goods}: any) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                style={{width: '100%'}}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {goods?.map((item: any, index: number) => (
                    <View
                        key={index}
                        style={[
                        styles.cardContainer,
                        { marginLeft: 10 },
                        { marginRight: 10 },
                        ]}
                    >
                    <GoodCard good={item}/>
                </View>
                ))}
            </ScrollView>
       </View>
    )
}

export default GoodsCarousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardContainer: {
        width: 200,
        //backgroundColor: 'black', // Фиксированная ширина контейнера для изображения
        height: 360, // Высота контейнера
        borderRadius: 10,
      },
})