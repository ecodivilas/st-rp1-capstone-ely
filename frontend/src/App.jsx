// import Dashboard from "./components/Dashboard"
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import UserForm from "./components/UserForm"
import UserTable from "./components/UserTable"

function App() {
  // const [userData, setUserData] = useState([])
  // const [state, setState] = useState(false)
  // const [color, setColor] = useState(false)

  // const getUsers = async () => {
  //   try {
  //     const users = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
  //     return users.data
  //   } catch (error) {
  //     console.log("Error: ", error)
  //   }
  // }

  // useEffect(() => {
  //   getUsers().then((res) => {
  //     console.log(res)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // })


  // const getPokemon = async () => {
  //   try {
  //     const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  //     return pokemon.json()
  //   } catch (error) {
  //     console.log("Error: ", error)
  //   }
  // }

//   async function getAllUsers() {
//     try {
//         const response = await fetch('/api/v1/users')
//         return response.json()
//     } catch (error) {
//         console.log('Error: ', error)
//     }
// }

// useEffect(() => {
//  getPokemon().then((res) => {
//   console.log(res.data)
// }).catch((error) => {
//   console.log(error)
// })
// }, [])

  // useEffect(() => {
  //   getUsers().then(res => {
  //     console.log(res.data)
  //     setUserData(res.data)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  // useEffect(()=>{
  //   console.log("Hi!")
  //   //true
  //   // alert("Nagbago ang kulay")
  // }, [state, color]) // is this false parin kung hindi na tatawagin kita ulet

  // if (userData === undefined) {
  //   return
  // }

  // const handleClick = () => {
  //   // setState((prev) => !prev)
  //   setColor((prev) => !prev) 
  // }

  // let toast_message = "toast-message w-[50rem] h-16 bg-green-500 flex justify-center items-center space-x-[34rem] shadow-lg text-lg font-semibold rounded-lg text-white"
    
  return (
    <>
    {/* <button className="bg-orange-600 text-white p-2 rounded" onClick={handleClick}>Trigger useState</button>
    <div className={`w-32 h-32 ${ color ? `bg-slate-900` : `bg-red-900 mb-20`}`}>Box 1</div> */}
    <UserForm />
    {/* <UserTable /> */}
    {/* <div className={toast_message}><span>Deleted Successfully</span><button>✖</button></div> */}

    {/* <div>User</div> */}
    {/* {userData.map((user, index) => {
      return (
        <>
          <div key={index}>{user.username}</div>
        </>
      )
    })} */}

   {/* <Dashboard /> */}
    </>
  )
}

export default App