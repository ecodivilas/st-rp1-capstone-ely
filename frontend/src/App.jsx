import Login from "./authentication/Login"
import { SiBurgerking } from "react-icons/si"


const App = () => {
  return (
    <>
    <div className="flex items-center justify-between p-2 bg-sky-500">
    {/* mx-auto */}
    <div className="flex items-start justify-start p-5 bg-[url('./assets/react.svg')] bg-no-repeat bg-center bg-transparent w-[5%] h-[5%]"></div>
    <SiBurgerking size={30} />
    </div>
    <><Login /> </>
    </>
  )
}

export default App