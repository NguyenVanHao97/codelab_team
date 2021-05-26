import React from 'react'
import { StyleSheet, Text, View ,Dimensions,Image,TouchableOpacity } from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Cook = () => {
    return (
            <View>
                    <View style={styles.contant_cook} >
                    <Image source={require('../../assess/Numbering1.png')} />
                    <Text style={styles.text_cook}>
                    Heat a Belgian waffle iron.
                    </Text>
                    </View>
                    <View style={styles.contant_cook}>
                    <Image source={require('../../assess/Numbering2.png')} />
                    <Text style={styles.text_cook}>
                    Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if needed to make a pourable batter.
                    </Text>
                    </View>
                    <View style={styles.contant_cook}>
                    <Image source={require('../../assess/Numbering3.png')} />
                    <Text style={styles.text_cook}>
                    Lightly grease or spray the waffle iron with non-stick cooking spray. Pour some batter onto the preheate ...
                    </Text>
                    </View>
                </View>
    )
}

export default Cook

const styles = StyleSheet.create({
    contant_cook:{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-between'
        paddingVertical:HEIGHT*0.01
    },
    text_cook:{
        fontWeight:'400',
        fontSize:13,
        color:'#030F09',
        marginLeft:WIDTH*0.05
    },
})
