import request from "request";

const ImageGenrator = async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const size = req.body.size;

    // Set the prompt for the image generation
    const prompt = `Generate an image with the keyword "${keyword}"`;

    // Set the request options
    const options = {
      url: process.env.API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: {
        model: "image-alpha-001",
        prompt: prompt,
        num_images: 1,
        size: "256x256",
        response_format: "url",
      },
      json: true,
    };

    request.post(options, (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }

      res.status(200).json({
        status: 200,
        type: "success",
        message: "Promt Response get Successfully",
        data: body.data[0].url,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      type: "error",
      message: error,
    });
  }
};

export default { ImageGenrator };
