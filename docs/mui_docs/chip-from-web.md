---
productId: material-ui
title: React Chip component
components: Chip
githubLabel: 'component: chip'
materialDesign: https://m2.material.io/components/chips
githubSource: https://github.com/mui/material-ui/tree/master/packages/mui-material/src/Chip
---

# Chip

<p class="description">Chips are compact elements that represent an input, attribute, or action.</p>

Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

## Basic chip

The `Chip` component supports outlined and filled styling.

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
```

## Chip actions

You can use the following actions.

- Chips with the `onClick` prop defined change appearance on focus, hover, and click.
- Chips with the `onDelete` prop defined will display a delete icon which changes appearance on hover.

### Clickable

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}
```

### Deletable

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function DeletableChips() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
```

### Clickable and deletable

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
```

### Clickable link

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableLinkChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
      />
    </Stack>
  );
}
```

### Custom delete icon

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
```

## Chip adornments

You can add ornaments to the beginning of the component.

Use the `avatar` prop to add an avatar or use the `icon` prop to add an icon.

### Avatar chip

```tsx
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
}
```

### Icon chip

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
```

## Color chip

You can use the `color` prop to define a color from theme palette.

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}
```

## Sizes chip

You can use the `size` prop to define a small Chip.

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Stack>
  );
}
```

## Multiline chip

By default, Chips displays labels only in a single line. To have them support multiline content, use the `sx` prop to add `height:auto` to the Chip component, and `whiteSpace: normal` to the `label` styles.

```tsx
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        label="This is a chip that has multiple lines."
      />
    </Box>
  );
}
```

## Chip array

An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no `onClick` prop is defined, the `Chip` can be focused, but does not gain depth while clicked or touched.

```tsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
```

## Accessibility

If the Chip is deletable or clickable then it is a button in tab order. When the Chip is focused (for example when tabbing) releasing (`keyup` event) `Backspace` or `Delete` will call the `onDelete` handler while releasing `Escape` will blur the Chip.

---

## API

### Import

```tsx
import Chip from '@mui/material/Chip';
// or
import { Chip } from '@mui/material';
```

### Component name

The name `MuiChip` can be used when providing [default props](https://mui.com/material-ui/customization/theme-components/#default-props) or [style overrides](https://mui.com/material-ui/customization/theme-components/#global-style-overrides) in the theme.

### Props

Chips represent complex entities in small blocks, such as a contact.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `avatar` | `element` | | The Avatar element to display. |
| `children` | `unsupportedProp` | | This prop isn't supported. Use the `component` prop if you need to change the children structure. |
| `classes` | `object` | | Override or extend the styles applied to the component. See [CSS classes](#css) below for more details. |
| `clickable` | `bool` | | If `true`, the chip will appear clickable, and will raise when pressed, even if the `onClick` prop is not defined. If `false`, the chip will not appear clickable, even if `onClick` prop is defined. This can be used, for example, along with the `component` prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the `onClick` event. |
| `color` | `'default'` \| `'primary'` \| `'secondary'` \| `'error'` \| `'info'` \| `'success'` \| `'warning'` \| `string` | `'default'` | The color of the component. It supports both default and custom theme colors, which can be added as shown in the [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors). |
| `component` | `elementType` | | The component used for the root node. Either a string to use a HTML element or a component. |
| `deleteIcon` | `element` | | Override the default delete icon element. Shown only if `onDelete` is set. |
| `disabled` | `bool` | `false` | If `true`, the component is disabled. |
| `icon` | `element` | | Icon element. |
| `label` | `node` | | The content of the component. |
| `onClick` | `func` | | Callback fired when the chip is clicked. |
| `onDelete` | `func` | | Callback fired when the delete icon is clicked. If set, the delete icon will be shown. |
| `onKeyDown` | `func` | | Callback fired when a key is pressed down. |
| `onKeyUp` | `func` | | Callback fired when a key is released. |
| `size` | `'medium'` \| `'small'` \| `string` | `'medium'` | The size of the component. |
| `skipFocusWhenDisabled` | `bool` | `false` | If `true`, allows the disabled chip to escape focus. If `false`, allows the disabled chip to receive focus. |
| `sx` | `Array<func \| object \| bool>` \| `func` \| `object` | | The system prop that allows defining system overrides as well as additional CSS styles. See the [`sx` page](https://mui.com/system/getting-started/the-sx-prop/) for more details. |
| `tabIndex` | `number` | | The tab index of the chip. |
| `variant` | `'filled'` \| `'outlined'` \| `string` | `'filled'` | The variant to use. |

The `ref` is forwarded to the root element (an `HTMLDivElement`).

Any other props supplied will be provided to the root element.

### CSS classes {#css}

These class names are useful for styling with CSS. They are applied to the component's slots when specific conditions are met.

| Class name | Rule name | Description |
| --- | --- | --- |
| `.MuiChip-root` | `root` | Styles applied to the root element. |
| `.MuiChip-sizeSmall` | `sizeSmall` | Styles applied to the root element if `size="small"`. |
| `.MuiChip-sizeMedium` | `sizeMedium` | Styles applied to the root element if `size="medium"`. |
| `.MuiChip-colorDefault` | `colorDefault` | Styles applied to the root element if `color="default"`. |
| `.MuiChip-colorError` | `colorError` | Styles applied to the root element if `color="error"`. |
| `.MuiChip-colorInfo` | `colorInfo` | Styles applied to the root element if `color="info"`. |
| `.MuiChip-colorPrimary` | `colorPrimary` | Styles applied to the root element if `color="primary"`. |
| `.MuiChip-colorSecondary` | `colorSecondary` | Styles applied to the root element if `color="secondary"`. |
| `.MuiChip-colorSuccess` | `colorSuccess` | Styles applied to the root element if `color="success"`. |
| `.MuiChip-colorWarning` | `colorWarning` | Styles applied to the root element if `color="warning"`. |
| `.Mui-disabled` | `disabled` | State class applied to the root element if `disabled={true}`. |
| `.MuiChip-clickable` | `clickable` | Styles applied to the root element if `onClick` is defined or `clickable={true}`. |
| `.Mui-focusVisible` | `focusVisible` | State class applied to the root element if keyboard focused. |
| `.MuiChip-deletable` | `deletable` | Styles applied to the root element if `onDelete` is defined. |
| `.MuiChip-outlined` | `outlined` | Styles applied to the root element if `variant="outlined"`. |
| `.MuiChip-filled` | `filled` | Styles applied to the root element if `variant="filled"`. |
| `.MuiChip-avatar` | `avatar` | Styles applied to the avatar element. |
| `.MuiChip-icon` | `icon` | Styles applied to the icon element. |
| `.MuiChip-label` | `label` | Styles applied to the label `span` element. |
| `.MuiChip-deleteIcon` | `deleteIcon` | Styles applied to the deleteIcon element. |

#### Deprecated CSS classes

These class names are deprecated and kept for backward compatibility. Use the combined class selectors listed in the migration guide for each:

| Class name | Rule name | Description | Migration |
| --- | --- | --- | --- |
| `.MuiChip-avatarSmall` | `avatarSmall` | Styles applied to the avatar element if `size="small"`. | Combine `.MuiChip-avatar` and `.MuiChip-sizeSmall` |
| `.MuiChip-avatarMedium` | `avatarMedium` | Styles applied to the avatar element if `size="medium"`. | Combine `.MuiChip-avatar` and `.MuiChip-sizeMedium` |
| `.MuiChip-avatarColorPrimary` | `avatarColorPrimary` | Styles applied to the avatar element if `color="primary"`. | Combine `.MuiChip-avatar` and `.MuiChip-colorPrimary` |
| `.MuiChip-avatarColorSecondary` | `avatarColorSecondary` | Styles applied to the avatar element if `color="secondary"`. | Combine `.MuiChip-avatar` and `.MuiChip-colorSecondary` |
| `.MuiChip-iconSmall` | `iconSmall` | Styles applied to the icon element if `size="small"`. | Combine `.MuiChip-icon` and `.MuiChip-sizeSmall` |
| `.MuiChip-iconMedium` | `iconMedium` | Styles applied to the icon element if `size="medium"`. | Combine `.MuiChip-icon` and `.MuiChip-sizeMedium` |
| `.MuiChip-iconColorPrimary` | `iconColorPrimary` | Styles applied to the icon element if `color="primary"`. | Combine `.MuiChip-icon` and `.MuiChip-colorPrimary` |
| `.MuiChip-iconColorSecondary` | `iconColorSecondary` | Styles applied to the icon element if `color="secondary"`. | Combine `.MuiChip-icon` and `.MuiChip-colorSecondary` |
| `.MuiChip-labelSmall` | `labelSmall` | Styles applied to the label `span` element if `size="small"`. | Combine `.MuiChip-label` and `.MuiChip-sizeSmall` |
| `.MuiChip-labelMedium` | `labelMedium` | Styles applied to the label `span` element if `size="medium"`. | Combine `.MuiChip-label` and `.MuiChip-sizeMedium` |
| `.MuiChip-deleteIconSmall` | `deleteIconSmall` | Styles applied to the deleteIcon element if `size="small"`. | Combine `.MuiChip-deleteIcon` and `.MuiChip-sizeSmall` |
| `.MuiChip-deleteIconMedium` | `deleteIconMedium` | Styles applied to the deleteIcon element if `size="medium"`. | Combine `.MuiChip-deleteIcon` and `.MuiChip-sizeMedium` |
| `.MuiChip-deleteIconColorPrimary` | `deleteIconColorPrimary` | Styles applied to the deleteIcon element if `color="primary"`. | Combine `.MuiChip-deleteIcon` and `.MuiChip-colorPrimary` |
| `.MuiChip-deleteIconColorSecondary` | `deleteIconColorSecondary` | Styles applied to the deleteIcon element if `color="secondary"`. | Combine `.MuiChip-deleteIcon` and `.MuiChip-colorSecondary` |
| `.MuiChip-deleteIconOutlinedColorPrimary` | `deleteIconOutlinedColorPrimary` | Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. | Combine `.MuiChip-deleteIcon`, `.MuiChip-outlined`, and `.MuiChip-colorPrimary` |
| `.MuiChip-deleteIconOutlinedColorSecondary` | `deleteIconOutlinedColorSecondary` | Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. | Combine `.MuiChip-deleteIcon`, `.MuiChip-outlined`, and `.MuiChip-colorSecondary` |
| `.MuiChip-deleteIconFilledColorPrimary` | `deleteIconFilledColorPrimary` | Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`. | Combine `.MuiChip-deleteIcon`, `.MuiChip-filled`, and `.MuiChip-colorPrimary` |
| `.MuiChip-deleteIconFilledColorSecondary` | `deleteIconFilledColorSecondary` | Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`. | Combine `.MuiChip-deleteIcon`, `.MuiChip-filled`, and `.MuiChip-colorSecondary` |
| `.MuiChip-clickableColorPrimary` | `clickableColorPrimary` | Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. | Combine `.MuiChip-clickable` and `.MuiChip-colorPrimary` |
| `.MuiChip-clickableColorSecondary` | `clickableColorSecondary` | Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. | Combine `.MuiChip-clickable` and `.MuiChip-colorSecondary` |
| `.MuiChip-deletableColorPrimary` | `deletableColorPrimary` | Styles applied to the root element if `onDelete` and `color="primary"` is defined. | Combine `.MuiChip-deletable` and `.MuiChip-colorPrimary` |
| `.MuiChip-deletableColorSecondary` | `deletableColorSecondary` | Styles applied to the root element if `onDelete` and `color="secondary"` is defined. | Combine `.MuiChip-deletable` and `.MuiChip-colorSecondary` |
| `.MuiChip-outlinedPrimary` | `outlinedPrimary` | Styles applied to the root element if `variant="outlined"` and `color="primary"`. | Combine `.MuiChip-outlined` and `.MuiChip-colorPrimary` |
| `.MuiChip-outlinedSecondary` | `outlinedSecondary` | Styles applied to the root element if `variant="outlined"` and `color="secondary"`. | Combine `.MuiChip-outlined` and `.MuiChip-colorSecondary` |
| `.MuiChip-filledPrimary` | `filledPrimary` | Styles applied to the root element if `variant="filled"` and `color="primary"`. | Combine `.MuiChip-filled` and `.MuiChip-colorPrimary` |
| `.MuiChip-filledSecondary` | `filledSecondary` | Styles applied to the root element if `variant="filled"` and `color="secondary"`. | Combine `.MuiChip-filled` and `.MuiChip-colorSecondary` |

You can override the style of the component using one of these customization options:

- With a [global class name](https://mui.com/material-ui/customization/how-to-customize/#overriding-styles-with-class-names).
- With a rule name as part of the component's [`styleOverrides` property](https://mui.com/material-ui/customization/theme-components/#global-style-overrides) in a custom theme.

### Source

- [Component source](https://github.com/mui/material-ui/blob/master/packages/mui-material/src/Chip/Chip.js)
- [Documentation source](https://github.com/mui/material-ui/blob/master/docs/data/material/components/chips/chips.md)
