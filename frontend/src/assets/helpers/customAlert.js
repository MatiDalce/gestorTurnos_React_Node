import Swal from 'sweetalert2';

export function customAlert(
    type = 'error',
    endpoint,
    title,
    msg,
    textBtnOne = 'Aceptar',
    textBtnTwo = 'Cancelar',
) {
    switch (type) {
        case 'error':
            return Swal.fire({
                icon: 'error',
                title: title,
                text: msg,
                confirmButtonColor: 'var(--skyblue-bg)',
            })
        case 'warning':
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
                        
                    })
                    .catch(error => {
                        
                    });
                }
            })
    
        default:
            return;
    }
}