
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    const result = a>b ? a : b;
    console.log(result);
}

console.log(ternaire(9 , 3));

module.exports = ternaire;