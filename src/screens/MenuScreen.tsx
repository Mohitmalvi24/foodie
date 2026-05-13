import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { Colors } from '../theme/colors';
import { POPULAR_ITEMS } from '../data/mock';
import { FoodItemCard } from '../components/FoodItemCard';
import { ChevronDown, ChevronRight } from 'lucide-react-native';

const CATEGORIES = [
  { id: '1', name: 'Burger', items: 12 },
  { id: '2', name: 'Pizza', items: 12 },
  { id: '3', name: 'Pasta', items: 12 },
];

export const MenuScreen = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('2'); // Pizza expanded by default

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Menu Header Banner */}
        <View style={styles.menuBanner}>
          <View style={styles.menuBannerTextContainer}>
            <Text style={styles.menuBannerTitle}>MENU ☕</Text>
            <Text style={styles.menuBannerSubtitle}>that you will love</Text>
          </View>
          <Image 
            source={require('../../assets/images/burger.jpg')} 
            style={styles.menuBannerImage} 
          />
        </View>

        {/* Category List */}
        <View style={styles.categoriesContainer}>
          {CATEGORIES.map((cat) => {
            const isExpanded = expandedCategory === cat.id;
            return (
              <View key={cat.id} style={styles.categoryWrapper}>
                <TouchableOpacity 
                  style={styles.categoryHeader} 
                  onPress={() => setExpandedCategory(isExpanded ? null : cat.id)}
                >
                  <View style={styles.categoryHeaderText}>
                    <Text style={styles.categoryName}>{cat.name}</Text>
                    <Text style={styles.categoryItems}>({cat.items} items)</Text>
                  </View>
                  {isExpanded ? (
                    <ChevronDown color={Colors.text} size={24} />
                  ) : (
                    <ChevronRight color={Colors.text} size={24} />
                  )}
                </TouchableOpacity>

                {isExpanded && (
                  <View style={styles.itemsGrid}>
                    {POPULAR_ITEMS.map((item) => (
                      <FoodItemCard key={item.id} item={item} />
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  menuBanner: {
    backgroundColor: '#2D3436',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
  },
  menuBannerTextContainer: {
    flex: 1,
  },
  menuBannerTitle: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuBannerSubtitle: {
    color: Colors.white,
    fontSize: 16,
    marginTop: 5,
  },
  menuBannerImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryWrapper: {
    marginBottom: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  categoryHeaderText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  categoryItems: {
    fontSize: 14,
    color: Colors.textLight,
    marginLeft: 10,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
});
