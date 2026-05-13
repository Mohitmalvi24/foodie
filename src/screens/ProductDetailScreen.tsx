import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { X, Heart, Star } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { INGREDIENTS } from '../data/mock';
import { QuantitySelector } from '../components/QuantitySelector';
import { useNavigation } from '@react-navigation/native';

export const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState('14"');
  const [quantity, setQuantity] = useState(2);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Text style={styles.title}>pizza calzone european</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <X color={Colors.text} size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} size={16} color={Colors.star} fill={Colors.star} />
          ))}
          <Star size={16} color={Colors.border} fill={Colors.border} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/burger.jpg')} // Should be pizza, using burger as placeholder
              style={styles.image}
            />
            <TouchableOpacity style={styles.favoriteButton}>
              <Heart size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <Text style={styles.description}>
            Prosciutto e funghi is a pizza variety that is topped with tomato sauce.
          </Text>

          <View style={styles.selectionRow}>
            <Text style={styles.selectionLabel}>Selected</Text>
            <View style={styles.selectionBadges}>
              <View style={styles.badge}><Text style={styles.badgeText}>14" inch</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>type 3</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>2 quantity</Text></View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Size:</Text>
            <View style={styles.sizeRow}>
              {['10"', '14"', '16"'].map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeButton, selectedSize === size && styles.sizeButtonActive]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextActive]}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {INGREDIENTS.map((ing, idx) => (
                <View key={idx} style={styles.ingredientCard}>
                  <View style={styles.ingredientIcon}><Text style={{ fontSize: 24 }}>{ing.icon}</Text></View>
                  <Text style={styles.ingredientName}>{ing.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>Rs $32<Text style={styles.perItem}>/per item</Text></Text>
          </View>
          <View style={styles.footerActions}>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(quantity + 1)}
              onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
              size="large"
              dark
            />
          </View>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    height: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.textLight,
    lineHeight: 20,
  },
  selectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  selectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  selectionBadges: {
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
  },
  badgeText: {
    fontSize: 10,
    color: Colors.textLight,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sizeRow: {
    flexDirection: 'row',
  },
  sizeButton: {
    backgroundColor: '#EDF1F7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  sizeButtonActive: {
    backgroundColor: Colors.primary,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  sizeTextActive: {
    color: Colors.white,
  },
  ingredientCard: {
    alignItems: 'center',
    marginRight: 15,
    width: 80,
  },
  ingredientIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  ingredientName: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.text,
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 10,
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  perItem: {
    fontSize: 12,
    fontWeight: 'normal',
    color: Colors.textLight,
  },
  footerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  addToCartText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
