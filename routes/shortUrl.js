const express = require("express");
const router = express.Router();

//const { nanoid } = require("nanoid");
const URL = require("../models/urlModel");

const baseUrl = "http://localhost:3000/urlapi/";

router.get("/:short", async (req, res) => {
	try {
		let shortId = req.params.short;
		let url = await URL.findOne({
			where: { shortUrl: `${baseUrl}${shortId}` }
		});
		if (!url) {
			res.status(404).send("Enter valid code");
		}
		res.redirect(url.longUrl);
	} catch (e) {
		console.log(e);
		res.status(400).send(e.message);
	}
});

router.post("/", async (req, res) => {
	try {
		const { longUrl } = req.body;
		const shortId = baseUrl + Math.random();

		const storeUrl = await URL.create({
			longUrl,
			shortUrl: shortId
		});
		res.status(200).json({
			status: "ok",
			shortUrl: storeUrl.shortUrl
		});
	} catch (e) {
		console.log(e);
		res.status(400).send(e.message);
	}
});

module.exports = router;
