export const CurrentPage = ({pathname, id}) => {
    switch (pathname) {
        case '/listado-pacientes':
            return 'Listado de Pacientes'
            
        case '/agregar-paciente':
            return 'Agregar Paciente'
            
        case `/paciente/${id}`:
            return `Nombre del Paciente (ID: ${id})`
            
        case '/listado-turnos':
            return 'Listado de Turnos'
            
        case '/agregar-turno':
            return 'Agregar Turno'
            
        case `/turno/${id}`:
            return `Turno N°: ${id}`
            
        case `/turnos-paciente/${id}`:
            return `Turnos de: Nombre del Paciente (ID: ${id})`
            
        case '/mi-calendario':
            return 'Mi Calendario'

        default:
            return '';
    }
}