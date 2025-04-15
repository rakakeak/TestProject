import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';

interface ModalSortProps {
  visibleValue: boolean;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;
  setShowModal?: (value: boolean) => void;
  onPress?: () => void;
  renderItem: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const ModalSort: React.FC<ModalSortProps> = ({
  visibleValue,
  onBackdropPress,
  onBackButtonPress,
  renderItem,
  containerStyle,
}) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      hideModalContentWhileAnimating
      useNativeDriver
      isVisible={visibleValue}
      style={styles.containerDialog}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}>
      <View style={[styles.wrapperBox, containerStyle]}>{renderItem}</View>
    </Modal>
  );
};

export default ModalSort;
