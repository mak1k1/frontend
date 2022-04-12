import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CheckoutSteps from "../components/CheckoutSteps"
import Message from "../components/Message"
import { saveShippingAddress } from "../actions/cartActions"

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
    </div>
  )
}

export default PlaceOrderScreen
