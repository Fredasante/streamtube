import { Box, LinearProgress, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {!videos ? (
        <Box sx={{ width: "100%", color: "grey.500", mt: 3 }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : (
        <>
          {videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))}
        </>
      )}
    </Stack>
  );
};

export default Videos;
