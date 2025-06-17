/**
 * 1. de las conversiones
 * 2. ver cuantos 60 estan el los Seconds dados (3000) cuantos 60 hay? ()
 * 
 * recorger e ir haciendo las equivalencias de las unidades de medida de tiempo
 * la regresion de los Seconds debe ser un paso adelante un paso atras
 */
class time {
    Years
    Days
    Hours
    Minutes
    Seconds

    constructor(){
        this.Years = 0
        this.Days = 0
        this.Hours = 0
        this.Minutes = 0
        this.Seconds = 0
        
    }

    transformerValueTimes = (unitMain,divisor)=>{ //--> (65seconds,60)
        const mainValue = unitMain/divisor // --> 1,083333333333333
        const subValue = Math.floor(mainValue) // --> 1
        const partDecimal = mainValue - subValue// --> 1,083333333333333 - 1 = 0,833333 
        const valueRestant =  partDecimal * divisor //--> 5 seconds
        return [subValue,parseInt(valueRestant.toFixed(0))]// --> [1, 5]
    }
    transformSeconds(seconds){
        let value = seconds
        let valueAux = 0

        if(seconds < 0) return 'Number incorrect negative'

        if (seconds === 0) return 'Now'

        if (seconds < 60) console.log(`${seconds} seconds`);

        for(let i = 0; i <= 4;i++){
            if (i <= 1){
                valueAux = transformerValueTimes(value,60)
                value = valueAux[0]
                if(i === 0){
                    this.Seconds = valueAux[1]
                }else if (i === 1){
                    this.Minutes = valueAux[1]
                }
            
            } //--> part seconds, minutes and hours
            if(i === 2){
                if(value < 24){
                    this.Hours = value
                }else{
                    valueAux = transformerValueTimes(value,24)
                    value = valueAux[0]
                    this.Hours = valueAux[1]
                }
            }
            if(i === 3){
                if(value >= 365){
                    valueAux = transformerValueTimes(value,365)
                    this.Years = valueAux[0]
                    this.Days = valueAux[1]
                }else{
                    this.Years = value
                }
            }    
        }   
        console.log(value);
        console.log(obcjectTime);
    }
    toStringTime(){
        for(const key in this){
            console.log(this[key]);
        }
    }
}

const timeInstance = new time()
timeInstance.transformSeconds(31536002)
timeInstance.toStringTime()

//transformSeconds(31536002)