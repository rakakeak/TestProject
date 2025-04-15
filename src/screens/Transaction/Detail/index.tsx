import {RootStackParamList} from '@/navigations/types';
import converDate from '@/utils/date';
import {stringUtils} from '@/utils/stringUtils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'TransactionDetail'>;

const InfoBlock = memo(({label, value}: {label: string; value: string}) => (
  <View style={styles.infoBlock}>
    <Text style={styles.textBoldRegular}>{label.toUpperCase()}</Text>
    <Text style={styles.textRegular}>{value}</Text>
  </View>
));

const SectionColumn = memo(
  ({items}: {items: {label: string; value: string}[]}) => (
    <View style={styles.sectionColumn}>
      {items.map((item, index) => (
        <InfoBlock key={index} label={item.label} value={item.value} />
      ))}
    </View>
  ),
);

const TransactionDetail = ({route}: Props) => {
  const {transaction} = route.params;
  const [expanded, setExapanded] = useState<boolean>(true);

  const {
    id,
    beneficiary_name,
    account_number,
    amount,
    remark,
    unique_code,
    created_at,
    sender_bank,
    beneficiary_bank,
  } = transaction;

  const toggleDetail = useCallback(() => {
    setExapanded(!expanded);
  }, [expanded]);

  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.textBoldRegular}>{`ID TRANSAKSI: #${id}`}</Text>
      </View>

      <View style={styles.contentSub}>
        <Text style={styles.textBoldRegular}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={toggleDetail}>
          <Text style={styles.closeText}>
            {expanded ? 'Tutup' : 'Lihat detail'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      {expanded && (
        <View>
          <Text style={styles.textBoldRegular}>
            {sender_bank.toUpperCase()} → {beneficiary_bank.toUpperCase()}
          </Text>

          <View style={styles.content}>
            <SectionColumn
              items={[
                {label: beneficiary_name, value: account_number.toString()},
                {label: 'berita transfer', value: remark},
                {label: 'waktu dibuat', value: converDate(created_at)},
              ]}
            />
            <SectionColumn
              items={[
                {
                  label: 'nominal',
                  value: `Rp ${stringUtils.thousandSeparator(amount)}`,
                },
                {label: 'kode unik', value: String(unique_code)},
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  contentTitle: {
    paddingVertical: 20,
  },
  contentSub: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  sectionColumn: {
    flex: 1,
  },
  infoBlock: {
    marginBottom: 12,
  },
  textBoldRegular: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textRegular: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  closeText: {
    color: '#FF5000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    borderWidth: 0.5,
    width: '100%',
    marginVertical: 20,
  },
});

export default TransactionDetail;
