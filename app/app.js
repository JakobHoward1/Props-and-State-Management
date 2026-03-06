// Jakob Howard - 000925699
import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';
export default function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  return (
    <View>
      <ToDoList tasks={tasks} />
    </View>
  );
}