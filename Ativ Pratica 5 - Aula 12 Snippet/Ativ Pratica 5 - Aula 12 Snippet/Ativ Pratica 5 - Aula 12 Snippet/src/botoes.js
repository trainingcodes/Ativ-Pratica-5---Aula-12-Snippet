import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
export default criarBotoes = () => {
   var letras =[] 
   var arrays= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    

    arrays.forEach((element) => {
        letras.push(<Text style = {styles.letras}>{element}</Text>)           
    });

    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('a - A (pronuncia-se a)') }>
             {letras[0]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('b - B (pronuncia-se bê)') }>
             {letras[1]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('c - C (pronuncia-se cê)') }>
             {letras[2]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('d - D (pronuncia-se dê)') }>
             {letras[3]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('e - E (pronuncia-se é)') }>
             {letras[4]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('f - F (pronuncia-se éfi)') }>
             {letras[5]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('g - G (pronuncia-se gê)') }>
             {letras[6]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('h - H (pronuncia-se agá)') }>
             {letras[7]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('i - I (pronuncia-se i)') }>
             {letras[8]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('j - J (pronuncia-se jóta)') }>
             {letras[9]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('k - K (pronuncia-se cá)') }>
             {letras[10]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('l - L (pronuncia-se éli)') }>
             {letras[11]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('m - M (pronuncia-se êmi)') }>
             {letras[12]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('n - N (pronuncia-se êni)') }>
             {letras[13]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('o - O (pronuncia-se ó)') }>
             {letras[14]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('p - P (pronuncia-se pê)') }>
             {letras[15]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('q - Q (pronuncia-se quê)') }>
             {letras[16]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('r - R (pronuncia-se érri)') }>
             {letras[17]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('s - S (pronuncia-se éssi)') }>
             {letras[18]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('t -T (pronuncia-se tê)') }>
             {letras[19]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('u - U (pronuncia-se u)') }>
             {letras[20]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('v -V (pronuncia-se vê)') }>
             {letras[21]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('w - W (pronuncia-se dábliu)') }>
             {letras[22]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('x - X (pronuncia-se xis)') }>
             {letras[23]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('y - Y (pronuncia-se ípsilon)') }>
             {letras[24]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('z - Z (pronuncia-se zê)') }>
             {letras[25] } 
          </TouchableOpacity>        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       flexWrap:'wrap',
       width:350,
       height:200
    },
    botao:{
        margin:8.7,
        alignItems:'center',
        backgroundColor:'#40E0D0',
        borderRadius:24,
        width:33,
        height:35,
        borderColor: 'brown',
        borderWidth:1,
        shadowOffset: {
         width: 0,
         height: 6,
      },
      shadowOpacity: 0.70,
      shadowRadius: 13.75,
      
      elevation: 13,

    },
    letras:{
        padding:12,
        fontWeight: 'bold'
        
    }
})