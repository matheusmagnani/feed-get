import { useState } from 'react';

import { CloseButton } from '../CloseButton';

import bug from '../../assets/bug.png';
import lampada from '../../assets/lampada.png';
import bubblee from '../../assets/bubblee.png';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bug,
      alt: 'Ícone de um inseto',
    },
  },
  IDEA: {
    title: 'Idéia',
    image: {
      source: lampada,
      alt: 'Ícone de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: bubblee,
      alt: 'Ícone de balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{' '}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/matheus-magnani-ba4842236/"
          target="_blank"
        >
          Matheus Magnani
        </a>
      </footer>
    </div>
  );
}
