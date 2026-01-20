/**
 * Exercice 14: Utility Types - Partial & Required
 *
 * 1. Définir un type `UserProfile` avec :
 *    - `username` : string
 *    - `email` : string
 *    - `age` : number
 *    - `bio` : string
 *
 * 2. Créer une fonction `updateProfile(profile, updates)` où :
 *    - `profile` est de type `UserProfile`
 *    - `updates` est de type `Partial<UserProfile>`
 *    - Retourne un nouveau `UserProfile` avec les mises à jour appliquées
 *
 * 3. Créer une fonction `validateCompleteProfile(profile)` qui :
 *    - Prend un `Partial<UserProfile>`
 *    - Retourne `true` si toutes les propriétés sont définies, `false` sinon
 *
 * Exemples :
 *   const profile = { username: "john", email: "john@test.com", age: 25, bio: "Dev" };
 *   updateProfile(profile, { age: 26 })  // { username: "john", email: "john@test.com", age: 26, bio: "Dev" }
 *
 *   validateCompleteProfile({ username: "john" })  // false
 *   validateCompleteProfile(profile)  // true
 */

// TODO: Définir le type UserProfile

export type UserProfile = {
  username:string,
  email:string,
  age:number,
  bio:string
};

// TODO: Implémenter updateProfile
const user1 = {
  "username": "sandrine",
  "email": "sandrinie@test.fr",
  "age": 42,
  "bio":"développeuse fullstack",
}
export function updateProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...profile, ...updates };
}

// TODO: Implémenter validateCompleteProfile

export function validateCompleteProfile(profile: any): any {
  throw new Error("Not implemented") ;
}

console.log(updateProfile(user1, { age: 26 }))
console.log(updateProfile(user1, {username:"Eva"}))