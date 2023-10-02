import express from "express";
import { getVideoDetails } from '../controllers/youtubeController'; 

const router = express.Router();

router.post('/youtube', getVideoDetails);

export default router;
