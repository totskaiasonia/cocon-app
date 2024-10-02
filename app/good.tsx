import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '@/assets/svg/BackIcon';
import ShareIcon from '@/assets/svg/ShareIcon';
import InStoreIcon from '@/assets/svg/InStoreIcon';
import DownIcon from '@/assets/svg/DownIcon';
import BuyIcon from '@/assets/svg/good/BuyIcon';
import HeartIcon from '@/assets/svg/good/HeartIcon';
import DownArrow from '@/assets/svg/good/DownArrow';
import RightArrow from '@/assets/svg/home/RightArrow';
import GoodsCarousel from '@/components/GoodsCarousel';
import { goods } from '@/mock/popularGoods';
import { noveltyGoods } from '@/mock/noveltyGoods';

const GoodScreen = () => {

    const { data } = useLocalSearchParams();
    const parsedData = JSON.parse(data as string);
  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
        <ScrollView style={{height: "100%"}}>
            <View style={styles.headerContainer}>
                <Image
                source={require("@/assets/images/logo.png")}
                style={{width: 98, height: 71}}
                />
                <TouchableOpacity
                    style={[
                        styles.headerButton,
                        { left: 22 },
                    ]}
                    onPress={() => router.back()}
                >
                    <BackIcon/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.headerButton,
                        { right: 22 },
                    ]}
                    onPress={() => {}}
                >
                    <ShareIcon/>
                </TouchableOpacity>
            </View>
            <Image
                source={parsedData.imageSrc}
                style={{alignSelf: 'center'}}
            />
            <Text style={{textAlign: 'center', fontSize: 25, fontFamily: "InterRegular", width: 320, alignSelf: "center", marginTop: 20}}>{parsedData.name}</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center', alignItems: 'center', gap: 7, marginTop: 18}}>
                <Text style={{fontSize: 15, fontFamily: "InterRegular", color: "#A1A1A1"}}>Maaji</Text>
                <View style={{width: 6, height: 6, backgroundColor: "#773D94", borderRadius: 10}}></View>
                <Text style={{fontSize: 15, fontFamily: "InterRegular", color: "#A1A1A1"}}>Пляжний одяг</Text>
                <View style={{width: 6, height: 6, backgroundColor: "#773D94", borderRadius: 10}}></View>
                <Text style={{fontSize: 15, fontFamily: "InterRegular", color: "#A1A1A1"}}>Сукні</Text>
                <InStoreIcon/>
                <Text style={{fontSize: 15, fontFamily: "InterRegular", color: "#A1A1A1"}}>В наявності</Text>
            </View>
            <Text style={{textAlign: 'center', fontSize: 25, fontFamily: "InterRegular", marginTop: 15}}>{parsedData.price} UAH</Text>
            <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                <View style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'space-between', width: "30%", height: 58, borderWidth: 1, borderColor: "#C3C3C3", backgroundColor: "#F8F8F8", borderRadius: 10, alignItems: 'center'}}>
                    <Text style={{color: "#A1A1A1", fontSize: 20, fontFamily: "InterRegular"}}>M</Text>
                    <DownIcon/>
                </View>
                <View style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'space-between', width: "68%", height: 58, borderWidth: 1, borderColor: "#C3C3C3", backgroundColor: "#F8F8F8", borderRadius: 10, alignItems: 'center'}}>
                    <Text style={{color: "#A1A1A1", fontSize: 20, fontFamily: "InterRegular"}}>Принт</Text>
                    <DownIcon/>
                </View>
            </View>
            <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <View style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'space-between', width: "30%", height: 58, borderWidth: 1, borderColor: "#C3C3C3", backgroundColor: "#F8F8F8", borderRadius: 10, alignItems: 'center'}}>
                    <Text style={{color: "#A1A1A1", fontSize: 20, fontFamily: "InterRegular"}}>-</Text>
                    <Text style={{color: "#A1A1A1", fontSize: 20, fontFamily: "InterRegular"}}>1</Text>
                    <Text style={{color: "#773D94", fontSize: 20, fontFamily: "InterRegular"}}>+</Text>
                </View>
                <TouchableOpacity style={{flexDirection: 'row', paddingHorizontal: 14, justifyContent: 'center', gap: 11, width: "68%", height: 58, backgroundColor: "#EE3C52", alignSelf: 'center', borderRadius: 10, alignItems: 'center'}}>
                    <BuyIcon/>
                    <Text style={{fontFamily: "InterBold", color: "white", fontSize: 24}}>Buy</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: 'center', marginTop: 25, gap: 10}}>
                <HeartIcon/>
                <Text>В обране</Text>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 20, gap: 8}}>
                <View style={{width: '100%', flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#190C20", height: 63, borderRadius: 10}}>
                    <Text style={{color: "white", fontSize: 15, fontFamily: "InterRegular"}}>Delivery</Text>
                    <DownArrow/>
                </View>
                <View style={{width: '100%', flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#190C20", height: 63, borderRadius: 10}}>
                    <Text style={{color: "white", fontSize: 15, fontFamily: "InterRegular"}}>Payment</Text>
                    <DownArrow/>
                </View>
                <View style={{width: '100%', flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#190C20", height: 63, borderRadius: 10}}>
                    <Text style={{color: "white", fontSize: 15, fontFamily: "InterRegular"}}>Guarantee</Text>
                    <DownArrow/>
                </View>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 40}}>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>Description</Text>
                <View style={{width: "100%", height: 6, backgroundColor: "#D9C7DF", borderRadius: 40, marginTop: 30}}></View>
                <Text style={{fontSize: 18, fontFamily: "InterRegular", marginTop: 24}}>
                Long sleeves long dress <Text style={{color: "#773D94"}}>Laine</Text> from the <Text style={{color: "#773D94"}}>Scarlet Tulip</Text> from the Colombian brand <Text style={{color: "#773D94"}}>Maaji</Text>. Be incomparable in a long dress from Maaji! Emphasize your elegance and attractiveness.
                </Text>
                <Text style={{color: '#773D94', fontSize: 20, fontFamily: "InterRegular", marginVertical: 25}}>Features:</Text>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>- Long sleeves long dress;</Text>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>- V-shaped neckline;</Text>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>- Open back;</Text>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>- Two long slits in the front;</Text>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>- The dress is made of fabric with a tulip print.</Text>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 30}}>
                <Text style={{fontSize: 20, fontFamily: "InterRegular", marginTop: 20}}>Specifications</Text>
                <View style={{width: "100%", height: 6, backgroundColor: "#D9C7DF", borderRadius: 40, marginTop: 30, marginBottom: 30}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 56, justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: "#F8F8F8"}}>
                    <Text style={{width: '50%'}}>Brand</Text>
                    <Text style={{width: '50%'}}>Maaji</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 56, justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <Text style={{width: '50%'}}>Producing country</Text>
                    <Text style={{width: '50%'}}>Colombia</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 56, justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: "#F8F8F8"}}>
                    <Text style={{width: '50%'}}>Length</Text>
                    <Text style={{width: '50%'}}>Long</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 56, justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <Text style={{width: '50%'}}>Sleeve length</Text>
                    <Text style={{width: '50%'}}>Long Sleeves</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 56, justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: "#F8F8F8"}}>
                    <Text style={{width: '50%'}}>Color</Text>
                    <Text style={{width: '50%'}}>print</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 40}}>
                <Text style={{fontSize: 20, fontFamily: "InterRegular"}}>Reviews</Text>
                <View style={{width: "100%", height: 6, backgroundColor: "#D9C7DF", borderRadius: 40, marginTop: 30}}></View>
                <Text style={{fontSize: 18, fontFamily: "InterRegular", marginTop: 30}}>No reviews have been added yet. Be the first to do so!</Text>
            </View>
            <TouchableOpacity style={{width: 270, height: 54, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: "#773D94", marginTop: 30, borderRadius: 10,}}>
                <Text style={{color: "white", fontFamily: "InterBold", fontSize: 20}}>Write a review</Text>
            </TouchableOpacity>
            <View>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: 20, paddingBottom: 10, marginTop: 20}}>
            <Text style={{fontFamily: 'InterBold', fontSize: 25}}>Popular products</Text>
            <RightArrow top={3}/>
          </View>
          <GoodsCarousel goods={goods}/>
        </View>
        <View>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: 20, paddingBottom: 10}}>
            <Text style={{fontFamily: 'InterBold', fontSize: 25}}>Novelty</Text>
            <RightArrow top={3}/>
          </View>
          <GoodsCarousel goods={noveltyGoods}/>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default GoodScreen

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