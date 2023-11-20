import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Community() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/members')
        setMembers(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
        <di className=""></di>
        <div></div>
      <h1>Members Data from Mock API</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> - {member.field}
            <img src={member.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}
