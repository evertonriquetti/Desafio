function calcularPercentual(){
/**faturamento estados **/
const sp = 67.83643;
const rj = 36.67866;
const mg = 29.22988;
const es = 27.16548;
const outros = 19.84953;

/**Calcular o total do faturamento **/
let faturamentoTotal = sp + rj + mg + es + outros;
var total = faturamentoTotal.toFixed(2);
/**Mostrar o total do faturamento **/
console.log("O faturamento Total é: "+ total);

/**Calcular o percentual por estado **/
let percentualSp = (sp / faturamentoTotal) * 100;
let percentualRj = (rj / faturamentoTotal) * 100; 
let percentualMg = (mg / faturamentoTotal) * 100;
let percentualEs = (es / faturamentoTotal) * 100;
let percentualOutros = (outros / faturamentoTotal) * 100;

/**Formatar o valor a ser mostrado **/
var percSP = percentualSp.toFixed(2);
let percRJ = percentualRj.toFixed(2);
let percMG = percentualMg.toFixed(2);
let percES = percentualEs.toFixed(2);
let percOUTROS = percentualOutros.toFixed(2);

/**Mostrar o percentual por estado **/
console.log("O percentual de SP: "+ percSP);
console.log("O percentual do RJ: " + percRJ);
console.log("O percentual de MG: " + percMG);
console.log("O percentual do ES: " + percES);
console.log("O percentual de Outros: " + percOUTROS);
}
calcularPercentual();

