/**
 * 1. de las conversiones
 * 2. ver cuantos 60 estan el los segundos dados (3000) cuantos 60 hay? ()
 */
const transformSeconds = (seconds)=> {
    if(seconds < 0) return 'Number incorrect negative'

    if (seconds === 0) return 'Now'
    
    const minuteSearched = seconds/60

    console.log(minuteSearched);
    
}

const answer = transformSeconds(62)

console.log(answer);
