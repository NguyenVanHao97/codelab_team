import React,{useState} from 'react'
import { 
    StyleSheet, 
    Text, 
    View ,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions} from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const data = [
    {id:1 , image : require('../../assess/Img8.png')},
    {id:2 , image : require('../../assess/Img9.png')},
    {id:3 , image : require('../../assess/Img8.png')},
    {id:4 , image : require('../../assess/Img9.png')},
]

// const Item = ({item}) => {
//     <View style={styles.item}>
//     <Image source={item.image} />
//   </View>
// }

const ModalGallery = () => {
        const [choose ,setChoose ] = useState(!choose)
        const handleChoose = () => {
        setChoose(choose)
        }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.image}>
                    Images (8)
                </Text>
                <TouchableOpacity>
                <Text style={styles.view}>
                    View All
                </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../../assess/Img8.png')} />
            </View>
            <View style={styles.contant}>
                <TouchableOpacity onPress={handleChoose}>
                    <Image source={ choose ? require('../../assess/button.png') : require('../../assess/buttonactive.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>
                Set as Cover
                </Text>
            </View>
            <View style={styles.contant}> 
                <TouchableOpacity>
                    <Image source={require('../../assess/Remove.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>
                Remove
                </Text>
            </View>
            <View style={styles.contant_add}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../assess/Icon.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text_button}>
                    Save Gallery
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default ModalGallery

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        paddingHorizontal:WIDTH*0.08
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        fontSize:16,
        fontWeight:'700',
        color:'#030F09'
    },
    view:{
        fontSize:16,
        fontWeight:'700',
        color:'#30BE76'
    },
    contant:{
        display:'flex',
        flexDirection:'row',
        paddingTop:WIDTH*0.05
    },
    text:{
        fontSize:16,
        fontWeight:'400',
        color:'#030F09',
        marginLeft:WIDTH*0.04
    },
    contant_add:{
        height:HEIGHT*0.08,
        // backgroundColor:'red',
        width:WIDTH*0.8,
        alignSelf:'center',
        borderRadius:5,
        borderStyle: 'dashed',
        borderWidth:1,
        marginTop:HEIGHT*0.05
    },
    icon:{
        marginVertical:HEIGHT*0.02,
        marginLeft:WIDTH*0.03,
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
