import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emergencyContactSchema from '../lib/emergencyContactSchema'

const EmergencyContactForm = ({ addEmergencyContact }) => {

    const [success, setSuccess] = useState("")

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(emergencyContactSchema)
    })

    const submit = (data) => {
        addEmergencyContact(data)
        setSuccess("Emergency Contact Added Successfully!")
        reset()
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">

            <h2 className="text-xl font-bold text-purple-800 mb-4">
                Add Emergency Contact
            </h2>

            <form onSubmit={handleSubmit(submit)}>

                <input
                    {...register("contactName")}
                    placeholder="Enter contact name"
                    className="w-full border p-2 rounded mb-2"
                />
                <p className="text-red-500 text-sm mb-3">
                    {errors.contactName?.message}
                </p>

                <input
                    {...register("email")}
                    placeholder="Enter email"
                    className="w-full border p-2 rounded mb-2"
                />
                <p className="text-red-500 text-sm mb-3">
                    {errors.email?.message}
                </p>

                <input
                    {...register("phone")}
                    placeholder="Enter 10-digit phone number"
                    className="w-full border p-2 rounded mb-2"
                />
                <p className="text-red-500 text-sm mb-3">
                    {errors.phone?.message}
                </p>

                <select
                    {...register("relationship")}
                    className="w-full border p-2 rounded mb-2"
                >
                    <option value="">Select relationship</option>
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Guardian">Guardian</option>
                    <option value="Other">Other</option>
                </select>

                <p className="text-red-500 text-sm mb-3">
                    {errors.relationship?.message}
                </p>

                <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded"
                >
                    Add Contact
                </button>

            </form>

            {success && (
                <p className="mt-4 text-green-600 font-bold">
                    {success}
                </p>
            )}

        </div>
    )
}

export default EmergencyContactForm