import { useState, useEffect } from "react";
import { Video } from "../Videos/Video";
import * as videoService from "../Videos/videoService";

const useVideos = () => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const fetchVideos = async () => {
    try {
      const res = await videoService.getVideos();
      res.data.length === 0
        ? setMessage("Try adding a new Video!")
        : setVideos(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return { videos, fetchVideos, message };
};

export default useVideos;
