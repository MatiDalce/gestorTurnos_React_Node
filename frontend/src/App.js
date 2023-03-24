import './App.css';
import AppContainer from './components/AppContainer/AppContainer'
import Navbar from './components/NavBar/Navbar'
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import Input from './components/Input/Input'
import Table from './components/Table/Table'

// Tamaños
// Extra small 576 o menos
// Small 577 a 767
// Medium 768 a 991
// Large 992 a 1199
// Extra large 1200 a 1399
// Extra extra large 1400 o mas 

function App() {
  return (
    <div className="App">
      <Navbar title='Gestor de turnos' />

      <AppContainer>
        {/* <Title title='Bienvenido' />

        <Input hasLabel isSearcheable labelTitle='Input' placeholder='escribi algo' isLabelCenter />

        <Table headers={['1', '2', '3']} content={[
          {
            name: 'name',
            dni: '2325235',
            email: 'awfafw@awfafw.com'
          },
          {
            name: 'name',
            dni: '2325235',
            email: 'awfafw@awfafw.com'
          },
          {
            name: 'name',
            dni: '2325235',
            email: 'awfafw@awfafw.com'
          },
          {
            name: 'name',
            dni: '2325235',
            email: 'awfafw@awfafw.com'
          },
          {
            name: 'name',
            dni: '2325235',
            email: 'awfafw@awfafw.com'
          },
          {
            name: 'name',
            dni: '2325235',
            email: 'awfafw@awfafw.com'
          },
        ]} /> */}
      </AppContainer>
    </div>
  );
}

export default App;
