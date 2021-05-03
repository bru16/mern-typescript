import { RequestHandler } from 'express'
import Video from '../models/Video'

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos).status(200);
    } catch (error) {
        res.status(500);
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findById(req.params.id);
        if (!videoFound) return res.status(204).json()
        res.json(videoFound).status(200);
    } catch (error) {
        console.log(error)
        res.status(500);
    }
}

export const createVideo: RequestHandler = async (req, res) => {
    try {
        const videoExists = await Video.findOne({ url: req.body.url });
        if (videoExists) return res.json({ message: 'The url already exists' }).status(400);
        const video = new Video(req.body);
        const savedVideo = await video.save();
        res.json(savedVideo).status(200);
    } catch (error) {
        res.status(500);
    }
}

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findByIdAndDelete(req.params.id);
        if (!videoFound) return res.status(204).json();
        res.json(videoFound).status(200);
    } catch (error) {
        res.status(500);
    }
}

export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });   // first parameter is id, second properties to update it.
        if (!video) return res.status(204).json({ message: "Video not found" });
        res.json(video).status(200);
    } catch (error) {
        res.status(500);
    }
}

