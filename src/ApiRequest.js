import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const ApiRequest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getJSON = async () => {
     try {
      const response = await fetch('http://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getJSON();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.address.street}</Text>
          )}
        />
      )}
    </View>
  );
}
  
export default ApiRequest