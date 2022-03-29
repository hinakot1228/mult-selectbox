import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Modal, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} =Dimensions.get('window')

const Select = ({options, text, OptionComponent, }) => {
  const [txt, setTxt] = useState(text)
  const [txt2, setTxt2] = useState(text)
  const [txt3, setTxt3] = useState(text)
  const [selected, setSelected] = useState()
  const [selected2, setSelected2] = useState()
  const [selected3, setSelected3] = useState()
  const [selectedOptions, setSelectedOptions] =useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const [modalVisible3, setModalVisible3] = useState(false)

  useEffect(() => {
    setSelectedOptions([selected, selected2, selected3])
  }, [selected, selected2, selected3]);

  function renderOption(item: any) {
    return (
      <OptionComponent 
        item={item} 
        selected={selected} 
        change={(id: number, name: string)=>{
          setSelected(id); 
          setTxt(name); 
          setModalVisible(false)
        }}
        disabled={selectedOptions}
      />
    )
  }

  function renderOption2(item: any) {
    return (
      <OptionComponent 
        item={item} 
        selected={selected2} 
        change={(id: number, name: string)=>{
          setSelected2(id); 
          setTxt2(name); 
          setModalVisible2(false)
        }}
        disabled={selectedOptions}
      />
    )
  }

  function renderOption3(item: any) {
    return (
      <OptionComponent 
        item={item} 
        selected={selected3} 
        change={(id: number, name: string)=>{
          setSelected3(id); 
          setTxt3(name); 
          setModalVisible3(false)
        }}
        disabled={selectedOptions}
      />
    )
  }

  function ModalHeader (props) {
    return (
      <View style={styles.headerModal}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={props.modalNumber}
        >
          <Icon name="chevron-left" size={34} color={'#555'} />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>{text}</Text>
      </View>
    )
  }
  return (
    <>
      <TouchableOpacity 
        style={styles.container}
        onPress={() => setModalVisible(true)}  
      >
        <Text style={styles.txt} numberOfLines={1}>
          1 :  {txt}
        </Text>
        <Icon name={'chevron-down'} size={26} color={'gray'} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.container}
        onPress={() => setModalVisible2(true)}  
      >
        <Text style={styles.txt} numberOfLines={1}>
          2 :  {txt2}
        </Text>
        <Icon name={'chevron-down'} size={26} color={'gray'} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.container}
        onPress={() => setModalVisible3(true)}  
      >
        <Text style={styles.txt} numberOfLines={1}>
          3 :  {txt3}
        </Text>
        <Icon name={'chevron-down'} size={26} color={'gray'} />
      </TouchableOpacity>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <ModalHeader
            modalNumber={() => setModalVisible(false)}
          />
          <FlatList
          data={options}
          keyExtractor={(item)=>String(item.id)}
          renderItem={({item})=>renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
      <Modal
        animationType='slide'
        visible={modalVisible2}
        onRequestClose={() => setModalVisible2(false)}
      >
        <SafeAreaView>
          <ModalHeader
            modalNumber={() => setModalVisible2(false)}
          />
          <FlatList
          data={options}
          keyExtractor={(item)=>String(item.id)}
          renderItem={({item})=>renderOption2(item)}
          />
        </SafeAreaView>
      </Modal>
      <Modal
        animationType='slide'
        visible={modalVisible3}
        onRequestClose={() => setModalVisible3(false)}
      >
        <SafeAreaView>
          <ModalHeader
            modalNumber={() => setModalVisible3(false)}
          />
          <FlatList
          data={options}
          keyExtractor={(item)=>String(item.id)}
          renderItem={({item})=>renderOption3(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default Select

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 18,
    borderColor: '#cbcbcb',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    color: '#333',
    fontSize: 16,
    width: width - 90,
  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 12,
    width: width
  },
  headerIcon: {
    position: "absolute",
    top: -8,
    left: 0,
  },
  modalTitle: {
    fontSize: 16,
    color: '#555',
    textAlign: "center"
  },
});