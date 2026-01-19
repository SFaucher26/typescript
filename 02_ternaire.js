
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a,b) {
     
    console.log(a>b ? a : b);
}

console.log(ternaire(9,3));

module.exports = ternaire;