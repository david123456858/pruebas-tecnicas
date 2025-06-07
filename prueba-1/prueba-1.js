/**
 * 
 * @param {*} n 
 * @param {*} ratings NOTE: Un array se puede destructurar 
 * en variables esperables segun la posicion de la matriz
 * @returns 
 */
const ratingsPlates = (n,ratings)=>{
  let recored = {}
  let count = {}
  let avrg = {}

  let bestHashId = -1
  let mayor = 0

  if(n < ratings.length) return console.log('no conhincide los numeros');
  
  if(n < 1 | n > 100000 ) return console.log('number the n plates incorrect');
  
  for(let i = 0; i < ratings.length ; i++){

    const [id_hash, score] = ratings[i] // esto me dio la vida

    if(id_hash < 1 || id_hash > 10000000000 || score < 1 || score > 5 ) return console.log('number incorrect');

    if(!(id_hash in recored)){
      recored[id_hash] = 0
      count[id_hash] = 0
    }

    recored[id_hash] += 1
    count[id_hash] += score

    avrg[id_hash] = count[id_hash]/recored[id_hash]
  
  }
  /**
   * recordemos el orden de codigo
   */
  for(const key in avrg){
    if(avrg[key] > mayor ||(avrg[key] === mayor && key < bestHashId) ) {
      mayor = avrg[key]
      bestHashId = key
    }
  }

  console.log("el mayor",bestHashId);
  console.log('aca la cuenta',recored);
  console.log('aca el promedio',avrg);

}


ratingsPlates(8,[
  [521,3],
  [12,5],
  [97,4],
  [12,5],
  [11,4],
  [2,4],
  [2,2],
  [1,5]])
