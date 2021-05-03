import { Video } from "./Video";
import Reactplayer from "react-player";
import "./VideoItem.css";
import { useHistory } from "react-router-dom";
import * as videoService from "./videoService";
import { toast } from "react-toastify";

interface Props {
  video: Video;
  fetchVideos: () => void;
}

const VideoItem = ({ video, fetchVideos }: Props) => {
  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    fetchVideos();
    toast.info("Video deleted successfully!");
  };
  const history = useHistory();

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)} // if video exists then delete
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <Reactplayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
