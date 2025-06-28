import '../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-left">
        <IconButton><MenuIcon /></IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="" />
      </div>

      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder='Search mail' />
        <ArrowDropDownIcon className='header-inputCaret' />
      </div>

      <div className="header-right">
    <IconButton>
      <AppsIcon />
    </IconButton>
    <IconButton>
      <NotificationsIcon />
    </IconButton>
    <Avatar />
      </div>

    </div> 
  )
}

export default Header