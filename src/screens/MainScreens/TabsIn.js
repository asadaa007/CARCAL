import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabsNav from '../../Navigations/TabNav'

const TabsIn = () => {
  return (
    <View style={styles.container}>
      <TabsNav/>
    </View>
  )
}

export default TabsIn

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})