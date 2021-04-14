// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3 (NOTA: entiendo que el tercer mayor es 4. ya que si se ordena quedan de menor a mayor 1, 3, 4, 4, 5)
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let auxiliar;
    if(nums.lenght < 3){
    return auxiliar;
    }
    nums.sort((a,b) => a > b ? 1 : a < b ? -1 : 0)
    i = 0;
    auxiliar = 0;
    while(i < nums.lenght){
        if (nums[i] != nums[i+1]){
            auxiliar++;
            if (auxiliar === 3)
            return nums[i+1];
        }
        i++;
    }
    return nums[nums.lenght]; // esto sifnifica que el array tiene mas de 3 numeros, solo hay dos numeros pero varios de ellos, por eso el lenght es >3 pero no hay un 3er mayor en ese caso entrega el segundo el nums de la linea 21 podria enviar, si se decide que lo expuesto sea "undefined" una variable no inicializada
}

///hacer segundo escenario


// TESTs no modificar
console.log(greater3[4,3,4,5,1] === 3); //este debera ser 4
console.log(greater3[3,4] === undefined);
console.log(greater3[4,4,4] === 4);
console.log(greater3[1,1,2,5] === 1);