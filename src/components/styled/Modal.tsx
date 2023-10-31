import React, {FunctionComponent, useState} from 'react';
import {View, Modal as DefaultModal, StyleSheet} from 'react-native';
import {PressableText} from './PressableText';

type ModalProps = {
  children: React.ReactNode;
  activator?: FunctionComponent<{handleOpen: () => void}>;
};

export const Modal = ({activator: Activator, children}: ModalProps) => {
  const [isModalVisble, setModalVisible] = useState(false);
  return (
    <View>
      <DefaultModal
        visible={isModalVisble}
        transparent={false}
        animationType="fade">
        <View style={styles.centerView}>
          <View style={styles.contentView}>{children}</View>
          <PressableText
            onPress={() => {
              setModalVisible(false);
            }}
            text="Close"
          />
        </View>
      </DefaultModal>

      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText
          onPress={() => {
            setModalVisible(true);
          }}
          text="Open"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    marginBottom: 20,
  },
});
