// Variables
var
$ms = 1, // miliseconds
$s = $ms * 1000, // seconds
$m = $s * 60, // minutes
$h = $m * 60, // hours
$d = $h * 24, // days
$w = $d * 7, // weeks
$mth = $d * 30, // months
$y = $d * 365.25; // years

/**
 * @param {String|Number} value
 * Valor a convertir
 * @param {Object} [options={}]
 * Opciones de la conversión
 *  - `format` formato que tendra el valor que devolvera
 *  - `lang` idioma que usara al devolver la conversión
 *  - `miliseconds` define si devolvera milisegundos 
 *  - `seconds` define si devolvera segundos 
 *  - `minutes` define si devolvera minutos 
 *  - `hours` define si devolvera horas 
 *  - `days` define si devolvera días 
 *  - `weeks` define si devolvera semanas 
 *  - `months` define si devolvera meses 
 *  - `years` define si devolvera años 
 * @param {String} [options.format="number"|"short"]
 * Por defecto, si 'value' es un string `number`, si 'value' es un number `short`
 * - `number` te devolvera un number, ej: 104400000
 * - `short` te devolvera un strng pequeño, ej: '1d 5h'
 * - `long` te devolvera un string largo, ej: '1 day 5 hours'
 * @param {String} [options.lang="EN"]
 * Por defecto `EN`
 * - `ES` si 'options.format' es igual a 'long' te devolvera un string en español, ej: '1 día 5 horas'
 * - `EN` si 'options.format' es igual a 'long' te devolvera un string en inglés, ej: '1 day 5 hours'
 * @param {Boolean} [options.miliseconds=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin los milisegundos, ej: '1h 357ms' = '1h'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con los milisegundos, ej: '1h 357ms' = '1h 357ms'
 * @param {Boolean} [options.seconds=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin los seconds, ej: '5m 17s' = '5m'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con los seconds, ej: '5m 17s' = '5m 17s'
 * @param {Boolean} [options.minutes=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin los minutes, ej: '5m 17s' = '17s'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con los minutes, ej: '5m 17s' = '5m 17s'
 * @param {Boolean} [options.hours=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin las hours, ej: '1h 57d' = '57d'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con las hours, ej: '1h 57d' = '1h 57d'
 * @param {Boolean} [options.days=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin los days, ej: '1h 57d' = '1h'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con los days, ej: '1h 57d' = '1h 57d'
 * @param {Boolean} [options.weeks=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin las weeks, ej: '5w 2mth' = '2mth'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con las weeks, ej: '5w 2mth' = '5w 2mth'
 * @param {Boolean} [options.months=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin los months, ej: '5w 2mth' = '5w'
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con los months, ej: '5w 2mth' = '5w 2mth'
 * @param {Boolean} [options.years=true]
 * Por defecto `false`
 * - `true` si 'options.format' no es igual a 'number' te devolvera un string sin los years, ej: '57y' = ''
 * - `false` si 'options.format' no es igual a 'number' te devolvera un string con los years, ej: '57y' = '57y'
 * @return {String|Number}
 * @api public
 */

const ms = function(value, options = {}) {
    // Default
    options = options || {}
    options.lang = ['EN', 'ES'].includes(`${options.lang}`.toUpperCase()) ? `${options.lang}`.toUpperCase() : 'EN'
    options.miliseconds = options.miliseconds || false
    options.seconds = options.seconds || false
    options.minutes = options.minutes || false
    options.hours = options.hours || false
    options.days = options.days || false
    options.weeks = options.weeks || false
    options.months = options.months || false
    options.years = options.years || false

    value = typeof value === 'string' ? value : isFinite(value) ? Number(value) : undefined
    value = typeof value === 'number' && value < 0 ? value * -1 : value
    
    options.format = ['short', 'long', 'number'].includes(`${options.format}`.toLowerCase()) ? `${options.format}`.toLowerCase() : typeof value === 'string' ? 'number' : 'short'

    if (typeof value !== 'number' && typeof value !== 'string') throw new Error("'value' no fue definido")
    if (typeof value === 'string' && !value) throw new Error("'value' no puede ser un string vacio")

    value = typeof value === 'number' ? value.toLocaleString('fillwide', {useGrouping: false}) : value
    value = ((val) => {
        let chars = val.split('')
        let letters = {
            "á": 'a',
            "é": 'e',
            "í": 'i',
            "ó": 'o',
            "ú": 'u',
            "ä": 'a',
            "ë": 'e',
            "ï": 'i',
            "ö": 'o',
            "ü": 'u',
            "à": 'a',
            "è": 'e',
            "ì": 'i',
            "ò": 'o',
            "ù": 'u',
            "â": 'a',
            "ê": 'e',
            "î": 'i',
            "ô": 'o',
            "û": 'u',
            "ạ": 'a',
            "ẹ": 'e',
            "ị": 'i',
            "ọ": 'o',
            "ụ": 'u'
        }

        val = ''
        for (let char of chars) {
            val = `${val}${letters[char] ? letters[char] : char}`
        }

        return val
    })(value.toLowerCase())

    // Arguments
    let chars = value.split('')
    let args = []
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    let formats = {
        "ms": $ms,
        "milisecond": $ms,
        "miliseconds": $ms,
        "milisegundo": $ms,
        "milisegundos": $ms,
        "s": $s,
        "second": $s,
        "seconds": $s,
        "segundo": $s,
        "segundos": $s,
        "sec": $s,
        "secs": $s,
        "seg": $s,
        "segs": $s,
        "m": $m,
        "minute": $m,
        "minutes": $m,
        "minuto": $m,
        "minutos": $m,
        "min": $m,
        "mins": $m,
        "h": $h,
        "hour": $h,
        "hours": $h,
        "hr": $h,
        "hrs": $h,
        "hora": $h,
        "horas": $h,
        "d": $d,
        "day": $d,
        "days": $d,
        "dia": $d,
        "dias": $d,
        "w": $w,
        "week": $w,
        "weeks": $w,
        "wk": $w,
        "wks": $w,
        "semana": $w,
        "semanas": $w,
        "sem": $w,
        "sems": $w,
        "mth": $mth,
        "month": $mth,
        "months": $mth,
        "mths": $mth,
        "mes": $mth,
        "meses": $mth,
        "y": $y,
        "year": $y,
        "years": $y,
        "año": $y,
        "años": $y,
        "yrs": $y,
        "yr": $y
    }

    let temp = ''
    
    for (let i=0; i<chars.length; i++) {
        let char = chars[i]

        if (numbers.includes(char) && !numbers.includes(temp.slice(-1))) {
            let num = temp.split('$')[0]
            let str = temp.split('$')[1]
            
            if (formats[str] && Number(num) > 0) args.push([Number(num), formats[str]])
            if (!formats[str] && Number(num) > 0) args.push([Number(num), 1])

            if (!numbers.includes(temp.slice(0, 1))) temp = `0$${char}`
            if (numbers.includes(temp.slice(0, 1))) temp = `${char}`

        } else if (char !== ' ') {
            if (!numbers.includes(temp.slice(0, 1))) temp = `0$${char}`
            if (numbers.includes(temp.slice(0, 1)) && numbers.includes(char)) temp = `${temp}${char}`

            if (numbers.includes(temp.slice(0, 1)) && !numbers.includes(char)) {
                if (numbers.includes(temp.slice(-1))) { temp = `${temp}$${char}` }
                else if (!numbers.includes(temp.slice(-1))) { temp = `${temp}${char}` }
            }
        }

        if (i >= chars.length - 1) {
            let num = temp.split('$')[0]
            let str = temp.split('$')[1]
            
            if (formats[str] && Number(num) > 0) args.push([Number(num), formats[str]])
            if (!formats[str] && Number(num) > 0) args.push([Number(num), 1])
        }
    }

    value = 0

    for (let arg of args) {
        value+= arg[0] * arg[1]
    }

    args = []
    
    if (options.format !== 'number') {
        let strings = {
            "$y": options.lang === 'ES' ? 'año' : 'year',
            "+$y": options.lang === 'ES' ? 'años' : 'years',
            "$mth": options.lang === 'ES' ? 'mes' : 'month',
            "+$mth": options.lang === 'ES' ? 'meses' : 'months',
            "$w": options.lang === 'ES' ? 'semana' : 'week',
            "+$w": options.lang === 'ES' ? 'semanas' : 'weeks',
            "$d": options.lang === 'ES' ? 'día' : 'day',
            "+$d": options.lang === 'ES' ? 'días' : 'days',
            "$h": options.lang === 'ES' ? 'hora' : 'hour',
            "+$h": options.lang === 'ES' ? 'horas' : 'hours',
            "$m": options.lang === 'ES' ? 'minuto' : 'minute',
            "+$m": options.lang === 'ES' ? 'minutos' : 'minutes',
            "$s": options.lang === 'ES' ? 'segundo' : 'second',
            "+$s": options.lang === 'ES' ? 'segundos' : 'seconds',
            "$ms": options.lang === 'ES' ? 'milisegundo' : 'milisecond',
            "+$ms": options.lang === 'ES' ? 'milisegundos' : 'miliseconds'
        }

        if (value >= $y && !options.years) {
            if (options.format === 'long') args.push(`${Math.floor(value / $y)} ${strings[`${Math.floor(value / $y) >= 2 ? '+' : ''}$y`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $y)}y`)

            value = value % $y
        }

        if (value >= $mth && !options.months) {
            if (options.format === 'long') args.push(`${Math.floor(value / $mth)} ${strings[`${Math.floor(value / $mth) >= 2 ? '+' : ''}$mth`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $mth)}mth`)

            value = value % $mth
        }

        if (value >= $w && !options.weeks) {
            if (options.format === 'long') args.push(`${Math.floor(value / $w)} ${strings[`${Math.floor(value / $w) >= 2 ? '+' : ''}$w`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $w)}w`)

            value = value % $w
        }

        if (value >= $d && !options.days) {
            if (options.format === 'long') args.push(`${Math.floor(value / $d)} ${strings[`${Math.floor(value / $d) >= 2 ? '+' : ''}$d`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $d)}d`)

            value = value % $d
        }

        if (value >= $h && !options.hours) {
            if (options.format === 'long') args.push(`${Math.floor(value / $h)} ${strings[`${Math.floor(value / $h) >= 2 ? '+' : ''}$h`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $h)}h`)

            value = value % $h
        }

        if (value >= $m && !options.minutes) {
            if (options.format === 'long') args.push(`${Math.floor(value / $m)} ${strings[`${Math.floor(value / $m) >= 2 ? '+' : ''}$m`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $m)}m`)

            value = value % $m
        }

        if (value >= $s && !options.seconds) {
            if (options.format === 'long') args.push(`${Math.floor(value / $s)} ${strings[`${Math.floor(value / $s) >= 2 ? '+' : ''}$s`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $s)}s`)

            value = value % $s
        }

        if (value >= $ms && !options.miliseconds) {
            if (options.format === 'long') args.push(`${Math.floor(value / $ms)} ${strings[`${Math.floor(value / $ms) >= 2 ? '+' : ''}$ms`]}`)
            if (options.format === 'short') args.push(`${Math.floor(value / $ms)}ms`)

            value = value % $ms
        }

        value = args.length > 0 ? args.join(' ') : ''
    }

    return value
}

export default ms
