// UNE FECHA Y HORA Y LOS CONVIERTE A ISOString
export function joinDateTimeToISOString(date, hour) {
    const dateTime = new Date(`${date}T${hour}:03-00:00`);
    return dateTime.toISOString().slice(0, -8);
}

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

// FECHA DE NACIMIENTO: Convertir formato unixtime a fecha yyyy-mm-dd (es para mostrarse en inputs date)
export function convertUnixtimeToDate(date) {
    const dateObj = new Date(date * 1000);
    const options = { timeZone: 'America/Argentina/Buenos_Aires', year: 'numeric', month: '2-digit', day: '2-digit' };
    // const options = { timeZone: 'America/Argentina/Buenos_Aires', day: '2-digit', month: '2-digit', year: 'numeric' };
    dateObj.setDate(dateObj.getDate() + 1);
    const formattedDate = dateObj.toLocaleDateString('es-AR', options).replace(/\//g, "-");;
    const [day, month, year] = formattedDate.split('-');
    return `${year}-${month}-${day}`;
}

// FORMATO ISO A FECHA Y HORA - dateTime = fecha formato ISO string | get = 'date' o 'hour'
export function convertISOStringtoDateTime(dateTime, get) {
    const dateString = dateTime;
    const dateObj = new Date(dateString);
    // joinDateTimeToISOString
    if(get === 'date') { // FECHA
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const day = String(dateObj.getDate()).padStart(2, "0");
        return `${day}-${month}-${year}`;
    } else { // HORA
        const hours = String(dateObj.getHours()).padStart(2, "0");
        const minutes = String(dateObj.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }
}

// FORMATO ISO A FECHA Y HORA - dateTime = fecha formato ISO string | get = 'date' o 'hour'
export function addOneHourISOString(date) {
    const dateString = date;
    const dateObj = new Date(dateString);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    const hours = String(dateObj.getHours() + 1).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    
    const oneHourLater = new Date(`${year}-${month}-${day}T${hours}:${minutes}:03-00:00`);

    return oneHourLater.toISOString().slice(0, -8);
}