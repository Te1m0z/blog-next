export type TUserAuth = {
  first_name: string | null
  last_name: string | null
  phone: string
  login: () => void
  logout: () => void
}

// export type TUserNotAuth = {
//   first_name: string | null
//   last_name: string | null
//   phone: string
// }
