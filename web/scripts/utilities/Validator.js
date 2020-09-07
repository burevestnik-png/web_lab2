import Toast from "./Toast.js";

export default class Validator {
    static isInputValid(x, y, z) {
        const errors = [];

        if (x.length === 0) {
            errors.push('Value X must be chosen')
        }

        if (errors) {
            errors.forEach(value => Toast.errorToast(value));
            return false;
        }

        return true;
    }

    static isValidR( value ) {
        return isNaN(value) ? "" : ""
    }

    static isValidY( value ) {
        if (value === '0') {
            return "";
        }

        if (!Number(value)) {
            return "";
        }

        if (Number(value) < -3 || Number(value) > 3) {
            return ""
        }

        return "";
    }
}