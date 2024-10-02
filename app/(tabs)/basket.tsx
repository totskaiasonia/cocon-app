import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BacketGoodCard from '@/components/basket/BacketGoodCard'

const BasketIcon = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.headerContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{width: 98, height: 71}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: "row", gap: 6, alignItems: "center"}}>
            <Text style={{fontSize: 40, fontFamily: "InterBold"}}>Basket</Text>
          </View>
          <View style={{marginVertical: 20}}>
            <BacketGoodCard/>
          </View>
          <TouchableOpacity style={{width: '100%', backgroundColor: "#773D94", alignItems: "center", justifyContent: 'center', height: 54, borderRadius: 10}}>
              <Text style={{color: 'white', fontSize: 20, fontFamily: "InterBold"}}>Purchase</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BasketIcon

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