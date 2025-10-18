import React from 'react'
import '../styles/SendMail.css'
import CloseIcon from '@mui/icons-material/Close';  
import { Button } from '@mui/material';

const SendMail = () => {
  return (
    <div className='sendMail'>
        <div className="sendMail-header">
            <h3>new Message</h3>
            <CloseIcon className='sendMail-close'/>
        </div>

        <form>
            <input type="email" placeholder='To' />
            <input type="text" placeholder='Subject' />
            <textarea placeholder='Message...' rows="10"></textarea>

            <div className="sendMail-options">
                <Button>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail