/**
 * APP Flex
 * @author Arthur Cruz Alves
 */

//declaração de variáveis
let etanol, gasolina

function calcular() {
    //entrada de dados
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value 
    //console.log(etanol)
    //console.log(gasolina)
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src="img/etanol.png"
    } else {
        document.getElementById('status').src="img/gasolina.png"
    }
    return false
}