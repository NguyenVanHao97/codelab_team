import React ,{useState} from 'react'
import { StyleSheet, Text, View ,Dimensions , TextInput,TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalAdd = () => {

    let dispatch = useDispatch()
    let [addtitle ,setAddtitle] = useState({
        time:'',
        Nutrition:'',
        tags:''
    })
    const handleSubmit = () =>{
        let {Value , name } = e.target;
        setAddtitle({
            ...addtitle,
            [name] : Value
        })
    }
    const handleAdd = () => {
        let action = {
            type : 'ADDITIONAL',
            addtitle
        }
        dispatch(action)
    }
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.title}>
                        Serving Time (±)
                    </Text>
                    <TextInput name="time" onPress={handleSubmit} style={styles.input} placeholder="20 mins" placeholderTextColor="#030F09" />
                </View>
                <View>
                    <Text style={styles.title}>
                        Nutrition Facts
                    </Text>
                    <TextInput name="Nutrition" onPress={handleSubmit} style={styles.input} placeholder="
                    222 calories 6.2 g fat 7.2 g carbohydrates 28.6 g protein" placeholderTextColor="#030F09" />
                </View>
                   <View>
                    <Text style={styles.title}>
                        Tags
                    </Text>
                    <TextInput name="tags" onPress={handleSubmit} style={styles.input} placeholder="Sweet, Lunch, Quick, Budget" placeholderTextColor="#030F09" />
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={handleAdd}>
                    <Text style={styles.text_button}>
                    Save Gallery
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalAdd

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:WIDTH*0.08
    },
    title:{
        fontSize:14,
        fontWeight:'400',
        color:'#A8A8A8'
    },
    input:{
        borderBottomWidth:1,
        borderColor:'#CCCCCC'
    },
     button:{
        height:HEIGHT*0.08,
        backgroundColor:'#30BE76',
        width:WIDTH*0.8,
        marginVertical:HEIGHT*0.05,
        alignSelf:'center',
        borderRadius:5,
    },
    text_button:{
        color:'white',
        alignSelf:'center',
        lineHeight:HEIGHT*0.08
    }
})
