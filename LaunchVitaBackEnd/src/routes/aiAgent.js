import express from "express";
import genrate from "../controllers/aiAgent.controller.js";
const route = express();



route.get("/ai", genrate);


export default route;