import React from 'react';

const IndexPage = () => (
  <main>
    <h1>Welcome to My Gatsby Site</h1>
    <p>Hello! My name is Alparslan Usta.</p>

    <h2>How to Deploy this Site on Netlify</h2>
    <ol>
      <li>
        <strong>Step 1:</strong> Go to <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a> and sign up for a free account, or log in if you already have one.
      </li>
      <li>
        <strong>Step 2:</strong> Click on “New site from Git” on your Netlify dashboard.
      </li>
      <li>
        <strong>Step 3:</strong> Connect your GitHub (or other version control) account to Netlify and select your Gatsby project repository.
      </li>
      <li>
        <strong>Step 4:</strong> In the “Build settings” page, specify the following:
        <ul>
          <li>**Build Command**: `gatsby build`</li>
          <li>**Publish Directory**: `public`</li>
        </ul>
      </li>
      <li>
        <strong>Step 5:</strong> Click “Deploy Site” and wait for Netlify to build and deploy your Gatsby site. You’ll get a live URL when it’s done!
      </li>
    </ol>

    <p>Once deployed, you can update and manage your site directly through Netlify.</p>
  </main>
);

export default IndexPage;
