#!/usr/bin/env node
const puppeteer = require("puppeteer");
const saveFile = require("./utils/saveFile");
const { Command } = require("commander");
const getVersion = require('./utils/version')
const program = new Command();


program
.name('savesrc')
  .version(getVersion(),"-v, --version", "Display version")
  .option("-d, --document", "Process only HTML documents")
  .option("-s, --script", "Process only JavaScript files")
  .option("-st, --style", "Process only CSS stylesheets")
  .option("-im, --image", "Process only images")
  .option("-a, --all", "Process all resources (default)")
  .helpOption("-h, --help", "Display help");
  program.addHelpText('afterAll', `
    Examples:
      your-cli-tool -d <URL>          Process only HTML documents from the URL
      your-cli-tool -s -st <URL>      Process JavaScript and CSS files from the URL
      your-cli-tool -a <URL>          Process all resource types from the URL
    `);
    program.addHelpText('beforeAll', 
      'savesrc v'+getVersion()
    )
program.parse(process.argv);
const options = program.opts();



// Main function to launch Puppeteer and capture website content
(async () => {
  const url = program.args[0]; // URL to process
  if (!url) {
    console.error("Please provide a URL.");
    process.exit(1);
  }

  const browser = await puppeteer.launch(
    {
      headless: "shell",
    }
  );
  const page = await browser.newPage();

  // Intercept network requests to capture the content
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    request.continue(); // Continue with the request
  });

  // Listen for responses and save them if they are HTML, CSS, or JS files
  try {
    page.on("response", async (response) => {
      const resourceType = response.request().resourceType();
      let content;
      if (response.ok()) {
        try {

          // Handle specific options: --document, --script, --style, --image
          if (options.document && resourceType === "document") {
            content = await response.text(); // Handle text-based content
            const contentType = response.headers()["content-type"];
            await saveFile(response.url(), content, resourceType, contentType);
          } else if (options.script && resourceType === "script") {
            
            content = await response.text(); // Handle text-based content
            const contentType = response.headers()["content-type"];
            await saveFile(response.url(), content, resourceType, contentType);
          } else if (options.style && resourceType === "stylesheet") {
            
            content = await response.text(); // Handle text-based content
            const contentType = response.headers()["content-type"];
            await saveFile(response.url(), content, resourceType, contentType);
          } else if (options.image && resourceType === "image") {
            content = await response.buffer(); // Handle binary content
            const contentType = response.headers()["content-type"];
            await saveFile(response.url(), content, resourceType, contentType);
          } else if (options.all) {
            
            if (
              ["document", "stylesheet", "script", "xhr", "fetch"].includes(
                resourceType
              )
            ) {
              content = await response.text(); // Handle text-based content
            } else if (
              ["image", "media", "font", "other"].includes(resourceType)
            ) {
              content = await response.buffer(); // Handle binary content (image, video, audio, etc.)
            } else if (["prefetch", "preflight"].includes(resourceType)) {
              console.log(
                `Skipping ${resourceType} request: ${response.url()}`
              );
              return;
            } else {
              console.log(
                `Unhandled resource type: ${resourceType} for ${response.url()}`
              );
              return;
            }
            
            const contentType = response.headers()["content-type"];
            await saveFile(response.url(), content, resourceType, contentType);

            // Handle default behavior (if no specific options are provided)
          } else if (
            !options.document &&
            !options.script &&
            !options.style &&
            !options.image &&
            !options.all
          ) {
            if (
              ["document", "stylesheet", "script", "xhr", "fetch"].includes(
                resourceType
              )
            ) {
              content = await response.text(); // Handle text-based content
            } else if (
              ["image", "media", "font", "other"].includes(resourceType)
            ) {
              content = await response.buffer(); // Handle binary content (image, video, audio, etc.)
            } else if (["prefetch", "preflight"].includes(resourceType)) {
              console.log(
                `Skipping ${resourceType} request: ${response.url()}`
              );
              return;
            } else {
              console.log(
                `Unhandled resource type: ${resourceType} for ${response.url()}`
              );
              return;
            }
            const contentType = response.headers()["content-type"];
            await saveFile(response.url(), content, resourceType, contentType);
          }
        } catch (error) {
          console.log(
            `Error processing ${resourceType} resource from ${response.url()}: ${error}`
          );
          return;
        }
        // console.log('executing line 135');

        // Proceed with saving the content if available
      } else {
        console.log(
          `Skipping failed request: ${response.url()} with status ${response.status()}`
        );
      }
    });
  } catch (error) {
    console.log(
      "something went wrong! failed to process response " + error
    );
  }

  try {
    await page.goto(url, { timeout: 0 });

  } catch (error) {
    console.error("Navigation failed " + error);
  } finally {
    await browser.close();
  }
})();
