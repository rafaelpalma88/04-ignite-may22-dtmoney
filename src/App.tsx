// import './App.css'
// import styled from 'styled-components';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import NewTransactionModal from './components/NewTransactionModal'

// const Title = styled.h1`
//   color: purple;
//   font-size: 55px;
// `

Modal.setAppElement('#root'); //utilizaremos isso por questoes de acessibilidade

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }  

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      {/* <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal> */}

      <GlobalStyle />
    </>
  );
}
