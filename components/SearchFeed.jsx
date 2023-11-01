"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromApi } from "@/utils/fetchFromApi";
import { useParams } from "next/navigation";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    // setVideos(null);

    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
      <Typography variant="h4" mt={2} mb={4} fontWeight="bold">
        Search results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
