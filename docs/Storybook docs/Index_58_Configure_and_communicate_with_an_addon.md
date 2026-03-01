<document index="58">
<source>Configure and communicate with an addon.md</source>
<document_content>
Configure and communicate with an addon

React
Vue
Angular
Web Components
More
The addon API is designed for customization. It offers addon authors different ways to configure and communicate with their users' Storybook. Let's look at what these are and their suggested use cases.

Preset

Presets offload the burden of configuration from the user to the addon. Preset options are global and are accessible from NodeJS. They're ideal for pre-configuring Webpack loaders, Babel plugins, and other library or framework-specific configurations.

For example, many libraries require that the app be wrapped by a Provider which provides data to components down the tree. Presets can describe behavior like adding wrappers automatically, without users having to do any manual configuration. If a user installs an addon that has Presets, the addon can instruct Storybook to wrap all stories in Provider. This allows folks to start using your library with Storybook, with just 1 line of config!

For more on presets, see: Write a preset addon

The mechanism for wrapping each story is referred to as a Storybook decorator. They allow you to augment stories with extra rendering functionality or by providing data.

Parameters

Parameters are available in the browser and are great for configuring addon behavior globally, at the component level, or at the story level.

For example, the Pseudo States addon uses parameters to enable the various pseudo-states. Users can provide global defaults and then override them at the story level.

Use the useParameter hook to access the parameter values within your addon.

export const Hover = {
  render: () => <Button>Label</Button>,
  parameters: { pseudo: { hover: true } },
};
Channels

Channels enable two-way communication between the manager and the preview pane, using a NodeJS EventEmitter compatible API. Your addons can plug into specific channels and respond to these events.

For example, the Actions addon captures user events and displays their data in a panel.

Use the useChannel hook to access the channel data within your addon.

For a complete example, check out storybookjs/addon-kit/withRoundTrip.ts
</document_content>
</document>