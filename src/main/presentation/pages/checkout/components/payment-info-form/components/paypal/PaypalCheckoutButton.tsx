"use client"

import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"

type ErrorType = string | null

const  PaypalCheckoutButton = (props) => {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState<ErrorType>(null)

    const { product } = props

    const handleAprove = (orderId) => {
        // call backend function to fulfill order

        //if response is success
        setPaidFor(true)

        //if response is error
        // setError("Your payment was processed successfully.However, we are unable to fulfill your purchase.Please contact us at support for assistance")
    }

    if (paidFor) {
        //display success message
    alert("Thank you for your purchase!")
    }

    if (error) {
        alert(error)
    }
    
    return (
        <PayPalButtons
        style={{
            color: "silver",
            layout: "horizontal",
            shape: "rect",
            tagline: false

        }}
        onClick={(data, actions) => {
            //validate on button click
            const hasAlreadyPaid = false

            if (hasAlreadyPaid) {
                setError(
                    "You already paid for this. Go to login page."
                )
                return actions.reject()
            } else {
                return actions.resolve()
            }
        }}
        createOrder={(data, actions) => {
            return actions.order.create({
               purchase_units: [
                {
                    description: product.description,
                    amount: {
                        value: product.price
                    }
                }
               ] 
            })
        }}
        onApprove={async(data, actions) => {
            const order = await actions.order?.capture()
            console.log("PaypalCheckoutButton / order:", order)

            handleAprove(data.orderID)
        }}
        onCancel={() => {
            //display the cancel message
        }}
        onError={(err) => {
            setError(err.toString())
            console.log("PaypalCheckoutButton / error:", err)
        }}
        
        />
    )
    
}

export default PaypalCheckoutButton