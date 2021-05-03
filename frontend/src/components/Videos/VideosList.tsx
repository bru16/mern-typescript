import VideoItem from "./VideoItem";
import useVideos from "../CustomHooks/useVideos";

const VideosList = () => {
  const { videos, fetchVideos, message } = useVideos();
  if (message)
    return (
      <div className="d-flex justify-content-center">
        <h1>{message}</h1>;
      </div>
    );
  if (!videos)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <div className="row">
      {videos.map((video, index) => {
        return (
          <VideoItem video={video} key={index} fetchVideos={fetchVideos} />
        );
      })}
    </div>
  );
};

export default VideosList;
