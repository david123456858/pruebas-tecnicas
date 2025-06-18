/**
 * 1. de las conversiones
 * 2. ver cuantos 60 estan el los #seconds dados (3000) cuantos 60 hay? ()
 * 
 * recorger e ir haciendo las equivalencias de las unidades de medida de tiempo
 * la regresion de los #seconds debe ser un paso adelante un paso atras
 */
class time {
    //--> utilizar para propiedades privadas en js adelante con #
    #years 
    #days
    #hours
    #minutes
    #seconds

    constructor(){
        this.#years = 0
        this.#days = 0
        this.#hours = 0
        this.#minutes = 0
        this.#seconds = 0
        
    }

    transformSeconds(seconds){
        let value = seconds
        let valueAux = 0

        if(seconds < 0) return 'Number incorrect negative'

        if (seconds === 0) return 'Now'

        if (seconds < 60) console.log(`${seconds} #seconds`);

        for(let i = 0; i <= 4;i++){
            if (i <= 1){
                valueAux = this.transformerValueTimes(value,60)
                value = valueAux[0]
                if(i === 0){
                    this.#seconds = valueAux[1]
                }else if (i === 1){
                    this.#minutes = valueAux[1]
                }
            
            } //--> part #seconds, #minutes and #hours
            if(i === 2){
                if(value < 24){
                    this.#hours = value
                }else{
                    valueAux = this.transformerValueTimes(value,24)
                    value = valueAux[0]
                    this.#hours = valueAux[1]
                }
            }
            if(i === 3){
                if(value >= 365){
                    valueAux = this.transformerValueTimes(value,365)
                    this.#years = valueAux[0]
                    this.#days = valueAux[1]
                }else{
                    this.#years = value
                }
            }    
        }   
    }
    transformerValueTimes = (unitMain,divisor)=>{ //--> (65#seconds,60)
        const mainValue = unitMain/divisor // --> 1,083333333333333
        const subValue = Math.floor(mainValue) // --> 1
        const partDecimal = mainValue - subValue// --> 1,083333333333333 - 1 = 0,833333 
        const valueRestant =  partDecimal * divisor //--> 5 #seconds
        return [subValue,parseInt(valueRestant.toFixed(0))]// --> [1, 5]
    }
    toStringTime(){
        const data = this.toObject()
        let stringInfotime = ``
        for(const [key,value] of Object.entries(data)){
            if(value > 0){
                if(key === 'Second'){
                    stringInfotime += ' and '
                    stringInfotime += value > 1 ? `${value} ${key}s` : `${value} ${key}`
                }else{
                    stringInfotime += `, `
                }
                if (key !== 'Second'){
                    stringInfotime += value > 1 ? `${value} ${key}s` : `${value} ${key}`
                }
                
                
            }
        }
        console.log(stringInfotime);
        
    }
    /**
     * 
     * @returns object with atributes the class
     * Al colocar los atrivutos privador el this no le permite acceder a las propiedades toca 
     * retornarlas en una tupla como la siguente o un objeto clave-valor
     */
    toObject(){
        return {
            Year: this.#years,
            Day: this.#days,
            Hour: this.#hours,
            Minute: this.#minutes,
            Second: this.#seconds
        }
    }

    
}

const timeInstance = new time()
timeInstance.transformSeconds(31536002)
timeInstance.toStringTime()

//transform#Seconds(31536002)