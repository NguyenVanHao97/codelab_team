import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Gallery = () => {
    return (
        <View>
             <View>
                    <View>
                        <Image style={styles.image1} source={require('../../assess/Img5.png')} />
                    </View>
                    <View style={styles.list_img} >
                        <Image style={styles.img} source={require('../../assess/Img7.png')} />
                        <Image style={styles.img} source={require('../../assess/Img3.png')} />
                        <TouchableOpacity>
                        <Image style={styles.img4} source={require('../../assess/Image8.png')} />
                            <Text style={styles.text_img}>
                                12+
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

export default Gallery

const styles = StyleSheet.create({
      image1:{
        width:WIDTH*0.8,
        marginVertical:HEIGHT*0.01,
        // height:HEIGHT*0.7
    },
    list_img:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:HEIGHT*0.03
    },
    img:{
        width:WIDTH*0.25,
        height:WIDTH*0.25
    },
    img4:{
        width:WIDTH*0.25,
        height:WIDTH*0.25,
        position:'relative'
    },
    text_img:{
        position:'absolute',
        alignSelf:'center',
        lineHeight:WIDTH*0.25
    },
})
