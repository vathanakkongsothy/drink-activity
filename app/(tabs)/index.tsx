import { ActivityIndicator, Modal, StyleSheet, TouchableOpacity } from 'react-native';
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
  const [modalVisible, setModalVisible] = React.useState(false);

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
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Drunk</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Card>
                  <Card.Title>
                    <Text>People Approval 3 / 3</Text>
                  </Card.Title>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ marginLeft: '-1rem' }} >
                      <CheckBox checked={true} />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginLeft: '-1rem' }}>Vathanak</Text>
                    <Text style={{ marginLeft: '2.5rem' }}>{new Date().toLocaleString()}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ marginLeft: '-1rem' }} >
                      <CheckBox checked={true} />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginLeft: '-1rem' }}>The Seng</Text>
                    <Text style={{ marginLeft: '2.5rem' }}>{new Date().toLocaleString()}</Text>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ marginLeft: '-1rem' }} >
                      <CheckBox checked={true} />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginLeft: '-1rem' }}>The Phea</Text>
                    <Text style={{ marginLeft: '2.5rem' }}>{new Date().toLocaleString()}</Text>
                  </View>
                </Card>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
                  {true ? (<TouchableOpacity
                    style={true ? styles.disabledButton : styles.button}
                    onPress={() => setModalVisible(!modalVisible)}
                    disabled={true}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent' }}>
                      <Text style={{ backgroundColor: 'transparent', marginRight: 8 }}>Waiting Approval</Text>
                      <ActivityIndicator size="small" />
                    </View>
                  </TouchableOpacity>) : <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => console.log('Submit button pressed')}
                  >
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>}

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

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
    padding: 10, // Reduced padding
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    padding: 4,
    alignItems: 'center',
    gap: 10
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
});
