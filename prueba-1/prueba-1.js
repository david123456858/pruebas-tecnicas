
const solucion = (n,ratings)=>{
  let mayor = 0
  let numeroPlato = 0 
    for(let i=0;i <= ratings.length - 1 ; i++){
      for(let y=0; y <= 1; y++ ){
        if(ratings[i][1] > mayor){
          mayor = ratings[i][1]
          if(numeroPlato )
          numeroPlato = ratings[i][0]
        }
      }
    }
    return numeroPlato
}

/*[[ 521, 3 ],
   [ 521, 4 ],
   [ 097,4 ]]   */ 
  solucion(5,[[521,3],[12,3],[97,4],[12,5]])