# Deploying to Render

This guide walks you through deploying your Next.js portfolio to Render.

## 1. Push to GitHub
I have already initialized the repository and pushed your code to:
**[https://github.com/TechNxt05/Portfolio](https://github.com/TechNxt05/Portfolio)**

## 2. Create a Web Service on Render
1.  **Log in** to your [Render Dashboard](https://dashboard.render.com/).
2.  Click **"New +"** -> **"Web Service"**.
3.  Select **"Build and deploy from a Git repository"**.
4.  Connect your GitHub account if prompted.
5.  Search for `Portfolio` (or `TechNxt05/Portfolio`) in the list and click **"Connect"**.

## 3. Configure the Deployment
Render usually auto-detects Next.js, but ensure these settings are correct:

| Setting        | Value                                   |
| :------------- | :-------------------------------------- |
| **Name**       | `my-portfolio` (or any name you like)   |
| **Region**     | Choose the one closest to your users.   |
| **Branch**     | `main`                                  |
| **Root Directory** | `. ` (leave empty)                  |
| **Runtime**    | **Node**                                |
| **Build Command** | `npm install && npm run build`       |
| **Start Command** | `npm start`                          |

> [!NOTE] 
> Render might default `npm build` to `yarn build`. Make sure it says `npm run build` or `npm install && npm run build`.

## 4. Deploy
1.  Click **"Create Web Service"**.
2.  Wait for the logs to finish. You'll see "Your service is live" when it's done.
3.  Click the provided `.onrender.com` link to view your live site!
