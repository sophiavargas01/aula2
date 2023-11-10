import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorEntrada, setValorEntrada] = useState('33.33')
  const [resultado, setResultado]  =useState('746764746')

  const handleConverter = () => {}
  const handleLimpar = () => {
    setMoedaOrigem('BRL')
    setMoedaDestino('UDS')
    setValorEntrada('33.33')
    setResultado('')
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View>
        <Text style={styles.tbMoeda}>Moeda 1</Text>
        <Picker
  selectedValue={moedaOrigem}
  onValueChange={(itemValue, itemIndex) =>
    setMoedaOrigem(itemValue)
  }>
  <Picker.Item label="Real Brasileiro" value="BRL" />
  <Picker.Item label="Dólar Americano" value="USD" />
  <Picker.Item label="Peso Dominicano" value="DOP" />
  <Picker.Item label="Dólar de Barbados" value="BBD" />
  <Picker.Item label="Peso Chileno" value="CLP" />
  <Picker.Item label="Peso Uruguaio" value="UYU" />
  <Picker.Item label="Bitcoin" value="BTC" />
</Picker>
      </View>
      <View>
        <Text style={styles.tbMoeda}>Moeda 2</Text>
        <Picker
  selectedValue={moedaDestino}
  onValueChange={(itemValue, itemIndex) =>
    setMoedaOrigem(itemValue)
  }>
  <Picker.Item label="Real Brasileiro" value="BRL" />
  <Picker.Item label="Dólar Americano" value="USD" />
  <Picker.Item label="Peso Dominicano" value="DOP" />
  <Picker.Item label="Dólar de Barbados" value="BBD" />
  <Picker.Item label="Peso Chileno" value="CLP" />
  <Picker.Item label="Peso Uruguaio" value="UYU" />
  <Picker.Item label="Bitcoin" value="BTC" />
</Picker>
      </View>
      <View>
        <Text style={styles.tbMoeda}>Valor para Conversão</Text>
        <TextInput style={styles.input} value={valorEntrada} onChangeText={setValorEntrada} keyboardType='numeric'></TextInput>
      </View>
      <View>
        <Pressable style={styles.button}><Text style={styles.title}>Converter</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.title} onPress={handleLimpar}>Limpar</Text></Pressable>
        </View>
        <View>
          <Text>Resultado </Text>
          <Text>{valorEntrada}</Text>
        </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 	'#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff'

  },
  picker: {
    color: '#fff',
    width: 200,
    height: 40,
    backgroundColor: '#000'

  },
  input: {
    color: '#fff',
    textAlign: 'right',
    height: 40,
    width: 200


  },
  tbMoeda: {
    color: '#fff'
  },

  button: {
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
});
