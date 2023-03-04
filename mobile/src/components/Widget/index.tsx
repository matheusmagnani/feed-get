import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { Sucess } from '../Sucess';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType |null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedBackSent(false);
  }

  function handleFeedbackSent() {
    setFeedBackSent(true)
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={30}
          weight={'bold'}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[0.1, 310.9]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        
      >
        {
          feedbackSent ?
          <Sucess onSendAnotherFeedback={handleRestartFeedback} />
          :
          <>
          {
            feedbackType ?
            <Form 
              feedbackType={feedbackType}
              onFeedbackCanceled={handleRestartFeedback}
              onFeedbackSent={handleFeedbackSent}
            />
            :
            <Options 
              onFeedbackTypeChanged= {setFeedbackType}
            />
          }
          </>
        }
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
