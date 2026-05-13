import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Minus, Plus } from 'lucide-react-native';
import { Colors } from '../theme/colors';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'small' | 'large';
  dark?: boolean;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  size = 'small',
  dark = false,
}) => {
  const isLarge = size === 'large';

  return (
    <View style={[
      styles.container, 
      isLarge && styles.containerLarge,
      dark && styles.containerDark
    ]}>
      <TouchableOpacity 
        onPress={onDecrease} 
        style={[styles.button, isLarge && styles.buttonLarge]}
      >
        <Minus size={isLarge ? 20 : 16} color={dark ? Colors.white : Colors.primary} />
      </TouchableOpacity>
      
      <Text style={[
        styles.quantity, 
        isLarge && styles.quantityLarge,
        dark && styles.textWhite
      ]}>
        {quantity}
      </Text>
      
      <TouchableOpacity 
        onPress={onIncrease} 
        style={[styles.button, isLarge && styles.buttonLarge]}
      >
        <Plus size={isLarge ? 20 : 16} color={dark ? Colors.white : Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 5,
  },
  containerLarge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
  containerDark: {
    backgroundColor: Colors.black,
    borderColor: Colors.black,
  },
  button: {
    padding: 5,
  },
  buttonLarge: {
    padding: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginHorizontal: 10,
  },
  quantityLarge: {
    fontSize: 20,
  },
  textWhite: {
    color: Colors.white,
  },
});
