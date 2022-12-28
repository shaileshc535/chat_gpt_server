"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./userRoute"));
const chatRoutes_1 = __importDefault(require("./chatRoutes"));
const Router = express_1.default.Router();
Router.use("/user", userRoute_1.default);
Router.use("/chat", chatRoutes_1.default);
exports.default = Router;
//# sourceMappingURL=index.js.map