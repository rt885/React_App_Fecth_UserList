import { useParams } from "react-router-dom";
import Input from '../components/Input';
import API from '../utils/API'
import { useEffect, useState } from "react";

function ProfileView() {
  const params = useParams()
  const [userData, setUserData] = useState({})

  const loadData = () => {
    API.call(`/user/${params.id}`, (response) => {
      // console.log(response)
      setUserData(response)
    })
  }

  useEffect(() => {
    loadData()
  },)

  return(
    <div className="container">
      <h1>Info User</h1>
      <img src={userData.picture} alt="pic" height={200} className="rounded-circle" />
      <Input label='ID' value={params.id} />
      <Input label='First Name' value={userData.firstName} />
      <Input label='Last Name' value={userData.lastName} />
      <Input label='Gender' value={userData.gender} />
      <Input label='DOB' value={userData.dateOfBirth} />
    </div>
  )
}

export default ProfileView