import { Request, Response } from 'express';
import openai from '../config/openAI'; 

export const getVideoDetails = async (req: Request, res: Response) => {
  const { title } = req.body;

  try {
    const description = await openai.completions.create({
      model: 'davinci',
      prompt: `Come up with a description for a YouTube video called ${title}`,
      max_tokens: 100,
    });

    const tags = await openai.completions.create({
      model: 'davinci',
      prompt: `Come up with 10 keywords for a YouTube video called ${title}`,
      max_tokens: 100,
    });

    const tagsArray = tags.choices[0].text.split(',').map((tag) => tag.trim());

    res.status(200).json({
      description: description.choices[0].text,
      tags: tagsArray,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default getVideoDetails;
