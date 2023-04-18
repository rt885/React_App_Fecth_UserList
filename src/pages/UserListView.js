import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import Table from '../components/Table'
import API from '../utils/API'

function UserListView() {
  // hook
  const [isLoading, setLoading] = useState(false)
  const [userList, setUserList] = useState([])

  const loadData = () => {
    setLoading(true)
    API.call('/user', (response) => {
      console.log(response.data)
      setUserList(response.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return(
    <div className="container">
      <h1>Lista de usuarios</h1>
      <Button onClick={loadData} type='primary'>Refresh</Button>

      { isLoading ?
        <Spinner msg='Loading...' /> :

        <Table headers = {[
          {title:'', key:'picture', render: (value) => {return(<><img className="rounded-circle" height={50} src={value} alt="yes"/></>)}},
          {title:'Title', key:'title'},
          {title:'First Name', key:'firstName'},
          {title:'Last Name', key:'lastName'},
          {title:'', key:'id', render: (value) => {return(<Link to={`/profile/${value}`}>Ver Perfil</Link>)}},
        ]}
        data = {userList} />
      }
    </div>
  )
}

export default UserListView;