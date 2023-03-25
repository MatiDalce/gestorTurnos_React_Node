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

// RUTAS
export const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<Navbar />}>
            <Route path="*" element={<Error />} />
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/listado-pacientes" element={<PatientList />} />
            <Route path="agregar-paciente" element={<AddPatient />} />
            <Route path="paciente/:pacienteID" element={<Patient />} />
            <Route path="mi-calendario" element={<MyCalendar />} />
            <Route path="listado-turnos" element={<ShiftList />} />
            <Route path="agregar-turno" element={<AddShift />} />
            <Route path="turno/:turnoID" element={<Shift />} />
            <Route path="turnos-paciente/:pacienteID" element={<ShiftPatientList />} />
        </Route>
    )
);