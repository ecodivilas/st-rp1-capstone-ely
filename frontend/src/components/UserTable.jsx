import React, { useEffect, useState} from 'react'
import { getAllUsers, deleteUser } from '../services/UserService'
import EditUser from './EditUser'

const UserTable = () => {
    const [userDetails, setUserDetails] = useState(false)

    useEffect(() => {
        getAllUsers().then(users => {
            setUserDetails(users)
        }).catch(error => {
            console.log("Error", error)
        })
    }, [])

    const handleDelete = (user_id) => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        confirmed &&
        deleteUser(user_id).then(res => {
            console.log("Deleted Successfully: ", res)
        }).catch(error => {
            console.log("Error: ", error)
        })
    }

  return (
    <>
        <div className="relative overflow-x-auto w-full flex justify-center">
            <table className="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400 mt-4 h-[20rem] bg-green-950">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Password
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails ? userDetails.map((user, index) => {
                        return (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-2">
                                    <td className="px-6 py-4">
                                        {user.user_id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.user_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.password}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.user_type}
                                    </td>
                                    <td className="px-6 py-4 flex gap-4 items-center h-full">
                                        <EditUser user={user} />
                                        <button className="hover:text-red-600" onClick={() => handleDelete(user.user_id)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }) : <tr><td>Loading...</td></tr>}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default UserTable
