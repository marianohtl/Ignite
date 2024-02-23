import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

type Props = {
  corDaBaba: string;
  onRemove: () => void;

}

export function SeeBaba({corDaBaba, onRemove}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Baba é {corDaBaba}</Text>
      <TouchableOpacity style={styles.botaozinho} onPress={onRemove}>
        <Text style={styles.textoBotaozinho}>
          --
        </Text>
      </TouchableOpacity>
    </View>
  );
}