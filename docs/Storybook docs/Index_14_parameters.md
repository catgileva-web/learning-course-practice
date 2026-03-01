<document index="14">
    <source>parameters.md</source>
    <document_content>
## Parameters

Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.

ℹ️
Available parameters are listed in the parameters API reference.

For example, let's customize the backgrounds addon via a parameter. We'll use `parameters.backgrounds` to define which backgrounds appear in the backgrounds toolbar when a story is selected.

### Story parameters

We can set a parameter for a single story with the `parameters` key on a CSF export:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const OnDark: Story = {
  // 👇 Story-level parameters
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
```

### Component parameters

We can set the parameters for all stories of a component using the `parameters` key on the default CSF export:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Creates specific parameters at the component level
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
 
export default meta;
```

### Global parameters

We can also set the parameters for **all stories** via the `parameters` export of your `.storybook/preview.js|ts` file (this is the file where you configure all stories):

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
};
 
export default preview;
```

Setting a global parameter is a common way to configure addons. With backgrounds, you configure the list of backgrounds that every story can render in.

### Rules of parameter inheritance

The way the global, component and story parameters are combined is:

* More specific parameters take precedence (so a story parameter overwrites a component parameter which overwrites a global parameter).
* Parameters are **merged**, so keys are only ever overwritten and never dropped.

The merging of parameters is important. This means it is possible to override a single specific sub-parameter on a per-story basis while retaining most of the parameters defined globally.

If you are defining an API that relies on parameters (e.g., an **addon**) it is a good idea to take this behavior into account.
    </document_content>
</document>