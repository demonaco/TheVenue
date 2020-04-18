import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
      <Drawer
      anchor="right"
      open={props.open}
      onClose={()=> props.onClose(false)}
      >  
          <List components="nav">

            <ListItem button onClick={()=> console.log("Hi") } >
                Event starts in
            </ListItem>

            <ListItem button onClick={()=> console.log("Hi") } >
                Venue info
            </ListItem>

            <ListItem button onClick={()=> console.log("Hi") } >
                Highlights
            </ListItem>

            <ListItem button onClick={()=> console.log("Hi") } >
                Pricing
            </ListItem>

            <ListItem button onClick={()=> console.log("Hi") } >
               Location
            </ListItem>

          </List>
      </Drawer>
    );
};

export default SideDrawer;