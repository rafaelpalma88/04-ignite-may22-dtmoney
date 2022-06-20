// import './App.css'
// import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

// const Title = styled.h1`
//   color: purple;
//   font-size: 55px;
// `

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
