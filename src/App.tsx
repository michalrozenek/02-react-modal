import React from 'react';
import { Modal } from './components/Modal/Modal.component';
import logo from './images/logo.svg';

import './App.css';

export const  App = () => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <div className={'app'}>
      <img
        className={'app__logo'}
        src={logo}
        alt={'logo'}
      />
      <button
        className={'app__btn'}
        onClick={toggleModal}
      >
        Start now!
      </button>
      <Modal
        title={'This is my modal'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        This is an example modal content!
        Watch whole video to see how to code it!
      </Modal>
    </div>
  );
};
