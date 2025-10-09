import '../styles/EmailRow.css';
import Checkbox from '@mui/icons-material/Checkbox';
import IconButton from '@mui/material/IconButton';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';

const EmailRow = ({ title, subject, description, time }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/mail")} className='emailRow'>
        <div className="emailRow-options">
            <Checkbox />
            <IconButton>
            <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
            <LabelImportantOutlinedIcon />
            </IconButton>
        </div>
        <div className="emailRow-title">{title}</div>
        <div className="emailRow-subject">
          <h4>{subject}</h4>
          <span className='emailRow-description'>{description}</span>
          </div>
        <div className="emailRow-time">{time}</div>

    </div>
  )
}

export default EmailRow