function NumberA() {
 
    const max  = Math.ceil (document.querySelector('.valorMinimo').value)
    const min = Math.floor(document.querySelector('.valorMaximo').value)
   


      const result= Math.floor( Math.random() * (max - min +1) )+ min;

      alert(result)

     

     
}