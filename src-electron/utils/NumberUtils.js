class NumberUtils {

    /**
     * Returns number formated as currency
     * @param {Number} n - Number to be formated
     * @param {String} [currency=R$] - Currency to be formated
     * @param {String} [locale=pt-BR] - Locale to be formated
     * @returns {String} - Formated number
     */
    static formatCurrency(n, currency = 'R$', locale = 'pt-BR') {
        return `${currency} ${n.toLocaleString(locale, { minimumFractionDigits: 2 })}`;
    }

    /**
     * Format a currency number back to Number
     * @param {String} n - The number with currency
     * @returns {Number} - The number from currency
     */
    static getNumberFromCurrency(n) {
        return parseFloat(n.replace(/[^0-9,]+/g, '').replace(',', '.'));
    }

    /**
     * Return the minutes formated as XhYm. E.g.: 100 => 1h40m
     * @param {Number} n The total minutes
     */
    static getFormatedHoursFromMinutes(n) {
        const hours = parseInt(n / 60);
        const minutes = parseInt(Math.round(n % 60));

        let res = '';
        if (hours > 0)
            res += `${hours}h`;
        res += `${minutes}m`;
        return res;
    }

}

export default NumberUtils;