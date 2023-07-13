declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react'
  const content: ReactElement<SVGProps<SVGSVGElement>>
  export default content
}

// declare module '*.svg' {
//   import { FC, SVGProps } from 'react'

//   const ReactComponent: FC<SVGProps<SVGSVGElement> & { title?: string }>

//   export default ReactComponent
// }
