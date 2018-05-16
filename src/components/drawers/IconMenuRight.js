import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import Person from 'material-ui/svg-icons/social/person';
import Settings from 'material-ui/svg-icons/action/settings';
import Update from 'material-ui/svg-icons/action/update';


/**
 * Example of nested menus within an IconMenu.
 */
const IconMenuRight = () => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    {/* <MenuItem
      primaryText="Editar Tabelas"
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem primaryText="Cut" />,
        <MenuItem primaryText="Copy" />,
        <Divider />,
        <MenuItem primaryText="Paste" />,
      ]}
    /> */}

   
    <MenuItem primaryText="Download CSV" leftIcon={<Download />} />
    <Divider />
    {/* <MenuItem value="Del" primaryText="Delete" /> */}
    <MenuItem
      primaryText="Editar Tabelas" leftIcon={<Update />}
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem primaryText="Data Management" />,
        <Divider />,
        
        <MenuItem primaryText="Pesos do Parâmetro" />,
      
      ]}
    />
    <Divider />
    <MenuItem primaryText="Configurações" leftIcon={<Settings />} />
    <MenuItem primaryText="Logout"  leftIcon={<Person />}/>

  </IconMenu>
);

export default IconMenuRight;