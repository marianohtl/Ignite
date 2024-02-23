import {Text, TextInput,TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SeeBaba} from '../components/SeeBaba';

function handleRemoveBabaColor(name:string)
{
console.log(`BABA REMOVIDA ${name}`);
}
export default function Home()
{
  return(
    <>
      <Text style={styles.textColor}> baba </Text>
      <Text> is </Text>
      <Text> red </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Cor da BABA"
          placeholderTextColor={"#fff"}/>
      <TouchableOpacity style={styles.botaozinho}>
        <Text style={styles.textoBotaozinho}>
          ++
        </Text>
      </TouchableOpacity>
      </View>
      <SeeBaba corDaBaba="vermelha" onRemove={() => handleRemoveBabaColor("Vermelha")}/>
      <SeeBaba corDaBaba="amarela" onRemove={() => handleRemoveBabaColor("Amarela")}/>
      <SeeBaba corDaBaba="rosa" onRemove={() => handleRemoveBabaColor("Rosa")}/>
    </>
  )
}
