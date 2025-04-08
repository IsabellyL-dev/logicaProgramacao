let nota = parseFloat(prompt(`Informe sua nota: `))
if (nota >= 9 && nota < 10) {
    console.log('A - Excelente!');
} 
else {
    if (nota >= 7 && nota < 9) {
        console.log('B - Bom!');
    } 
    else {
        
        if (nota >= 5 && nota < 7) {
            console.log('C - Regular!');
        } 
        
    else {
        if (nota < 5) {
                console.log('D - Reprovado!');
            }
        }
    }
}