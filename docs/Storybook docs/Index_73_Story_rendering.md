<document index="73">
<source>Story rendering.md</source>
<document_content>
Story rendering

React
Vue
Angular
Web Components
More
In Storybook, your stories render in a particular “preview” iframe (also called the Canvas) inside the larger Storybook web application. The JavaScript build configuration of the preview is controlled by a builder config, but you also may want to run some code for every story or directly control the rendered HTML to help your stories render correctly.

Running code for every story

Code executed in the preview file (.storybook/preview.js|ts) runs for every story in your Storybook. This is useful for setting up global styles, initializing libraries, or anything else required to render your components.

Here's an example of how you might use the preview file to initialize a library that must run before your components render:

.storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-renderer';
 
import { initialize } from '../lib/your-library';
 
initialize();
 
const preview: Preview = {
  // ...
};
 
export default preview;
Adding to <head>

If you need to add extra elements to the head of the preview iframe, for instance, to load static stylesheets, font files, or similar, you can create a file called .storybook/preview-head.html and add tags like this:

.storybook/preview-head.html
<!--
Pull in static files served from your Static directory or the internet
Example:
`main.js|ts` is configured with staticDirs: ['../public'] and your font is located in the `fonts`
directory inside your `public` directory
-->
<link rel="preload" href="/fonts/my-font.woff2" />
 
<!-- Or you can load custom head-tag JavaScript: -->
<script src="https://use.typekit.net/xxxyyy.js"></script>
<script>
  try {
    Typekit.load();
  } catch (e) {}
</script>
ℹ️
Storybook will inject these tags into the preview iframe where your components render, not the Storybook application UI.
However, it's also possible to modify the preview head HTML programmatically using a preset defined in the main.js file. Read the presets documentation for more information.

Adding to <body>

Sometimes, you may need to add different tags to the <body>. Helpful for adding some custom content roots.

You can accomplish this by creating a file called preview-body.html inside your .storybook directory and adding tags like this:

.storybook/preview-body.html
<div id="custom-root"></div>
If using relative sizing in your project (like rem or em), you may update the base font-size by adding a style tag to preview-body.html:

.storybook/preview-body.html
<style>
  html {
    font-size: 15px;
  }
</style>
ℹ️
Storybook will inject these tags into the preview iframe where your components render, not the Storybook application UI.
Just like how you have the ability to customize the preview head HTML tag, you can also follow the same steps to customize the preview body with a preset. To obtain more information on how to do this, refer to the presets documentation.
</document_content>
</document>