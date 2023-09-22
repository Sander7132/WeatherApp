import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2021-03-01 12:00:00',
    main: {
      temp_min: 6,
      temp_max: 8
    },
    weather: [
      {
        main: 'sunny'
      }
    ]
  },
  {
    dt_txt: '2021-03-01 15:00:00',
    main: {
      temp_min: 6,
      temp_max: 8
    },
    weather: [
      {
        main: 'cloudy'
      }
    ]
  },
  {
    dt_txt: '2021-03-01 18:00:00',
    main: {
      temp_min: 6,
      temp_max: 8
    },
    weather: [
      {
        main: 'rainy'
      }
    ]
  }
]
const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp } = styles
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}
const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather
