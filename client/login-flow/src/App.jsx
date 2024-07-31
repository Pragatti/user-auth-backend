import React,{useState,useEffect} from "react"
import { useDispatch} from 'react-redux'
import './App.css'
import { login } from "./store/authSlice"

function App() {
 const[loading,setLoading] = useState(false)
 const dispatch = useDispatch()

 useEffect(()=>{ 
  
    dispatch(login("pragatti"))
  
 
  
 },[])

  return  !loading?<div className="min-h-screen flex">  hello

  </div>:null;
  
  
}

export default App
