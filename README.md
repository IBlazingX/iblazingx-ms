
[![Package](https://img.shields.io/npm/v/iblazingx-ms?color=green&label=package)](https://www.npmjs.com/package/iblazingx-ms)
[![Size](https://img.shields.io/bundlephobia/min/iblazingx-ms)](https://www.npmjs.com/package/iblazingx-ms)
[![Paypal](https://img.shields.io/badge/donate-paypal-blue)](https://www.paypal.me/blazingx)
[![Twitter](https://img.shields.io/twitter/follow/IBlazingX?style=social)](https://www.twitter.com/IBlazingX)

[![NPM](https://nodei.co/npm/iblazingx-ms.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/iblazingx-ms)

*Este paquete es muy util para convertir muchos formatos de tiempo a milisegundos o viseversa.*
***
### Instalación
```bash
npm install iblazingx-ms
```

### Última actualización (^2.1.1)
Se cambiaron las `opciones`:
| Opción *nombre* | Opcion(es) *valores* | Funcionamiento |
| --------------- | -------------------- | -------------- |
| format | `"short"`, `"long"` o `"number"`; ***por defecto:** si el valor a convertir es un número `"short"`, si el valor a convertir es un texto `"number"`* | Defíne el formato de salida |
| lang | `"EN"` o `"ES"`; ***por defecto:** `"EN"`* | Defíne que idióma tendra la salida |
| miliseconds | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a milisegundos o no |
| seconds | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a segundos o no |
| minutes | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a minutos o no |
| hours | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a horas o no |
| days | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a días o no |
| weeks | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a semanas o no |
| months | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a meses o no |
| years | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a años o no |

Se añadieron mas opciones de formato de texto *(los carácteres especiales son validos, ej: `á => a`, `Ị = I`)*:
| Formato | Valores permitidos | Ejemplos |
| --------------- | -------------------- | -------------- |
| milisegundos | `ms`,  `milisecond`,  `milisegundo`,  `miliseconds`,  `milisegundos` | `"10ms" => 10` `"10 milisegundo" => 10` `"10milise" => 0` |
| segundos | `s`, `sec`,  `seg`,  `secs`,  `segs`,  `second`,  `segundo`, `seconds`,  `segundos` | `"10s" => 10000` `"10 segs" => 10000` `"10seci" => 0` |
| minutos | `m`, `min`,  `mins`,  `minute`,  `minuto`,  `minutes`,  `minutos` | `"10m" => 600000` `"10 min" => 600000` `"10minuts" => 0` |
| horas | `h`, `hr`,  `hrs`,  `hour`,  `hora`,  `hours`,  `horas` | `"10h" => 36000000` `"10 hr" => 36000000` `"10hor" => 0` |
| días | `d`, `day`,  `dia`,  `days`,  `dias` | `"10d" => 864000000` `"10 día" => 864000000` `"10da" => 0` |
| semanas | `w`, `wk`,  `sem`,  `wks`,  `sems`,  `week`,  `semana`,  `weeks`,  `semanas` | `"10w" => 6048000000` `"10 sems" => 6048000000` `"10weks" => 0` |
| meses | `mth`, `mths`,  `month`,  `mes`,  `months`,  `meses` | `"10mth" => 25920000000` `"10 meses" => 25920000000` `"10mts" => 0` |
| años | `y`, `yr`,  `yrs`,  `year`,  `año`,  `years`,  `años` | `"10y" => 315576000000` `"10 yrs" => 315576000000` `"10ano" => 0` |
***
#### Contenido
- [Inicio rápido](#inicio-rapido)
- [Funcionamiento](#funcionamiento-y-ejemplos)
- [Valores de los formatos](#valores-de-los-formatos)

## Inicio rápido
**Con módulos**
```js
import ms from 'iblazingx-ms'

let dateNow = new Date('2/03/2020 03:27:10')
let dateBirthday = new Date('20/03/2020 17:47:53')

console.log(`Mi cumpleaños es en ${ms(dateBirthday.getTime() - dateNow.getTime(),{format:"long",lang:"ES"})}`) // Mi cumpleaños es en 8 días 14 horas 20 minutos 43 segundos
```

**Sin módulos**
```js
const ms = require('iblazingx-ms')

let dateNow = new Date('2/03/2020 03:27:10')
let dateBirthday = new Date('20/03/2020 17:47:53')

console.log(`Mi cumpleaños es en ${ms(dateBirthday.getTime() - dateNow.getTime(),{format:"long",lang:"ES"})}`) // Mi cumpleaños es en 8 días 14 horas 20 minutos 43 segundos
```

## Funcionamiento y ejemplos
La función principal de este paquete es convertir cualquier número (milisegundos) que le des a formato de tiempo, y cualquier formato de tiempo a milisegundos (número)
> Tambien cuenta con varias opciones adicionales que suelen ser muy utiles, [más info](#estructura).

```js
/*
    ms(value: string, options?: {}): number
    ms(value: number, options?: {}): string
    
    options? {
        format?: string,
        lang?: string,
        miliseconds: boolean,
        seconds: boolean,
        minutes: boolean,
        hours: boolean,
        days: boolean,
        weeks: boolean,
        months: boolean,
        years: boolean
    }
*/
import ms from 'iblazingx-ms' // utilizando módulos

// Ejemplos
ms(0) // 
ms(10000) // 10s
ms(157005) // 2m 37s 5ms
ms('100') // 100 
ms('10s') // 10000
ms('2m37s5ms') // 157005

// Usando options.fomat
ms('104400000', { format: "long" }) // 1d 5h
ms(104400000, { format: "short" }) // 1 day 5 hours
ms('1d5h', { format: "number" }) // 104400000

// Usando options.lang (solo aplica cambios con optios.format en "long")
ms('1d5h', { format: "long", lang: "EN" }) // 1 day 5 hours
ms('1d5h', { format: "long", lang: "ES" }) // 1 día 5 horas
ms('1d5h', { format: "long", lang: "FR" }) // 1 day 5 hours

// Usando options.miliseconds (tambien usamos options.format para ver el cambio)
ms('137ms', { format: "short", miliseconds: true }) // 137ms
ms('10s137ms', { format: "short", miliseconds: true }) // 10s

// Usando options.seconds (tambien usamos options.format para ver el cambio)
ms('10s', { format: "short", seconds: true }) // 10000ms
ms('10s137ms', { format: "short", seconds: true }) // 10137ms

// Usando options.minutes (tambien usamos options.format para ver el cambio)
ms('1m', { format: "short", minutes: true }) // 60s
ms('1m17s', { format: "short", minutes: true }) // 67s

// Usando options.hours (tambien usamos options.format para ver el cambio)
ms('1h', { format: "short", hours: true }) // 60m
ms('1h17s', { format: "short", hours: true }) // 60m 17s

// Usando options.days (tambien usamos options.format para ver el cambio)
ms('1.1d', { format: "short", days: true }) // 26h 24m
ms('1.1d17s', { format: "short", days: true }) // 26h 24m 17s

// Usando options.weeks (tambien usamos options.format para ver el cambio)
ms('8d', { format: "short", weeks: false }) // 1w 1d
ms('8d', { format: "short", weeks: true }) // 8d

// Usando options.months (tambien usamos options.format para ver el cambio)
ms('4w5d', { format: "short", months: false }) // 1mth 3d
ms('4w5d', { format: "short", months: true }) // 33d

// Usando options.years (tambien usamos options.format para ver el cambio)
ms('12mth15d', { format: "short", years: false }) // 1y 1w 3d 8h
ms('12mth15d', { format: "short", years: true }) // 12mth 2w 6d 8h
```

## Valores de los formatos
> `ms` => **1**
  `s` => **1000** o **1000ms**
  `m` => **60000** o **60s**
  `h` => **3600000** o **60m**
  `d` => **86400000** o **24h**
  `w` => **604800000** o **7d**
  `mth` => **2592000000** o **30d**
  `y` => **31557600000** o **365.25d**

***
### Estructura
Opciones del comando:
| Opción *nombre* | Opcion(es) *valores* | Funcionamiento |
| --------------- | -------------------- | -------------- |
| format | `"short"`, `"long"` o `"number"`; ***por defecto:** si el valor a convertir es un número `"short"`, si el valor a convertir es un texto `"number"`* | Defíne el formato de salida |
| lang | `"EN"` o `"ES"`; ***por defecto:** `"EN"`* | Defíne que idióma tendra la salida |
| miliseconds | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a milisegundos o no |
| seconds | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a segundos o no |
| minutes | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a minutos o no |
| hours | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a horas o no |
| days | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a días o no |
| weeks | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a semanas o no |
| months | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a meses o no |
| years | `true` o `false`; ***por defecto:** `false`* | Define si convertira el tiempo total a años o no |

Formatos de tiempo disponibles *(los carácteres especiales son validos, ej: `á => a`, `Ị = I`)*:
| Formato | Valores permitidos | Ejemplos |
| --------------- | -------------------- | -------------- |
| milisegundos | `ms`,  `milisecond`,  `milisegundo`,  `miliseconds`,  `milisegundos` | `"10ms" => 10` `"10 milisegundo" => 10` `"10milise" => 0` |
| segundos | `s`, `sec`,  `seg`,  `secs`,  `segs`,  `second`,  `segundo`, `seconds`,  `segundos` | `"10s" => 10000` `"10 segs" => 10000` `"10seci" => 0` |
| minutos | `m`, `min`,  `mins`,  `minute`,  `minuto`,  `minutes`,  `minutos` | `"10m" => 600000` `"10 min" => 600000` `"10minuts" => 0` |
| horas | `h`, `hr`,  `hrs`,  `hour`,  `hora`,  `hours`,  `horas` | `"10h" => 36000000` `"10 hr" => 36000000` `"10hor" => 0` |
| días | `d`, `day`,  `dia`,  `days`,  `dias` | `"10d" => 864000000` `"10 día" => 864000000` `"10da" => 0` |
| semanas | `w`, `wk`,  `sem`,  `wks`,  `sems`,  `week`,  `semana`,  `weeks`,  `semanas` | `"10w" => 6048000000` `"10 sems" => 6048000000` `"10weks" => 0` |
| meses | `mth`, `mths`,  `month`,  `mes`,  `months`,  `meses` | `"10mth" => 25920000000` `"10 meses" => 25920000000` `"10mts" => 0` |
| años | `y`, `yr`,  `yrs`,  `year`,  `año`,  `years`,  `años` | `"10y" => 315576000000` `"10 yrs" => 315576000000` `"10ano" => 0` |
