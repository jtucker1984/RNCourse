import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button, ScrollView} from 'react-native';
import { useState } from 'react';

export default function App() {
const [enteredGoalText, setEnteredGoalText]= useState([]);
const [courseGoals, setCourseGoals]= useState([]);

  function goalInput(enteredText){
    setEnteredGoalText(enteredText);
  } 

  function goalList(){
    setCourseGoals(currentCourseGoals=>[
      ...currentCourseGoals,
      enteredGoalText
    ]);
  }
  
  
  return (
    <View style={styles.appContainer}  >
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
         placeholder='Text Here' 
         onChangeText={goalInput}>

        </TextInput>
        <Button title="Add Goal" onPress={goalList} />
      </View>

      <ScrollView style={styles.labelContainer}>
        {courseGoals.map((goal)=>
        
        <Text style={styles.goalItem} key={goal}>{goal}</Text>)}
        
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
    
  },
  inputContainer: {
    flexDirection: 'row',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: 24,
    borderBottomWidth:1

  },
  textInput:{
    borderWidth:1,
    borderColor:'blue',
    width:'70%',
    marginRight:8,
    padding:8,
    
    
  },
  labelContainer:{
    flex:6
  },
  goalItem:{
    margin: 8,
    padding:8,
    borderRadius:6,
    backgroundColor:'salmon',
    color:'black'
  }
});
