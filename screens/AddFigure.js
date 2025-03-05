import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Image, Text} from 'react-native';
import {FigureContext} from '../context/FigureContext';
import {Formik} from 'formik';
import * as Yup from 'yup';
const AddFigure = ({navigation}) => {
  const {addFigure} = useContext(FigureContext);

  const handleAddFigure = values => {
    const newFigure = {
      id: Date.now(),
      ...values,
    };
    addFigure(newFigure);
    navigation.goBack();
  };

  const FigureSchema = Yup.object().shape({
    name: Yup.string().min(1).required('Required Field'),
    price: Yup.string().min(1).required('Required Field'),
    image: Yup.string().min(1).required('Required Field'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        price: '',
        image: '',
      }}
      validationSchema={FigureSchema}
      onSubmit={values => {
        handleAddFigure(values);
      }}>
      {({values, errors, touched, handleSubmit, handleChange}) => (
        <View style={{flex: 1, padding: 20}}>
          <Text>Name:</Text>
          <TextInput
            value={values.name}
            onChangeText={handleChange('name')}
            style={{borderWidth: 1, padding: 8, marginBottom: 10}}
          />
          {errors.name && touched.name && (
            <Text style={{color: 'red'}}>{errors.name}</Text>
          )}
          <Text>Price:</Text>
          <TextInput
            value={values.price}
            onChangeText={handleChange('price')}
            style={{borderWidth: 1, padding: 8, marginBottom: 10}}
          />
          {errors.price && touched.price && (
            <Text style={{color: 'red'}}>{errors.price}</Text>
          )}
          <Text>Image URL:</Text>
          <TextInput
            value={values.image}
            onChangeText={handleChange('image')}
            style={{borderWidth: 1, padding: 8, marginBottom: 10}}
          />
          {errors.image && touched.image && (
            <Text style={{color: 'red'}}>{errors.image}</Text>
          )}
          <Button title="Add" onPress={()=>handleSubmit()} />
        </View>
      )}
    </Formik>
  );
};

export default AddFigure;
