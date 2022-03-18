import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

const url =
  'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';

const HomeHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.header}>
      <Text style={styles.title}>MuseSave</Text>
      <View style={styles.rightContainer}>
        <Icon
          type="ionicon"
          name="search"
          color="#3C8F8A"
          size={30}
        />
        <View>
          <Image
            style={styles.image}
            source={{
              uri: url,
            }}
          />
        </View>
      </View>
    </View>
    <View style={styles.shadow}></View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  shadow: {
    backgroundColor: '#DCF4F3',
    elevation: 2,
    height: 2,
    width: '100%',
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginTop: 12,
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    color: '#3C8F8A',
    fontWeight: '700',
  },
  button: {
    padding: 2,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1 / 2,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
});

export default HomeHeader;
