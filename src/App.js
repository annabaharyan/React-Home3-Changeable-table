import { useState } from 'react';
import './App.css';

function App() {
  const user_data=[
    {
      id:1,
      fullname:"Sedrak Sedrakyan",
      phone:"212121212",
      email:"sedrak.sedrakyan@gmail.com",
      state:false

    },
    {
      id:2,
      fullname:"Poxos Poxosyan",
      phone:"4445454511",
      email:"poghos.poghosyan@gmail.com",
      state:false
    },
    {
      id:3,
      fullname:"Petros Petrosyan",
      phone:"548421225",
      email:"petros.petrosyan@gmail.com",
      state:false
    },
    {
      id:4,
      fullname:"Colak Colakyan",
      phone:"4445454511",
      email:"colak.colakyan@gmail.com",
      state:false
    },
  ]
  const [users,setUsers]=useState(user_data);
  const addUser=(e)=>{
   
    e.preventDefault()
 
   
    setUsers([
      ...users,
      {
        id:users.length>0?users[users.length-1].id+1:1,
        fullname:e.target[0].value,
        phone:e.target[1].value,
        email:e.target[2].value,
        state:false
      }
   ])
 
  }
  const delUser=(id)=>{
    let newUsers=users.filter(user=>user.id!==+id);
    setUsers(newUsers)
  }

const   editUser=(id)=>{
let editUser=users.map(user=>{
  if(user.id===id){

    user.state=true
  }else{
    user.state=false
  }
  return user
  }
 )
 setUsers(editUser)
}
const [updateName, setUpdateName]=useState("")
const getInputValue=(e)=>{
  setUpdateName(e.target.value)
}

const updateUserName=(id)=>{
  let updateUser=users.map(user=>{
    if(user.id===id){
      user.state=false
      user.fullname=updateName;
    }else{
      user.state=false
    }
    return user
    }
   )
   setUsers(updateUser)

}
const [updatePhone, setUpdatePhone]=useState("")
const getInputValue2=(e)=>{
  setUpdatePhone(e.target.value)
}

const updateUserPhone=(id)=>{
  let updateUser=users.map(user=>{
    if(user.id===id){
      user.state=false
      user.phone=updatePhone;
    }else{
      user.state=false
    }
    return user
    }
   )
   setUsers(updateUser)

}
const [updateEmail, setUpdateEmail]=useState("")
const getInputValue3=(e)=>{
  setUpdateEmail(e.target.value)
}

const updateUserEmail=(id)=>{
  let updateUser=users.map(user=>{
    if(user.id===id){
      user.state=false
      user.email=updateEmail;
    }else{
      user.state=false
    }
    return user
    }
   )
   setUsers(updateUser)

}
  return (
   <div>
    <table>
      <thead>
        <tr>
          <th>User id</th>
          <th>Fullname</th>
          <th>Phone number</th>
          <th>Email</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
  {users.map((user,index)=>(
    
    <tr key={index}>
      <td>{user.id} </td>
      <td><span style={{display: user.state?"none":"block"}}>{user.fullname}</span>
      <input type="text"
        defaultValue={user.fullname} 
        style={{display: user.state?"block":"none"}}
        onChange={(e)=>getInputValue(e)}/>
      </td>
      <td><span style={{display: user.state?"none":"block"}}>{user.phone}</span>
      <input type="text"
         defaultValue={user.phone} 
        style={{display: user.state?"block":"none"}}
        onChange={(e)=>getInputValue2(e)}
       /></td>
      <td><span style={{display: user.state?"none":"block"}}>{user.email}</span>
      <input type="text" 
         defaultValue={user.email} 
        style={{display: user.state?"block":"none"}}
        onChange={(e)=>getInputValue3(e)}
      /></td>
      <td>
      <button onClick={()=>delUser(`${user.id}`)}>Delete</button>
      </td>
      <td>
        <button type="button"onClick={()=>editUser(user.id)}style={{display: user.state?"none":"block"}}>Edit</button>
        <button type="button"onClick={()=>{
         updateUserName(user.id);
         updateUserPhone(user.id)
         updateUserEmail(user.id)
        }
          
          }
           style={{display: user.state?"block":"none"}}>Update</button>
      </td>
    
  </tr>
))}
      </tbody>
    </table>
 <div className='addCont'>
    <h1>Add new user</h1>
    <form onSubmit={(e)=>addUser(e)}>
      <input type="text"required placeholder='Fullname'/>
      <input type="text"required placeholder='Phone number'/>
      <input type="email"required placeholder='Email'/>
      <button type="submit" >Add</button>
    </form>
 </div>
</div>
  );
}

export default App;
