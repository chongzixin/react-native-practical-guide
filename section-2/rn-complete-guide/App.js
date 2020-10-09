import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const newGoalAddedHandler = newGoal => {
    // react batches multiple state changes together
    setGoalsList(currentList => [...currentList, {key:Math.random().toString(), value:newGoal}]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = goalId => {
    setGoalsList(currentList => {
      // array.filter always returns a new array
      return currentList.filter((goal) => goal.key !== goalId);
    })
  };

  const hideGoalList = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={newGoalAddedHandler} onHideGoal={hideGoalList}/>
      <FlatList
        data={goalList}
        renderItem={itemData => (
            <GoalItem
              id={itemData.item.key}
              onDelete={deleteGoalHandler}
              title={itemData.item.value}
            />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50,
  },
});
