import Swal from 'sweetalert2';
import { useEffect } from 'react';

export default function ErrorAlert({message,callback}){

    useEffect(() => {
        const showAlert = async () => {
             await Swal.fire({
                text: message,
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: '확인'
            });

            if (callback) {
                callback();
            }

        };

        if(message){
            showAlert();
        }

    }, [message, callback]);

    return null;
}