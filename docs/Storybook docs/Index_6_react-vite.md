<document index="6">
    <source>react-vite.md</source>
    <document_content>
## Storybook for React & Vite

Storybook for React & Vite is a framework that makes it easy to develop and test UI components in isolation for React applications built with Vite. It includes:
* 🏎️ Pre-bundled for performance
* 🪄 Zero config
* 💫 and more!

### Requirements
* React ≥ 16.8
* Vite ≥ 4.0
* Storybook ≥ 8.0

### Getting started

#### In a project without Storybook
Follow the prompts after running this command in your React project's root directory:

```bash
npm create storybook@latest
```

More on getting started with Storybook.

#### In a project with Storybook
This framework is designed to work with Storybook 7+. If you're not already using v7, upgrade with this command:

```bash
npx storybook@latest upgrade
```

#### Automatic migration
When running the `upgrade` command above, you should get a prompt asking you to migrate to `@storybook/react-vite`, which should handle everything for you. In case that auto-migration does not work for your project, refer to the manual migration below.

#### Manual migration
First, install the framework:

```bash
npm install --save-dev @storybook/react-vite
```

Then, update your `.storybook/main.js|ts` to change the framework property:

```typescript
// .storybook/main.ts
import { StorybookConfig } from '@storybook/react-vite'; 

const config: StorybookConfig = {  
  // ...  
  // framework: '@storybook/react-webpack5', 👈 Remove this  
  framework: '@storybook/react-vite', // 👈 Add this
}; 

export default config;
```

### Run the Setup Wizard
If all goes well, you should see a setup wizard that will help you get started with Storybook introducing you to the main concepts and features, including how the UI is organized, how to write your first story, and how to test your components' response to various inputs utilizing controls.

If you skipped the wizard, you can always run it again by adding the `?path=/onboarding` query parameter to the URL of your Storybook instance, provided that the example stories are still available.

### API

#### Options
You can pass an options object for additional configuration if needed:

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'; 

const config: StorybookConfig = {  
  framework: {    
    name: '@storybook/react-vite',    
    options: {      
      // ...    
    },  
  },
}; 

export default config;
```

`builder`
Type: `Record<string, any>`
Configure options for the framework's builder. For this framework, available options can be found in the Vite builder docs.
    </document_content>
</document>