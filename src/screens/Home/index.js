import {StyleSheet, View,Text, Image, TouchableOpacity, FlatList, ScrollView} from "react-native";

import PrimeVideoLogo from "../../assets/amazon_logo.png"
import AmazonLogo from "../../assets/prime_video.png"

import { MOVIESWATCHING } from "../../utils/moviesWatching";
import {MOVIESCRIME} from '../../utils/moviesCrimes';
import { MOVIESWATCH } from "../../utils/moviesWatch";

import movie_the_wheel_of_time from '../../assets/movies/the_wheel_of_time.png'
import { MoviesCard } from "../../components/MoviesCard";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.amazonlogoImg} source={AmazonLogo}/>
                <Image style={styles.primelogoImg} source={PrimeVideoLogo}/>
            </View>

            <View style={styles.category}>
               <TouchableOpacity>
                    <Text style={styles.category_text}>Home</Text>
               </TouchableOpacity>

               <TouchableOpacity >
                    <Text style={styles.category_text}>Tv Shows</Text>
               </TouchableOpacity>

               <TouchableOpacity >
                    <Text style={styles.category_text}>Movies</Text>
               </TouchableOpacity>

               <TouchableOpacity>
                    <Text style={styles.category_text}>Kids</Text>
               </TouchableOpacity>
            </View>

           <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.movie_the_wheel}>
                    <Image source={movie_the_wheel_of_time} />
                </TouchableOpacity>

                <Text style={styles.text_moviescard}>Continue Watching</Text>
                <FlatList
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.text_moviescard}>Crime Movies</Text>
                <FlatList
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

            <Text style={styles.text_moviescard}>Watch in your language</Text>
                <FlatList
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                 />
            
           </ScrollView>
            
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        
    } ,

    header: {
        paddingTop: 80,
        Width: '100%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },

    primelogoImg: {
        marginTop: -34,
        marginLeft: 20,
        marginBottom: 15,
    },

    category: {
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },

    category_text:{
        color: 'rgb(255,255,255)',
    },

    movie_the_wheel:{
        marginTop: 20,
        marginBottom: 20,
        width: '70%',
    },

    contentList:{
        marginBottom: 10,
        paddingRight: 15,
    },

    text_moviescard: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingLeft: 25,
        marginBottom: 14,
        fontWeight: '700',
    }
})