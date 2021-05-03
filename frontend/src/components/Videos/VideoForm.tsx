import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Video } from "./Video";
import * as videoService from "./videoService";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Params {
  id: string;
}

const VideoForm = (): JSX.Element => {
  const history = useHistory();
  const { id } = useParams<Params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInput = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value }); //change value according to the input field.
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      await videoService.createVideo(video);
      toast.info("Video created successfully!");
    } else {
      await videoService.updateVideo({ video, id });
      toast.info("Video updated successfully!");
    }
    history.push("/");
  };

  useEffect(() => {
    const getVideo = async (id: string) => {
      const res = await videoService.getVideo(id);
      const { title, description, url } = res.data;
      setVideo({ title, description, url });
    };
    if (id) {
      getVideo(id);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            {id ? <h3>Update Video</h3> : <h3>New Video</h3>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title for this video"
                  className="form-control"
                  autoFocus
                  onChange={handleInput}
                  value={video.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInput}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInput}
                  value={video.description}
                ></textarea>
              </div>
              {id ? (
                <button className="btn btn-primary">Update video!</button>
              ) : (
                <button className="btn btn-primary">Create a video!</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
