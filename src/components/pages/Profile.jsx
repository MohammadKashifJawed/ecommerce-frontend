import axios from "axios"
import { useEffect, useState } from "react"

const Profile = () => {
    const token = localStorage.getItem('access_token')
    const [details, setDetails] = useState({id: '', avatar: null, email: '', name: '', role: ''})
    const {id, avatar, email, name, role} = details
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/auth/profile',
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(({data}) => {
            setDetails({
                id: data.id,
                avatar: data.avatar,
                email: data.email,
                name: data.name,
                role: data.role
            })
        }).catch(err => console.log(err))
    }, [details, token])
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="h-2/3 w-1/3 flex flex-col justify-evenly items-center shadow-md 
        shadow-zinc-600 rounded-2xl">
        <img src={avatar} alt="avatar" height={200} width={200} className="rounded-[50%]" />
        <p className="text-xl font-bold text-zinc-900">Name: 
            <span className="text-zinc-700">{name}</span>
        </p>
        <p className="text-xl font-bold text-zinc-900">Email: 
            <span className="text-zinc-700">{email}</span>
        </p>
        <p className="text-xl font-bold text-zinc-900">Role: 
            <span className="text-zinc-700">{role}</span>
        </p>
      </div>
    </div>
  )
}

export default Profile
