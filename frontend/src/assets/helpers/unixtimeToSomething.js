
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

// FECHA DE NACIMIENTO: Convertir formato unixtime a fecha yyyy-mm-dd
export function convertUnixtimeToDate(date) {
    const dateObj = new Date(date * 1000);
    const options = { timeZone: 'America/Argentina/Buenos_Aires', year: 'numeric', month: '2-digit', day: '2-digit' };
    // const options = { timeZone: 'America/Argentina/Buenos_Aires', day: '2-digit', month: '2-digit', year: 'numeric' };
    dateObj.setDate(dateObj.getDate() + 1);
    const formattedDate = dateObj.toLocaleDateString('es-AR', options).replace(/\//g, "-");;
    const [day, month, year] = formattedDate.split('-');
    return `${year}-${month}-${day}`;
}