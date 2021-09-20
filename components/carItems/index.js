import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../styledButton'
import styles from './styles';

const CarItem = (props) =>{
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
        >
          </ImageBackground>
     <View style={styles.titles}>
       <Text style={styles.model}> Model S </Text>
       <Text style={styles.price}> Starting at $69,420</Text>

     </View>

     <StyledButton/>
     </View>
    );
};

export default CarItem;