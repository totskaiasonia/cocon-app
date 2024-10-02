import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeartIcon from '@/assets/svg/home/HeartIcon'
import SearchIcon from '@/assets/svg/home/SearchIcon'
import Input from '@/ui/Input'
import ArrowsIcon from '@/assets/svg/catalog/ArrowsIcon'
import { goods } from '@/mock/popularGoods'
import GoodCard from '@/components/GoodCard'
import { noveltyGoods } from '@/mock/noveltyGoods'

const CatalogScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.headerContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{width: 98, height: 71}}
          />
            <TouchableOpacity
              style={[
                styles.headerButton,
                { right: 22 },
              ]}
              onPress={() => {}}
            >
              <HeartIcon/>
            </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: "row", gap: 6, alignItems: "center"}}>
            <Text style={{fontSize: 40, fontFamily: "InterBold"}}>Catalog</Text>
            <Text style={{top: 6, color: "#000000A0", fontSize: 16}}>(291 products)</Text>
          </View>
          <View style={{marginTop: 15}}>
            <View style={{position: 'absolute', top: 14, left: 15}}>
              <SearchIcon/>
            </View>
            <Input placeholder="Search"/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 22}}>
            <TouchableOpacity style={{width: '49%', backgroundColor: "#773D94", alignItems: "center", justifyContent: 'center', height: 54, borderRadius: 10}}>
              <Text style={{color: 'white', fontSize: 20, fontFamily: "InterBold"}}>Filtration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '49%', backgroundColor: "#773D94", alignItems: "center", justifyContent: 'center', height: 54, borderRadius: 10}}>
              <Text style={{color: 'white', fontSize: 20, fontFamily: "InterBold"}}>Categories</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23}}>
            <Text style={{fontSize: 15, fontFamily: 'InterRegular'}}>Sorting:</Text>
            <View style={{flexDirection: 'row', gap: 16}}>
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                <ArrowsIcon/>
                <Text style={{fontSize: 15, fontFamily: 'InterRegular'}}>Price</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                <ArrowsIcon/>
                <Text style={{fontSize: 15, fontFamily: 'InterRegular'}}>Popularity</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 14, marginTop: 27}}>
              <Text style={{fontSize: 16, fontFamily: 'InterRegular', color: "#6A2A62", textDecorationColor: "#6A2A62", textDecorationLine: 'underline'}}>New</Text>
              <Text style={{fontSize: 16, fontFamily: 'InterRegular'}}>Hit</Text>
              <Text style={{fontSize: 16, fontFamily: 'InterRegular'}}>Sale</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 10, marginTop: 20, marginBottom: 100}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 20}}>
              {
                goods.map((item: any, index: number) => (
                  <GoodCard good={item} style={{width: '47%'}}/>
                ))
              }
              {
                noveltyGoods.map((item: any, index: number) => (
                  <GoodCard good={item} style={{width: '47%'}}/>
                ))
              }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CatalogScreen

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "InterBold",
  },
  headerTitleOutlined: {
    color: "#73843D",
  },
  headerButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    borderRadius: 50,
  },
})