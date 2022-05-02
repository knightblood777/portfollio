import './projects.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="prwrap">
    <h4 className="prhead"><span className="xterm"></span><span className="Important">cd </span> /Projects</h4>
    </div>
    
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Blog/Chatting project" value="1" />
            <Tab label="Portfollio project" value="2" />
            <Tab label="Automated recon tool" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">As any kind of regular developer, and alongside of <span className='Important-md'> learning django</span>. I decided why not to create a blogsite where i can share articles about different aspects and subjects. The innovation came to me as an idea to what stoppes me from going beyound regular read/comment on blogs and boring-ish features that all blogsite have. My brain instantly rings with a <span className='Important-md'>chat system integration</span>, and that's what i created. Using django itself, i succeded to implement this chat system with all its <span className='Important-md'>features</span>(Send friend request,add,remove,block,chatting..)</TabPanel>
        <TabPanel value="2">I'm talking about this one, i built it from <span className='Important-md'>scratch</span>. I always beleive in the idea of practice to master and that what i've done in the previous mentioned project aswell as this one. React is a javascript libarary that make use of javascript functions as a way of rendering html into pages. So i built this simple portfollio using react/mui and django combined. </TabPanel>
        <TabPanel value="3">Well, moving a bit from web developement and going towards <span className='Important-md'>web hacking and penetration testing</span>, as a bug bounty hunter recon presents a valuable phase during our assessement. So what i did was just <span className='Important-md'>creating a bash script</span> that automate the regular/boring workflow of recon phase such as subdomain enum, assets,juice info... about targets.</TabPanel>
      </TabContext>
    </Box>
    </>
  );
}