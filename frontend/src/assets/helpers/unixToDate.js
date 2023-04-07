// FECHA DE NACIMIENTO: Convertir formato unixtime a fecha
export function convertUnixtimeToDate(date) {
    const dateObj = new Date(date * 1000);
    const options = { timeZone: 'America/Argentina/Buenos_Aires', year: 'numeric', month: '2-digit', day: '2-digit' };
    // const options = { timeZone: 'America/Argentina/Buenos_Aires', day: '2-digit', month: '2-digit', year: 'numeric' };
    dateObj.setDate(dateObj.getDate() + 1);
    const formattedDate = dateObj.toLocaleDateString('es-AR', options).replace(/\//g, "-");;
    const [day, month, year] = formattedDate.split('-');
    return `${year}-${month}-${day}`;
}