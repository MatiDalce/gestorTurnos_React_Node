import { createBrowserRouter } from "react-router-dom";
import Error from './Error/Error'
import Login from './Login/Login'
import Home from './Home/Home'
import PatientList from './PatientList/PatientList'
import AddPatient from './AddPatient/AddPatient'
import Patient from './Patient/Patient'
import MyCalendar from './MyCalendar/MyCalendar'
import ShiftList from './ShiftList/ShiftList'
import AddShift from './AddShift/AddShift'
import Shift from './Shift/Shift'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/listado-pacientes',
        element: <PatientList />
    },
    {
        path: '/registro-paciente',
        element: <AddPatient />
    },
    {
        path: '/paciente/{id}',
        element: <Patient />
    },
    {
        path: '/mi-calendario',
        element: <MyCalendar />
    },
    {
        path: '/listado-turnos',
        element: <ShiftList />
    },
    {
        path: '/agregar-turno',
        element: <AddShift />
    },
    {
        path: '/turno/{id}',
        element: <Shift />
    },
]);