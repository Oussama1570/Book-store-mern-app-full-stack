import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import Swal from 'sweetalert2';
import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const { currentUser } = useAuth()
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [createOrder, { isLoading, error }] = useCreateOrderMutation();
    const navigate = useNavigate()

    const [isChecked, setIsChecked] = useState(false);
    
    const onSubmit = async (data) => {
        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),  // Changed this to use product IDs
            totalPrice: totalPrice,
        }
        
        try {
            await createOrder(newOrder).unwrap();
            Swal.fire({
                title: "Order Confirmed",
                text: "Your order has been placed successfully!",
                icon: "success",
                confirmButtonText: "Okay"
            });
            navigate("/orders")
        } catch (error) {
            console.error("Error placing an order", error);
            alert("Failed to place an order")
        }
    }

    if (isLoading) return <div>Loading...</div>
    
    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <div>
                            <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
                            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
                            <p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>
                        </div>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        {/* Form Fields */}
                                        {/* Personal Details, Address, etc. */}
                                    </div>
                                </div>

                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end">
                                        <button
                                            disabled={!isChecked}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place an Order</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPage
