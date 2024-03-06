import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Card, Colors, Image, Slider } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';
import React from 'react';
import { Button } from 'react-native';

export default function TabOneScreen() {
  const [downloadProgress, setDownloadProgress] = React.useState(0);

  const persons = [
    { name: 'Vathanak', image: 'person1.jpg', description: 'Description about person 1' },
    { name: 'The Heng', image: 'person2.jpg', description: 'Description about person 2' },
    { name: 'The Seng', image: 'person3.jpg', description: 'Description about person 3' },
    { name: 'The Phea', image: 'person4.jpg', description: 'Description about person 4' },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDownloadProgress((prevProgress) => {
        if (prevProgress >= 1) {
          clearInterval(timer);
          return 1;
        }
        return prevProgress + 0.1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={{ ...styles.title, textAlign: 'center' }}>Drink Activity</Text>
      {persons.map((person, index) => (
        <Card key={index} containerStyle={{ borderRadius: 4 }}>
          <Card.Title>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <EvilIcons name="user" size={48} color="black" />
              <Text >{person.name}</Text>
            </View>
          </Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  checked={true}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', marginRight: 50 }}>Bottle 1</Text>
                  <Text style={{ alignSelf: 'flex-end' }}>{new Date().toLocaleString()}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  checked={true}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', marginRight: 50 }}>Bottle 2</Text>
                  <Text style={{ alignSelf: 'flex-end' }}>{new Date().toLocaleString()}</Text>
                </View>
              </View>
            </View>
          </Text>
          <Card.Divider />
          <View style={{ marginBottom: 10 }}>
            <Text>{Math.round(downloadProgress * 100)}%</Text>
            <ProgressBar progress={downloadProgress} color="#4CAF50" />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Drunk button pressed')}
          >
            <Text style={styles.buttonText}>Drunk</Text>
          </TouchableOpacity>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: '#000',
    padding: 5, // Reduced padding
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
