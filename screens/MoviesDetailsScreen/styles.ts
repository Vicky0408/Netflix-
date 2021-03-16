import {StyleSheet }from 'react-native';

const styles = StyleSheet.create({
    image:{
        width:'100%',
        aspectRatio: 16/9,
        resizeMode: 'cover',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    match:{
        color: '#00aa00',
        fontWeight: 'bold',
        marginRight: 5,
    },
    year:{
        color: '#757575',
    },
    ageContainer:{
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,


    },
    age:{
        color: 'black',
        fontWeight: 'bold'
    }, 
    
    playButton:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
    },
    playButtonText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'

    },
    downlodButton:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,

    },
    downlodButtonText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'

    },
})

export default styles;

