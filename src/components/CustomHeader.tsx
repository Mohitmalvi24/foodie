import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ShoppingCart } from 'lucide-react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import logo from '../../assets/images/foodsie.png';
import Bell from '../../assets/images/Bell.png'
import Shopping from '../../assets/images/Shopping.png'

export const CustomHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoCard} />
      </View>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={Bell} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={Shopping} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoCard: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: -35,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
