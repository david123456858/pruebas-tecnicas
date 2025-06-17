/**
 * 1. de las conversiones
 * 2. ver cuantos 60 estan el los segundos dados (3000) cuantos 60 hay? ()
 * 
 * recorger e ir haciendo las equivalencias de las unidades de medida de tiempo
 * la regresion de los segundos debe ser un paso adelante un paso atras
 */
obcjectTime={
        "años":0,
        "Meses":0,
        "Días":0,
        "Horas":0,
        "Minutos":0,
        "Segundos":0
    }

const transformSeconds = (seconds)=> {
    vectorTimeAux = []
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
               obcjectTime['Segundos'] = valueAux[1]
            }
            obcjectTime['Minutos'] = valueAux[1]
        } //--> part seconds, minutes and hours
        if(i === 2){
            if(value < 24){
                obcjectTime['Horas'] = value
            }else{
                valueAux = transformerValueTimes(value,24)
                value = valueAux[0]
                obcjectTime['Horas'] = valueAux[1]
            }
        }    
    }   
    console.log(value);
    
    console.log(obcjectTime);
     
}
// funcion generica
const transformerValueTimes = (valueTime,value)=>{
    const valor = valueTime/value
    const valorNeto = Math.floor(valor)
    const partDecimal = valor - valorNeto
    const valueRestant =  partDecimal * value
    return [valorNeto,parseInt(valueRestant.toFixed(0))]// --> [7,58]
}

transformSeconds(486000)


