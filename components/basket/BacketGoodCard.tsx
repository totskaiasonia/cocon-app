import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { noveltyGoods } from '@/mock/noveltyGoods'
import DownIcon from '@/assets/svg/DownIcon'
import RemoveIcon from '@/assets/svg/RemoveIcon'

const BacketGoodCard = () => {
  return (
    <View style={{elevation: 10, backgroundColor: 'white', borderRadius: 10, height: 230, paddingHorizontal: 15, paddingVertical: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Image
            source={noveltyGoods[0].imageSrc}
            style={{width: 107, objectFit: 'contain', height: 145}}
        />
        <View style={{marginLeft: 10, marginTop: 5}}>
            <Text style={{fontSize: 15, fontFamily: 'InterBold', color: '#00000099'}}>SWIMWEAR</Text>
            <Text style={{height: 20, width: 200, overflow: 'hidden', fontSize: 15, color: '#000000BA', fontFamily: 'InterRegular', marginVertical: 22}}>{noveltyGoods[0].name}</Text>
            <Text style={{fontSize: 24, fontFamily: "InterBold"}}>{noveltyGoods[0].price} UAH</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginTop: 'auto', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'space-between', width: "31%", height: 45, backgroundColor: "#773D94", borderRadius: 10, alignItems: 'center'}}>
            <Text style={{color: "white", fontSize: 16, fontFamily: "InterRegular"}}>-</Text>
            <Text style={{color: "white", fontSize: 16, fontFamily: "InterRegular"}}>1</Text>
            <Text style={{color: "white", fontSize: 16, fontFamily: "InterRegular"}}>+</Text>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'space-between', width: "31%", height: 45, backgroundColor: "#773D94", borderRadius: 10, alignItems: 'center'}}>
            <Text style={{color: "white", fontSize: 14, fontFamily: "InterRegular"}}>Size</Text>
            <DownIcon color={"white"}/>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'space-between', width: "31%", height: 45, backgroundColor: "#773D94", borderRadius: 10, alignItems: 'center'}}>
            <Text style={{color: "white", fontSize: 14, fontFamily: "InterRegular"}}>Color</Text>
            <DownIcon color={"white"}/>
        </View>
      </View>
      <TouchableOpacity style={{position: 'absolute', top: 11, right: 20}}>
        <RemoveIcon/>
      </TouchableOpacity>
    </View>
  )
}

export default BacketGoodCard

const styles = StyleSheet.create({})