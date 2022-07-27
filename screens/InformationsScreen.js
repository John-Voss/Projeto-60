import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

import db from '../config';
import ClassScreen from './classScreen';

export default class InformationsScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            text: '',
            class: [],
            students: [],
            absent: false,
            come: false
        }
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Write the attendence of your class:</Text>
                <TextInput
                    onChangeText={text=> {this.setState({text: text})}}
                    value={this.state.text}
                    style={styles.inputBox}
                />
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        var word = this.state.text.toLowerCase().trim();
                        db[word]?
                        (this.setState({class: db[word]})):
                        alert("Can't find this class!");
                    }}>

                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>

                {/* <View>
                    {this.state.class.map((index)=>{
                        return(
                            <ClassScreen
                                students = {this.state.students}
                            />
                        )
                    })}

                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        marginTop: 80,
        paddingLeft: 125,
        paddingRight: 125,
        alignSelf: 'center',
        height: 30,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 50,
        position: 'relative',
        bottom: 40,
        fontFamily: 'arial',
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: 'orange',
        alignSelf: 'center',
        alignItems: 'center',
        border: 'solid',
        borderRadius: 40,
        padding: 5,
        paddingLeft: 125,
        paddingRight: 125
    },
    buttonText:{
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 15
    },
    title:{
        fontFamily: 'Curlz MT',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 25
    }
})