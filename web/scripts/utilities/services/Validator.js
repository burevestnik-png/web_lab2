import Toast from "../components/Toast.js";

export default class Validator {
    static isInputValid( x, y, r ) {
        const errors = [];

        if (x.length === 0) {
            errors.push('Value X must be chosen')
        }

        if (!this.isValidR(r)) {
            errors.push('Value R must be chosen')
        }

        if (this.isValidY(y)) {
            errors.push(this.isValidY(y));
        }

        if (errors.length !== 0) {
            errors.forEach(( error, index ) => {
                setTimeout(() => Toast.errorToast(error), index * 300)
            });
            return false;
        }

        return true;
    }

    static isValidR( value ) {
        return value !== undefined;
    }

    static isValidY( value ) {
        if (value === '0') {
            return "";
        }

        if (value === 'mokString') {
            return "Value Y must be written";
        }

        if (!Number(value)) {
            return "The field Y must be number";
        }

        if (Number(value) < -5 || Number(value) > 3) {
            return "Y value should be from -5 to 3"
        }

        if (value.startsWith("3")) {
            const temp = value.slice(1);
            const numberLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

            let answer = "";
            numberLetters.forEach(numberLetter => {
                if (temp.includes(numberLetter)) {
                    answer = "Y value should be from -5 to 3";
                }
            });

            if (answer.length > 0) {
                return answer;
            }
        }

        if (value.startsWith("-5")) {
            const temp = value.slice(2);
            const numberLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

            let answer = "";
            numberLetters.forEach(numberLetter => {
                if (temp.includes(numberLetter)) {
                    answer = "Y value should be from -5 to 3";
                }
            });

            if (answer.length > 0) {
                return answer;
            }
        }

        return "";
    }
}