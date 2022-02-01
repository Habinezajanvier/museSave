import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const MusicList = ({ list, navigation }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate('PlayScreen')}
      >
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              defaultSource={require('../assets/musicIcon.png')}
              source={
                list.link
                  ? {
                      uri: list.link,
                    }
                  : require('../assets/musicIcon.png')
              }
            />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{list.title}</Text>
            <Text style={styles.artist}>{list.artist}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    backgroundColor: '#DCF4F3',
    width: '100%',
    padding: 6,
    borderRadius: 4,
    flexDirection: 'row',
  },
  imageWrapper: {},
  image: {
    width: 90,
    height: 70,
    marginRight: 12,
    borderRadius: 8,
  },
  contentWrapper: {},
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
    color: '#3C8F8A',
  },
  artist: {
    fontSize: 18,
    fontWeight: '600',
    color: '#12413E',
  },
});

export default MusicList;
