import '../styles/EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from '../components/Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from '../components/EmailRow';

const EmailList = () => {
  return (
    <div className='emailList'>
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList-settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
        <div className="emailList-section">
          <Section Icon={InboxIcon} title='Primary' color='red' selected/>
          <Section Icon={PeopleIcon} title='Socials' color='blue'/>
          <Section Icon={LocalOfferIcon} title='Primary' color='green'/>
        </div>
        <div className="emailList-list">
          <EmailRow title='Test' subject='Test subject' description='This is a test' time='4pm'/>
          <EmailRow title='Test' subject='Test subject' description='This is a test' time='4pm'/>
        </div>
      </div>
    </div>
  )
}

export default EmailList