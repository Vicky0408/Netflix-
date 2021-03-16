import * as React from 'react';
import styles from './style'
import {Image, FlatList} from 'react-native'
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory'
import HomeCatogery from '../../components/HomeCategory';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
       data={categories.items}
       renderItem={({item}) => <HomeCatogery category={item}/>}
      />
    </View>
  );
}

export default HomeScreen;
