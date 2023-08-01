import React, { useState } from 'react'

import { editUser } from '../services/UserService'

const editFormParams = [
    {
        id: 1,
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        name: 'email',
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
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        name: 'first_name',
        defaultValue: '',
    },
    {
        id: 4,
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        name: 'last_name',
        defaultValue: '',
    },
    {
        id: 5,
        label: 'Mobile Number',
        type: 'text',
        placeholder: 'Mobile Number',
        name: 'mobile_number',
        defaultValue: '',
    },
    {
        id: 6,
        label: 'Birthdate',
        type: 'date',
        placeholder: 'Birthdate',
        name: 'birthdate',
        defaultValue: '',
    },
]

const EditUser = ({ user }) => {
    const [showModal, setShowModal] = useState(false)
    const [userData, setUserData] = useState({
        email: user['email'] ?? '',
        password: user['password'] ?? '',
        first_name: user['first_name'] ?? '',
        last_name: user['last_name'] ?? '',
        mobile_number: user['mobile_number'] ?? '',
        birthdate: user['birthdate'] ?? '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        userData.user_id = user['user_id']
        userData.type_id = 1
        // console.log(userData)
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
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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