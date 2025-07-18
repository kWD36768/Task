import React from 'react'

const practice = () => {
 const handleresgister= (e)=>{
e.preventDefault();
constg existuser = JSON.parse(localStorage.getItem("users") ||  [])

const newuser = {
  ...formdata ,
  id  : Date.now().toString()
}
existuser.push(newuser)
 
localStoragel.setItem("users" , JSON.stringify(existuser))
 }
  return (
    
   
   
  )
}

export default practice