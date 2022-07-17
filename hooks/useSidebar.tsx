import { useContext } from "react"
import { UIContext } from '../context/ui'

export const useSidebar = () => {
  return useContext( UIContext )
}
