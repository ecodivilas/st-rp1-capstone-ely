import React, { useState } from 'react'

import { editUser } from '../services/UserService'

const editFormParams = [
    {
        id: 1,
        label: 'User Name',
        type: 'text',
        placeholder: 'User Name',
        name: 'user_name',
        defaultValue: '',
    },
    {
        id: 2,
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        defaultValue: '',
    },
    {
        id: 3,
        label: 'User Type',
        type: 'text',
        placeholder: 'User Type',
        name: 'user_type',
        defaultValue: '',
    }
]

const EditUser = ({ user }) => {
    const [showModal, setShowModal] = useState(false)
    const [userData, setUserData] = useState({
        user_name: user['user_name'] ?? '',
        password: user['password'] ?? '',
        user_type: user['user_type'] ?? ''})

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        userData.user_id = user['user_id']
        editUser(userData)
            .then(() => {
                toggleModal()
            })
            .catch((error) => {
                console.error('Unable to updated record: ', error.message)
            })
    }

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (    
        <div>
            <span className="!hover:text-red-600">
                <button
                    className="m-0 p-0 hover:text-green-600"
                    onClick={toggleModal}
                >
                    Edit
                </button>
            </span>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-blue-50 dark:bg-slate-900 rounded-lg text-black">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4 text-white">
                                    Edit User Information
                                </h2>
                                <form onSubmit={handleSubmit} className="">
                                    {editFormParams.map((field, i) => {
                                        return (
                                            <div
                                                className="mb-4 flex"
                                                key={i}
                                            >
                                                <div className="w-1/2">
                                                    <label className="text-white mr-2">
                                                        {field.label}
                                                    </label>
                                                </div>
                                                <input
                                                    key={i}
                                                    className="grow rounded-md h-5"
                                                    type={field.type}
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    name={field.name}
                                                    defaultValue={
                                                        user[field.name] // Use bracket notation for selector
                                                    }
                                                    onChange={handleChange}
                                                    required={true}
                                                />
                                            </div>
                                        )
                                    })}

                                    <div className="flex justify-between">
                                        <button className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                            Save
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={toggleModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditUser