import * as React from 'react';
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {Image, FlatList, Text, Pressable} from 'react-native'

interface HomeCatogeryProps{
    category:{
        id: string,
        title: string,
        movies:{
            id: string,
            poster: string, 
        }[]
    }
}

const HomeCatogery = (props: HomeCatogeryProps) => {
    const {category} = props;
    const navigation = useNavigation();

    const onMoviePress =(movie) =>{
      navigation.navigate('MoviesDetailsScreen',{id:movie.id})
    }
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem ={({item}) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image style={styles.image} source={{uri:item.poster}}/>
          </Pressable>
          
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      
      />
    </>
  );
}

export default HomeCatogery;
