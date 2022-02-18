import React,{useContext} from 'react'
import {FullNameContext} from '../Context/FullNameContext'
export default function InfoComponent() {
    const {name,surname}=useContext(FullNameContext)
  return (
    <h1>Hi {name} {surname}</h1>
  )
}
