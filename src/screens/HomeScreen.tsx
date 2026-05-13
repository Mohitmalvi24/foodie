import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomHeader } from '../components/CustomHeader';
import { Colors } from '../theme/colors';
import { STORIES, OFFERS, EXPLORE_CATEGORIES, POPULAR_ITEMS } from '../data/mock';
import { FoodItemCard } from '../components/FoodItemCard';
import HeroCard from '../../assets/images/HeroCard.png';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Food Happenings (Stories) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Food happenings</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
            {STORIES.map((story) => (
              <View key={story.id} style={styles.storyCircle}>
                <Image source={story.image} style={styles.storyImage} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Featured Banner */}
        <View style={styles.bannerOuterContainer}>
          <View style={styles.bannerContainer}>
            <Image
              source={HeroCard}
              style={styles.bannerImage}
            />
          </View>
        </View>

        {/* Offers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleRed}>Offers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.offersContainer}>
            {OFFERS.map((offer, index) => (
              <LinearGradient
                key={offer.id}
                colors={index % 2 === 0 ? ['#FF4B4B', '#FF8E53'] : ['#F2994A', '#F2C94C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.offerCard}
              >
                <View style={styles.offerTextContainer}>
                  <Text style={styles.offerTitle}>claim your discount 30% daily now!</Text>
                  <TouchableOpacity style={styles.orderNowButton}>
                    <Text style={styles.orderNowText}>Order now</Text>
                  </TouchableOpacity>
                </View>
                <Image source={offer.image} style={styles.offerImage} />
              </LinearGradient>
            ))}
          </ScrollView>
        </View>

        {/* Explore */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleRed}>Explore</Text>
          <View style={styles.exploreGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <View key={cat.id} style={styles.exploreItem}>
                <Image source={cat.image} style={styles.exploreImage} />
                <View style={styles.exploreNameContainer}>
                  <Text style={styles.exploreName}>{cat.name}</Text>
                </View>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>SEE MORE</Text>
          </TouchableOpacity>
        </View>

        {/* Discount Strip */}
        <View style={styles.discountStrip}>
          <LinearGradient
            colors={['#FF8E53', '#FF4B4B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.discountBadge}
          >
            <Text style={styles.discountText}>🎁 15% off on items !</Text>
          </LinearGradient>
        </View>

        {/* Popular */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleRed}>Popular</Text>
          <FlatList
            data={POPULAR_ITEMS}
            renderItem={({ item }) => <FoodItemCard item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.popularList}
          />
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>SEE MORE</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Banner */}
        <LinearGradient
          colors={['#F2994A', '#F2C94C']}
          style={styles.bottomBanner}
        >
          <View style={styles.bottomBannerContent}>
            <Text style={styles.bottomBannerTitle}>rose garden restaurant</Text>
            <Text style={styles.bottomBannerSubtitle}>Burger - Chicken - Riche - Wings</Text>
            <Text style={styles.bottomBannerContact}>For catering call us at +09909090999</Text>
          </View>
          <Image
            source={require('../../assets/images/burger.jpg')}
            style={styles.bottomBannerImage}
          />
        </LinearGradient>

        <View style={{ height: 10 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Subtle off-white background
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: Colors.text,
  },
  sectionTitleRed: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: Colors.primary,
  },
  storiesContainer: {
    paddingLeft: 20,
  },
  storyCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 3,
    marginRight: 12,
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 38,
  },
  bannerOuterContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  bannerContainer: {
    height: 380,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.primary,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: 5,
  },
  activeDot: {
    backgroundColor: Colors.white,
    width: 20,
  },
  offersContainer: {
    paddingLeft: 20,
  },
  offerCard: {
    width: 260,
    height: 140,
    borderRadius: 20,
    marginRight: 15,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  offerTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  offerTitle: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 12,
  },
  orderNowButton: {
    backgroundColor: Colors.black,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  orderNowText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  offerImage: {
    width: 90,
    height: 110,
    resizeMode: 'contain',
  },
  exploreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  exploreItem: {
    width: '33.33%',
    padding: 5,
    alignItems: 'center',
  },
  exploreImage: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
  exploreNameContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: -10,
  },
  exploreName: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.text,
  },
  seeMoreButton: {
    backgroundColor: '#2D3436',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  seeMoreText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  discountStrip: {
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: 'flex-end',
  },
  discountBadge: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  discountText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 13,
  },
  popularList: {
    paddingHorizontal: 12,
  },
  bottomBanner: {
    margin: 20,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomBannerContent: {
    flex: 1,
    marginRight: 10,
  },
  bottomBannerTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBannerSubtitle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  bottomBannerContact: {
    color: 'rgba(139, 68, 0, 1)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomBannerImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
});
