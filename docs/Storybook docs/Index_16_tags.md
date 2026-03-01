<document index="16">
    <source>tags.md</source>
    <document_content>
## Tags

Tags allow you to control which stories are included in your Storybook, enabling many different uses of the same total set of stories. For example, you can use tags to include/exclude tests from the test runner. For more complex use cases, see the recipes section, below.

### Built-in tags

The following tags are available in every Storybook project:

| Tag | Applied by default? | Description |
|-----|---------------------|-------------|
| autodocs | No | Stories tagged with autodocs are included in the docs page. If a CSF file does not contain at least one story tagged with autodocs, that component will not generate a docs page. |
| dev | Yes | Stories tagged with dev are rendered in Storybook's sidebar. |
| test | Yes | Stories tagged with test are included in test runner or test addon runs. |

The dev and test tags are automatically, implicitly applied to every story in your Storybook project.

### Applying tags

A tag can be any static (i.e. not created dynamically) string, either the built-in tags or custom tags of your own design. To apply tags to a story, assign an array of strings to the tags property. Tags may be applied at the project, component (meta), or story levels.

For example, to apply the autodocs tag to all stories in your project, you can use .storybook/preview.js|ts:

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import type { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  // ...rest of preview
  /*
   * All stories in your project will have these tags applied:
   * - autodocs
   * - dev (implicit default)
   * - test (implicit default)
   */
  tags: ['autodocs'],
};
 
export default preview;
```

Within a component stories file, you apply tags like so:

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  /*
   * All stories in this file will have these tags applied:
   * - autodocs
   * - dev (implicit default, inherited from preview)
   * - test (implicit default, inherited from preview)
   */
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const ExperimentalFeatureStory: Story = {
  /*
   * This particular story will have these tags applied:
   * - experimental
   * - autodocs (inherited from meta)
   * - dev (inherited from meta)
   * - test (inherited from meta)
   */
  tags: ['experimental'],
};
```

### Removing tags

To remove a tag from a story, prefix it with !. For example:

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  // 👇 Applies to all stories in this file
  tags: ['stable'],
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
```

Tags can be removed for all stories in your project (in .storybook/preview.js|ts), all stories for a component (in the CSF file meta), or a single story (as above).

### Filtering by custom tags

Custom tags enable a flexible layer of categorization on top of Storybook's sidebar hierarchy. In the example above, we created an experimental tag to indicate that a story is not yet stable.

You can create custom tags for any purpose. Sample uses might include:

- Status, such as experimental, new, stable, or deprecated
- User persona, such as admin, user, or developer
- Component/code ownership

Custom tags are useful because they show up as filters in Storybook's sidebar. Selecting a tag in the filter causes the sidebar to only show stories with that tag. Selecting multiple tags shows stories that contain any of those tags.

Filtering by tags is a powerful way to focus on a subset of stories, especially in large Storybook projects. You can also narrow your stories by tag and then search within that subset.

### Recipes

#### Docs-only stories

It can sometimes be helpful to provide example stories for documentation purposes, but you want to keep the sidebar navigation more focused on stories useful for development. By enabling the autodocs tag and removing the dev tag, a story becomes docs-only: appearing only in the docs page and not in Storybook's sidebar.

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  /*
   * All stories in this file will:
   * - Be included in the docs page
   * - Not appear in Storybook's sidebar
   */
  tags: ['autodocs', '!dev'],
};
export default meta;
```

#### Combo stories, still tested individually

For a component with many variants, like a Button, a grid of those variants all together can be a helpful way to visualize it. But you may wish to test the variants individually. You can accomplish this with tags like so:

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;
 
type Story = StoryObj<typeof Button>;
 
export const Variant1: Story = {
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
  args: { variant: 1 },
};
 
export const Variant2: Story = {
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
  args: { variant: 2 },
};
 
export const Combo: Story = {
  // 👇 This story should not be tested, but will appear in the sidebar and docs page
  tags: ['!test'],
  render: () => (
    <>
      <Button variant={1} />
      <Button variant={2} />
    </>
  ),
};
```
    </document_content>
</document>