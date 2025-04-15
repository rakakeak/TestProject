import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface TransactionItemProps {
  sender: string;
  receiver: string;
  name: string;
  amount: number | string;
  created: string;
  status: 'PENDING' | 'SUCCESS';
  onPress: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  sender,
  receiver,
  name,
  amount,
  created,
  status,
  onPress,
}) => {
  const isPending = status === 'PENDING';

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={isPending ? styles.colorPending : styles.colorSuccess} />

      <View style={styles.contentData}>
        <Text style={styles.senderText}>
          {sender} → {receiver}
        </Text>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.contentDatePrice}>
          <Text>{`Rp ${amount} • ${created}`}</Text>
        </View>
      </View>

      <View>
        <View style={isPending ? styles.statusPending : styles.statusSuccess}>
          <Text style={isPending ? styles.textPending : styles.textSuccess}>
            {isPending ? 'Pengecekan' : 'Berhasil'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(TransactionItem);
