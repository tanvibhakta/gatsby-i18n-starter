<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  all-i18n-starter
</h1>

Kick off your project with this opinionated i18n boilerplate that contains everything you will need (eventually). This barebones i18n starter ships with the main Gatsby configuration files you might need, and some components that wrap around them to make it easier to build i18n websites without having to worry about the implementation details.

_Have an idea for a new feature, a re-factor, or just a question? You could [email](mailto: me@tanvibhakta.in) me, [tweet]() to me, or raise an issue/PR. You may also want to check out some other [Gatsby official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create an i18n-built-in Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    # create a new Gatsby site using this starter
    npx gatsby new my-i18n-site <----ADD MY SOURCE CONTROL LINK HERE---->
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-i18n-site/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the `my-i18n-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    
## 🧐 What's inside?

You can find out what a regular gatsby project file-structure looks like [in these doc pages](https://www.gatsbyjs.org/docs/gatsby-project-structure/). For a quick look at the top-level files and directories you'll see in this project, read on:

    ```
    ├── /src
        ├── /components
            ├── lang-link.js
            ├── lang-switcher.js
            ├── markdown-renderer.js
        ├── /contexts
            ├── language-context.js
        ├── /markdown
            ├── /ar
                ├── testing.md
            ├── /en
                ├── testing.md
            ├── /fr
                ├── testing.md
            ├── /hi
                ├── testing.md
        ├── /pages
            ├── 404.js
            ├── index.js
            ├── page-2.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    └── README.md
    ```

  +  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.   

   +  **`/components`**: This directory generally contains all the code related to the various ui components we are using.   
     +  **`lang-link.js`**: This component is a wrapper around the Gatsby `Link` component which takes the `to` prop and returns a path that is specific to the language currently set. It also optionally takes a `lang` prop to deliver the user to the page renderred in the specified language. 
     +  **`lang-switcher.js`**: This component gets all the languages defined(??) as having support in the config file and allows a user to click on them to switch between them. 
     +  **`markdown-renderer.js`**: This is an example component which takes the language currently set and then renders longform content stored in markdown in the language specified.

   +  **`/contexts`** : This folder contains all contexts.
     +  **`language-context.js`**: This file contains the language context which is used to set the current language of the website everywhere else.

   +  **`/markdown`**: This folder contains the various languages the website supports.
     +  **`ar`**: This folder is named after the language of it's documents.
       +  **`test.md`**: This file contains the file in the language of it's containing folder.
     .
     .
     . 
   +  **`/pages`**: All components under pages become pages automatically with paths based on their file name. The paths generated are language-specific as well. 
     +  **`index.js`**: This is the standard gatsby index page. It demonstrates the default use of the LangLink component.
     +  **`page-2.js`**: This page demonstrates the use of the MarkdownRenderer component.
  

  <----FIX THINGS FROM HERE---->
  +  **`gatsby-browser.js`**: This file is where we have specified the wrapping of the root html element with the language-context Provider. For more things that go in this file, see [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) 
  
  +  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  +  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  +  **`README.md`**: A text file containing useful reference information about your project. That's this file for this one!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/<----ADD MY THING HERE---->)
