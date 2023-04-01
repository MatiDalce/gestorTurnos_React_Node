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

export function warningAlert(
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
            fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                toast('success', 'La operación fue exitosa')
            })
            .catch(error => {
                toast('error', 'Se produjo un error')
            });
        }
    })
}