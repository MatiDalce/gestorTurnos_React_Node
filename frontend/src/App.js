import { RouterProvider } from 'react-router-dom';
import { router } from './pages/routes';
import Navbar from './components/NavBar/Navbar'
import AppContainer from './components/AppContainer/AppContainer'
import './App.css';

// Tamaños
// Extra small 576 o menos
// Small 577 a 767
// Medium 768 a 991
// Large 992 a 1199
// Extra large 1200 a 1399
// Extra extra large 1400 o mas 

function App() {

  
  // <Table headers={['Nombre', 'DNI', 'Email']} content={[
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com',
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com',
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com',
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  //   {
  //     name: 'name',
  //     dni: '2325235',
  //     email: 'awfafw@awfafw.com'
  //   },
  // ]} />

  return (
    <div className="App">
      <Navbar title='Gestor de turnos' />

      <AppContainer>

        <RouterProvider router={router} />

      </AppContainer>
    </div>
  );
}

export default App;
