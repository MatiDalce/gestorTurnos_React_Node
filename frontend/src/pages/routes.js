import { 
    createBrowserRouter,
    createRoutesFromChildren,
    Route
} from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
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
import ShiftPatientList from "./ShiftPatientList/ShiftPatientList";
import EditShift from "./EditShift/EditShift";
import EditPatient from "./EditPatient/EditPatient";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

// RUTAS
export const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<Navbar />}>
            <Route path="*" element={<Error />} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/listado-pacientes" element={<ProtectedRoute><PatientList /></ProtectedRoute>} />
            <Route path="/agregar-paciente" element={<ProtectedRoute><AddPatient /></ProtectedRoute>} />
            <Route path="/editar-paciente/:id" element={<ProtectedRoute><EditPatient /></ProtectedRoute>} />
            <Route path="/paciente/:id" element={<ProtectedRoute><Patient /></ProtectedRoute>} />
            <Route path="/mi-calendario" element={<ProtectedRoute><MyCalendar /></ProtectedRoute>} />
            <Route path="/listado-turnos" element={<ProtectedRoute><ShiftList /></ProtectedRoute>} />
            <Route path="/agregar-turno" element={<ProtectedRoute><AddShift /></ProtectedRoute>} />
            <Route path="/editar-turno/:id" element={<ProtectedRoute><EditShift /></ProtectedRoute>} />
            <Route path="/turno/:id" element={<ProtectedRoute><Shift /></ProtectedRoute>} />
            <Route path="/turnos-paciente/:id" element={<ProtectedRoute><ShiftPatientList /></ProtectedRoute>} />
        </Route>
    )
);