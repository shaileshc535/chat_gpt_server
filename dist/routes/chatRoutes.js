"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatcontroller_1 = __importDefault(require("../controller/chat/chatcontroller"));
// import auth from "../middleware/auth.middleware";
const router = express_1.default.Router();
router.post("/gpt", chatcontroller_1.default.Chat);
exports.default = router;
//# sourceMappingURL=chatRoutes.js.map