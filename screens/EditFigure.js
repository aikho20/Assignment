
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { FigureContext } from '../context/FigureContext';

const EditFigure = ({ route, navigation }) => {
  const { figure } = route.params;
  const { updateFigure } = useContext(FigureContext);

  const [name, setName] = useState(figure.name);
  const [price, setPrice] = useState(figure.price);
  const [image, setImage] = useState(figure.image);

  const handleUpdate = () => {
    const updatedFigure = { ...figure, name, price, image };
    updateFigure(updatedFigure);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      
      <Text>Price:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      
      <Text>Image URL:</Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default EditFigure;
