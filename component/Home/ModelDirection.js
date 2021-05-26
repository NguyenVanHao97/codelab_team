import React from 'react'
import { StyleSheet, Text, View,Dimensions ,Image,TouchableOpacity, TextInput} from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModelDirection = () => {
    return (
        <View style={styles.container}>
          <View>
              <Image style={styles.image} source={require('../../assess/Img11.png')} />
              <View style={styles.group_btn}>
                <TouchableOpacity style={styles.edit_icon}>
                    <Image source={require('../../assess/Line2.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.remove_icon}>
                    <Image source={require('../../assess/remove2.png')} />
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.upload}>
              <TouchableOpacity>
                <Image source={require('../../assess/Upload.png')} />
              </TouchableOpacity>
              <Text style={styles.text_upload}>
              The Making of Waffle.mp4
              </Text>
          </View>
          <Image style={styles.line} source={require('../../assess/Line3.png')} />
          <View style={styles.heat}>
              <Image source={require('../../assess/Numbering1.png')}/>
              <Text>
              Heat a Belgian waffle iron.
              </Text>
              <Image source={require('../../assess/Edit1.png')} />
          </View>
          <View style={styles.heat}>
              <Image source={require('../../assess/Numbering2.png')}/>
              <Text>
              Write Directions
              </Text>
              <Image source={require('../../assess/Remove1.png')} />
              <Image source={require('../../assess/Edit1.png')} />
          </View>
          <Text style={styles.text_heart}>
          Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if
          </Text>
          <TextInput style={styles.input} placeholder="123" />
          <View style={styles.contant_add}>
                <TouchableOpacity>
                    <Text style={styles.icon}>
                    <Image  source={require('../../assess/Icon.png')} />
                    Add Ingredient
                    </Text>
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

export default ModelDirection

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:WIDTH*0.08
    },
    image:{
        width:WIDTH*0.85,
        position:'relative',
        height:HEIGHT*0.25
    },
    group_btn:{
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:HEIGHT*0.02,
    },
    edit_icon:{
        width:  WIDTH*0.35,
        borderWidth:1,
        borderColor:'white',
        borderRadius:5,
        backgroundColor:'rgba(8, 8, 8, 0.4)',
    },
    remove_icon:{
        width:  WIDTH*0.085,
        borderWidth:1,
        borderColor:'white',
        borderRadius:5,
        marginHorizontal:10,
        backgroundColor:'rgba(8, 8, 8, 0.4)',
    },
    upload:{
        display:'flex',
        flexDirection:'row',
        paddingTop:10
    },
    text_upload:{
        fontSize:16,
        fontWeight:'400',
        color:'#030F09',
        marginLeft:10
    },
    line:{
        width:WIDTH*0.85,
        marginVertical:10
    },
    heat:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    heart_text:{
        fontSize:14,
        fontWeight:'400',
        color:'#030F09'
    },
    input:{
        borderBottomWidth:1,
        borderColor:'#30BE76'
    },
    contant_add:{
        height:HEIGHT*0.08,
        // backgroundColor:'red',
        width:WIDTH*0.8,
        alignSelf:'center',
        borderRadius:5,
        borderStyle: 'dashed',
        borderWidth:1,
        marginTop:HEIGHT*0.03
    },
    icon:{
        marginVertical:HEIGHT*0.008,
        marginLeft:WIDTH*0.03,
        fontWeight:'400',
        fontSize:16,
        color:'#030F09'
    },
    button:{
        height:HEIGHT*0.08,
        backgroundColor:'#30BE76',
        width:WIDTH*0.8,
        marginVertical:HEIGHT*0.03,
        alignSelf:'center',
        borderRadius:5,
    },
    text_button:{
        color:'white',
        alignSelf:'center',
        lineHeight:HEIGHT*0.08
    }
})
