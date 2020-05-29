import React from 'react';
import iconX from '../../images/x.svg';

import './Modal.component.css';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  }

  return (
    <div className={`modal ${isOpen ? 'modal--open' : ''}`}>
      <div
        ref={outsideRef}
        className={'modal__overlay'}
        onClick={handleCloseOnOverlay}
      />
      <div className={'modal__box'}>
        <button
          className={'modal__close'}
          onClick={onClose}
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
  );
};
