import { Image, StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeartIcon from '@/assets/svg/home/HeartIcon';
import Input from '@/ui/Input';
import SearchIcon from '@/assets/svg/home/SearchIcon';
import GoodCard from '@/components/GoodCard';
import GoodsCarousel from '@/components/GoodsCarousel';
import RightArrow from '@/assets/svg/home/RightArrow';
import { goods } from '@/mock/popularGoods';
import { noveltyGoods } from '@/mock/noveltyGoods';

export default function HomeScreen() {
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
          <View style={{position: 'absolute', top: 14, left: 35}}>
            <SearchIcon/>
          </View>
          <Input placeholder="Search"/>
        </View>
        <Image
          source={require("@/assets/images/banner.png")}
          style={{width: '100%', height: 256, objectFit: 'contain'}}
        />
        <View>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: 20, paddingBottom: 10}}>
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
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  goodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
});
