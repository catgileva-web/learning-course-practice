<document index="42">
<source>Embed stories.md</source>
<document_content>
Embed stories

React
Vue
Angular
Web Components
More
Watch a video tutorial
Embed stories to showcase your work to teammates and the developer community at large. In order to use embeds, your Storybook must be published and publicly accessible.

Storybook supports <iframe> embeds out of the box. If you use Chromatic to publish Storybook, you can also embed stories in Notion, Medium, and countless other platforms that support the oEmbed standard.

Embed a story with the toolbar

Embed a story with the toolbar, and paste the published story URL. For example:

// oEmbed
https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/?path=/story/shadowboxcta--default
 
// iframe embed
<iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/?path=/story/shadowboxcta--default&full=1&shortcuts=false&singleStory=true"
  width="800"
  height="260"
></iframe>


Embed a story without the toolbar

To embed a plain story without Storybook's toolbar, click the "open canvas in new tab" icon in the top-right corner of Storybook to get the canvas URL. For example:

// oEmbed
https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=/story/shadowboxcta--default&viewMode=story
 
// iframe embed
 <iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true"
  width="800"
  height="200"
></iframe>


Embed documentation

Embed a documentation page by replacing viewMode=story with the uniquely auto-generated documentation entry for the story.

// oEmbed
https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true
 
// iframe embed
 <iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="800"
  height="400"
></iframe>


Embed stories on other platforms

Every platform has different levels of embed support. Check the documentation of your service to see how they recommend embedding external content.

How to embed in Medium
How to embed in Notion
How to embed in Ghost
</document_content>
</document>