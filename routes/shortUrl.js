const express = require("express");
const router = express.Router();

//const { nanoid } = require("nanoid");
const URL = require("../models/urlModel");

const baseUrl = "http://localhost:3000/urlapi/";

router.get("/", (req, res) => {});

router.post("/", async (req, res) => {
	try {
		const { longUrl } = req.body;
		const shortId = baseUrl + Math.random();

		//todo: write code to push to DB

		res.status(200).json({
			status: "ok"
			//todo: return the shortUrl
		});
	} catch (e) {
		res.status(400).send(e.message);
	}
});

module.exports = router;
