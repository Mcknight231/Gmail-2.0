import '../styles/SideBar.css';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from '../components/SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Button className='sidebar-compose' startIcon={<CreateIcon fontSize='large' />} selected={true}>Compose</Button>
      <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title='Starred' number={54}/>
      <SidebarOption Icon={LabelImportantIcon} title='Important' number={54}/>
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54}/>
      <SidebarOption Icon={NearMeIcon} title='Sent' number={54}/>
      <SidebarOption Icon={NoteIcon} title='Drafts' number={54}/>
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={54}/>

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton >
          <PersonIcon />
          </IconButton >
          <IconButton >
          <DuoIcon />
          </IconButton >
          <IconButton >
          <PhoneIcon />
          </IconButton >
        </div>
      </div>
    </div>
  )
}

export default SideBar