const express = require("express");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const NEWS_API_KEY = process.env.API_KEY;
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const AUDIENCE_ID = process.env.AUDIENCE_ID;

mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/newsletter", async (req, res) => {

    try {
        
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`)
        const newsData = response.data.articles

        return res.status(200).json({data: newsData});

    } catch(err) {

        return res.status(400).json({error: "Error encountered: " + err});

    }


});

app.post("/send-newsletter", async (req, res) => {

    try{

        const campaignResponse = await mailchimp.campaigns.create({
            type: "regular",
            recipients: {
                list_id: AUDIENCE_ID
            },
            settings: {
                subject_line: "TEST BY NISHANT GUVVADA",
                preview_text: "TEST BY NISHANT GUVVADA",
                title: "MAIL DISTRIBUTION REACT PROJECT",
                from_name: "Nishant Guvvada",
                reply_to: "nishant.guvvada@gmail.com"
            }
        })

        await mailchimp.campaigns.setContent(campaignResponse.id, {
            html: req.body.htmlString
        });

        await mailchimp.campaigns.send(campaignResponse.id);

        return res.status(200).json({message: "Newsletter sent successfully!"});

    } catch(err) {

        console.log("Error encountered: ", err);
        return res.status(403).json({error: "Failed to send the newsletter!"});

    }
});


app.listen(4000);