<document index="63">
<source>Addon API.md</source>
<document_content>
Addon API

React
Vue
Angular
Web Components
More
Storybook's API allows developers to interact programmatically with Storybook. With the API, developers can build and deploy custom addons and other tools that enhance Storybook's functionality.

Core Addon API

Our API is exposed via two distinct packages, each one with a different purpose:

@storybook/manager-api used to interact with the Storybook manager UI or access the Storybook API.
@storybook/preview-api used to control and configure the addon's behavior.
my-addon/src/manager.js|ts
import { addons } from '@storybook/preview-api';
 
import { useStorybookApi } from '@storybook/manager-api';
addons.add()

The add method allows you to register the type of UI component associated with the addon (e.g., panels, toolbars, tabs). For a minimum viable Storybook addon, you should provide the following arguments:

type: The type of UI component to register.
title: The title to feature in the Addon Panel.
render: The function that renders the addon's UI component.
my-addon/src/manager.js|ts
import React from 'react';
 
import { addons, types } from '@storybook/manager-api';
 
import { AddonPanel } from '@storybook/components';
 
const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;
 
addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active }) => (
      <AddonPanel active={active}>
        <div> Storybook addon panel </div>
      </AddonPanel>
    ),
  });
});
ℹ️
The render function is called with active. The active value will be true when the panel is focused on the UI.
addons.register()

Serves as the entry point for all addons. It allows you to register an addon and access the Storybook API. For example:

my-addon/src/manager.js|ts
import { addons } from '@storybook/preview-api';
 
// Register the addon with a unique name.
addons.register('my-organisation/my-addon', (api) => {});
Now you'll get an instance to our StorybookAPI. See the api docs for Storybook API regarding using that.

addons.getChannel()

Get an instance to the channel to communicate with the manager and the preview. You can find this in both the addon register code and your addon’s wrapper component (where used inside a story).

It has a NodeJS EventEmitter compatible API. So, you can use it to emit events and listen to events.

my-addon/src/manager.js|ts
import React, { useCallback } from 'react';
 
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { OutlineIcon } from '@storybook/icons';
 
const ExampleToolbar = () => {
  const [globals, updateGlobals] = useGlobals();
 
  const isActive = globals['my-param-key'] || false;
 
  // Function that will update the global value and trigger a UI refresh.
  const refreshAndUpdateGlobal = () => {
    updateGlobals({
      ['my-param-key']: !isActive,
    }),
      // Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
      addons.getChannel().emit(FORCE_RE_RENDER);
  };
 
  const toggleToolbarAddon = useCallback(() => refreshAndUpdateGlobal(), [isActive]);
 
  return (
    <IconButton
      key="Example"
      active={isActive}
      title="Show the toolbar addon"
      onClick={toggleToolbarAddon}
    >
      <OutlineIcon />
    </IconButton>
  );
};
makeDecorator

Use the makeDecorator API to create decorators in the style of the official addons. Like so:

my-addon/src/decorator.js|ts
import { makeDecorator } from '@storybook/preview-api';
 
export const withAddonDecorator = makeDecorator({
  name: 'withSomething',
  parameterName: 'CustomParameter',
  skipIfNoParametersOrOptions: true
  wrapper: (getStory, context, { parameters }) => {
    /*
    * Write your custom logic here based on the parameters passed in Storybook's stories.
    * Although not advised, you can also alter the story output based on the parameters.
    */
    return getStory(context);
  },
});
ℹ️
If the story's parameters include { exampleParameter: { disable: true } } (where exampleParameter is the parameterName of your addon), your decorator will not be called.
The makeDecorator API requires the following arguments:

name: Unique name to identify the custom addon decorator.
parameterName: Sets a unique parameter to be consumed by the addon.
skipIfNoParametersOrOptions: (Optional) Doesn't run the decorator if the user hasn't options either via decorators or parameters.
wrapper: your decorator function. Takes the getStory, context, and both the options and parameters (as defined in skipIfNoParametersOrOptions above).
Storybook API

Storybook's API allows you to access different functionalities of Storybook UI.

api.selectStory()

The selectStory API method allows you to select a single story. It accepts the following two parameters; story kind name and an optional story name. For example:

Button.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    myAddon: {
      data: 'This data is passed to the addon',
    },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: () => <Button>Hello</Button>,
};
This is how you can select the above story:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.selectStory('Button', 'Default');
});
api.selectInCurrentKind()

Similar to the selectStory API method, but it only accepts the story as the only parameter.

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.selectInCurrentKind('Default');
});
api.setQueryParams()

This method allows you to set query string parameters. You can use that as temporary storage for addons. Here's how you define query params:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    exampleParameter: 'Sets the example parameter value',
    anotherParameter: 'Sets the another parameter value',
  });
});
Additionally, if you need to remove a query parameter, set it as null instead of removing them from the addon. For example:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    exampleParameter: null,
  });
});
api.getQueryParam()

Allows retrieval of a query parameter enabled via the setQueryParams API method. For example:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.getQueryParam('exampleParameter');
});
api.getUrlState(overrideParams)

This method allows you to get the application URL state, including any overridden or custom parameter values. For example:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  const href = api.getUrlState({
    selectedKind: 'kind',
    selectedStory: 'story',
  }).url;
});
api.on(eventName, fn)

This method allows you to register a handler function called whenever the user navigates between stories.

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  // Logs the event data to the browser console whenever the event is emitted.
  api.on('custom-addon-event', (eventData) => console.log(eventData));
});
addons.setConfig(config)

This method allows you to override the default Storybook UI configuration (e.g., set up a theme or hide UI elements):

.storybook/manager.js
import { addons } from '@storybook/manager-api';
 
addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
The following table details how to use the API values:

Name	Type	Description	Example Value
navSize	Number (pixels)	The size of the sidebar that shows a list of stories	300
bottomPanelHeight	Number (pixels)	The size of the addon panel when in the bottom position	200
rightPanelWidth	Number (pixels)	The size of the addon panel when in the right position	200
panelPosition	String	Where to show the addon panel	'bottom' or 'right'
enableShortcuts	Boolean	Enable/disable shortcuts	true
showToolbar	Boolean	Show/hide toolbar	true
theme	Object	Storybook Theme, see next section	undefined
selectedPanel	String	Id to select an addon panel	storybook/actions/panel
initialActive	String	Select the default active tab on Mobile	sidebar or canvas or addons
sidebar	Object	Sidebar options, see below	{ showRoots: false }
toolbar	Object	Modify the tools in the toolbar using the addon id	{ fullscreen: { hidden: false } }
The following options are configurable under the sidebar namespace:

Name	Type	Description	Example Value
showRoots	Boolean	Display the top-level nodes as a "root" in the sidebar	false
collapsedRoots	Array	Set of root node IDs to visually collapse by default	['misc', 'other']
renderLabel	Function	Create a custom label for tree nodes; must return a ReactNode	(item, api) => <abbr title="...">{item.name}</abbr>
The following options are configurable under the toolbar namespace:

Name	Type	Description	Example Value
id	String	Toggle visibility for toolbar item	{ hidden: false }
Storybook hooks

To help streamline addon development and reduce boilerplate code, the API exposes a set of hooks to access Storybook's internals. These hooks are an extension of the @storybook/manager-api package.

useStorybookState

It allows access to Storybook's internal state. Similar to the useglobals hook, we recommend optimizing your addon to rely on React.memo, or the following hooks; useMemo, useCallback to prevent a high volume of re-render cycles.

my-addon/src/manager.js|ts
import React from 'react';
 
import { AddonPanel } from '@storybook/components';
 
import { useStorybookState } from '@storybook/manager-api';
 
export const Panel = () => {
  const state = useStorybookState();
  return (
    <AddonPanel {...props}>
      {state.viewMode !== 'docs' ? (
        <h2>Do something with the documentation</h2>
      ) : (
        <h2>Show the panel when viewing the story</h2>
      )}
    </AddonPanel>
  );
};
useStorybookApi

The useStorybookApi hook is a convenient helper to allow you full access to the Storybook API methods.

my-addon/manager.js|ts
import React, { useEffect, useCallback } from 'react';
 
import { useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { ChevronDownIcon } from '@storybook/icons';
 
export const Panel = () => {
  const api = useStorybookApi();
 
  const toggleMyTool = useCallback(() => {
    // Custom logic to toggle the addon here
  }, []);
 
  useEffect(() => {
    api.setAddonShortcut('custom-toolbar-addon', {
      label: 'Enable toolbar addon',
      defaultShortcut: ['G'],
      actionName: 'Toggle',
      showInMenu: false,
      action: toggleAddon,
    });
  }, [api]);
 
  return (
    <IconButton key="custom-toolbar" active="true" title="Show a toolbar addon">
      <ChevronDownIcon />
    </IconButton>
  );
};
useChannel

Allows setting subscriptions to events and getting the emitter to emit custom events to the channel.

The messages can be listened to on both the iframe and the manager.

my-addon/manager.js|ts
import React from 'react';
 
import { AddonPanel, Button } from '@storybook/components';
 
import { STORY_CHANGED } from '@storybook/core-events';
 
import { useChannel } from '@storybook/manager-api';
 
export const Panel = () => {
  // Creates a Storybook API channel and subscribes to the STORY_CHANGED event
  const emit = useChannel({
    STORY_CHANGED: (...args) => console.log(...args),
  });
 
  return (
    <AddonPanel key="custom-panel" active="true">
      <Button onClick={() => emit('my-event-type', { sampleData: 'example' })}>
        Emit a Storybook API event with custom data
      </Button>
    </AddonPanel>
  );
};
useAddonState

The useAddonState is a useful hook for addons that require data persistence, either due to Storybook's UI lifecycle or for more complex addons involving multiple types (e.g., toolbars, panels).

my-addon/manager.js|ts
import React from 'react';
 
import { useAddonState } from '@storybook/manager-api';
import { AddonPanel, IconButton } from '@storybook/components';
import { LightningIcon } from '@storybook/icons';
 
export const Panel = () => {
  const [state, setState] = useAddonState('addon-unique-identifier', 'initial state');
 
  return (
    <AddonPanel key="custom-panel" active="true">
      <Button onClick={() => setState('Example')}>
        Click to update Storybook's internal state
      </Button>
    </AddonPanel>
  );
};
export const Tool = () => {
  const [state, setState] = useAddonState('addon-unique-identifier', 'initial state');
 
  return (
    <IconButton
      key="custom-toolbar"
      active="true"
      title="Enable my addon"
      onClick={() => setState('Example')}
    >
      <LightningIcon />
    </IconButton>
  );
};
useParameter

The useParameter retrieves the current story's parameters. If the parameter's value is not defined, it will automatically default to the second value defined.

my-addon/manager.js|ts
import React from 'react';
 
import { AddonPanel } from '@storybook/components';
 
import { useParameter } from '@storybook/manager-api';
 
export const Panel = () => {
  // Connects to Storybook's API and retrieves the value of the custom parameter for the current story
  const value = useParameter('custom-parameter', 'initial value');
 
  return (
    <AddonPanel key="custom-panel" active="true">
      {value === 'initial value' ? (
        <h2>The story doesn't contain custom parameters. Defaulting to the initial value.</h2>
      ) : (
        <h2>You've set {value} as the parameter.</h2>
      )}
    </AddonPanel>
  );
};
useGlobals

Extremely useful hook for addons that rely on Storybook Globals. It allows you to obtain and update global values. We also recommend optimizing your addon to rely on React.memo, or the following hooks; useMemo, useCallback to prevent a high volume of re-render cycles.

my-addon/manager.js|ts
import React from 'react';
 
import { AddonPanel, Button } from '@storybook/components';
 
import { useGlobals } from '@storybook/manager-api';
 
export const Panel = () => {
  const [globals, updateGlobals] = useGlobals();
 
  const isActive = globals['my-param-key'] || false; // 👈 Sets visibility based on the global value.
 
  return (
    <AddonPanel key="custom-panel" active={isActive}>
      <Button onClick={() => updateGlobals({ ['my-param-key']: !isActive })}>
        {isActive ? 'Hide the addon panel' : 'Show the panel'}
      </Button>
    </AddonPanel>
  );
};
useArgs

Hook that allows you to retrieve or update a story's args.

my-addon/src/manager.js|ts
import { useArgs } from '@storybook/manager-api';
 
const [args, updateArgs, resetArgs] = useArgs();
 
// To update one or more args:
updateArgs({ key: 'value' });
 
// To reset one (or more) args:
resetArgs((argNames: ['key']));
 
// To reset all args
resetArgs();
Learn more about the Storybook addon ecosystem

Types of addons for other types of addons
Writing addons for the basics of addon development
Presets for preset development
Integration catalog for requirements and available recipes
API reference to learn about the available APIs
</document_content>
</document>