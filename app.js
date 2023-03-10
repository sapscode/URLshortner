require("dotenv").config();
const express = require("express");
const app = express();

const homeRoutes = require("./routes/home");
const shortUrl = require("./routes/shortUrl");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/urlapi", shortUrl);
app.use("/", homeRoutes);

app.listen(process.env.PORT, () => {
	console.log(`listening on PORT ${process.env.PORT}`);
});
