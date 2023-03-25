import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/routes';

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
    <RouterProvider router={router} />
  );
}

export default App;
