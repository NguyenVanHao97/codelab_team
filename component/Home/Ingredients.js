import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Ingredients = () => {
    return (
        <View>
            <View style={styles.list_avatar} >
                <Image style={styles.avatar} source={require('../../assess/Avatar.png')} />
                <Image style={styles.avatar} source={require('../../assess/Avatar.png')} />
                <Image style={styles.avatar} source={require('../../assess/Avatar.png')} />
                <Image style={styles.avatar} source={require('../../assess/Avatar.png')} />
                <TouchableOpacity>
                    <Image style={styles.avatar1} source={require('../../assess/Avatar1.png')} />
                    <Text style={styles.text_ava}>
                        5+
                    </Text>
                </TouchableOpacity>
                
            </View>
            <Text style={styles.text_Ingredients}>
            Lemonade, coconut, peppers, egg + 5 more
            </Text> 
        </View>
    )
}

export default Ingredients

const styles = StyleSheet.create({
    list_avatar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    avatar:{
        width:WIDTH*0.13,
        height:WIDTH*0.13
    },
    avatar1:{
        width:WIDTH*0.13,
        height:WIDTH*0.13,
        position:'relative'
    },
    text_ava:{
        position:'absolute',
        alignSelf:'center',
        lineHeight:WIDTH*0.13
    },
    text_Ingredients:{
        fontSize:12,
        fontWeight:'400',
        color:'#030F09',
        marginVertical:HEIGHT*0.03
    },
})
