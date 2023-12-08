/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'
import './scss/style.scss'
import { CiSearch } from "react-icons/ci";
import StageClick from '../../../components/stageClick/StageClick'
import StudentCard from '../../../components/cards/StudentCard'
import CommunityPageDropdown from '../../../components/communityPageDropdown/CommunityPageDropdown'

export default function Community() {
  const [members, setMembers] = useState([])
  const [selectedField, setSelectedField] = useState(null)
  const [fieldDisplayName, setFieldDisplayName] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentStage, setCurrentStage] = useState(1)

  const fetchData = async () => {
    try {
      const response = await axios.get('/members.json')
      setMembers(response.data.members)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFieldSelect = (fieldName, field) => {
    setSelectedField(field)
    setFieldDisplayName(fieldName)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredMembers = members.filter((member) => {
    if (selectedField && member.field !== selectedField) {
      return false
    }
    return member.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const itemsPerPage = 28
  const totalStages = Math.ceil(filteredMembers.length / itemsPerPage)

  const handleStageClick = (stage) => {
    setCurrentStage(stage)
  }

  const backgroundImageUrl = 'url("https://res.cloudinary.com/techbro/image/upload/v1700431865/communty_wafeg9.jpg")'
  const bgImage = {
    background: backgroundImageUrl,
    backgroundSize: 'cover',
  }

  return (
    <div>
      {/* hero sectioin */}
      <div className='hero-section py-60 d-flex flex-column justify-content-center align-items-center' style={bgImage}>
        <Container className='text-center'>
          <h1 className='text-white'>
            Explore Community
          </h1>
          <p className='pb-5 hero-p1' style={{ color: '#FF031F' }}>
            Meet the Tech Innovators who fuel our community’s growth.
          </p>
          <p className='text-white hero-p2'>
            Whether you're seeking collaboration, finding talents, or simply looking to expand your network, you've come to the right place.{' '}
          </p>
        </Container>
      </div>
      {/* list of people */}
      <Container className='members-section pt-5 d-flex flex-column gap-5'>
        <div className='py-5 d-flex gap-3 justify-content-between'>
          <CommunityPageDropdown selectedField={selectedField} handleFieldSelect={handleFieldSelect} fieldDisplayName={fieldDisplayName} />
          <div className='search-box' style={{ width: '344px', minWidth: '10px' }}>
            <input
              className='search-input border border-secondary w-100 rounded'
              type='text'
              placeholder='Search for a member'
              id='name'
              name='name'
              value={searchTerm}
              onChange={handleSearch}
            />
            <CiSearch className='search-icon text-secondary' />
          </div>
        </div>
        {filteredMembers.length > 0 ? (
          <>
            <Row className='d-flex justify-content-center align-items-center gap-5'>
              {filteredMembers.slice((currentStage - 1) * itemsPerPage, currentStage * itemsPerPage).map((student, index) => (
                <Col xs={2} md={4} lg={6} key={index} style={{ width: '295px', height: '264px', marginBottom: '40px' }} className='custom-card'>
                  <StudentCard key={index} student={student} name={student.name} />
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <div className='text-center fw-bold'>
            <h4>No member found</h4>
          </div>
        )}
        <StageClick totalStages={totalStages} currentStage={currentStage} handleStageClick={handleStageClick} />
      </Container>
    </div>
  )
}
