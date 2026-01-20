/**
 * Exercice 13: Promise
 *
 * Créer une fonction `fetchUsername(userId)` qui :
 * - Prend un `userId` de type number
 * - Retourne une `Promise<string>` contenant le nom d'utilisateur
 * - Utilise l'API JSONPlaceholder : https://jsonplaceholder.typicode.com/users/{userId}
 *
 * L'API retourne un objet utilisateur avec une propriété `username`.
 *
 * Exemple:
 *   await fetchUsername(1) => "Bret"
 *   await fetchUsername(2) => "Antonette"
 *
 * Note: Utilisez fetch() ou axios pour effectuer la requête HTTP.
 */

// TODO: Implémenter fetchUsername

export async function fetchUsername(userId: number): Promise<string> {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await response.json()
    return data.username;
  }catch (err){
    console.log(err)
    return "erreur de recupération du username";
  }
}

fetchUsername(1).then(console.log)
fetchUsername(2).then(console.log)
fetchUsername(4).then(console.log)