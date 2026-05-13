import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heart, Star } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { QuantitySelector } from './QuantitySelector';

import { useNavigation } from '@react-navigation/native';

interface FoodItemCardProps {
  item: {
    id: string;
    name: string;
    unit: string;
    price: number;
    image: any;
  };
  onPress?: () => void;
}

export const FoodItemCard: React.FC<FoodItemCardProps> = ({ item, onPress }) => {
  const navigation = useNavigation<any>();
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.9} 
      onPress={() => navigation.navigate('ProductDetail', { item })}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            size={18} 
            color={isFavorite ? Colors.primary : Colors.white} 
            fill={isFavorite ? Colors.primary : 'transparent'} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.unit}>{item.unit}</Text>
        
        <View style={styles.footer}>
          <Text style={styles.price}>Rs {item.price}</Text>
          
          {quantity === 0 ? (
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={() => setQuantity(1)}
            >
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <QuantitySelector 
              quantity={quantity} 
              onIncrease={() => setQuantity(quantity + 1)} 
              onDecrease={() => setQuantity(quantity - 1)} 
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    width: '47%', // Allow 2 columns
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 140, // Slightly taller image to match reference
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent', // The reference image shows no dark circle background for the heart
    borderRadius: 15,
    padding: 5,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
  },
  unit: {
    fontSize: 12,
    color: Colors.textLight,
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  addButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8, // More rounded corners
  },
  addButtonText: {
    color: Colors.white,
    fontWeight: '500', // Normal-bold
    fontSize: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
