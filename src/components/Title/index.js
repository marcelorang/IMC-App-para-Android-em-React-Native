import React from "react"
import {View, Text } from "react-native"
import styles from "./style";



export default function Title(){
  return(
    <View style={styles.boxtittle}>
      <Text style={styles.textTitle}>IMC App</Text>
    </View>
  );
}
