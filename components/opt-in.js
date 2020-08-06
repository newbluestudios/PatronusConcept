import React, {useState, useCallback, useEffect } from 'react'
import Router from 'next/router'
import _ from 'lodash'

//locationId corresponds to Location locationId and comes from /[location]
export default ({locationId}) => {
console.log('🧨',locationId)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('/api/opt-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        locationId,
      }),
    })
  }

  //TODO: Client-side validation ie. well-formatted strings
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={firstName}
          onChange={(event)=>setFirstName(event.target.value)}
          placeholder='First Name'
        />
      </label>
      <label>
        Name:
        <input
          type='text'
          value={lastName}
          onChange={(event)=>setLastName(event.target.value)}
          placeholder='Last Name'
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
          placeholder='Email address'
        />
      </label>
      <label>
        Phone Number:
        <input
          type='tel'
          value={phone}
          onChange={(event)=>setPhone(event.target.value)}
          placeholder='Phone Number'
        />
      </label>

      <button type="submit">Opt In</button>
    </form>
  )
}