import React from 'react'
import { Redirect } from 'react-router-dom'

const ResumePage = () => {
    window.open('https://drive.google.com/open?id=1ea9Abgl_VtmV4gTzWeiw6qwRGI2fNWz0', '_blank')
    return <Redirect to='/' />
}

export default ResumePage
