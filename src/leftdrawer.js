import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import HomeIcon from '@material-ui/icons/Home';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import TodayIcon from '@material-ui/icons/Today';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const AppMenu: React.FC = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (

    <List component="nav" className={classes.appMenu} disablePadding>

    <Button
            variant="contained"
            color="primary"
            size="medium"

            endIcon={<AddIcon>AddIcon</AddIcon>}
          >
            Create Job
          </Button>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>

          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>





// Nested menuItem



<ListItem button onClick={handleClick} className={classes.menuItem}>
  <ListItemIcon className={classes.menuItemIcon}>
    <WorkOutlineIcon />
  </ListItemIcon>

  <List component="div" disablePadding>
      <ListItemText primary="Jobs" />
      {open ? <IconExpandLess /> : <IconExpandMore />}

        <Collapse in={open} timeout="auto" unmountOnExit>
           <Divider />
      <List component="div" disablePadding>
       <ListItem button className={classes.menuItem}>
                   <ListItemText inset primary=" Applicants" />
                 </ListItem>
                 <ListItem button className={classes.menuItem}>
                   <ListItemText inset primary="Track" />
                 </ListItem>
                 <ListItem button className={classes.menuItem}>
                   <ListItemText inset primary="Interview" />
                 </ListItem>
                 <ListItem button className={classes.menuItem}>
                   <ListItemText inset primary="Source" />
                 </ListItem>

  </List>
   </Collapse>
        </List>
      </ListItem>





      ///////////////////////////////////////////////////////


      <ListItem button className={classes.menuItem} >
        <ListItemIcon className={classes.menuItemIcon}>
        <PeopleOutlineIcon/>
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>



      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
        <TodayIcon/>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
        <PersonOutlineIcon/>
          </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
    </List>
  )
}

const drawerWidth = 260

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
      color: '#1A1817',
    },
    menuItemIcon: {
      color: '#2AC8E2',
    },
  }),
)

export default AppMenu
