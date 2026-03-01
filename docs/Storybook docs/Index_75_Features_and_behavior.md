<document index="75">
<source>Features and behavior.md</source>
<document_content>
Features and behavior

React
Vue
Angular
Web Components
More
To control the layout of Storybook’s UI you can use addons.setConfig in your .storybook/manager.js:

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
showToolbar	Boolean	Show/hide tool bar	true
theme	Object	Storybook Theme, see next section	undefined
selectedPanel	String	Id to select an addon panel	'storybook/actions/panel'
initialActive	String	Select the default active tab on Mobile	'sidebar' or 'canvas' or 'addons'
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
Configuring through URL parameters

You can use URL parameters to configure some of the available features:

Config option	Query param	Supported values
enableShortcuts	shortcuts	false
--- (fullscreen)	full	true, false
--- (show sidebar)	nav	true, false
--- (show panel)	panel	false, 'right', 'bottom'
selectedPanel	addonPanel	Any panel ID
showTabs	tabs	true
---	instrument	false, true
</document_content>
</document>