"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    apiKey: "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",
});
const openai = new openai_1.OpenAIApi(configuration);
const Chat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prompt = req.body.prompt;
        const response = yield openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });
        res.status(200).json({
            status: 200,
            type: "success",
            message: "Promt Response get Successfully",
            data: response.data.choices[0].text,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            type: "error",
            message: error,
        });
    }
});
exports.default = { Chat };
//# sourceMappingURL=chatcontroller.js.map