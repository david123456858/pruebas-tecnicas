/**
 * 1. de las conversiones
 * 2. ver cuantos 60 estan el los Seconds dados (3000) cuantos 60 hay? ()
 * 
 * recorger e ir haciendo las equivalencias de las unidades de medida de tiempo
 * la regresion de los Seconds debe ser un paso adelante un paso atras
 */
obcjectTime={
        "Years":0,
        "Days":0,
        "Hours":0,
        "Minutes":0,
        "Seconds":0
    }

const transformSeconds = (seconds)=> {
    let value = seconds
    let valueAux = 0
    if(seconds < 0) return 'Number incorrect negative'

    if (seconds === 0) return 'Now'

    if (seconds < 60){
        console.log(`${seconds} seconds`);
    }

    for(let i = 0; i < 6;i++){
        if (i <= 1){
            valueAux = transformerValueTimes(value,60)
            value = valueAux[0]
            if(i === 0){
                obcjectTime['Seconds'] = valueAux[1]
            }else if (i === 1){
                obcjectTime['Minutes'] = valueAux[1]
            }
            
        } //--> part seconds, minutes and hours
        if(i === 2){
            if(value < 24){
                obcjectTime['Hours'] = value
            }else{
                valueAux = transformerValueTimes(value,24)
                value = valueAux[0]
                obcjectTime['Hours'] = valueAux[1]
            }
        }
        if(i === 3){
            if(value >= 365){
                valueAux = transformerValueTimes(value,365)
                obcjectTime['Years'] = valueAux[0]
                obcjectTime['Days'] = valueAux[1]
            }else{
                obcjectTime['Days'] = value
            }
        }    
    }   
    console.log(value);
    console.log(obcjectTime);
     
}
// funcion generica
const transformerValueTimes = (unitMain,divisor)=>{ //--> (65seconds,60)
    const mainValue = unitMain/divisor // --> 1,083333333333333
    const subValue = Math.floor(mainValue) // --> 1
    const partDecimal = mainValue - subValue// --> 1,083333333333333 - 1 = 0,833333 
    const valueRestant =  partDecimal * divisor //--> 5 seconds
    return [valorNeto,parseInt(valueRestant.toFixed(0))]// --> [1, 5]
}

transformSeconds(31536002)