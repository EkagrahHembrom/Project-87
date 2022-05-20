import React { Component} from 'react';
import { Text, View} from 'react-native';

export default class LoadingScreen extends Components{
  render () {
    return (
      <View>
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Login</Text>
      </View>
    )
  }
}
render () {
  if (!this.state.fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <View 
      style={{
            flex:1
            justifyContent: "center",
            alignItems: "center"
}}>
<Button
     title="Sign in with Google"
     onPress={() => this.signInWithGoogleAsync()}
    ></Button>
    </View>
  }
}
return (
  <View style={styles.container}>
  <SafeAareView style={styles.droidSafeArea}/>
  <View style={styles.appTitle}>
  <Image
  source={require("../assets/logo.png"}
  style={dtyles.appIcon}
  ></Image>
  <Text style= {styles.appTitleText}>{'Story Telling\nApp'}>/Text>
  </View>
<View style={styles.buttonContainer}>
<TouchableOpacitystyle={styles.button}
onPress={()=> this.signInWithGoogleAsync()}>
<Image
source={require("../assets/google_icon.png")}
styles={styles.googleIcon}>
</Image>
<Text styles={styles.googleText}> Sign in with Google</Text>
</TouchableOpacity>
</View>
<View style={styles.cloudContainer}>
<Image source={styles.cloudImage}></Image></View></View>);


