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
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.lightGray,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.calendar}
              resizeMode={'contain'}
              style={{width: 20, height: 20, tintColor: COLORS.lightBlue}}
            />
          </View>
          <View style={{marginLeft: SIZES.padding}}>
            <Text
              style={{color: COLORS.primary, ...FONTS.h3, fontWeight: 'bold'}}>
              22 Feb 2021
            </Text>
            <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
              15% more then last month
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderCategoryHeaderSection = () => {
    return (
      <View>
        {/* Total */}
        <View>
          <Text>CATEGORIES</Text>
          <Text> Total</Text>
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
      {/* Category Header Section */}
      {renderCategoryHeaderSection()}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
