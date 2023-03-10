import { Configuration, OpenAIApi } from "openai";

const Chat = async (req, res) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0.5,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).json({
      status: 200,
      type: "success",
      message: "Promt Response get Successfully",
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

export default { Chat };
