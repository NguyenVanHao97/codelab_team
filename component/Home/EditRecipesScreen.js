import React,{useState,useRef,useEffect} from 'react'
import { 
    ScrollView, 
    Image, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity,
    View,
    Dimensions,
    Animated,
    Modal ,Button} from 'react-native'
import { DataTable } from 'react-native-paper'
import ModalGallery from './ModalGallery';
import ModalView from './ModalView';
import ModelDirection from './ModelDirection';
import ModalAdd from './ModalAdd'
import Gallery from './Gallery'
import Ingredients from './Ingredients'
import Cook from './Cook'
import Add from './Add'
// import Modal from 'react-native-modal';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
      
    );
 };
  
const EditRecipesScreen = () => {
    const [visible, setVisible] = useState(false);
    const [visibility, setVisibility] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View >
            <TouchableOpacity style={styles.header}>
            <Image source={require('../../assess/Line1.png')}  />
            <Text style={styles.header_text}>
                back to my recipes
            </Text>
            </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text_edit}>
                    Edit Recipe
                </Text>
                <View  style={styles.edit_cntainer}>
                    <Image style={{borderRadius:5}} source={require('../../assess/Img.png')} />
                    <View style={styles.edit_input}>
                    <Text style={styles.recipesname}>
                        recipes name
                    </Text>
                    <TextInput  placeholder="Sautéed Orange & Mustard" placeholderTextColor="#030F09"/>
                    </View>
                </View>
                </View>
                <View style={styles.main_container}>
                <View style={styles.title_text}>
                    <Text style={styles.text}>
                    Gallery
                    </Text>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Image source={require('../../assess/Edit.png')}/>
                    </TouchableOpacity>
                </View>
            <View>
                <Gallery/>
            </View>
            <View style={styles.title_text}>
                    <Text style={styles.text}>
            Ingredients
                    </Text>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Image source={require('../../assess/Edit.png')}/>
                    </TouchableOpacity>
            </View>
            <View>
                <Ingredients/>     
            </View>

            <View >
                <View style={styles.title_text}>
                <Text style={styles.text}>
                    How to cook
                </Text>
                <Image source={require('../../assess/Edit.png')}/>
                </View>
                <View>
                   <Cook/>
                </View>
            </View>
            <View>
                <View  style={styles.title_text}>
                <Text>
                Additional Info
                </Text>
                <Image source={require('../../assess/Edit.png')}/>
                </View>
                <View>
                   <Add/>
                </View>
            </View>
            <View>
                <Text>
                    Save to
                </Text>
                <View style={styles.contant_save}> 
                <TouchableOpacity style={styles.drop}>
                        <Image style={styles.drop_icon} source={require('../../assess/Line.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_save}>
                        <Text style={styles.text_save} >
                        Save Recipe
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.contant_post}>
                <Text style={styles.text_post}>
                Post to Feed
                </Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Image source={require('../../assess/Remove.png')} />
                <TouchableOpacity>
                <Text style={styles.footer_text}>
                Remove from Cookbook
                </Text>
                </TouchableOpacity>
            </View>
            </View>
            <ModalPoup visible={visible}>
                <View style={styles.modal_gallery} >
                <ScrollView>
                <View style={styles.header_modal}>
                    <Text style={styles.edit_title}>
                    Edit Add
                    </Text>
                    
                    <TouchableOpacity onPress={() => setVisible(false)}>
                    <Image source={require('../../assess/Close.png')} />
                    </TouchableOpacity>
                </View>
                
                {/* <ModalGallery/> */}
                {/* <ModalView/> */}
                {/* <ModelDirection/> */}
                    <ModalAdd/>
                </ScrollView>
                </View>
            </ModalPoup>
        </ScrollView>
    )
}

export default EditRecipesScreen

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:WIDTH*0.06,
        marginTop:HEIGHT*0.02
    },
    recipesname:{
        fontSize:14,
        fontWeight:'400',
        color:'#A8A8A8'
    },
    main_container:{
        marginHorizontal:WIDTH*0.04
    },
    header:{
        marginVertical:HEIGHT*0.02,
        display:'flex',
        flexDirection:'row',
    },
    header_text:{
        fontSize:12,
        color:'#767676',
        paddingHorizontal:WIDTH*0.015,
        alignSelf:'center'
    },
    text_edit:{
        fontSize:24,
        color:'#030F09',
        paddingVertical:HEIGHT*0.01,
        fontWeight:'700'
    },
    edit_cntainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    edit_input:{
        borderBottomWidth:1, 
        borderColor:'#CCCCCC',
        width:WIDTH,
        paddingHorizontal:10
    },
    title_text:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:HEIGHT*0.04
    },
    text:{
        fontWeight:'700',
        fontSize:16,
        color:'#030F09'
    },
    image1:{
        width:WIDTH*0.8,
        marginVertical:HEIGHT*0.01,
    },
    drop:{
        width:WIDTH*0.5,
        height:HEIGHT*0.08,
        backgroundColor:'red',
        borderRadius:5,
        shadowColor: '#F2F2F2',
        shadowOpacity: 0.8,
        elevation: 6,
        backgroundColor : "#0000",
        shadowRadius: 15 ,        
    },
    drop_icon:{
        paddingRight:0
    },
    contant_save:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    button_save:{
        width:WIDTH*0.35,
        height:HEIGHT*0.075,
        borderWidth:1,
        borderColor:'#30BE76',
        borderRadius:5
    },
    text_save:{
        alignSelf:'center',
        color:'#30BE76',
        lineHeight:HEIGHT*0.07
    },
    contant_post:{
        backgroundColor:'#30BE76',
        width:WIDTH*0.815,
        height:HEIGHT*0.07,
        borderRadius:8,
    },
    text_post:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'700',
        alignSelf:'center',
        lineHeight:HEIGHT*0.07
    },
    footer:{
        display:'flex',
        flexDirection:'row',
        marginVertical:HEIGHT*0.03,
        alignSelf:'center'
    },
    footer_text:{
        color:'#30BE76',
        fontWeight:'700',
        fontSize:16
    },
    edit_title:{
        fontSize:20,
        fontWeight:'700',
        color:'#030F09'
    },
    modal_gallery:{
        backgroundColor:'white',
        borderRadius:20,
        marginTop:HEIGHT*0.4
    },
    header_modal:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
        marginHorizontal:20
    }
})
