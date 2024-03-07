import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';


export default function ModalScreen() {

  const tasks = useQuery(api.tasks.get);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text >Real Time Notification Approval</Text>

      <View style={styles.container}>
        {tasks?.map(({ _id, text }) => (
          <Text key={_id}>{text}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
