import React from 'react'
import { Redirect } from 'react-router-dom'

const ResumePage = () => {
	window.open('https://drive.google.com/file/d/1D8xn2ok1Bnu9Kzg7A5o5zD-m5sagFUdg/view', '_blank')
    return <Redirect to='/' />
}

export default ResumePage
