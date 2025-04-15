import Loading from '@/components/Loading';
import RadioButton from '@/components/Radio';
import Search from '@/components/Search';
import TransactionItem from '@/components/TransactionItem';
import {useModal} from '@/hooks/useModal';
import {Transaction} from '@/models';
import {navigate} from '@/navigations/function';
import {LABEL_RADIO} from '@/utils/constants';
import converDate from '@/utils/date';
import {stringUtils} from '@/utils/stringUtils';
import React, {Suspense, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTransactionList} from './function';
const ModalSort = React.lazy(() => import('@/components/ModalSort'));

const TransactionList = () => {
  const {showModal, openModal, closeModal} = useModal();
  const {filteredData, loading, textSearch, onChangeText, label, handleRadio} =
    useTransactionList(closeModal);

  const renderItem = useCallback(
    ({item}: {item: Transaction}) => (
      <TransactionItem
        sender={item.sender_bank}
        receiver={item.beneficiary_bank}
        name={item.beneficiary_name}
        amount={stringUtils.thousandSeparator(item.amount)}
        created={converDate(item.created_at)}
        status={item.status}
        onPress={() => navigate('TransactionDetail', {transaction: item})}
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item: Transaction) => item.id, []);

  const renderModalItems = useMemo(
    () =>
      LABEL_RADIO.map(item => (
        <View key={item.id}>
          <RadioButton
            onPress={() => handleRadio({item})}
            selected={item.title === label}
            title={item.title}
          />
        </View>
      )),
    [handleRadio, label],
  );

  return (
    <View style={styles.pages}>
      <Search
        placeholder={'Cari nama, bank, atau nominal'}
        onPress={openModal}
        value={textSearch}
        onChangeText={onChangeText}
        label={label}
      />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={
            <Text style={styles.emptyComponent}>
              Sepertinya data yang anda cari tidak ada
            </Text>
          }
        />
      )}

      <Suspense fallback={<Loading />}>
        <ModalSort
          visibleValue={showModal}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          renderItem={renderModalItems}
        />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: 6,
    flex: 1,
    marginTop: 70,
  },
  emptyComponent: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TransactionList;
