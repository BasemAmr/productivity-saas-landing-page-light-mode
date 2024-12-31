import { RouterProvider } from "react-router-dom"
import router from "./router"
import { SvgIconsProvider } from "./assets"

function App () {
  return (
    <SvgIconsProvider >
      <RouterProvider router={router} />
    </SvgIconsProvider>
  )
}

export default App