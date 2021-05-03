import axios from "axios";
import { Video } from "./Video";
const API = "http://localhost:4000/api";

interface Params {
  video: Video;
  id: string;
}

export const getVideos = async () => {
  return await axios.get<Video[]>(`${API}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${API}/videos/${id}`);
};

export const updateVideo = async ({ video, id }: Params) => {
  return await axios.put<Video>(`${API}/videos/${id}`, video);
};

export const deleteVideo = async (id: String) => {
  return await axios.delete(`${API}/videos/${id}`);
};
