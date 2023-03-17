import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function ProtectedRoute({ children }) {
    const  { currentUser } = useAuth();
    console.log(currentUser);
    if(!currentUser){
        return <Navigate to='/login'/>
    }
  return (
    children
  )
}
