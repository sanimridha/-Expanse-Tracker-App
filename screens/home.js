import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {VictoryPie} from 'victory-native';
import {sin} from 'react-native/Libraries/Animated/src/Easing';
const home = () => {
  //Dummy data
  const confirmStatus = 'C';
  const pendingStatus = 'P';
  let categoriesData = [
    {
      id: 1,
      name: 'Education',
      icon: icons.education,
      color: COLORS.yellow,
      expenses: [
        {
          id: 1,
          title: 'Tuition Fee',
          description: 'Tuition fee',
          location: "Mohammadpur' tuition center",
          total: 100.0,
          status: pendingStatus,
        },
        {
          id: 2,
          title: 'Arduino',
          description: 'Hardward',
          location: "Shyamoli' tuition center",
          total: 30.0,
          status: pendingStatus,
        },
        {
          id: 3,
          title: 'Javascript Books',
          description: 'Javascript books',
          location: "Farmgate' Book Store",
          total: 20.0,
          status: confirmStatus,
        },
        {
          id: 4,
          title: 'C-Sharp Books',
          description: 'C-Sharp books',
          location: "Gulshan' Book Store",
          total: 20.0,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 2,
      name: 'Nutrition',
      icon: icons.food,
      color: COLORS.lightBlue,
      expenses: [
        {
          id: 5,
          title: 'Vitamins',
          description: 'Vitamin',
          location: "Science Lab' Pharmacy",
          total: 25.0,
          status: pendingStatus,
        },

        {
          id: 6,
          title: 'Protein powder',
          description: 'Protein',
          location: "Banani' Pharmacy",
          total: 50.0,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 3,
      name: 'Child',
      icon: icons.baby_car,
      color: COLORS.darkgreen,
      expenses: [
        {
          id: 7,
          title: 'Toys',
          description: 'toys',
          location: "Uttara' Toy Store",
          total: 25.0,
          status: confirmStatus,
        },
        {
          id: 8,
          title: 'Baby Car Seat',
          description: 'Baby Car Seat',
          location: "Jamuna Future Park' Baby Care Store",
          total: 100.0,
          status: pendingStatus,
        },
        {
          id: 9,
          title: 'Pampers',
          description: 'Pampers',
          location: "New-Market' Supermarket",
          total: 100.0,
          status: pendingStatus,
        },
        {
          id: 10,
          title: 'Baby T-Shirt',
          description: 'T-Shirt',
          location: "Bashundhara' Fashion Store",
          total: 20.0,
          status: pendingStatus,
        },
      ],
    },
    {
      id: 4,
      name: 'Beauty & Care',
      icon: icons.healthcare,
      color: COLORS.peach,
      expenses: [
        {
          id: 11,
          title: 'Skin Care product',
          description: 'skin care',
          location: "Banasri' Pharmacy",
          total: 10.0,
          status: pendingStatus,
        },
        {
          id: 12,
          title: 'Lotion',
          description: 'Lotion',
          location: "Rampura' Pharmacy",
          total: 50.0,
          status: confirmStatus,
        },
        {
          id: 13,
          title: 'Face Mask',
          description: 'Face Mask',
          location: "Baridhara' Pharmacy",
          total: 50.0,
          status: pendingStatus,
        },
        {
          id: 14,
          title: 'Sunscreen cream',
          description: 'Sunscreen cream',
          location: "Nikunja' Pharmacy",
          total: 50.0,
          status: pendingStatus,
        },
      ],
    },
    {
      id: 5,
      name: 'Sports',
      icon: icons.sports_icon,
      color: COLORS.purple,
      expenses: [
        {
          id: 15,
          title: 'Gym Membership',
          description: 'Monthly Fee',
          location: "Bangla-Motor' Gym",
          total: 45.0,
          status: pendingStatus,
        },
        {
          id: 16,
          title: 'Gloves',
          description: 'Gym Equipment',
          location: "Panthapath' Gym",
          total: 15.0,
          status: confirmStatus,
        },
      ],
    },
    {
      id: 6,
      name: 'Clothing',
      icon: icons.cloth_icon,
      color: COLORS.red,
      expenses: [
        {
          id: 17,
          title: 'T-Shirt',
          description: 'Plain Color T-Shirt',
          location: "Estern Plaza' Mall",
          total: 20.0,
          status: pendingStatus,
        },
        {
          id: 18,
          title: 'Jeans',
          description: 'Blue Jeans',
          location: "Suvastu-Tower' Mall",
          total: 50.0,
          status: confirmStatus,
        },
      ],
    },
  ];
  const categoryListHeightAnimationValue = useRef(new Animated.Value(115))
    .current;
  const [categories, setcategories] = useState(categoriesData);
  const [viewMode, setViewMode] = useState('chart');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);
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
      <View
        style={{
          flexDirection: 'row',
          padding: SIZES.padding,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* Total */}
        <View>
          <Text
            style={{color: COLORS.primary, ...FONTS.h3, fontWeight: 'bold'}}>
            CATEGORIES
          </Text>
          <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>
            {categories.length} Total
          </Text>
        </View>
        {/* Buttons */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
              borderRadius: 25,
            }}
            onPress={() => setViewMode('chart')}>
            <Image
              source={icons.chart}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
              borderRadius: 25,
            }}
            onPress={() => setViewMode('list')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderCategoryList = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 5,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: 5,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}
          onPress={() => setSelectedCategory(item)}>
          <Image
            source={item.icon}
            style={{width: 20, height: 20, tintColor: item.color}}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.primary,
              ...FONTS.h4,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{paddingHorizontal: SIZES.padding - 5}}>
        <Animated.View style={{height: categoryListHeightAnimationValue}}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
          />
        </Animated.View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.base,
            justifyContent: 'center',
          }}
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 500,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 500,
                useNativeDriver: false,
              }).start();
            }
            setShowMoreToggle(!showMoreToggle);
          }}>
          <Text style={{...FONTS.body4}}>
            {showMoreToggle ? 'Less' : 'More'}
          </Text>
          <Image
            source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
            resizeMode={'contain'}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderIncomingExpensesTitle = () => {
    return (
      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.primary, fontWeight: 'bold'}}>
          INCOMING EXPENSES
        </Text>
        <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
      </View>
    );
  };

  const renderIncomingExpenses = () => {
    let allExpenses = selectedCategory ? selectedCategory.expenses : [];
    //Filter pending expenses
    let incomingExpenses = allExpenses.filter((a) => a.status == 'P');
    const renderItem = ({item, index}) => {
      return (
        <View
          style={{
            width: 300,
            marginRight: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}>
          {/* title Section */}
          <View
            style={{
              flexDirection: 'row',
              padding: SIZES.padding,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: COLORS.lightGray,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.base,
              }}>
              <Image
                source={selectedCategory.icon}
                resizeMode={'contain'}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: selectedCategory.color,
                }}
              />
            </View>
            <Text
              style={{
                ...FONTS.h3,
                color: selectedCategory.color,
                fontWeight: 'bold',
              }}>
              {selectedCategory.name}
            </Text>
          </View>
          {/* Expenses Description */}
          <View style={{paddingHorizontal: SIZES.padding}}>
            {/* Title And Description */}
            <Text style={{...FONTS.h2, fontWeight: 'bold'}}>{item.title}</Text>
            <Text
              style={{
                ...FONTS.body3,
                flexWrap: 'wrap',
                color: COLORS.darkgray,
              }}>
              {item.description}
            </Text>
            {/* location */}
            <Text
              style={{
                marginTop: SIZES.padding,
                ...FONTS.h4,
                fontWeight: 'bold',
              }}>
              Location
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={icons.pin}
                resizeMode={'contain'}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  marginBottom: SIZES.base,
                  color: COLORS.darkgray,
                  ...FONTS.body4,
                }}>
                {item.location}
              </Text>
            </View>
          </View>
          {/* Price */}
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomStartRadius: SIZES.radius,
              borderBottomEndRadius: SIZES.radius,
              backgroundColor: selectedCategory.color,
            }}>
            <Text
              style={{color: COLORS.white, ...FONTS.body3, fontWeight: 'bold'}}>
              CONFIRM {item.total.toFixed(2)} USD
            </Text>
          </View>
        </View>
      );
    };

    return (
      <View>
        {renderIncomingExpensesTitle()}

        {incomingExpenses.length > 0 && (
          <FlatList
            data={incomingExpenses}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}

        {incomingExpenses.length == 0 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 300,
            }}>
            <Text
              style={{color: COLORS.primary, ...FONTS.h3, fontWeight: 'bold'}}>
              No Record
            </Text>
          </View>
        )}
      </View>
    );
  };
  const processCategoryDataToDisplay = () => {
    //filter Expenses with confirmed status
    let chartData = categories.map((item) => {
      let confirmExpenses = item.expenses.filter((a) => a.status == 'C');
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        expensesCount: confirmExpenses.length,
        color: item.color,
        id: item.id,
      };
    });
    //Filter out categories with no data/expenses
    let filterChartData = chartData.filter((a) => a.y > 0);

    //calculate the total expenses
    let totalExpenses = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    //calculate percentage and repopulate chart data
    let finalChartData = filterChartData.map((item) => {
      let percentage = ((item.y / totalExpenses) * 100).toFixed(0);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expensesCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });
    return finalChartData;
  };
  const setselectedCategoryByName = (name) => {
    let category = categories.filter((a) => a.name == name);
    setSelectedCategory(category[0]);
  };
  const renderChart = () => {
    let chartData = processCategoryDataToDisplay();
    let colorScales = chartData.map((item) => item.color);
    let totalExpensesCount = chartData.reduce(
      (a, b) => a + (b.expenseCount || 0),
      0,
    );

    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <VictoryPie
          data={chartData}
          colorScale={colorScales}
          labels={(datum) => `${datum.y}`}
          radius={({datum}) =>
            selectedCategory && selectedCategory.name == datum.name
              ? SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          innerRadius={70}
          labelRadius={({innerRadius}) =>
            (SIZES.width * 0.4 + innerRadius) / 2.5
          }
          style={{
            labels: {fill: COLORS.white, ...FONTS.body3},
            parent: {
              ...styles.shadow,
            },
          }}
          width={SIZES.width * 0.8}
          height={SIZES.width * 0.8}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: (props) => {
                        let categoryName = chartData[props.index].name;
                        setselectedCategoryByName(categoryName);
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
        <View style={{position: 'absolute', top: '42%', left: '42%'}}>
          <Text style={{...FONTS.h1, textAlign: 'center', fontWeight: 'bold'}}>
            {totalExpensesCount}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              textAlign: 'center',
              color: COLORS.darkgray,
            }}>
            Expenses
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
      {/* Category Header Section */}
      {renderCategoryHeaderSection()}

      <ScrollView contentContainerStyle={{paddingBottom: 60}}>
        {viewMode == 'list' && (
          <View>
            {renderCategoryList()}
            {renderIncomingExpenses()}
          </View>
        )}
        {viewMode == 'chart' && <View>{renderChart()}</View>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default home;
