import React, {useState} from 'react'
import {Image, Pressable, FlatList } from 'react-native'
import{Text, View} from '../../components/Themed';
import styles from './styles'
import { MaterialIcons , AntDesign, Entypo, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import movie from '../../assets/data/movie'
import EpisodeItem from '../../components/EpisodeItem';
import {Picker} from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer';

const fristSession = movie.seasons.items[0];
const fristEpisode = fristSession.episodes.items[0];

const MoviesDetailsScreen = () => {
    const [currentSeason, setCurrentSeason] = useState(fristSession);
    const [currentEpisode,setCurrentEpisode] = useState(fristSession.episodes.items[0]);
    const seasonNames = movie.seasons.items.map(season => season.name);
    return (
        <View style={{margin:10}}>
            <VideoPlayer episode={currentEpisode} />
            
            <FlatList
                data={currentSeason.episodes.items}
                style={{marginBottom: 250}}
                renderItem={
                    ({item}) =>(
                    <EpisodeItem 
                    episode={item} 
                    onPress={setCurrentEpisode}
                    />)}
                ListHeaderComponent ={(
                    <View style={{padding:12}}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer} >
                    <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Session</Text>
                <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <Pressable onPress={()=>{console.warn('palge')}} style={styles.playButton} >
                <Text style={styles.playButtonText}>
                    <Entypo name="controller-play" size={16} color="black" />
                    play
                </Text>
            </Pressable>
            <Pressable onPress={()=>{console.warn('palge')}} style={styles.downlodButton} >
                <Text style={styles.downlodButtonText}>
                    <AntDesign name="download" size={16} color="black" />
                    Downlod
                </Text>
            </Pressable>
            <Text style={{marginVertical:10}}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text  style={styles.year}>Creator:{movie.creator}</Text>

            <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{alignItems:'center',marginHorizontal: 20}}>
                <AntDesign name="plus" size={24} color={'white'} />
                <Text style={{color: 'darkgrey', marginTop:5}}>My List</Text>
                </View>

                <View style={{alignItems:'center',marginHorizontal: 20}}>
                <Feather name="thumbs-up" size={24} color={'white'} />
                <Text style={{color: 'darkgrey', marginTop:5}}>Rate</Text>
                </View>

                <View style={{alignItems:'center',marginHorizontal: 20}}>
                <FontAwesome name="send-o" size={24} color={'white'} />
                <Text style={{color: 'darkgrey', marginTop:5}}>Share</Text>
                </View>
            </View>
            <Picker
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) =>{
                    setCurrentSeason(movie.seasons.items[itemIndex])
                } }
                style={{color: 'white', width:130}}
                dropdownIconColor={ 'white'}
                >
                    {seasonNames.map(seasonName=>(
                        <Picker.Item label={seasonName} value={seasonName} key={seasonName}/>
                    ))}
            </Picker>
            </View>
                )}
            />
        </View>
    )
}

export default MoviesDetailsScreen
