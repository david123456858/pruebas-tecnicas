/**
 * 1. de las conversiones
 * 2. ver cuantos 60 estan el los #seconds dados (3000) cuantos 60 hay? ()
 * 
 * recorger e ir haciendo las equivalencias de las unidades de medida de tiempo
 * la regresion de los seconds debe ser un paso adelante un paso atras
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
                    value = 0
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
                    this.#days = value
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
        let i = 0
        let stringInfotime = ``
        for(const [key,value] of Object.entries(this.toObject())){
            if(value > 0){
                if(key === 'Second'){
                    stringInfotime += stringInfotime.length === 0 ? '': ' and '
                    stringInfotime += value > 1 ? `${value} ${key}s` : `${value} ${key}`
                } else if(i != 0){
                    stringInfotime += `, `
                }
                if (key !== 'Second'){
                    stringInfotime += value > 1 ? `${value} ${key}s` : `${value} ${key}`
                    i++
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
// prueba con todas check ✅
const pruebas = [
  0,
  45,
  75,
  3600,
  3661,
  86400,
  90061,
  172800,
  31536000,
  31626061,
  63072000,
  63158461,
  100000000
];

for (const s of pruebas) {
  const t = new time();
  const res = t.transformSeconds(s);
  if (res === 'Now' || res === 'Number incorrect negative') {
    console.log(`${s} → ${res}`);
  } else {
    t.toStringTime();
  }
}

//transform#Seconds(31536002)