import '../styles/EmailRow.css';
import Checkbox from '@mui/icons-material/Checkbox';
import IconButton from '@mui/material/IconButton';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

const EmailRow = ({ title, subject, description, time }) => {
  return (
    <div className='emailRow'>
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
        <div className="emailRow-description">{time}</div>

    </div>
  )
}

export default EmailRow