import { UUID } from 'crypto'

// users/{uid} | Public user profile
interface IUserProfile {
  uid: UUID
  username: string
  displayName: string
  photoUrl: string
}

export type { IUserProfile }
