import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native'
import { color } from 'react-native-reanimated'
import SearchBar from '../../components/SearchBar'

const width = Dimensions.get('window').width - 65

const Explore = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ paddingHorizontal: 25, paddingBottom: 17 }}>
        <SearchBar />
      </View>

      <FlatList
        style={{ paddingHorizontal: 17 }}
        data={DATA}
        keyExtractor={(item) => `${item.id}`}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item.color,
              margin: 8,
              flex: 1,
              height: 190,
              borderWidth: 1,
              borderColor: item.border,
              borderRadius: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image source={require('../../assets/id0.png')} />
            <Text
              style={{
                marginTop: 28,
                fontSize: 16,
                fontWeight: '600',
                color: 'rgba(24,23,37,1)',
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const DATA = [
  {
    id: 0,
    name: '1123',
    color: 'rgba(83,177,117,0.1)',
    border: 'rgba(83,177,117,0.7)',
  },
  {
    id: 1,
    name: '144231',
    color: 'rgba(248,164,76,0.1)',
    border: 'rgba(248,164,76,0.7)',
  },
  {
    id: 2,
    name: '14321',
    color: 'rgba(247,165,147,0.25)',
    border: 'rgba(247,165,147,1)',
  },
  {
    id: 3,
    name: '42311',
    color: 'rgba(211,176,224,0.25)',
    border: 'rgba(211,176,224,1)',
  },
  {
    id: 4,
    name: 'NUR',
    color: 'rgba(253,229,152,0.25)',
    border: 'rgba(253,229,152,1)',
  },
  {
    id: 5,
    name: 'fdsafdsafsdafsdadf',
    color: 'rgba(183,123,245,0.25)',
    border: 'rgba(183,123,245,1)',
  },
]

export default Explore
