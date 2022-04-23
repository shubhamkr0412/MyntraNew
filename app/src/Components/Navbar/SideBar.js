import React from 'react'
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
const SideBar = ({getMensData}) => {
  // const [lists, setLists] = useState([]);
  // const arr=[];
  // console.log(lists);
  // useEffect(() => {
  //   getMensData();
  // }, []);

  // const getMensData = () => {
  //   fetch("http://localhost:3005/")
  //     .then((d) => d.json())
  //     .then((res) => {
  //       setLists(res);
  //     });
  // };
  
  return (
    <Box bgcolor="silver"
    flex={1}
    p={2}
    sx={{width: "150px" , marginLeft:"20px" , marginTop:"20px", padding: "10px",color:"black"}}
    > <List  >
        <ListItem key={0} disablePadding>
            <ListItemButton >
              
              <ListItemText onClick={() => {getMensData(1, "Shirts")}} primary="Shirts" />
            </ListItemButton>
          </ListItem>
          <ListItem key={1} disablePadding>
            <ListItemButton>
              
              <ListItemText onClick={() => {getMensData(1, "Jeans")}} primary="Jeans" />
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton>
              
              <ListItemText onClick={() => {getMensData(1, "Kurta")}} primary="Kurta" />
            </ListItemButton>
          </ListItem>
          <ListItem key={3} disablePadding>
            <ListItemButton>
             
              <ListItemText onClick={() => {getMensData(1, null, 500)}} primary="500-1000" />
            </ListItemButton>
          </ListItem>
          <ListItem key={4} disablePadding>
            <ListItemButton>
             
              <ListItemText primary="Color" />
            </ListItemButton>
          </ListItem>
      </List>
     
    </Box>
  )
}

export default SideBar
