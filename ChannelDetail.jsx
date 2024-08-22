import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';




const ChannelDetail = () => {
const [channelDetail, setChannelDetail] = useState(null);
const [videos, setVideos] = useState([])


  const { id } = useParams();

console.log(channelDetail, videos)


  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));



    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));

  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,8,36,0.8799894957983193) 0%, rgba(13,87,147,0.8491771708683473) 40%, rgba(0,155,255,0.958420868347339) 100%)',
        zIndex: 10,
        height: '300px'
        
        }}
        />

        <ChannelCard channelDetail={channelDetail}
        marginTop="-130px" />
        
      </Box>
<Box display="flex"  p="2">

  <Box sx={{mr: {sm: '100px'}}}/>

    <Videos videos={videos}/>

</Box>

    </Box>
  )
}

export default ChannelDetail
