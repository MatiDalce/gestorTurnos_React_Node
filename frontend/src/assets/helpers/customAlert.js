import Swal from 'sweetalert2';
import { toast } from './toast';

export function errorAlert(
    title = '',
    msg = '',
) {
    return Swal.fire({
        icon: 'error',
        title: title,
        text: msg,
        confirmButtonColor: 'var(--skyblue-bg)',
    })
}

export function warningEditAlert(
    endpoint = '',
    body,
    title = '',
    msg = '',
    textBtnOne = 'Aceptar',
    textBtnTwo = 'Cancelar',
) {
    return Swal.fire({
        title: title,
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--skyblue-bg)',
        cancelButtonColor: 'var(--red-bg)',
        confirmButtonText: textBtnOne,
        cancelButtonText: textBtnTwo
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(endpoint, { // id = id del turno
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
        } else return
    })
}

export function warningDeleteAlert(
    endpoint = '',
    title = '',
    msg = '',
    textBtnOne = 'Aceptar',
    textBtnTwo = 'Cancelar',
) {
    return Swal.fire({
        title: title,
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--skyblue-bg)',
        cancelButtonColor: 'var(--red-bg)',
        confirmButtonText: textBtnOne,
        cancelButtonText: textBtnTwo
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(endpoint, {
                method: 'DELETE'
            })
            .then(response => response.json())
        }
    })
}