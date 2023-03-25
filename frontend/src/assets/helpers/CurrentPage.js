export const CurrentPage = ({pathname, id}) => {
    console.log(pathname, id);
    switch (pathname) {
        case '/listado-pacientes':
            return 'Listado de Pacientes'
            
        case '/agregar-paciente':
            return 'Agregar Paciente'
            
        case `/paciente/${id}`:
            return `Paciente: Nombre del Paciente ${id}`
            
        case '/listado-turnos':
            return 'Listado de Turnos'
            
        case '/agregar-turno':
            return 'Agregar Turno'
            
        case `/turno/${id}`:
            return `Turno N°: Turno del Paciente ${id}`
            
        case `/turnos-paciente/${id}`:
            return `Turnos de: Nombre del Paciente ${id}`
            
        case '/mi-calendario':
            return 'Mi Calendario'

        default:
            return '';
    }
}