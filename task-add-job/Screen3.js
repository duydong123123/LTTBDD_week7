import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [job, setJob] = useState('');

  const addJob = () => {
    if (job) {
      // Pass the new task back to Screen2 and go back
      navigation.navigate('Screen2', { newTask: job });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi Twinkle</Text>
      <Text style={styles.subGreeting}>Have a great day ahead</Text>

      <Text style={styles.addTitle}>ADD YOUR JOB</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        placeholderTextColor="#999"
        value={job}
        onChangeText={setJob}
      />
      
      <TouchableOpacity style={styles.finishButton} onPress={addJob}>
        <Text style={styles.buttonText}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subGreeting: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  addTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
    color: '#000',
  },
  finishButton: {
    backgroundColor: '#00bcd4',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen3;
