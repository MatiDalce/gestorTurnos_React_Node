
// EDAD: Convertir formato unixtime a número
export function convertUnixtimeToAge(date) {
    const hoy = new Date();
    let age = hoy.getFullYear() - date.getFullYear();
    const mes = hoy.getMonth() - date.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < date.getDate())) {
        age--;
    }
    return age;
}