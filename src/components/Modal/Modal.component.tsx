import React from 'react';
import iconX from '../../images/x.svg';

import './Modal.component.css';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

enum ModalAnimation {
  FADE_IN = 'fade-in',
  FADE_OUT = 'fade-out',
}

const animationDelay = 500;
let animationTimeout: NodeJS.Timeout | undefined = undefined;

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const [animationClass, setAnimationClass] = React.useState<ModalAnimation>(ModalAnimation.FADE_IN);
  const outsideRef = React.useRef(null);

  const handleClose = () => {
    setAnimationClass(ModalAnimation.FADE_OUT);
    window.setTimeout(() => {
      onClose();
    }, animationDelay)
  }

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      handleClose();
    }
  }

  React.useEffect(() => {
    isOpen && setAnimationClass(ModalAnimation.FADE_IN);
  }, [isOpen])

  React.useEffect(() => {
    return () => animationTimeout && clearTimeout(animationTimeout);
  })

  return isOpen ? (
    <div className={`modal modal--${animationClass}`}>
      <div
        ref={outsideRef}
        className={'modal__overlay'}
        onClick={handleCloseOnOverlay}
      />
      <div className={'modal__box'}>
        <button
          className={'modal__close'}
          onClick={handleClose}
        >
          <img src={iconX} alt={'close'} />
        </button>
        <div className={'modal__title'}>
          {title}
        </div>
        <div className={'modal__content'}>
          { children }
        </div>
      </div>
    </div>
  ) : null;
};
