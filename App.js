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

 //nothing is global!!!! so make variables
 //same "principles" often apply...


 //change AntDesign size



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
 var codelog = 0
 var cooklog = 0
 var instrumentlog = 0
 var languagelog = 0
var otherlog = 0
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

           <Image source={require('./assets/cover.png')} style={{ width: 400, height: 75, marginVertical: '-0.35%' }}/>

         <Card style={{backgroundColor: '#eff9e7'}}>

           <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
             <Text style={{fontSize:14, fontFamily: 'best-font',}}>Welcome! Productivize is designed to help you make the best use
                of your time during these unprecedented circumstances. Select some
                skills you would like to learn (or simply spend more time doing) to get started!</Text>
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

         <View style={{marginVertical:3}}></View>

         <AdvButton text="Advance!" onPress={() => {
           this.gettingWhatUserTyped();
           if ((this.state["five"]==true && usersChoice=="")||(this.state["six"]==true && usersChoice2=="")||(this.state["seven"]==true && usersChoice3=="")){
             return;
           }
           if ((this.state["one"]==true || this.state["two"]==true || this.state["three"]==true || this.state["four"]==true || this.state["five"]==true)&&((usersChoice!=="Coding" && usersChoice!=="Cooking" && usersChoice!=="Playing an Instrument" && usersChoice!=="Learning a Language"))&&((usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language"))&&((usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language"))){
             this.gettingStatesOfCheckboxes();
             navigate('Next');
             alert('Congratulations on selecting your first activities! Using the navigation sidebar, you can choose whether you want to view your achievements, view your statistics, start an existing activity, or add a completely new activity. Once you click "OK" here, you will be taken to the screen in which you can start one of the activities that you just selected using the dropdown menu. Once you do that, you will be able to start learning that activity, record time doing that activity, or journal about what you are doing. Happy achieving!')
             whichMotivationalMessage= (Math.floor(Math.random()*3)+1);

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
     title: 'More Activities',
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

           <Image source={require('./assets/cover.png')} style={{ width: 400, height: 75, marginVertical: '-0.35%' }}/>

         <Card style={{backgroundColor: '#eff9e7'}}>

           <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
             <Text style={{fontSize:14., fontFamily: 'best-font',}}>Here you can select more skills or uncheck ones you have already selected. You can add custom activities as well (up to 3).</Text>
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
             whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
           }
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
       TextInputValue: ''
     }
   }


   static navigationOptions = {
     title: 'Next',
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

         }}>




           <MenuTrigger onPress={this.setStatesOnPress}>
           <View style={{alignItems: 'center', flexDirection:'row',}}>

           <Feather name='menu' size={25} onPress={()=> this.props.navigation.openDrawer()} style={{marginRight: '8%', }}/>
             <View style={{alignItems:'center'}}>
             <Card
               style={{
               width: 200,
               paddingHorizontal: 10,
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               backgroundColor: '#eff9e7'
               }}>

                 <Text style={styles.headerText}>Select an Activity!</Text>
                 <AntDesign name='downcircleo' size={16} />

             </Card>
             </View>
             </View>
           </MenuTrigger>



           {whichMotivationalMessage==1 &&
           <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={{paddingVertical:75, fontSize: 75, fontFamily: 'best-font', width: 300}}>What will you achieve today?</Text>
           </View>}

           {whichMotivationalMessage==2 &&
           <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={{paddingVertical:75, fontSize: 75 , fontFamily: 'best-font', width: 300}}>You got it!</Text>
           </View>}

           {whichMotivationalMessage==3 &&
           <View style={{alignItems: 'center', justifyContent: 'center',}}>
             <Text style={{paddingVertical:75, fontSize: 75, fontFamily: 'best-font',width: 300}}>Trust the process.</Text>
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
       jackOfAllTradesAch:false,
       journalAch: false,
       fiveUnlockedAch:false,
       tenUnlockedAch:false,

       codingAch1:false,
       codingAch2:false,
       codingAch3:false,
       cookingAch1:false,
       cookingAch2:false,
       cookingAch3:false,
       instrumentAch1:false,
       instrumentAch2:false,
       instrumentAch3:false,
       languageAch1:false,
       languageAch2:false,
       languageAch3:false,
       otherAch1:false,
       otherAch2:false,
       otherAch3:false,


     }
   }

   checkJackAch (){
     var triedVars = [triedCoding, triedCooking, triedLanguage, triedInstrument, triedOther];
     countUpIfTrue=0;
     var i;
     for (i = 0; i < 5; i++) {
       if (triedVars[i]==true) {
         countUpIfTrue++;
       }
     }
     console.log(countUpIfTrue);
     if (countUpIfTrue>=4){
       this.setState({jackOfAllTradesAch: true});
     }
   }

   checkJournalAch(){
     if (hasWrittenInJournal==true){
       this.setState({journalAch: true});
     }
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
     }
   }

   checkBronzeGoldSilverAch(){
     if (codelog>=10){
       this.setState({codingAch1: true});
     }
     if (codelog>=30){
       this.setState({codingAch2: true});
     }
     if (codelog>=60){
       this.setState({codingAch3: true});
     }


     if (cooklog>=10){
       this.setState({cookingAch1: true});
     }
     if (cooklog>=30){
       this.setState({cookingAch2: true});
     }
     if (cooklog>=60){
       this.setState({cookingAch3: true});
     }


     if (instrumentlog>=10){
       this.setState({instrumentAch1: true});
     }
     if (instrumentlog>=30){
       this.setState({instrumentAch2: true});
     }
     if (instrumentlog>=60){
       this.setState({instrumentAch3: true});
     }


     if (languagelog>=10){
       this.setState({languageAch1: true});
     }
     if (languagelog>=30){
       this.setState({languageAch2: true});
     }
     if (languagelog>=60){
       this.setState({languageAch3: true});
     }


     if (otherlog>=10){
       this.setState({otherAch1: true});
     }
     if (otherlog>=30){
       this.setState({otherAch2: true});
     }
     if (otherlog>=60){
       this.setState({otherAch3: true});
     }
   }

   setAchievementsOnPress = () => {
     this.checkJackAch();
     this.checkJournalAch();
     this.checkFiveAch();
     this.checkTenAch();
     this.checkBronzeGoldSilverAch();
   }

    static navigationOptions  = {
      title:'Achievement'
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
           <AdvButton text={
             <Feather name='refresh-cw' size={20} onPress={()=>this.setAchievementsOnPress()}/>
           }/>
          </View>

         </View>

         <View style={{alignItems:'center', justifyContent:'center', marginLeft:'5%', marginRight: '5%', marginTop: '7%'}}>
           <Card>
             <CardItem>
             <Text style={{fontSize: 14, fontFamily: 'best-font'}}>
                 Here you will see the achievements you unlock as you make progress.
                 When you unlock a new achievement, an icon will show up. Click an icon
                 to view the description of the respective achievement.
             </Text>
             </CardItem>
           </Card>
         </View>


       <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:'9%'}}>

       {this.statejackOfAllTradesAch==true?
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
           <View style={{marginBottom: '100%'}}>
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
           </View>:<View style={{marginBottom: '100%'}}>
             <MaterialIcons size={51} name='computer' color='#fff' />
           </View>
    }

           {this.state.codingAch2==true?
           <View  style={{marginBottom: '100%'}}>
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
           </View>:<View  style={{marginBottom: '100%'}}>
             <MaterialIcons size={51} name='computer' color='#fff'/>
           </View>}


           {this.state.codingAch3==true?
           <View style={{marginBottom: '100%'}}>
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
           <View style={{marginBottom: '100%'}}>
             <MaterialIcons size={51} name='computer' color='#fff'/>
           </View>
           }
         </View>


       <View>

         {this.state.cookingAch1==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <MaterialCommunityIcons size={51} name='chef-hat' color='#fff'/>
        </View>
    }

       {this.state.cookingAch2==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <MaterialCommunityIcons size={51} name='chef-hat' color='#fff'/>
        </View>
    }

    {this.state.cookingAch3=true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <MaterialCommunityIcons size={51} name='chef-hat' color='#fff'/>
        </View>}
        </View>

       <View>

         {this.state.instrumentAch1==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <FontAwesome5 size={51} name='guitar' color='#fff'/>
        </View>}

        {this.state.instrumentAch2==true?

        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <FontAwesome5 size={51} name='guitar' color='#fff' />
           </View> }

       {this.state.instrumentAch3==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <FontAwesome5 size={51} name='guitar' color='#ff'/>
        </View>}
        </View>

        <View>

         {this.state.languageAch1==true?
        <View  style={{marginBottom: '100%'}}>
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
        <View  style={{marginBottom: '100%'}}>
        <Entypo size={51} name='language' color='#fff' />
      </View>}


      {this.state.languageAch2==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <Entypo size={51} name='language' color='#fff'/>
        </View>}

         {this.state.languageAch3==true?
        <View style={{marginBottom: '100%'}}>
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
        <View style={{marginBottom: '100%'}}>
        <Entypo size={51} name='language' color='#e5bb33'/>
      </View>}
        </View>

        <View>

         {this.state.otherAch1==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <Feather size={51} name='book-open' color='#fff'/>
        </View>}


         {this.state.otherAch2==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <Feather size={51} name='book-open' color='#fff'/>
        </View>}

         {this.state.otherAch3==true?
        <View style={{marginBottom: '100%'}}>
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
        </View>:<View style={{marginBottom: '100%'}}>
          <Feather size={51} name='book-open' color='#fff'/>
        </View>}

        </View>
        </View>
        </View>
      );
    }}

    class Logbook extends React.Component{
      static navigationOptions  = {
        title:'Journal/Log'
      }
      render() {
        const {navigate} = this.props.navigation;
        this.state = {
          writer:''
        }

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
              onChangeText={writer => this.setState({writer })
           }

         />

         <AdvButton text="Save!" onPress={() => {
           whatsWrittenInJournal=this.state.writer;
           if (whatsWrittenInJournal.length>=10){
             hasWrittenInJournal=true;
           }
           }}/>

          </View>
          </View>
   }
   class Logbook extends React.Component{
     static navigationOptions  = {
       title:'Journal/Log'
     }
     render() {
       const {navigate} = this.props.navigation;
       this.state = {
         writer:''
       }

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
             placeholder = " Begin writing about your experiences here..."
             placeholderTextColor="silver"
             onChangeText={writer => this.setState({writer })}

        />
         </View>
         </View>
       );
     }
   }

   class Statsscreen extends React.Component{
     static navigationOptions  = {
       title:'Stats'
     }
     render(){
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
<Text  style={{fontSize:28, fontFamily: 'best-font',textAlign: 'justify'}}> {' You have spent a total of ' + ' ' + codelog/3600 + ' hours '+ codelog/60 +  ' minutes on coding'  }</Text>


<Text  style={{fontSize:28, fontFamily: 'best-font',paddingVertical:"5%",textAlign: 'justify'}}> {' You have spent a total of ' + ' ' + cooklog/3600 + ' hours '+ cooklog/60 +  ' minutes on cooking'  }</Text>


<Text  style={{fontSize:28, fontFamily: 'best-font',paddingVertical:"5%",textAlign: 'justify'}}> {' You have spent a total of ' + ' ' + instrumentlog/3600 + ' hours ' +  instrumentlog/60 +  ' minutes on playing an instrument'  }</Text>


<Text  style={{fontSize:28, fontFamily: 'best-font',paddingVertical:"5%",textAlign: 'justify'}}> {' You have spent a total of ' + ' ' + languagelog/3600 + ' hours ' + languagelog/60 +  ' minutes on learning a language'  }</Text>
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
   Stats:{
     screen:Statsscreen
   }



 });

 export default createAppContainer(AppNavigator);



 /*
 if (this.state["one"]==true){
   desiredItems.push("Coding");
 } else {
   desiredItems.push("");
 }

 if (this.state["two"]==true){
   desiredItems.push("Cooking");
 } else {
   desiredItems.push("");
 }

 if (this.state["three"]==true){
   desiredItems.push("Playing an Instrument");
 } else {
   desiredItems.push("");
 }

 if (this.state["four"]==true){
   desiredItems.push("Learning a Language");
 } else {
   desiredItems.push("");
 }

 if (this.state["five"]==true){
   desiredItems.push(this.state.TextInputValue);
 }
 else {
   desiredItems.push("");
 }

 {data2.map((_, i) => (
   <View
     key={i}
     style={{
       position: 'absolute',
       backgroundColor: gradientBackground,
       height: 1,
       right: 0,
       left: 0,
       zIndex: 2,
       opacity: (1 / (gradientHeight2*3)) * (i + 1),
       bottom: (gradientHeight2 - i-1),
     }}
   />
   ))}

   class MoreActivitiesThanInitiallyScreen extends React.Component{
   constructor(props){
     super(props);
     this.state={
       one:wantCoding,
       two:wantCooking,
       three:wantInstrument,
       four:wantLanguage,
       five:wantOther,
       TextInputValue: usersChoice,
       six:wantOther2,
       TextInputValue2: usersChoice2,
       seven:wantOther3,
       TextInputValue3: usersChoice3
     }
   }

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

   settingVarsToStatesOfCheckboxes(){
     wantCoding=this.state.one;
     wantCooking=this.state.two;
     wantInstrument=this.state.three;
     wantLanguage=this.state.four;
     wantOther=this.state.five;
     wantOther2=this.state.six
     wantOther3=this.state.seven
   }

   static navigationOptions  = {
     title:'MoreActivities'
   }

   render() {
     const {navigate} = this.props.navigation;
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>

         <Card style={{backgroundColor: '#eff9e7'}}>

           <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
             <Text style={{fontSize:14., fontFamily: 'best-font',}}>Here you can choose more activities
              that you would like to take up that
             you may not have chosen initially. You can also add up to three custom activities.</Text>
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

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.seven}
             onPress={() => this.whichPressed("seven")}
             style={{marginRight:20}}
             />
             <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
             placeholder= 'Other: enter another activity!' onChangeText={TextInputValue3=>this.setState({TextInputValue3})}/>
           </CardItem>

           <View style={{marginVertical:5}}></View>

         </Card>

         <View style={{marginVertical:20}}></View>

         <AdvButton text="Save" onPress={() => {
           this.gettingWhatUserTyped();
           if ((this.state["five"]==true && usersChoice=="")||(this.state["six"]==true && usersChoice2=="")||((this.state["seven"]==true && usersChoice3==""))){
             return;
           }
           if ((this.state["one"]==true || this.state["two"]==true || this.state["three"]==true || this.state["four"]==true || this.state["five"]==true || this.state["six"]==true || this.state["seven"]==true)&&(usersChoice!=="Coding" && usersChoice!=="Cooking" && usersChoice!=="Playing an Instrument" && usersChoice!=="Learning a Language")||(usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language")||(usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language")){
             this.settingVarsToStatesOfCheckboxes();
             navigate('Next');
             whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
           }
         }}/>
         </View>
     );
     }
 }

 class MoreActivitiesThanInitiallyScreen extends React.Component{
   constructor(props){
     super(props);
     this.state={
       one2:wantCoding,
       two2:wantCooking,
       three2:wantInstrument,
       four2:wantLanguage,
       five2:wantOther,
       TextInputValue1: usersChoice,
       six:wantOther2,
       TextInputValue2: usersChoice2,
       seven:wantOther3,
       TextInputValue3: usersChoice3
     }
   }

   whichPressed(x){
     if (this.state[x] == false){
       this.setState({[x]: true});
     } else {
       this.setState({[x]: false});
     }
   }

   gettingWhatUserTypedAgain(){
     usersChoiceAgain = this.state.TextInputValue1
     usersChoice2 = this.state.TextInputValue2
     usersChoice3 = this.state.TextInputValue3
   }

   settingVarsToStatesOfCheckboxes(){
     wantCodingAgain=this.state.one2;
     wantCookingAgain=this.state.two2;
     wantInstrumentAgain=this.state.three2;
     wantLanguageAgain=this.state.four2;
     wantOtherAgain=this.state.five2;
     wantOther2=this.state.six2;
     wantOther3=this.state.seven2;
   }

   static navigationOptions  = {
     title:'MoreActivities'
   }

   render() {
     const {navigate} = this.props.navigation;
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>

         <Card style={{backgroundColor: '#eff9e7'}}>

           <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
             <Text style={{fontSize:14., fontFamily: 'best-font',}}>Here you can choose more activities
              that you would like to take up that
             you may not have chosen initially. You can also add up to three custom activities.</Text>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.one2}
             onPress={() => this.whichPressed("one2")}
             style={{marginRight:20}}
             />
             <Text style={{fontSize:14., fontFamily: 'best-font'}}>Coding</Text>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.two2}
             onPress={() => this.whichPressed("two2")}
             style={{marginRight:20}}
             />
             <Text style={{fontSize:14., fontFamily: 'best-font'}}>Cooking</Text>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.three2}
             onPress={() => this.whichPressed("three2")}
             style={{marginRight:20}}
             />
             <Text style={{fontSize:14., fontFamily: 'best-font'}}>Playing an Instrument</Text>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.four2}
             onPress={() => this.whichPressed("four2")}
             style={{marginRight:20}}
             />
             <Text style={{fontSize:14., fontFamily: 'best-font'}}>Learning a Language</Text>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.five2}
             onPress={() => this.whichPressed("five2")}
             style={{marginRight:20}}
             />
             <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
             placeholder= 'Other: enter another activity!' onChangeText={TextInputValue1=>this.setState({TextInputValue1})}/>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.six2}
             onPress={() => this.whichPressed("six2")}
             style={{marginRight:20}}
             />
             <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
             placeholder= 'Other: enter another activity!' onChangeText={TextInputValue2=>this.setState({TextInputValue2})}/>
           </CardItem>

           <CardItem body style={{backgroundColor: '#eff9e7'}}>
             <CheckBox color='#74b53d' checked={this.state.seven2}
             onPress={() => this.whichPressed("seven2")}
             style={{marginRight:20}}
             />
             <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize:14., fontFamily: 'best-font'}}
             placeholder= 'Other: enter another activity!' onChangeText={TextInputValue3=>this.setState({TextInputValue3})}/>
           </CardItem>

           <View style={{marginVertical:5}}></View>

         </Card>

         <View style={{marginVertical:20}}></View>

         <AdvButton text="Save" onPress={() => {
           this.gettingWhatUserTypedAgain();
           if ((this.state["five2"]==true && usersChoiceAgain=="")||(this.state["six2"]==true && usersChoice2=="")||((this.state["seven2"]==true && usersChoice3==""))){
             return;
           }
           if ((this.state["one2"]==true || this.state["two2"]==true || this.state["three2"]==true || this.state["four2"]==true || this.state["five2"]==true || this.state["six2"]==true || this.state["seven2"]==true)&&(usersChoiceAgain!=="Coding" && usersChoiceAgain!=="Cooking" && usersChoiceAgain!=="Playing an Instrument" && usersChoiceAgain!=="Learning a Language")||(usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language")||(usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language")){
             this.settingVarsToStatesOfCheckboxes();
             navigate('Next');
             whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
           }
         }}/>
         </View>
     );
     }
 }

   */
