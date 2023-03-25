export const CurrentPage = ({pathname}) => {
    switch (pathname) {
        case '/listado-pacientes':
            return 'Listado de Pacientes'
            
        case '/agregar-paciente':
            return 'Agregar Paciente'
            
        case '/paciente/:id':
            return 'Paciente:'
            
        case '/listado-turnos':
            return 'Listado de Turnos'
            
        case '/agregar-turno':
            return 'Agregar Turno'
            
        case '/turno/:id':
            return 'Turno N°:'
            
        case '/turnos-paciente/:id':
            return 'Turno N°:'
            
        case '/mi-calendario':
            return 'Mi Calendario'

        default:
            return '';
    }
}