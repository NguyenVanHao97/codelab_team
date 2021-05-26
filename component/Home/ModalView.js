import React from 'react'
import { StyleSheet, Text, View ,Dimensions, Image,TouchableOpacity, TextInput} from 'react-native'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SignupSchema = Yup.object().shape({
   editText: Yup.string()
     .min(2, 'quá ngắn!')
     .max(50, 'quá dài!')
     .required('Không được bỏ trống'),
 });

const ModalView = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.group_btn}>
                    <TouchableOpacity>
                    <Image source={require('../../assess/Remove1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../assess/Edit.png')} />
                    </TouchableOpacity>
                </View>
                <Formik 
                 initialValues={{
                    editText: ''
                     }}
                    validationSchema={SignupSchema}
                >
                {({ 
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid, }) => (
                    <Form>
                        <Field name="editText" style={styles.textinput}  
                        onChangeText={handleChange('editText')}
                        onBlur={handleBlur('editText')}
                        value={values.editText} />
                        {errors.editText &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.editText}</Text>
                        }
                    </Form>
                )}
                </Formik>
            </View>
            <View>
                <View style={styles.group_edit}>
                    <Text style={styles.edit_text}>
                    1 heap of Ocean Bloom.
                    </Text>
                    <TouchableOpacity>
                        <Image  source={require('../../assess/Edit1.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.group_edit}>
                    <Text style={styles.edit_text}>
                    3 batches of Water Cudweed
                    </Text>
                    <TouchableOpacity>
                        <Image  source={require('../../assess/Edit1.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contant_add}>
                <TouchableOpacity>
                    <Text style={styles.icon}>
                    <Image  source={require('../../assess/Icon.png')} />
                    Add Ingredient
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity >
                    <Text style={styles.text_button}>
                    Save Gallery
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalView

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:WIDTH*0.08
    },
    group_btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:HEIGHT*0.015
    },
    textinput:{
        // backgroundColor:'red',
        borderBottomWidth:1,
        borderColor:'#30BE76'
    },
    group_edit:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    },
    edit_text:{
        fontSize:14,
        fontWeight:'400',
        color:'#030F09'
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
        marginVertical:HEIGHT*0.01,
        marginLeft:WIDTH*0.03,
        fontWeight:'400',
        fontSize:16,
        color:'#030F09'
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
