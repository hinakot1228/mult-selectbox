import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} =Dimensions.get('window')

const OptionComponent = ({item, selected, change, disabled, }) => {
    const [disabledArea, setDisabledArea] = useState(false)

    useEffect(() => {
        isDisabled()
    }, []);

    const isDisabled = () => { 
      disabled.map((v: number) => {
        if (item.id == v) {
          setDisabledArea(true)
        }
      })
    } 

    return (
      <TouchableOpacity 
          style={[
            styles.optionContainer, 
            {backgroundColor: item.id === selected ? '#eee' : '#fff'}
          ]} 
          onPress={()=>{
              change(item.id, item.name)
          }}
          disabled={disabledArea}
      >
          <Text style={[
            styles.optionTxt, 
            {
              fontWeight: item.id === selected ? 'bold' : 'normal',
              color: disabledArea ? '#808080' : '#333'
            }
          ]}>
            {item.name}
          </Text>
          {item.id === selected && (
            <Icon name={'check'} size={22} color={'green'}/>
          )}
      </TouchableOpacity>
    )
}

export default OptionComponent

const styles = StyleSheet.create({
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
      paddingHorizontal: 24,
      paddingVertical: 10,
    },
    optionTxt: {
      fontSize: 16,
    }
  });