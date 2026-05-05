import { useReducer } from "react"
import { AppContext } from "./AppContext"
import { cartProductsReducer } from "../Reducer/cartProductsReducer"

const AppContextProvider = ({children}) => {
  const [cartProducts, dispatch] = useReducer(cartProductsReducer, [])

  return (
    <AppContext.Provider value={{cartProducts, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
