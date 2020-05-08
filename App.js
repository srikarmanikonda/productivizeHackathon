import React, {Component, useState} from 'react';
import { StatusBar, Platform, View, Text, StyleSheet, ActivityIndicator, TextInput, Picker, Alert, YellowBox, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Container, Header, Body, CheckBox, Title, Card, CardItem, Left, Right, Content, Drawer } from 'native-base';
import { Button, Image } from 'react-native-elements';
import AdvButton from './button';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import { AntDesign, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import { WebView } from 'react-native-webview';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";

//nothing is global!!!! so make variables
//same "principles" often apply...


//change AntDesign size

//ADD STATS AND CALENDAR SCREEN
//fix content screens
//fix journal format
//add logo without "productivize" string in more activities?
//fix timer so can't exit when recording or paused



var usersChoice;
var usersChoice2;
var usersChoice3;

var wantCoding;
var wantCooking;
var wantInstrument;
var wantLanguage;
var wantOther;
var wantOther2;
var wantOther3;

var whichMotivationalMessage;

var triedVars=[];

var triedCoding=false;
var triedCooking=false;
var triedLanguage=false;
var triedInstrument=false;
var triedOther=false;

var countUpIfTrue;
var hasWrittenInJournal;
var whatsWrittenInJournal;

var codelog = 0
var cooklog = 0
var instrumentlog = 0
var languagelog = 0
var otherlog = 0

var jack=false;
var journal=false;
var five=false;
var ten=false;
var code1=false;
var code2=false;
var code3=false;
var cook1=false;
var cook2 = false;
var cook3=false;
var lan1=false;
var lan2=false;
var lan3=false;
var inst1=false;
var inst2=false;
var inst3=false;
var ot1=false;
var ot2=false;
var ot3=false;


let customFonts = {
  'best-font': require('./assets/fonts/Manrope-Light.ttf'),
};

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      one:false,
      two:false,
      three:false,
      four:false,
      five:false,
      six: false,
      seven: false,
      TextInputValue: '',
      TextInputValue2: '',
      TextInputValue3: '',
      fontsLoaded: false
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  static navigationOptions = {
    title: 'Home',
  };

  whichPressed(x){
    if (this.state[x] == false){
      this.setState({[x]: true});
    } else {
      this.setState({[x]: false});
    }
  }

  gettingWhatUserTyped(){
    usersChoice = this.state.TextInputValue
    usersChoice2 = this.state.TextInputValue2
    usersChoice3 = this.state.TextInputValue3
  }

  gettingStatesOfCheckboxes(){
    wantCoding=this.state.one;
    wantCooking=this.state.two;
    wantInstrument=this.state.three;
    wantLanguage=this.state.four;
    wantOther=this.state.five;
    wantOther2=this.state.six;
    wantOther3=this.state.seven;
  }

  render() {
    const {navigate} = this.props.navigation;

    if (this.state.fontsLoaded) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <StatusBar hidden/>
        <LinearGradient colors = {['#fff','#95d65e']}
          style={{
           position: 'absolute',
           left: 0,
           right: 0,
           top: 0,
           height: "100%",
         }}
        />

          <Image source={require('./assets/cover.png')} style={{ width: 400, height: 75, marginVertical: '-1%' }}/>
      
        <Card style={{backgroundColor: '#eff9e7'}}>

          <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
            <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Productivize is designed to help you make the best use
               of your time and make the most out of these unprecedented circumstances. Select some 
               skills (or add some of your own) that you would like to learn or simply spend more time doing to get started!</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.one}
            onPress={() => this.whichPressed("one")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Coding</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.two}
            onPress={() => this.whichPressed("two")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Cooking</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.three}
            onPress={() => this.whichPressed("three")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Playing an Instrument</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.four}
            onPress={() => this.whichPressed("four")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Learning a Language</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.five}
            onPress={() => this.whichPressed("five")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue=>this.setState({TextInputValue})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.six}
            onPress={() => this.whichPressed("six")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue2=>this.setState({TextInputValue2})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7', marginBottom: 5}}>
            <CheckBox color='#74b53d' checked={this.state.seven}
            onPress={() => this.whichPressed("seven")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue3=>this.setState({TextInputValue3})}/>
          </CardItem>


        </Card>

        <View style={{marginVertical:1.5}}></View>

        <AdvButton text="Advance!" onPress={() => {
          console.log(this.state.TextInputValue);
          this.gettingWhatUserTyped();
          if ((this.state["five"]==true && usersChoice=="")||(this.state["six"]==true && usersChoice2=="")||(this.state["seven"]==true && usersChoice3=="")){
            return;
          }
          if ((this.state["one"]==true || this.state["two"]==true || this.state["three"]==true || this.state["four"]==true || this.state["five"]==true)&&((usersChoice!=="Coding" && usersChoice!=="Cooking" && usersChoice!=="Playing an Instrument" && usersChoice!=="Learning a Language"))&&((usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language"))&&((usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language"))){
            this.gettingStatesOfCheckboxes();
            //alert('Congratulations on selecting your first activities! Using the navigation sidebar, you can choose whether you want to view your achievements, view your statistics, start an existing activity, or add a completely new activity. Once you click "OK" here, you will be taken to the screen in which you can start one of the activities that you just selected using the dropdown menu. Once you do that, you will be able to start learning that activity, record time doing that activity, or journal about what you are doing. Happy achieving!')
            Alert.alert(
             "Welcome",
             "Congratulations on selecting your first activities! Using the navigation sidebar, you can choose whether you want to view your achievements, view your statistics, journal about what you do, allot time on your calendar to doing certain activities, start an existing activity, or add a completely new activity. Once you click 'OK' here, you will be taken to the screen in which you can start one of the activities that you just selected by using the dropdown menu. Once you do that, you will be able to start learning that activity and record time doing that activity. Once again congratulations on taking a step to find your passions and accomplish your goals and make the most out of these tough times!",
             [
               { text: "OK", onPress: ()=> navigate('Next') }
             ],
             { cancelable: true }
           );
            whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
            if (wantCoding==true){
              triedCoding=true;
            }
            if (wantCooking==true){
             triedCooking=true;
           }
           if (wantInstrument==true){
             triedInstrument=true;
           }
           if (wantLanguage==true){
             triedLanguage=true;
           }
           if (wantOther==true || wantOther2==true || wantOther3==true){
             triedOther=true;
           }
          }
        }}/>
        </View>
    );
    } else {
      return (
        <AppLoading/>
      )
    }
  }
}

//implement side nav

class MoreActivitiesThanInitiallyScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      one1:wantCoding,
      two1:wantCooking,
      three1:wantInstrument,
      four1:wantLanguage,
      five1:wantOther,
      six1:wantOther2,
      seven1:wantOther3,
      TextInputValue1: usersChoice,
      TextInputValue21: usersChoice2,
      TextInputValue31: usersChoice3,
      fontsLoaded: false
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  static navigationOptions = {
    title: 'Add More Activities',
  };

  whichPressed(x){
    if (this.state[x] == false){
      this.setState({[x]: true});
    } else {
      this.setState({[x]: false});
    }
  }

  gettingWhatUserTypedAgain(){
    usersChoice = this.state.TextInputValue1
    usersChoice2 = this.state.TextInputValue21
    usersChoice3 = this.state.TextInputValue31
  }

  gettingStatesOfCheckboxesAgain(){
    wantCoding=this.state.one1;
    wantCooking=this.state.two1;
    wantInstrument=this.state.three1;
    wantLanguage=this.state.four1;
    wantOther=this.state.five1;
    wantOther2=this.state.six1;
    wantOther3 = this.state.seven1;
  }



  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>

         <StatusBar hidden/>

          <Image source={require('./assets/cover.png')} style={{ width: 400, height: 75, marginVertical: '-0.35%' }}/>
      
        <Card style={{backgroundColor: '#eff9e7'}}>

          <CardItem header style={{width: 299.999999999, backgroundColor: '#eff9e7'}}>
            <Text style={{fontSize:14., fontFamily: 'best-font',}}>Here you can select additional skills or uncheck ones you have already selected. You can add custom activities as well.</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.one1}
            onPress={() => this.whichPressed("one1")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Coding</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.two1}
            onPress={() => this.whichPressed("two1")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Cooking</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.three1}
            onPress={() => this.whichPressed("three1")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Playing an Instrument</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.four1}
            onPress={() => this.whichPressed("four1")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize:14., fontFamily: 'best-font'}}>Learning a Language</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.five1}
            onPress={() => this.whichPressed("five1")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
            placeholder= {usersChoice} onChangeText={TextInputValue1=>this.setState({TextInputValue1})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.six1}
            onPress={() => this.whichPressed("six1")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
            placeholder= {usersChoice2} onChangeText={TextInputValue21=>this.setState({TextInputValue21})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7', marginBottom: 5}}>
            <CheckBox color='#74b53d' checked={this.state.seven1}
            onPress={() => this.whichPressed("seven1")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
            placeholder= {usersChoice3} onChangeText={TextInputValue31=>this.setState({TextInputValue31})}/>
          </CardItem>

          <View style={{marginVertical:3}}></View>

        </Card>

        <View style={{marginVertical:3}}></View>

        <AdvButton text="Save!" onPress={() => {
          this.gettingWhatUserTypedAgain();
          if ((this.state["five1"]==true && usersChoice=="")||(this.state["six1"]==true && usersChoice2=="")||(this.state["seven1"]==true && usersChoice3=="")){
            return;
          }
          if ((this.state["one1"]==true || this.state["two1"]==true || this.state["three1"]==true || this.state["four1"]==true || this.state["five1"]==true)&&((usersChoice!=="Coding" && usersChoice!=="Cooking" && usersChoice!=="Playing an Instrument" && usersChoice!=="Learning a Language"))&&((usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language"))&&((usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language"))){
            this.gettingStatesOfCheckboxesAgain();
            navigate('Next');
  
            if (wantCoding==true){
             triedCoding=true;
           }
           if (wantCooking==true){
            triedCooking=true;
          }
          if (wantInstrument==true){
            triedInstrument=true;
          }
          if (wantLanguage==true){
            triedLanguage=true;
          }
          if (wantOther==true || wantOther2==true || wantOther3==true){
            triedOther=true;
          }
          }
          console.log(wantCoding);
          console.log(wantCooking);
          console.log(wantInstrument);
        }}/>

        </View>
    );
  }
}

class SecondScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      coding:wantCoding,
      cooking:wantCooking,
      instrument:wantInstrument,
      language:wantLanguage,
      other:wantOther,
      TextInputValue: '',
      motMessNum: 1
    }
    //this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  /* forceUpdateHandler(){
    this.forceUpdate();
  } */

  static navigationOptions = {
    title: 'Home',
  };

  setStatesOnPress = () => {

    this.setState({["coding"]:wantCoding});
    this.setState({["cooking"]:wantCooking});
    this.setState({["instrument"]: wantInstrument});
    this.setState({["language"]: wantLanguage});
    this.setState({["other"]: wantOther});
    this.setState({["other2"]: wantOther2});
    this.setState({["other3"]: wantOther3});
    

  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <LinearGradient colors = {['#fff','#95d65e']}
          style={{
           position: 'absolute',
           left: 0,
           right: 0,
           top: 0,
           height: "100%",
         }}
        />

        <StatusBar hidden/>
        <MenuProvider style={{ padding: 30 }}>
        <Menu 
        
        onSelect={value => {

          if (value=='Coding'){
            navigate('Coding')
          }

          if (value=='Cooking'){
            navigate('Cooking')
          }

          if (value=='Playing an Instrument'){
            navigate('Instrument')
          }

          if (value=='Learning a Language'){
            navigate('Language')
          }

          if (value==usersChoice){
            navigate('Other')
          }

          whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
          this.setState({motMessNum: whichMotivationalMessage})

        }}>

    
          <MenuTrigger onPress={this.setStatesOnPress} style={{marginTop:'-3%'}}>
          <View style={{alignItems: 'center', flexDirection:'row',}}>

          <Feather name='menu' size={24.999999} onPress={()=> this.props.navigation.openDrawer()} style={{marginRight: '8%', }}/>
            <View style={{alignItems:'center'}}>
            <Card
              style={{
              width: 200,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f3faed'
              }}>

                <Text style={styles.headerText}>Select an Activity!</Text>
                <AntDesign name='downcircleo' size={16} />

            </Card>
            </View>
            </View>
          </MenuTrigger>
          
          <View style={{marginTop:'10%',}}>
              <Text style={{fontFamily:'best-font', textAlign:'center'}}>
                Stay focused on your goals and passions, and have fun at the same time. The results will come naturally.
              </Text>
          </View>




          {whichMotivationalMessage==1 &&
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 55, fontFamily: 'best-font', width: 300, textAlign:'center'}}>What will you achieve today?</Text>
          </View>}

          {whichMotivationalMessage==2 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            
            style={{paddingVertical:75, fontSize: 55 , fontFamily: 'best-font', width: 300,textAlign:'center'}}>Work until your idols become your rivals.</Text>
          </View>}

          {whichMotivationalMessage==3 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-14%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 60, fontFamily: 'best-font',width: 300,textAlign:'center'}}>Trust the process.</Text>
          </View>}

          {whichMotivationalMessage==4 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 40, fontFamily: 'best-font', width: 300,textAlign:'center'}}>It's not whether you get knocked down, it's whether you get up.</Text>
          </View>}

          {whichMotivationalMessage==5 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-10%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 36 , fontFamily: 'best-font', width: 300,textAlign:'center'}}>Today's accomplishments were yesterday's impossibilities.</Text>
          </View>}

          {whichMotivationalMessage==6 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 40, fontFamily: 'best-font',width: 300,textAlign:'center'}}>The true test of leadership is how well you function in a crisis.</Text>
          </View>}

          {whichMotivationalMessage==7 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-12%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 55, fontFamily: 'best-font',width: 300,textAlign:'center'}}>Don't be just good. Be great.</Text>
          </View>}

          {whichMotivationalMessage==8 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 50, fontFamily: 'best-font',width: 300,textAlign:'center'}}>If you can dream it, you can do it.</Text>
          </View>}

          {whichMotivationalMessage==9 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 40, fontFamily: 'best-font',width: 300,textAlign:'center'}}>Imagine your life is perfect in every respect; what would it look like?</Text>
          </View>}

          {whichMotivationalMessage==10 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-12%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 40, fontFamily: 'best-font',width: 300,textAlign:'center'}}>Do what you can with what you have, wherever you are.</Text>
          </View>}

          {whichMotivationalMessage==11 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-15%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 40, fontFamily: 'best-font',width: 300,textAlign:'center'}}>It's never too late to set another goal or to dream a new dream.</Text>
          </View>}

          {whichMotivationalMessage==12 &&
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'-14%'}}>
            <Text onPress={()=>{
              whichMotivationalMessage= (Math.floor(Math.random()*12)+1);
              this.setState({motMessNum: whichMotivationalMessage})
              }
            }
            style={{paddingVertical:75, fontSize: 40, fontFamily: 'best-font',width: 300,textAlign:'center'}}>You don't have to be great to start, but you have to start to be great.</Text>
          </View>}





          <MenuOptions>
            {this.state["coding"] == true ?
            <MenuOption value={"Coding"}>
              <Text style={styles.menuContent}>Coding</Text>
            </MenuOption>: null}

            {this.state["cooking"] == true ?
            <MenuOption value={"Cooking"}>
              <Text style={styles.menuContent}>Cooking</Text>
            </MenuOption>: null}

            {this.state["instrument"] == true ?
            <MenuOption value={"Playing an Instrument"}>
              <Text style={styles.menuContent}>Playing an Instrument</Text>
            </MenuOption>: null}

            {this.state["language"] == true ?
            <MenuOption value={"Learning a Language"}>
              <Text style={styles.menuContent}>Learning a Language</Text>
            </MenuOption>: null}

            {this.state["other"] == true ?
            <MenuOption value={usersChoice}>
              <Text style={styles.menuContent}>{usersChoice}</Text>
            </MenuOption>: null}

            {this.state["other2"] == true ?
            <MenuOption value={usersChoice}>
              <Text style={styles.menuContent}>{usersChoice2}</Text>
            </MenuOption>: null}

            {this.state["other3"] == true ?
            <MenuOption value={usersChoice}>
              <Text style={styles.menuContent}>{usersChoice3}</Text>
            </MenuOption>: null}

          </MenuOptions>

        </Menu>
      </MenuProvider>

      </View>
    );
    }
}

class CodingScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
             hour:0,
             min: 0,
             sec: 0,
             msec: 0
         }
  }
  static navigationOptions  = {
    title:'Coding'
  }
  handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };


    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 100) {
                    this.setState({
                        msec: this.state.msec + 2
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                }

                else if (this.state.min !== 59) {
                    this.setState({
                        msec:0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }

                 else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min:0,
                        hour: ++this.state.hour
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
      if(this.state.sec >=0){
        codelog+= this.state.sec + (this.state.min*60) +(this.state.hour*3600)
        console.log(codelog)
        Alert.alert("Thanks for practicing!",
          'you have been practicing for ' + this.state.hour + ' hours  ' + this.state.min + ' minutes and '  + this.state.sec + ' ' + 'seconds')
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });
        clearInterval(this.interval);
}
    };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
      <Card style={{backgroundColor: '#eff9e7',bottom:"-5%"}}>

        <CardItem header style={{width: "75%", backgroundColor: '#eff9e7',marginVertical:"4%"}}>
          <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Feel free to spend some time learning coding, one of the most revolutionary hobbies in the world that combines technology and critical thinking!</Text>
        </CardItem>
        </Card>

      <WebView
        style={{height: "24.5%", width: 225, marginVertical: "50%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/cKhVupvyhKk' }}

      />
      <Button onPress={()=>{navigate('Next')}}/>
      <Button
      style = {{top:"-150%",backgroundColor:'#74b53d'}}
      title = {!this.state.start? 'Start time': 'Pause Activity'}
      onPress = {this.handleToggle
      }
      />
      <Button
      style = {{top:"-100%",bottom:"15%",backgroundColor:'#74b53d'}}

      title = {'Stop and Log'}
      onPress = {this.handleReset
      }
      />



      </View>
    );
    }


  }

class CookingScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
             hour:0,
             min: 0,
             sec: 0,
             msec: 0
         }
  }
  static navigationOptions  = {
    title:'Cooking'
  }
  handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };


    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 100) {
                    this.setState({
                        msec: this.state.msec + 2
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                }

                else if (this.state.min !== 59) {
                    this.setState({
                        msec:0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }

                 else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min:0,
                        hour: ++this.state.hour
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
      if(this.state.sec >=0){
        cooklog+= this.state.sec + (this.state.min*60) +(this.state.hour*3600)
        console.log(codelog)
        Alert.alert("Thanks for practicing!",
          'you have been practicing for ' + this.state.hour + " " + ' hours' + this.state.min + ' minutes and '  + this.state.sec + ' ' + 'seconds')
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });
        clearInterval(this.interval);
}
    };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
      <Card style={{backgroundColor: '#eff9e7',bottom:"-5%"}}>

        <CardItem header style={{width: "75%", backgroundColor: '#eff9e7',marginVertical:"4%"}}>
          <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Feel free to spend some time learning cooking and become a food conniseur!</Text>
        </CardItem>
        </Card>

      <WebView
        style={{height: "24.5%", width: 225, marginVertical: "50%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/9_5wHw6l11o' }}

      />
      <Button
      style = {{top:"-150%",backgroundColor:'#74b53d'}}
      title = {!this.state.start? 'Start time': 'Pause Activity'}
      onPress = {this.handleToggle
      }
      />
      <Button
      style = {{top:"-100%",bottom:"15%",backgroundColor:'#74b53d'}}

      title = {'Stop and Log'}
      onPress = {this.handleReset
      }
      />


      </View>
    );
    }

}

class InstrumentScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
             hour:0,
             min: 0,
             sec: 0,
             msec: 0
         }
  }
  static navigationOptions  = {
    title:'Instrument'
  }
  handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };


    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 100) {
                    this.setState({
                        msec: this.state.msec + 2
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                }

                else if (this.state.min !== 59) {
                    this.setState({
                        msec:0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }

                 else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min:0,
                        hour: ++this.state.hour
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
      if(this.state.sec >=0){
        cooklog+= this.state.sec + (this.state.min*60) +(this.state.hour*3600)
        console.log(codelog)
        Alert.alert("Thanks for practicing!",
          'you have been practicing for ' + this.state.hour + " " + ' hours' + this.state.min + ' minutes and '  + this.state.sec + ' ' + 'seconds')
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });
        clearInterval(this.interval);
}
    };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
      <Card style={{backgroundColor: '#eff9e7',bottom:"-5%"}}>

        <CardItem header style={{width: "75%", backgroundColor: '#eff9e7',marginVertical:"4%"}}>
          <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Feel free to spend some time learning a new instrument and become the next Yo-Yo Ma or Louis armstrong!</Text>
        </CardItem>
        </Card>

      <WebView
        style={{height: "24.5%", width: 225, marginVertical: "50%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/qZIeVsnTDmI' }}

      />
      <Button
      style = {{top:"-150%",backgroundColor:'#74b53d'}}
      title = {!this.state.start? 'Start time': 'Pause Activity'}
      onPress = {this.handleToggle
      }
      />
      <Button
      style = {{top:"-100%",bottom:"15%",backgroundColor:'#74b53d'}}

      title = {'Stop and Log'}
      onPress = {this.handleReset
      }
      />


      </View>
    );
    }

}

class LanguageScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
             hour:0,
             min: 0,
             sec: 0,
             msec: 0
         }
  }
  static navigationOptions  = {
    title:'Language'
  }
  handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };


    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 100) {
                    this.setState({
                        msec: this.state.msec + 2
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                }

                else if (this.state.min !== 59) {
                    this.setState({
                        msec:0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }

                 else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min:0,
                        hour: ++this.state.hour
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
      if(this.state.sec >=0){
        cooklog+= this.state.sec + (this.state.min*60) +(this.state.hour*3600)
        console.log(codelog)
        Alert.alert("Thanks for practicing!",
          'you have been practicing for ' + this.state.hour + " " + ' hours' + this.state.min + ' minutes and '  + this.state.sec + ' ' + 'seconds')
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });
        clearInterval(this.interval);
}
    };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
      <Card style={{backgroundColor: '#eff9e7',bottom:"-5%"}}>

        <CardItem header style={{width: "75%", backgroundColor: '#eff9e7',marginVertical:"4%"}}>
          <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Feel free to spend some time learning a new language, from Spanish, to Mandarin there are plenty of great resources out there!</Text>
        </CardItem>
        </Card>

      <WebView
        style={{height: "24.5%", width: 225, marginVertical: "50%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/CNbklPRdT4Y' }}

      />
      <Button
      style = {{top:"-150%",backgroundColor:'#74b53d'}}
      title = {!this.state.start? 'Start time': 'Pause Activity'}
      onPress = {this.handleToggle
      }
      />
      <Button
      style = {{top:"-100%",bottom:"15%",backgroundColor:'#74b53d'}}

      title = {'Stop and Log'}
      onPress = {this.handleReset
      }
      />


      </View>
    );
    }

}

class OtherScreen extends React.Component{
  static navigationOptions  = {
    title:'Other'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
      <Card style={{backgroundColor: '#eff9e7',bottom:"-5%"}}>

        <CardItem header style={{width: "75%", backgroundColor: '#eff9e7',marginVertical:"4%"}}>
          <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Feel free to spend some time learning a hobby you shared, one of the most revolutionary hobbies in the world that combines technology and critical thinking!</Text>
        </CardItem>
        </Card>

      <WebView
        style={{height: "24.5%", width: 225, marginVertical: "50%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/cKhVupvyhKk' }}

      />
      <Button
      style = {{top:"-150%",backgroundColor:'#74b53d'}}
      title = {!this.state.start? 'Start time': 'Pause Activity'}
      onPress = {this.handleToggle
      }
      />
      <Button
      style = {{top:"-100%",bottom:"15%",backgroundColor:'#74b53d'}}

      title = {'Stop and Log'}
      onPress = {this.handleReset
      }
      />


      </View>
    );
    }

}



class AchievementScreen extends React.Component{

 constructor(props){
   super(props);
   this.state={
     jackOfAllTradesAch: jack,
     journalAch: journal,

     fiveUnlockedAch:five,
     tenUnlockedAch:ten,
 
     codingAch1:code1,
     codingAch2:code2,
     codingAch3:code3,
     cookingAch1:cook1,
     cookingAch2:cook2,
     cookingAch3:cook3,
     instrumentAch1:inst1,
     instrumentAch2:inst2,
     instrumentAch3:inst3,
     languageAch1:lan1,
     languageAch2:lan2,
     languageAch3:lan3,
     otherAch1:ot1,
     otherAch2:ot2,
     otherAch3:ot3,
     
   

   }
 }

 checkJackAch(){
   triedVars = [triedCoding, triedCooking, triedLanguage, triedInstrument, triedOther];
   console.log(triedVars);
   countUpIfTrue=0;
   var i;
   for (i = 0; i < 5; i++) {
     if (triedVars[i]==true) {
       countUpIfTrue++;
     }
   }
   console.log(countUpIfTrue);
   if (countUpIfTrue>=4){
     jack=true;
     this.setState({["jackOfAllTradesAch"]: true});
     console.log("State of Jack Ach: "+this.state.jackOfAllTradesAch)
     console.log("Jack Achievement Unlocked!")
   }
 }

 checkJournalAch(){
   if (hasWrittenInJournal==true){
     journal=true;
     this.setState({journalAch: true});
   }
   console.log(this.state.journalAch);
 }

 checkFiveAch(){
   var checkAllAch = [this.state.jackOfAllTradesAch, this.state.journalAch, this.state.fiveUnlockedAch, this.state.tenUnlockedAch, this.state.codingAch1, this.state.codingAch2, this.state.codingAch3, this.state.cookingAch1, this.state.cookingAch2, this.state.cookingAch3, this.state.instrumentAch1, this.state.instrumentAch2, this.state.instrumentAch3, this.state.languageAch1, this.state.languageAch2, this.state.languageAch3, this.state.otherAch1, this.state.otherAch2, this.state.otherAch3];
   countUpIfTrue=0;
   var i;
   for (i = 0; i < checkAllAch.length; i++) {
     if (checkAllAch[i]==true) {
       countUpIfTrue++;
     }
   }
   console.log(countUpIfTrue);
   if (countUpIfTrue>=5){
     this.setState({fiveUnlockedAch: true});
     five=true;
   }
 }

 checkTenAch(){
   var checkAllAch = [this.state.jackOfAllTradesAch, this.state.journalAch, this.state.fiveUnlockedAch, this.state.tenUnlockedAch, this.state.codingAch1, this.state.codingAch2, this.state.codingAch3, this.state.cookingAch1, this.state.cookingAch2, this.state.cookingAch3, this.state.instrumentAch1, this.state.instrumentAch2, this.state.instrumentAch3, this.state.languageAch1, this.state.languageAch2, this.state.languageAch3, this.state.otherAch1, this.state.otherAch2, this.state.otherAch3];
   countUpIfTrue=0;
   var i;
   for (i = 0; i < checkAllAch.length; i++) {
     if (checkAllAch[i]==true) {
       countUpIfTrue++;
     }
   }
   console.log(countUpIfTrue);
   if (countUpIfTrue>=10){
     this.setState({tenUnlockedAch: true});
     ten=true;
   }
 }

 checkBronzeGoldSilverAch(){
   console.log("Checking Code Ach - Time is: "+codelog);
   if (codelog>=10){
    code1=true
     this.setState({codingAch1: true});
   }
   if (codelog>=30){
    code2=true
     this.setState({codingAch2: true});
   }
   if (codelog>=60){
    code3=true
     this.setState({codingAch3: true});
   }


   if (cooklog>=10){
     cook1=true
     this.setState({cookingAch1: true});
   }
   if (cooklog>=30){
     cook2=true
     this.setState({cookingAch2: true});
   }
   if (cooklog>=60){
     cook3=true
     this.setState({cookingAch3: true});
   }


   if (instrumentlog>=10){
     inst1=true
     this.setState({instrumentAch1: true});
   }
   if (instrumentlog>=30){
     inst2=true
     this.setState({instrumentAch2: true});
   }
   if (instrumentlog>=60){
     inst3=true
     this.setState({instrumentAch3: true});
   }


   if (languagelog>=10){
     lan1=true
     this.setState({languageAch1: true});
   }
   if (languagelog>=30){
     lan2=true
     this.setState({languageAch2: true});
   }
   if (languagelog>=60){
     lan3=true
     this.setState({languageAch3: true});
   }


   if (otherlog>=10){
     ot1=true
     this.setState({otherAch1: true});
   }
   if (otherlog>=30){
     ot2=true
     this.setState({otherAch2: true});
   }
   if (otherlog>=60){
     ot3=true
     this.setState({otherAch3: true});
   }
 }

 setAchievementsOnPress () {
   this.checkJackAch();
   this.checkJournalAch();
   
   this.checkFiveAch();
   this.checkTenAch();
   this.checkBronzeGoldSilverAch();
   
 }

  static navigationOptions  = {
    title:'Achievements'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{}}>
        <StatusBar hidden/>

       <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

        <View>
         <Feather name='menu' size={24.999999} onPress={()=> this.props.navigation.openDrawer()} style={{marginLeft: '25%', marginTop: '26%'}}/>
        </View>

       <View style={{ flex: 1, alignItems: 'center', marginTop: '7.5%', marginLeft: '-16.5%'}}>
        <Text style={{fontFamily: 'best-font', fontSize: 30}}>Achievements</Text>
       </View>

       <View style={{marginRight: '5%', marginTop: '7%'}}>
         <AdvButton onPress={()=>{this.setAchievementsOnPress();}} text={
           <Feather name='refresh-cw' size={20}/>
         }/>
        </View>

       </View>

       <View style={{alignItems:'center', justifyContent:'center', marginLeft:'5%', marginRight: '5%', marginTop: '7%'}}>
         <Card>
           <CardItem>
           <Text style={{fontSize: 14, fontFamily: 'best-font'}}>
               Here you will see the achievements you unlock as you make progress.
               When you unlock a new achievement, an icon will show up on this screen. Click an icon
               to view the description of the respective achievement. Also, make sure to 
               click the button in the top right to refresh your achievements.
           </Text>
           </CardItem>
         </Card>
       </View>


     <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:'8%'}}>

     {this.state.jackOfAllTradesAch==true?
     <View style={{marginRight:'5%'}}>
        <FontAwesome5 size={67} name='suitcase' color='#73c332' onPress={()=> 
             {Alert.alert(
               "Jack of All Trades",
               "Tried 4 or more activities!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }
           />
      </View>:
      <View style={{marginRight:'5%'}}>
      <FontAwesome5 size={67} name='suitcase' color='#fff'/>
    </View>
  }

     {this.state.journalAch==true?
      <View style={{marginRight:'3%'}}>
        <Ionicons size={67} name='ios-journal' color='#73c332' onPress={()=> 
             {Alert.alert(
               "Dear Diary",
               "Made a journal entry!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:
      <View style={{marginRight:'3%'}}>
       <Ionicons size={67} name='ios-journal' color='#fff'/>
     </View>}


       {this.state.fiveUnlockedAch==true?
      <View style={{marginRight:'1%'}}>
        <MaterialCommunityIcons size={67} name='dice-5' color='#73c332' onPress={()=> 
             {Alert.alert(
               "5 Stars",
               "Unlocked 5 achievements!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginRight:'1%'}}>
        <MaterialCommunityIcons size={67} name='dice-5' color='#fff'/>
      </View>}

         {this.state.tenUnlockedAch==true?
      <View style={{}}>
        <MaterialCommunityIcons size={67} name='dice-d10' color='#73c332' onPress={()=> 
             {Alert.alert(
               "Alexander Hamilton",
               "Unlocked 10 achievements!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{}}>
        <MaterialCommunityIcons size={67} name='dice-d10' color='#fff'/>
      </View>}

      </View>

       <View style={{marginRight: '0.8%', marginLeft: '0.8%', flexDirection:'row', alignItems:'center', justifyContent: 'space-around', marginTop: '14.75%'}}>

        <View>
          {this.state.codingAch1==true?
         <View style={{marginBottom: '93%'}}>
           <MaterialIcons size={51} name='computer' color='#cd7f32' onPress={()=> 
             {Alert.alert(
               "Hello World",
               "Spent one hour practicing coding!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
         </View>:<View style={{marginBottom: '93%'}}>
           <MaterialIcons size={51} name='computer' color='#fff' />
         </View>
  }

         {this.state.codingAch2==true?
         <View  style={{marginBottom: '93%'}}>
           <MaterialIcons size={51} name='computer' color='#c0c0c0' onPress={()=> 
             {Alert.alert(
               "Java The Hutt",
               "Spent five hours practicing coding!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
         </View>:<View  style={{marginBottom: '93%'}}>
           <MaterialIcons size={51} name='computer' color='#fff'/>
         </View>}


         {this.state.codingAch3==true?
         <View style={{marginBottom: '93%'}}>
           <MaterialIcons size={51} name='computer' color='#E5BB33' onPress={()=> 
             {Alert.alert(
               "Turing Machine",
               "Spent ten hours practicing coding!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
         </View>:
         <View style={{marginBottom: '93%'}}>
           <MaterialIcons size={51} name='computer' color='#fff'/>
         </View>
         }
       </View>


     <View>

       {this.state.cookingAch1==true?
      <View style={{marginBottom: '93%'}}>
        <MaterialCommunityIcons size={51} name='chef-hat' color='#cd7f32' onPress={()=> 
             {Alert.alert(
               "Ramen Expert",
               "Spent one hour practicing cooking!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <MaterialCommunityIcons size={51} name='chef-hat' color='#fff'/>
      </View>
  }

     {this.state.cookingAch2==true?
      <View style={{marginBottom: '93%'}}>
        <MaterialCommunityIcons size={51} name='chef-hat' color='#c0c0c0' onPress={()=> 
             {Alert.alert(
               "3-Course Cook",
               "Spent five hours practicing cooking!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <MaterialCommunityIcons size={51} name='chef-hat' color='#fff'/>
      </View>
  }

  {this.state.cookingAch3==true?
      <View style={{marginBottom: '93%'}}>
        <MaterialCommunityIcons size={51} name='chef-hat' color='#e5bb33' onPress={()=> 
             {Alert.alert(
               "Gordon Ramsay",
               "Spent ten hours practicing cooking!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <MaterialCommunityIcons size={51} name='chef-hat' color='#fff'/>
      </View>}
      </View>

     <View>

       {this.state.instrumentAch1==true?
      <View style={{marginBottom: '93%'}}>
        <FontAwesome5 size={51} name='guitar' color='#cd7f32' onPress={()=> 
             {Alert.alert(
               "Hot Cross Buns",
               "Spent one hour practicing playing an instrument!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <FontAwesome5 size={51} name='guitar' color='#fff'/>
      </View>}

      {this.state.instrumentAch2==true?

      <View style={{marginBottom: '93%'}}>
        <FontAwesome5 size={51} name='guitar' color='#c0c0c0' onPress={()=> 
             {Alert.alert(
               "Concierto Candidate",
               "Spent five hours practicing playing an instrument!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <FontAwesome5 size={51} name='guitar' color='#fff' />
         </View> }

     {this.state.instrumentAch3==true?
      <View style={{marginBottom: '93%'}}>
        <FontAwesome5 size={51} name='guitar' color='#e5bb33' onPress={()=> 
             {Alert.alert(
               "Mozart",
               "Spent ten hours practicing playing an instrument!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <FontAwesome5 size={51} name='guitar' color='#fff'/>
      </View>}
      </View>

      <View>

       {this.state.languageAch1==true?
      <View  style={{marginBottom: '93%'}}>
        <Entypo size={51} name='language' color='#cd7f32' onPress={()=> 
             {Alert.alert(
               "¡Muy bien!",
               "Spent one hour learning a language!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:
      <View  style={{marginBottom: '93%'}}>
      <Entypo size={51} name='language' color='#fff' />
    </View>}


    {this.state.languageAch2==true?
      <View style={{marginBottom: '93%'}}>
        <Entypo size={51} name='language' color='#c0c0c0' onPress={()=> 
             {Alert.alert(
               "很好！",
               "Spent five hours learning a language!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <Entypo size={51} name='language' color='#fff'/>
      </View>}

       {this.state.languageAch3==true?
      <View style={{marginBottom: '93%'}}>
        <Entypo size={51} name='language' color='#e5bb33' onPress={()=> 
             {Alert.alert(
               "Translator",
               "Spent ten hours learning a language!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:
      <View style={{marginBottom: '93%'}}>
      <Entypo size={51} name='language' color='#fff'/>
    </View>}
      </View>

      <View>

       {this.state.otherAch1==true?
      <View style={{marginBottom: '93%'}}>
        <Feather size={51} name='book-open' color='#cd7f32' onPress={()=> 
             {Alert.alert(
               "Above and Beyond",
               "Spent one hour doing activities of your own selection!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <Feather size={51} name='book-open' color='#fff'/>
      </View>}


       {this.state.otherAch2==true?
      <View style={{marginBottom: '93%'}}>
        <Feather size={51} name='book-open' color='#c0c0c0' onPress={()=> 
             {Alert.alert(
               "Committed",
               "Spent five hours doing activities of your own selection!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <Feather size={51} name='book-open' color='#fff'/>
      </View>}

       {this.state.otherAch3==true?
      <View style={{marginBottom: '93%'}}>
        <Feather size={51} name='book-open' color='#e5bb33' onPress={()=> 
             {Alert.alert(
               "Ultra-achiever",
               "Spent ten hours doing activities of your own selection!",
               [
                 { text: "OK", }
               ],
               { cancelable: true }
             );
             }
           }/>
      </View>:<View style={{marginBottom: '93%'}}>
        <Feather size={51} name='book-open' color='#fff'/>
      </View>}

      </View>
      </View>
      </View>
    );
  }}

  class Logbook extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        writer: '',
      }
    }

    static navigationOptions  = {
      title:'Journal'
    }

    setVarToWriterState(){
      whatsWrittenInJournal = this.state.writer;
    }

    render() {
      const {navigate} = this.props.navigation;

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar hidden/>
          <LinearGradient
        colors = {['#fff','#95d65e']}
        style={{
                   position: 'absolute',
                   left: 0,
                   right: 0,
                   top: 0,
                   height: "100%",
                 }}
         />
         <View style = {{width:"90%",
         backgroundColor:"#fff",
         borderRadius:25,
         height:"85%",
         marginBottom:"10%",
         justifyContent:"center",
         padding:20,
         top:"1%"}}>

        <TextInput
            style={{ height:50,
           color:"black",
           top:"-49%"}}
            placeholder = "Begin writing about your experiences here..."
            placeholderTextColor="silver"
            onChangeText={writer=>this.setState({writer})}

       />

       <AdvButton text="Save!" onPress={() => {
         this.setVarToWriterState();
         console.log("Written: "+ whatsWrittenInJournal);
         if (whatsWrittenInJournal!=''){
           hasWrittenInJournal=true;
           console.log(hasWrittenInJournal)
         }
         navigate('Next')
        }}

         />

        </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  headerText: {
  fontSize: 18, fontFamily: 'best-font',  margin: 10,
},
  menuContent: {
  color: "#000",
  padding: 2,
  fontSize:14, fontFamily: 'best-font'
}
});

class Statsscreen extends React.Component{
  static navigationOptions  = {
    title:'Stats'
  }

  secondsToHoursMinsAndSeconds(x, y){
    var a = Math.floor(x/3600)
    var b = (x%3600)
    var c = Math.floor(b/60)
    var d = (b%60);
    if (a==1){
      var addSHour=" "
    } else {
      var addSHour="s "
    }

    if (c==1){
      var addSMinute=" "
    } else {
      var addSMinute="s "
    }

    if (d==1){
      var addSSecond=" "
    } else {
      var addSSecond="s"
    }
    var result = "You have been practicing "+y+" for "+a+" hour"+addSHour+c+" minute"+addSMinute+ "and "+d+" second"+addSSecond+"."
    
    return result;
  }

  render(){
    const {navigate} = this.props.navigation;
    return(

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />

<View style={{alignItems:'center', justifyContent:'center', marginHorizontal: '5%'}}>
<Card style={{backgroundColor:'#eff9e7'}}>
  <CardItem style={{backgroundColor:'#eff9e7'}}>
<Text  style={{fontSize:18, fontFamily: 'best-font',textAlign: 'justify'}}> {this.secondsToHoursMinsAndSeconds(codelog, "coding")}</Text>
               </CardItem>

<CardItem style={{backgroundColor:'#eff9e7'}}>
<Text  style={{fontSize:18, fontFamily: 'best-font',paddingVertical:"2%",textAlign: 'justify'}}> {this.secondsToHoursMinsAndSeconds(cooklog, "cooking")}</Text>
</CardItem>

<CardItem style={{backgroundColor:'#eff9e7'}}>

<Text  style={{fontSize:18, fontFamily: 'best-font',paddingVertical:"2%",textAlign: 'justify'}}> {this.secondsToHoursMinsAndSeconds(instrumentlog, "playing an instrument")}</Text>
</CardItem>

<CardItem style={{backgroundColor:'#eff9e7'}}>
<Text  style={{fontSize:18, fontFamily: 'best-font',paddingVertical:"2%",textAlign: 'justify'}}> {this.secondsToHoursMinsAndSeconds(languagelog, "learning a language")}</Text>
</CardItem>

<CardItem style={{backgroundColor:'#eff9e7'}}>
<Text  style={{fontSize:18, fontFamily: 'best-font',paddingVertical:"2%",textAlign: 'justify'}}> {this.secondsToHoursMinsAndSeconds(otherlog, "other activities")}</Text>

  </CardItem>
</Card>
</View>

<View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
  <Card style={{backgroundColor:'#eff9e7', marginRight:'3%'}}>
    <CardItem style={{backgroundColor:'#eff9e7'}}>
      <Text style={{fontSize:16, fontFamily:'best-font'}}>
        Keep up the good work!
      </Text>
    </CardItem>
  </Card>
  <AdvButton text='Return' onPress={() => {navigate('Next');}}/>
</View>
</View>


    );
  }
}


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#eff9e7'}}>
    <View style={{height:150, backgroundColor: '#eff9e7', alignItems:'center', justifyContent: 'center'}}>
      <Image source={require('./assets/splash.png')} style={{height: 120, width: 120}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const DrawerNavigator = createDrawerNavigator({
  Next: {
    screen: SecondScreen
  },
  Achievement: {
    screen: AchievementScreen
  },
  MoreActivities: {
    screen: MoreActivitiesThanInitiallyScreen
  },
  Logbook:{
    screen:Logbook
  },
  Statslol:{
    screen:Statsscreen
  },


}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    labelStyle: {
      fontFamily: 'best-font',
      fontWeight: 'normal',
      fontSize:14,
    },
  },
}
)

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Next: {
    screen: DrawerNavigator
},
Coding:
  {
    screen:CodingScreen
  },
  Cooking:{
    screen:CookingScreen
  },
  Instrument:{
    screen:InstrumentScreen
  },
  Language:{
    screen:LanguageScreen
  },
  Other: {
    screen: OtherScreen
  },
  Achievement:{
    screen:DrawerNavigator
  },
  MoreActivities: {
    screen: DrawerNavigator
  },
  Statslol:{
    screen:DrawerNavigator
  },



});

export default createAppContainer(AppNavigator);