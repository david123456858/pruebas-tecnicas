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
    
    let countTime = 0
    
    if(seconds < 0) return 'Number incorrect negative'

    if (seconds === 0) return 'Now'

    if (seconds < 60){
        console.log(`${seconds} seconds`);
    }

    for(let i = 0; i < 6;i++){
        if (i <= 0){
            const minutes = seconds/60
            const minutesTotal = Math.floor(minutes)
            const partDecimal = minutes - minutesTotal
            const realSeconds = partDecimal * 60

            console.log(parseInt(minutes.toFixed(0)) ,parseInt(realSeconds.toFixed(0)));
            
            
        } 
    }    
}

transformSeconds(245466)


