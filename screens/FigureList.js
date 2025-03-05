import React, {useContext, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FigureContext} from '../context/FigureContext';

const FigureList = ({navigation}) => {
  const {figures, deleteFigure} = useContext(FigureContext);
  const [searchText, setSearchText] = useState('');

  const filteredFigures = figures.filter(figure =>
    figure.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <TextInput
        placeholder="Search by name"
        value={searchText}
        onChangeText={setSearchText}
        style={{marginBottom: 10, padding: 8, borderWidth: 1}}
      />

      <FlatList
        data={filteredFigures}
        renderItem={({item}) => (
          <View
            style={{flexDirection: 'row', padding: 10, borderBottomWidth: 1}}>
            <Image source={{uri: item.image}} style={{width: 50, height: 50}} />
            <View style={{marginLeft: 10, flex: 1}}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
            <View style={{display: 'flex',flexDirection:'row', gap:10}}>
              <TouchableOpacity onPress={() => deleteFigure(item.id)}>
                <Text style={{color: 'red'}}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EditFigure', {figure: item})
                }>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Button
        title="Add"
        onPress={() => navigation.navigate('AddFigure')}
      />
    </View>
  );
};

export default FigureList;
