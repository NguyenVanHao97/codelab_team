import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View ,
    Dimensions,
    Image,
    TouchableOpacity 
    } from 'react-native'
import {useSelector} from 'react-redux'
import {connect} from 'react-redux'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Add = () => {
    let additionalitem =useSelector(state => state.AddReducer.additional)
    return (
        <View>
                {additionalitem.map((item,index)=>{
                    return <View key={index}  >
                        <View style={styles.infor_contant}>
                        <Text style={styles.add_text}>
                        Serving Time (±)
                        </Text>
                        <Text  style={styles.infor_text}>
                        {item.time}
                        </Text>
                        </View>
                        <View style={styles.infor_contant}>
                        <Text style={styles.add_text}>
                        Nutrition Facts
                        </Text>
                        <Text  style={styles.infor_text}>
                        {item.Nutrition}
                        </Text>
                        </View>
                        <View style={styles.infor_contant}>
                        <Text style={styles.add_text}>
                        Tags
                        </Text>
                        <Text  style={styles.infor_text}>
                        {item.tags}
                        </Text>
                        </View>
                     </View>
                })}
            </View>
    )
}

export default Add

const styles = StyleSheet.create({
    infor_contant:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:10
    },
    add_text:{
        color:'#A8A8A8',
        fontSize:14,
        fontWeight:'400'
    },
    infor_text:{
        color:'#030F09',
        fontSize:14,
        fontWeight:'400',
        marginLeft:40
    },
})
