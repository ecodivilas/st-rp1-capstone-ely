import { FaUserSecret, RiLockPasswordFill } from "../assets/icons.jsx"

const Login = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-sky-300">
        <form className="bg-sky-700 h-[25em] rounded-lg flex flex-col gap-8  justify-center items-center p-6 w-[20rem] sha">
          {/* <div className={`bg-[url('../assets/react.svg')]`}></div> */}
          {/* <div className="bg-cover bg-center bg-no-repeat bg-[url('./assets/react.svg')] h-[20rem] w-[20rem]"></div> */}
        <span className="text-[2.5rem] font-sans font-semibold">Login</span>
            <div className="flex flex-col justify-center w-full gap-4">
                <FaUserSecret size={30} /> 
             <input className="h-12 p-2 rounded-lg" type="text" placeholder="Username" />
            <RiLockPasswordFill size={30} />
            <input className="h-12 p-2 rounded-lg" type="password" placeholder="Password" />
            </div>
            <div className="flex gap-2">
            <button className="w-32 p-2 text-white rounded-lg bg-sky-950">Login</button>
            <button className="w-32 p-2 text-white rounded-lg bg-slate-950">Cancel</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login