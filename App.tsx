import { useState,  } from 'react';
import { SafeAreaView } from 'react-native';
import Select from './components/Select';
import OptionComponent from './components/OptionComponent';

const areaOptions = [
  {
    id: 1,
    name: '北海道',
  },
  {
    id: 2,
    name: '青森',
  },
  {
    id: 3,
    name: '秋田',
  },
  {
    id: 4,
    name: '山形',
  },
  {
    id: 5,
    name: '福島',
  },
]

export default function App() {
  const [selectedAreas, setSelectedAreas] = useState([])
  
  return (
    <SafeAreaView style={{flex: 1,}}>
       <Select 
          options={areaOptions}
          text="選択してください"
          OptionComponent={OptionComponent}
       />
    </SafeAreaView>
  );
}

