import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';
const home = () => {
  const renderNavBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: SIZES.padding / 2,
          backgroundColor: COLORS.white,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', width: 50}}
          onPress={() => console.log('Back')}>
          <Image
            source={icons.back_arrow}
            resizeMode={'contain'}
            style={{width: 30, height: 30, tintColor: COLORS.primary}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', width: 50, alignItems: 'flex-end'}}
          onPress={() => console.log('More')}>
          <Image
            source={icons.more}
            resizeMode={'contain'}
            style={{width: 30, height: 30, tintColor: COLORS.primary}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        <View>
          <Text
            style={{color: COLORS.primary, ...FONTS.h2, fontWeight: 'bold'}}>
            My Expenses
          </Text>
          <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>
            Summary (private)
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
      {/* Nav bar Section */}
      {renderNavBar()}
      {/* Header Section */}
      {renderHeader()}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
