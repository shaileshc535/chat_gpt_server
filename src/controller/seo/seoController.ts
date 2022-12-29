import { Configuration, OpenAIApi } from "openai";

const getSeoContent = async (req, res) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const title = req.body.title;
    const description = req.body.description;

    const prompt = `Generate meta tags for a website with the following title and description: Title: ${title} Description: ${description}`;
    const model = "text-davinci-002";

    const response = await openai.createCompletion({
      model: model,
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).json({
      status: 200,
      type: "success",
      message: "SEO Content generated Successfully.",
      data: response.data.choices[0].text,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      type: "error",
      message: error,
    });
  }
};

export default getSeoContent;
