export interface ILogInResponse {
  status: boolean
  message: string | null
}

export const logInWithPhone = (phone: string): ILogInResponse => {
  return {
    status: true,
    message: 'ok : ' + phone,
  }
}
