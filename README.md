
This is a demo project demonstrating how to integrate AskYourDatabase chatbot into [Next.js](https://nextjs.org/).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

## Prepare enviroment variables

Copy `.env.local.example` to `.env.local` and replace with your own enviroment variable.

`AYD_API_KEY` can be created in [API Key](https://www.askyourdatabase.com/dashboard/api-key) page.

`AYD_CHATBOT_ID` can be found in the URL, for example `https://www.askyourdatabase.com/dashboard/chatbot/12345678-1234-1234-1234-123456789012` the chatbot ID is `12345678-1234-1234-1234-123456789012`.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAskYourDatabase%2Fnextjs-chatbot&env=AYD_API_KEY,AYD_CHATBOT_ID&envDescription=API_KEY%20can%20be%20created%20at%20https%3A%2F%2Fwww.askyourdatabase.com%2Fdashboard%2Fapi-key.%20CHATBOT_ID%20can%20be%20found%20in%20chatbot%20edit%20URL.)