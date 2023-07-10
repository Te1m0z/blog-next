import { type Timestamp } from 'firebase/firestore'
import { type UserCredential } from 'firebase/auth'

export type PostDoc = {
  // TODO: Make the id mandatory
  id?: string
  en: {
    title?: string
    content?: string
    readingTime?: number
  }
  es: {
    title?: string
    content?: string
    readingTime?: number
  }
  creator: {
    id: string
    name: string
    photoUrl?: string
  }
  featureImage?: string
  url?: string
  createdAt: Timestamp
  updatedAt: Timestamp
  publishedAt?: Timestamp
  isPublished: boolean
  likeQty: number
  viewsQty: number
  commentsQty: number
  tags?: string[]
  category?: string
}

export type FileType = 'file' | 'image'

export type FileDoc = {
  id?: string
  createdAt: Timestamp
  url: string
  name: string
  ext: string
  storageName: string
  type: FileType
  size: number // in bytes
  width?: number
  height?: number
}

export type UserAuth = {
  uid: string
  displayName: string
  email: string
  photoURL?: string
  providerId: string
  emailVerified?: boolean
  isAdmin?: boolean
}

export type User = UserAuth | null

export type AuthError = {
  error: string
}

export type AuthResponse = UserCredential | AuthError

export const isAuthError = (res: AuthResponse): res is AuthError => {
  return (res as AuthError).error !== undefined
}
