### Project Description

-   **Tech Stack**: MERN (MongoDB, Express.js, React, Node.js), Next.js, TailwindCSS, MailChimp API
-   **Backend**: Developed using Node.js and Express.js to integrate with an existing API for fetching news data and MailChimp API to manage contact lists.
-   **Frontend**: Built with React and Next.js, utilizing TailwindCSS for responsive and modern design of the newsletter.
-   **Functionality**: Automates the creation of newsletters by reading JSON data, generating content, and inlining styles for email compatibility.
-   **Email Distribution**: Integrated MailChimp API to store contact information and send formatted newsletters to all contacts, ensuring professional and consistent email delivery.

[Mailchimp API](https://mailchimp.com/developer/marketing/api/campaigns/)

MAJOR CHALLENGE: Email should consist of the newsletter with the same styling as the web page contains in itself. The newsletter can be a raw html or an image or any format which works.
NOTE: You can use any other API / Library other than Mailchimp to manage contact lists and send emails.

## Project Setup

- Clone the repository: git clone https://github.com/nishantguvvada/oneChain.git
- Setup mailchimp: Create an account on mailchimp -> get MAILCHIMP_API_KEY & MAILCHIMP_SERVER_PREFIX -> cd backend -> create .env file -> Populate .env with API key and server prefix
- Run the backend: cd backend -> node index.js
- Run the frontend: cd frontend -> npm run dev
