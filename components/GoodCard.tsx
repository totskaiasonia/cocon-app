import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BuyIcon from '@/assets/svg/BuyIcon'
import FavoriteIcon from '@/assets/svg/good/FavoriteIcon'
import { router } from 'expo-router'

const GoodCard = (props: any) => {

    const handleGoodPress = () => {
        router.push({
            pathname: "/good",
            params: { data: JSON.stringify(props.good) },
          });
    }
  return (
    <View style={[styles.goodCard, props.style ? {...props.style} : {}]}>
        <Image
            source={props.good.imageSrc}
            style={styles.goodImage}
        />
        <TouchableOpacity onPress={() => handleGoodPress()}>  
            <Text style={{textAlign: 'center', fontSize: 13, fontFamily: "InterRegular", marginTop: 6, height: 34, overflow: 'hidden'}}>{props.good.name}</Text>
        </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 20, fontFamily: "InterBold", marginTop: 10}}>{props.good.price} UAH</Text>
      <TouchableOpacity style={{width: '80%', marginTop: 10, backgroundColor: "#EE3C52", flexDirection: 'row', alignSelf: 'center', height: 32, borderRadius: 6, alignItems: 'center', justifyContent: 'center', gap: 5}}>
        <BuyIcon/>
        <Text style={{fontFamily: "InterBold", color: "white", fontSize: 13}}>Buy</Text>
      </TouchableOpacity>
        <View style={{position: "absolute", top: 10, left: 10, gap: 3}}>
            {
                props.good.new &&
                <View style={{width: 55, backgroundColor: "#44B80E", height: 25, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: "white", fontSize: 13, fontFamily: "InterBold", letterSpacing: 3}}>NEW</Text>
                </View>
            }
            {
                props.good.hit &&
                <View style={{width: 45, backgroundColor: "black", height: 25, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: "white", fontSize: 13, fontFamily: "InterBold", letterSpacing: 3}}>HIT</Text>
                </View>
            }
        </View>
        <View style={{position: "absolute", top: 4, right: 9, gap: 3, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', borderRadius: 20, width: 31, height: 31}}>
            <FavoriteIcon/>
        </View>
    </View>
  )
}

export default GoodCard

const styles = StyleSheet.create({
    goodCard: {
        width: 200,
        height: 343,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 10,
        padding: 11,
        backgroundColor: "#fff",
        fontFamily: "InterRegular",
    },
    goodImage: {
        width: "100%",
        height: 198,
        objectFit: 'contain'
    }
})