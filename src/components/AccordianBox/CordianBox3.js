import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';


const CordianBox3 = ({titlee}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section style={styles.listStyle}>
      <List.Accordion style={styles.listBox} title={titlee}>
        <List.Item style={styles.listItemStyle} title="First item"/>
        <List.Item style={styles.listItemStyle} title="Second item"/>
      </List.Accordion>
    </List.Section>
  );
};

export default CordianBox3;

const styles = StyleSheet.create({
  listStyle:{
    // backgroundColor:'#EFEFEF',
    flex:1,
    zIndex:4,
    marginBottom:15
  },
  listBox:{
    backgroundColor:'#EFEFEF',
    borderRadius:50,
  },
  listItemStyle:{
    backgroundColor:'#e1e1e1',
  }
});
