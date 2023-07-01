import { UUID } from 'crypto'
import { Timestamp } from 'firebase/firestore'

// users/{uid}/posts/{slug} | user can have many posts
interface IPost {
  title: string
  slug: string
  uid: UUID
  username: string
  published: boolean
  content?: string
  createdAt?: Timestamp | string | number
  updatedAt?: Timestamp | string | number
}

export type { IPost }
