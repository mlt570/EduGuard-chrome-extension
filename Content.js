const generateSTYLES = () => `
  <style>
    body {
      background-color: #1a1a1a;
      color: #fff;
      font-family: 'Roboto Mono', monospace;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      text-align: center;
    }
    .glitch {
      font-size: 10em; /* Adjust font size for 404 */
      font-weight: bold;
      position: relative;
      display: inline-block;
      z-index: 2;
      color: #ff0000; /* Glitch color */
      text-transform: uppercase;
      letter-spacing: 10px;
      animation: glitch 1s infinite linear alternate-reverse;
      max-width: 90%; /* Ensure text fits within screen */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 20px; /* Add margin for spacing */
    }
    .message {
      font-size: 6em; /* Adjust font size for "GET BACK TO WORK" */
      margin-top: 20px;
    }
    .reason {
      font-size: 4em; /* Adjust font size for "Your future is more important than ${pageName}" */
      margin-top: 10px;
    }
    hr {
      border: 1px solid #fff;
      width: 50%;
      margin: 20px auto;
    }
    .glitch:before,
    .glitch:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      clip: rect(0, 1000px, 0, 0);
    }
    .glitch:before {
      left: -2px;
      text-shadow: -2px 0 #00ffff; /* Text shadow color */
      background: #1a1a1a; /* Background color */
    }
    .glitch:after {
      left: 2px;
      text-shadow: 2px 0 #ff00ff; /* Text shadow color */
      background: #1a1a1a; /* Background color */
    }
    @keyframes glitch {
      0% {
        clip: rect(22px, 9999px, 36px, 0);
      }
      10%, 20% {
        clip: rect(18px, 9999px, 78px, 0);
      }
      30% {
        clip: rect(64px, 9999px, 12px, 0);
      }
      40%, 60%, 80% {
        clip: rect(12px, 9999px, 46px, 0);
      }
      50%, 70% {
        clip: rect(21px, 9999px, 43px, 0);
      }
      90%, 100% {
        clip: rect(76px, 9999px, 12px, 0);
      }
    }
  </style>
`;

// function to generate HTML content based on the page name
const generateHTML = (pageName) => `
  <div class="container">
    <div class="error-code glitch" data-text="404">404</div>
    <hr>
    <div class="message">GET BACK TO WORK !!!</div>
    <div class="reason">Your future is more important than ${pageName}</div>
  </div>
`;


const pageName = "EduGuard";
const htmlContent = generateSTYLES() + generateHTML(pageName);

console.log(htmlContent); // Outputs the combined HTML and CSS


  // switch case to handle different websites and apply the corresponding HTML
  switch (window.location.hostname) {
    case "www.amazon.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("shopping.");
      break;
    case "www.ae.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("American Eagle jeans.");
      break;
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YouTube.");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Facebook.");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Netfix.");
      break;
    case "www.instagram.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Instagram.");
      break;
    case "www.pinterest.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Pinterest.");
      break;
    case "www.snapchat.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Snapchat.");
      break;
    case "www.whatsapp.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Whatsapp.");
      break;
      
  }
  if (window.location.hostname === "open.spotify.com") {
    alert("Remember to only play songs that you will help you focus.");
  }
