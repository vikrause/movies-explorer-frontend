const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const regexName = /^[a-zA-Zа-яА-Я\sё-]+$/;

export function validateEmail(email) {
    if (email !== undefined) {
        if (email.length === 0) {
            return { invalid: true, message: 'Заполните это поле' };
        } else if (!regexEmail.test(email.toLowerCase())) {
            return { invalid: true, message: 'Неверный формат email' };
        } else if (regexEmail.test(email.toLowerCase())) {
            return { invalid: false, message: '' };
        }
    } else {
        return { invalid: true, message: '' };
    }
}

export function validateName(name) {
    if (name !== undefined) {
        if (name.length === 0) {
            return { invalid: true, message: 'Заполните это поле' };
        } else if (!regexName.test(name.toLowerCase())) {
            return {
                invalid: true,
                message: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис'
            };
        } else if (regexName.test(name.toLowerCase())) {
            return { invalid: false, message: '' };
        }
    } else {
        return { invalid: true, message: '' };
    }
}