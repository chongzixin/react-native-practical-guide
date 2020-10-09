import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalsList] = useState([]);

  const newGoalAddedHandler = newGoal => {
    setGoalsList(currentList => [...currentList, {key:Math.random().toString(), value:newGoal}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={newGoalAddedHandler} />
      <FlatList
        data={goalList}
        renderItem={itemData => (
            <GoalItem title={itemData.item.value}/>
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
