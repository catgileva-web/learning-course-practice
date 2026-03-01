Charts - Styling
This page groups topics about charts customization.
ads via Carbon
Scale your blockchain archive for up to 30% less! Up to 30.72 TB NVMe storage per server.
ads via Carbon

Colors

Series color

Series accepts a property color which is the base color used to render its components.

<LineChart series={[{ ..., color: '#fdb462'}]} />

Copy
Example
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Tableau10 = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab',
];

const chartsParams = {
  height: 300,
};
export default function BasicColor() {
  const [color, setColor] = React.useState('#4e79a7');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextColor: string) => {
    setColor(nextColor);
  };

  return (
    <Stack direction="column" spacing={2}>
      <LineChart
        {...chartsParams}
        series={[
          {
            data: [15, 23, 18, 19, 13],
            label: 'Example',
            color,
          },
        ]}
      />
      <ToggleButtonGroup value={color} exclusive onChange={handleChange}>
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: 'inline-block',
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Tableau10 = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab',
];

const chartsParams = {
  height: 300,
};
export default function BasicColor() {
  const [color, setColor] = React.useState('#4e79a7');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextColor: string) => {
    setColor(nextColor);
  };

  return (
    <Stack direction="column" spacing={2}>
      <LineChart
        {...chartsParams}
        series={[
          {
            data: [15, 23, 18, 19, 13],
            label: 'Example',
            color,
          },
        ]}
      />
      <ToggleButtonGroup value={color} exclusive onChange={handleChange}>
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: 'inline-block',
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
Color palette

Charts come with built-in color palettes to automatically assign colors to series. If a particular series lacks a color prop, the chart will default to assigning a color based on the series' index.

You can set a custom color palette by using the prop colors on chart components (or <ChartContainer /> if you are using composition). This prop takes an array of colors, or a callback whose input is the theme's mode ('dark' or 'light'), and returns the array of colors.

Provided palettes
The library includes three palettes.

Series 1
Series 2
Series 3
Series 4
Series 5
Series 6
Series 7
Series 8
Series 9
Series 10
Series 11
Series 12
Series 13

blueberryTwilight

import * as React from 'react';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Chance } from 'chance';
import { ScatterChart, ScatterChartProps } from '@mui/x-charts/ScatterChart';
import { ScatterValueType } from '@mui/x-charts/models';
import {
  blueberryTwilightPalette,
  mangoFusionPalette,
  cheerfulFiestaPalette,
  strawberrySkyPalette,
  rainbowSurgePalette,
  bluePalette,
  greenPalette,
  purplePalette,
  redPalette,
  orangePalette,
  yellowPalette,
  cyanPalette,
  pinkPalette,
} from '@mui/x-charts/colorPalettes';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';

const chance = new Chance(42);

function getGaussianSeriesData(
  mean: [number, number],
  stdev: [number, number] = [0.3, 0.4],
  N: number = 50,
) {
  return [...Array(N)].map((_, i) => {
    const x =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[0] +
      mean[0];
    const y =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[1] +
      mean[1];
    return { x, y, id: i };
  });
}

const legendPlacement: Partial<ScatterChartProps> = {
  slotProps: {
    legend: {
      direction: 'vertical',
    },
  },
};

const series = [
  { label: 'Series 1', data: getGaussianSeriesData([-5, 0]) },
  { label: 'Series 2', data: getGaussianSeriesData([-4, 0]) },
  { label: 'Series 3', data: getGaussianSeriesData([-3, 0]) },
  { label: 'Series 4', data: getGaussianSeriesData([-2, 0]) },
  { label: 'Series 5', data: getGaussianSeriesData([-1, 0]) },
  { label: 'Series 6', data: getGaussianSeriesData([0, 0]) },
  { label: 'Series 7', data: getGaussianSeriesData([1, 0]) },
  { label: 'Series 8', data: getGaussianSeriesData([2, 0]) },
  { label: 'Series 9', data: getGaussianSeriesData([3, 0]) },
  { label: 'Series 10', data: getGaussianSeriesData([4, 0]) },
  { label: 'Series 11', data: getGaussianSeriesData([5, 0]) },
  { label: 'Series 12', data: getGaussianSeriesData([6, 0]) },
  { label: 'Series 13', data: getGaussianSeriesData([7, 0]) },
].map((s) => ({
  ...s,
  valueFormatter: (v: ScatterValueType | null) =>
    v && `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
}));

const categorical = {
  rainbowSurge: rainbowSurgePalette,
  blueberryTwilight: blueberryTwilightPalette,
  mangoFusion: mangoFusionPalette,
  cheerfulFiesta: cheerfulFiestaPalette,
} as const;
const sequential = {
  strawberrySky: strawberrySkyPalette,
  purple: purplePalette,
  blue: bluePalette,
  cyan: cyanPalette,
  green: greenPalette,
  yellow: yellowPalette,
  orange: orangePalette,
  red: redPalette,
  pink: pinkPalette,
} as const;

const categories = {
  ...categorical,
  ...sequential,
} as const;

type PaletteKey = keyof typeof categories;

export default function MuiColorTemplate() {
  const theme = useTheme();
  const [colorScheme, setColorScheme] =
    React.useState<PaletteKey>('blueberryTwilight');
  const [colorMode, setColorMode] = React.useState(theme.palette.mode);

  React.useEffect(() => {
    setColorMode(theme.palette.mode);
  }, [theme.palette.mode]);

  const newTheme = createTheme({ palette: { mode: colorMode } });
  return (
    <ThemeProvider theme={newTheme}>
      <Paper sx={{ width: '100%', p: 2 }} elevation={0}>
        <Stack direction="column" spacing={2}>
          <ScatterChart
            height={400}
            series={series}
            yAxis={[{ min: -1.5, max: 1.5 }]}
            colors={categories[colorScheme]}
            {...legendPlacement}
          />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <div>
              <Button
                sx={{ ml: 1 }}
                onClick={() =>
                  setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'))
                }
                color="inherit"
                endIcon={
                  colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {colorMode} mode
              </Button>
            </div>
            <TextField
              select
              sx={{ maxWidth: 1 }}
              value={colorScheme}
              onChange={(event) => setColorScheme(event.target.value as PaletteKey)}
            >
              <ListSubheader>Categorical</ListSubheader>
              {Object.entries(categorical).map(([name, colors]) => (
                <MenuItem key={name} value={name}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width={'100%'}
                  >
                    <Typography sx={{ mr: 2 }}>{name}</Typography>
                    <div style={{ width: 200, height: 20 }}>
                      {colors(colorMode).map((c) => (
                        <div
                          key={c}
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: c,
                            display: 'inline-block',
                          }}
                        />
                      ))}
                    </div>
                  </Stack>
                </MenuItem>
              ))}
              <Divider />
              <ListSubheader>Sequential</ListSubheader>
              {Object.entries(sequential).map(([name, colors]) => (
                <MenuItem key={name} value={name}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width={'100%'}
                  >
                    <Typography sx={{ mr: 2 }}>{name}</Typography>
                    <div style={{ width: 200, height: 20 }}>
                      {colors(colorMode).map((c) => (
                        <div
                          key={c}
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: c,
                            display: 'inline-block',
                          }}
                        />
                      ))}
                    </div>
                  </Stack>
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}
import * as React from 'react';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Chance } from 'chance';
import { ScatterChart, ScatterChartProps } from '@mui/x-charts/ScatterChart';
import { ScatterValueType } from '@mui/x-charts/models';
import {
  blueberryTwilightPalette,
  mangoFusionPalette,
  cheerfulFiestaPalette,
  strawberrySkyPalette,
  rainbowSurgePalette,
  bluePalette,
  greenPalette,
  purplePalette,
  redPalette,
  orangePalette,
  yellowPalette,
  cyanPalette,
  pinkPalette,
} from '@mui/x-charts/colorPalettes';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';

const chance = new Chance(42);

function getGaussianSeriesData(
  mean: [number, number],
  stdev: [number, number] = [0.3, 0.4],
  N: number = 50,
) {
  return [...Array(N)].map((_, i) => {
    const x =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[0] +
      mean[0];
    const y =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[1] +
      mean[1];
    return { x, y, id: i };
  });
}

const legendPlacement: Partial<ScatterChartProps> = {
  slotProps: {
    legend: {
      direction: 'vertical',
    },
  },
};

const series = [
  { label: 'Series 1', data: getGaussianSeriesData([-5, 0]) },
  { label: 'Series 2', data: getGaussianSeriesData([-4, 0]) },
  { label: 'Series 3', data: getGaussianSeriesData([-3, 0]) },
  { label: 'Series 4', data: getGaussianSeriesData([-2, 0]) },
  { label: 'Series 5', data: getGaussianSeriesData([-1, 0]) },
  { label: 'Series 6', data: getGaussianSeriesData([0, 0]) },
  { label: 'Series 7', data: getGaussianSeriesData([1, 0]) },
  { label: 'Series 8', data: getGaussianSeriesData([2, 0]) },
  { label: 'Series 9', data: getGaussianSeriesData([3, 0]) },
  { label: 'Series 10', data: getGaussianSeriesData([4, 0]) },
  { label: 'Series 11', data: getGaussianSeriesData([5, 0]) },
  { label: 'Series 12', data: getGaussianSeriesData([6, 0]) },
  { label: 'Series 13', data: getGaussianSeriesData([7, 0]) },
].map((s) => ({
  ...s,
  valueFormatter: (v: ScatterValueType | null) =>
    v && `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
}));

const categorical = {
  rainbowSurge: rainbowSurgePalette,
  blueberryTwilight: blueberryTwilightPalette,
  mangoFusion: mangoFusionPalette,
  cheerfulFiesta: cheerfulFiestaPalette,
} as const;
const sequential = {
  strawberrySky: strawberrySkyPalette,
  purple: purplePalette,
  blue: bluePalette,
  cyan: cyanPalette,
  green: greenPalette,
  yellow: yellowPalette,
  orange: orangePalette,
  red: redPalette,
  pink: pinkPalette,
} as const;

const categories = {
  ...categorical,
  ...sequential,
} as const;

type PaletteKey = keyof typeof categories;

export default function MuiColorTemplate() {
  const theme = useTheme();
  const [colorScheme, setColorScheme] =
    React.useState<PaletteKey>('blueberryTwilight');
  const [colorMode, setColorMode] = React.useState(theme.palette.mode);

  React.useEffect(() => {
    setColorMode(theme.palette.mode);
  }, [theme.palette.mode]);

  const newTheme = createTheme({ palette: { mode: colorMode } });
  return (
    <ThemeProvider theme={newTheme}>
      <Paper sx={{ width: '100%', p: 2 }} elevation={0}>
        <Stack direction="column" spacing={2}>
          <ScatterChart
            height={400}
            series={series}
            yAxis={[{ min: -1.5, max: 1.5 }]}
            colors={categories[colorScheme]}
            {...legendPlacement}
          />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <div>
              <Button
                sx={{ ml: 1 }}
                onClick={() =>
                  setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'))
                }
                color="inherit"
                endIcon={
                  colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {colorMode} mode
              </Button>
            </div>
            <TextField
              select
              sx={{ maxWidth: 1 }}
              value={colorScheme}
              onChange={(event) => setColorScheme(event.target.value as PaletteKey)}
            >
              <ListSubheader>Categorical</ListSubheader>
              {Object.entries(categorical).map(([name, colors]) => (
                <MenuItem key={name} value={name}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width={'100%'}
                  >
                    <Typography sx={{ mr: 2 }}>{name}</Typography>
                    <div style={{ width: 200, height: 20 }}>
                      {colors(colorMode).map((c) => (
                        <div
                          key={c}
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: c,
                            display: 'inline-block',
                          }}
                        />
                      ))}
                    </div>
                  </Stack>
                </MenuItem>
              ))}
              <Divider />
              <ListSubheader>Sequential</ListSubheader>
              {Object.entries(sequential).map(([name, colors]) => (
                <MenuItem key={name} value={name}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width={'100%'}
                  >
                    <Typography sx={{ mr: 2 }}>{name}</Typography>
                    <div style={{ width: 200, height: 20 }}>
                      {colors(colorMode).map((c) => (
                        <div
                          key={c}
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: c,
                            display: 'inline-block',
                          }}
                        />
                      ))}
                    </div>
                  </Stack>
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}
Press Enter to start editing
AWS - AWS Compute offers scalable and flexible computing resources to power your business growth.
ad by Carbon
Custom palettes
Those palettes can also be generated by using d3-scale-chromatic. Or any color manipulation library you like.

Here is an example of the d3 Categorical color palette.

Series 1
Series 2
Series 3
Series 4
Series 5
Series 6
Series 7
Series 8
Series 9
Series 10
Series 11
Series 12
Series 13

Category10

import * as React from 'react';
import { ScatterChart, ScatterChartProps } from '@mui/x-charts/ScatterChart';
import { ScatterValueType } from '@mui/x-charts/models';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Chance } from 'chance';

const chance = new Chance(42);

function getGaussianSeriesData(
  mean: [number, number],
  stdev: [number, number] = [0.3, 0.4],
  N: number = 50,
) {
  return [...Array(N)].map((_, i) => {
    const x =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[0] +
      mean[0];
    const y =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[1] +
      mean[1];
    return { x, y, id: i };
  });
}

const legendPlacement: Partial<ScatterChartProps> = {
  slotProps: {
    legend: {
      position: {
        vertical: 'middle',
        horizontal: 'end',
      },
      direction: 'vertical',
    },
  },
};
const series = [
  { label: 'Series 1', data: getGaussianSeriesData([-5, 0]) },
  { label: 'Series 2', data: getGaussianSeriesData([-4, 0]) },
  { label: 'Series 3', data: getGaussianSeriesData([-3, 0]) },
  { label: 'Series 4', data: getGaussianSeriesData([-2, 0]) },
  { label: 'Series 5', data: getGaussianSeriesData([-1, 0]) },
  { label: 'Series 6', data: getGaussianSeriesData([0, 0]) },
  { label: 'Series 7', data: getGaussianSeriesData([1, 0]) },
  { label: 'Series 8', data: getGaussianSeriesData([2, 0]) },
  { label: 'Series 9', data: getGaussianSeriesData([3, 0]) },
  { label: 'Series 10', data: getGaussianSeriesData([4, 0]) },
  { label: 'Series 11', data: getGaussianSeriesData([5, 0]) },
  { label: 'Series 12', data: getGaussianSeriesData([6, 0]) },
  { label: 'Series 13', data: getGaussianSeriesData([7, 0]) },
].map((s) => ({
  ...s,
  valueFormatter: (v: ScatterValueType | null) =>
    v && `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
}));

const categories: { [key: string]: string[] } = {
  Category10: [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
    '#bcbd22',
    '#17becf',
  ],
  Accent: [
    '#7fc97f',
    '#beaed4',
    '#fdc086',
    '#ffff99',
    '#386cb0',
    '#f0027f',
    '#bf5b17',
    '#666666',
  ],
  Dark2: [
    '#1b9e77',
    '#d95f02',
    '#7570b3',
    '#e7298a',
    '#66a61e',
    '#e6ab02',
    '#a6761d',
    '#666666',
  ],
  Paired: [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
    '#b15928',
  ],
  Pastel1: [
    '#fbb4ae',
    '#b3cde3',
    '#ccebc5',
    '#decbe4',
    '#fed9a6',
    '#ffffcc',
    '#e5d8bd',
    '#fddaec',
    '#f2f2f2',
  ],
  Pastel2: [
    '#b3e2cd',
    '#fdcdac',
    '#cbd5e8',
    '#f4cae4',
    '#e6f5c9',
    '#fff2ae',
    '#f1e2cc',
    '#cccccc',
  ],
  Set1: [
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999',
  ],
  Set2: [
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    '#e5c494',
    '#b3b3b3',
  ],
  Set3: [
    '#8dd3c7',
    '#ffffb3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd',
    '#ccebc5',
    '#ffed6f',
  ],
  Tableau10: [
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ],
};

export default function ColorTemplate() {
  const [colorScheme, setColorScheme] = React.useState('Category10');

  return (
    <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
      <ScatterChart
        height={400}
        series={series}
        yAxis={[{ min: -1.5, max: 1.5 }]}
        colors={categories[colorScheme]}
        {...legendPlacement}
      />
      <TextField
        select
        defaultValue="Category10"
        onChange={(event) => setColorScheme(event.target.value)}
      >
        {Object.entries(categories).map(([name, colors]) => (
          <MenuItem key={name} value={name}>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ mr: 2 }}>{name}</Typography>
              <div style={{ width: 200, height: 20 }}>
                {colors.map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: c,
                      display: 'inline-block',
                    }}
                  />
                ))}
              </div>
            </Stack>
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
import * as React from 'react';
import { ScatterChart, ScatterChartProps } from '@mui/x-charts/ScatterChart';
import { ScatterValueType } from '@mui/x-charts/models';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Chance } from 'chance';

const chance = new Chance(42);

function getGaussianSeriesData(
  mean: [number, number],
  stdev: [number, number] = [0.3, 0.4],
  N: number = 50,
) {
  return [...Array(N)].map((_, i) => {
    const x =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[0] +
      mean[0];
    const y =
      Math.sqrt(-2.0 * Math.log(1 - chance.floating({ min: 0, max: 0.99 }))) *
        Math.cos(2.0 * Math.PI * chance.floating({ min: 0, max: 0.99 })) *
        stdev[1] +
      mean[1];
    return { x, y, id: i };
  });
}

const legendPlacement: Partial<ScatterChartProps> = {
  slotProps: {
    legend: {
      position: {
        vertical: 'middle',
        horizontal: 'end',
      },
      direction: 'vertical',
    },
  },
};
const series = [
  { label: 'Series 1', data: getGaussianSeriesData([-5, 0]) },
  { label: 'Series 2', data: getGaussianSeriesData([-4, 0]) },
  { label: 'Series 3', data: getGaussianSeriesData([-3, 0]) },
  { label: 'Series 4', data: getGaussianSeriesData([-2, 0]) },
  { label: 'Series 5', data: getGaussianSeriesData([-1, 0]) },
  { label: 'Series 6', data: getGaussianSeriesData([0, 0]) },
  { label: 'Series 7', data: getGaussianSeriesData([1, 0]) },
  { label: 'Series 8', data: getGaussianSeriesData([2, 0]) },
  { label: 'Series 9', data: getGaussianSeriesData([3, 0]) },
  { label: 'Series 10', data: getGaussianSeriesData([4, 0]) },
  { label: 'Series 11', data: getGaussianSeriesData([5, 0]) },
  { label: 'Series 12', data: getGaussianSeriesData([6, 0]) },
  { label: 'Series 13', data: getGaussianSeriesData([7, 0]) },
].map((s) => ({
  ...s,
  valueFormatter: (v: ScatterValueType | null) =>
    v && `(${v.x.toFixed(1)}, ${v.y.toFixed(1)})`,
}));

const categories: { [key: string]: string[] } = {
  Category10: [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
    '#bcbd22',
    '#17becf',
  ],
  Accent: [
    '#7fc97f',
    '#beaed4',
    '#fdc086',
    '#ffff99',
    '#386cb0',
    '#f0027f',
    '#bf5b17',
    '#666666',
  ],
  Dark2: [
    '#1b9e77',
    '#d95f02',
    '#7570b3',
    '#e7298a',
    '#66a61e',
    '#e6ab02',
    '#a6761d',
    '#666666',
  ],
  Paired: [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
    '#b15928',
  ],
  Pastel1: [
    '#fbb4ae',
    '#b3cde3',
    '#ccebc5',
    '#decbe4',
    '#fed9a6',
    '#ffffcc',
    '#e5d8bd',
    '#fddaec',
    '#f2f2f2',
  ],
  Pastel2: [
    '#b3e2cd',
    '#fdcdac',
    '#cbd5e8',
    '#f4cae4',
    '#e6f5c9',
    '#fff2ae',
    '#f1e2cc',
    '#cccccc',
  ],
  Set1: [
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999',
  ],
  Set2: [
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    '#e5c494',
    '#b3b3b3',
  ],
  Set3: [
    '#8dd3c7',
    '#ffffb3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd',
    '#ccebc5',
    '#ffed6f',
  ],
  Tableau10: [
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ],
};

export default function ColorTemplate() {
  const [colorScheme, setColorScheme] = React.useState('Category10');

  return (
    <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
      <ScatterChart
        height={400}
        series={series}
        yAxis={[{ min: -1.5, max: 1.5 }]}
        colors={categories[colorScheme]}
        {...legendPlacement}
      />
      <TextField
        select
        defaultValue="Category10"
        onChange={(event) => setColorScheme(event.target.value)}
      >
        {Object.entries(categories).map(([name, colors]) => (
          <MenuItem key={name} value={name}>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ mr: 2 }}>{name}</Typography>
              <div style={{ width: 200, height: 20 }}>
                {colors.map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: c,
                      display: 'inline-block',
                    }}
                  />
                ))}
              </div>
            </Stack>
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
Press Enter to start editing
Swagger by SmartBear - Swagger sets the standard for API design, testing, and governance to get you AI-Ready.
ad by Carbon
Values color

Colors can also be set according to item values using the colorMap property of the corresponding axis.

Learn more about how to use this feature with each chart component in their dedicated docs section:

bar charts
line charts
scatter charts
The colorMap property can accept three kinds of objects defined below.

Piecewise color map
The piecewise configuration takes an array of n thresholds values and n+1 colors.

{
  type: 'piecewise';
  thresholds: Value[];
  colors: string[];
}

Copy
Continuous color map
The continuous configuration lets you map values from min to max properties to their corresponding colors.

The color property can either be an array of two colors to interpolate, or an interpolation function that returns a color corresponding to a number t with a value between 0 and 1. The d3-scale-chromatic offers a lot of those functions.

Values lower than the min get the color of the min value; similarly, values higher than the max get the color of the max value. By default, the min/max range is set to 0 / 100.

{
  type: 'continuous';
  min?: Value;
  max?: Value;
  color: [string, string] | ((t: number) => string);
}

Copy
Ordinal color map
This configuration takes two properties—values and colors—and maps those values to their respective colors.

If a value is not defined, it will fall back to the unknownColor, and if this is also undefined, then it falls back on the series color.

This configuration can be used in Bar Charts to set colors according to string categories.

{
  type: 'ordinal';
  values: Value[];
  colors: string[];
  unknownColor?: string;
}

Copy
Color callback

If you need more control over the color assignment, you can provide a colorGetter callback prop to the chart component.

The callback receives a { value, dataIndex } object and should return a color string for the provided data point.

In components where a series-level color is required (for example, the legend), the color prop is used instead.

Premier League Clubs Net Spend - Summer 2025
Source: squawka.com
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart, BarChartProps, BarSeries } from '@mui/x-charts/BarChart';

const clubs = [
  'Arsenal',
  'Liverpool',
  'Man Utd',
  'Tottenham',
  'Everton',
  'Sunderland',
  'Newcastle',
  'Nottingham Forest',
  'Leeds',
  'Man City',
  'West Ham',
  'Burnley',
  'Fulham',
  'Chelsea',
  'Aston Villa',
  'Wolves',
  'Crystal Palace',
  'Brentford',
  'Bournemouth',
  'Brighton',
];

// Source: https://www.squawka.com/en/news/premier-league-net-spend-2025-26/
const netSpendInPounds = [
  251.4, 235, 166.9, 137.8, 116, 113.4, 95.6, 95.4, 91.5, 80.2, 69.7, 57.8, 18.93,
  9.5, -8, -14.7, -23, -58.9, -63.3, -68.15,
];
const clubColors = [
  '#EF0107', // Arsenal - Red
  '#C8102E', // Liverpool - Red
  '#DA291C', // Man Utd - Red
  '#132257', // Tottenham - Navy Blue
  '#003399', // Everton - Royal Blue
  '#E03A3E', // Sunderland - Red
  '#241F20', // Newcastle - Black
  '#DD0000', // Nottingham Forest - Red
  '#FFCD00', // Leeds - Yellow
  '#6CABDD', // Man City - Sky Blue
  '#7A263A', // West Ham - Claret
  '#6C1D45', // Burnley - Claret
  '#CC0000', // Fulham - Red
  '#034694', // Chelsea - Blue
  '#670E36', // Aston Villa - Claret
  '#FDB913', // Wolves - Gold
  '#1B458F', // Crystal Palace - Blue
  '#E30613', // Brentford - Red
  '#DA291C', // Bournemouth - Red
  '#0057B8', // Brighton - Blue
];

const valueFormatter = (v: number | null) => (v! < 0 ? `-£${-v!}m` : `£${v!}m`);

const chartsParams = {
  margin: { top: 20, right: 40, bottom: 20, left: 20 },
  xAxis: [{ data: clubs, tickLabelStyle: { angle: 45 }, height: 80 }],
  yAxis: [
    {
      width: 60,
      valueFormatter,
    },
  ],
  series: [
    {
      data: netSpendInPounds,
      colorGetter: (data) => clubColors[data.dataIndex],
      valueFormatter,
    } satisfies BarSeries,
  ],
  height: 400,
} satisfies BarChartProps;

export default function ColorCallback() {
  return (
    <Stack spacing={2} width="100%">
      <Typography variant="h6" textAlign="center">
        Premier League Clubs Net Spend - Summer 2025
      </Typography>
      <BarChart {...chartsParams} />
      <Typography variant="caption">Source: squawka.com</Typography>
    </Stack>
  );
}
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart, BarChartProps, BarSeries } from '@mui/x-charts/BarChart';

const clubs = [
  'Arsenal',
  'Liverpool',
  'Man Utd',
  'Tottenham',
  'Everton',
  'Sunderland',
  'Newcastle',
  'Nottingham Forest',
  'Leeds',
  'Man City',
  'West Ham',
  'Burnley',
  'Fulham',
  'Chelsea',
  'Aston Villa',
  'Wolves',
  'Crystal Palace',
  'Brentford',
  'Bournemouth',
  'Brighton',
];

// Source: https://www.squawka.com/en/news/premier-league-net-spend-2025-26/
const netSpendInPounds = [
  251.4, 235, 166.9, 137.8, 116, 113.4, 95.6, 95.4, 91.5, 80.2, 69.7, 57.8, 18.93,
  9.5, -8, -14.7, -23, -58.9, -63.3, -68.15,
];
const clubColors = [
  '#EF0107', // Arsenal - Red
  '#C8102E', // Liverpool - Red
  '#DA291C', // Man Utd - Red
  '#132257', // Tottenham - Navy Blue
  '#003399', // Everton - Royal Blue
  '#E03A3E', // Sunderland - Red
  '#241F20', // Newcastle - Black
  '#DD0000', // Nottingham Forest - Red
  '#FFCD00', // Leeds - Yellow
  '#6CABDD', // Man City - Sky Blue
  '#7A263A', // West Ham - Claret
  '#6C1D45', // Burnley - Claret
  '#CC0000', // Fulham - Red
  '#034694', // Chelsea - Blue
  '#670E36', // Aston Villa - Claret
  '#FDB913', // Wolves - Gold
  '#1B458F', // Crystal Palace - Blue
  '#E30613', // Brentford - Red
  '#DA291C', // Bournemouth - Red
  '#0057B8', // Brighton - Blue
];

const valueFormatter = (v: number | null) => (v! < 0 ? `-£${-v!}m` : `£${v!}m`);

const chartsParams = {
  margin: { top: 20, right: 40, bottom: 20, left: 20 },
  xAxis: [{ data: clubs, tickLabelStyle: { angle: 45 }, height: 80 }],
  yAxis: [
    {
      width: 60,
      valueFormatter,
    },
  ],
  series: [
    {
      data: netSpendInPounds,
      colorGetter: (data) => clubColors[data.dataIndex],
      valueFormatter,
    } satisfies BarSeries,
  ],
  height: 400,
} satisfies BarChartProps;

export default function ColorCallback() {
  return (
    <Stack spacing={2} width="100%">
      <Typography variant="h6" textAlign="center">
        Premier League Clubs Net Spend - Summer 2025
      </Typography>
      <BarChart {...chartsParams} />
      <Typography variant="caption">Source: squawka.com</Typography>
    </Stack>
  );
}
Press Enter to start editing
AWS - Accelerate your DevOps journey with AWS's comprehensive toolkit.
ad by Carbon
Overlay

Charts have a loading and noData overlays that appear if:

loading prop is set to true.
There is no data to display.
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const emptySeries = {
  series: [],
  height: 150,
};

export default function Overlay() {
  return (
    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ width: '100%' }}>
      <LineChart loading {...emptySeries} />
      <LineChart {...emptySeries} />
    </Stack>
  );
}
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const emptySeries = {
  series: [],
  height: 150,
};

export default function Overlay() {
  return (
    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ width: '100%' }}>
      <LineChart loading {...emptySeries} />
      <LineChart {...emptySeries} />
    </Stack>
  );
}
Press Enter to start editing
SmartBear - Innovate your SDLC with SmartBear AI to transform your software development and testing processes.
ad by Carbon
Axis display

You can provide the axes data to display them while loading the data.

import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const emptySeries = {
  series: [],
  height: 150,
};

export default function OverlayWithAxis() {
  return (
    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ width: '100%' }}>
      <LineChart
        loading
        xAxis={[{ data: [0, 1, 2, 4, 5] }]}
        yAxis={[{ min: 0, max: 10 }]}
        {...emptySeries}
      />
      <LineChart
        yAxis={[{ min: -5, max: 5 }]}
        xAxis={[
          {
            scaleType: 'time',
            data: [
              new Date(2019, 0, 1),
              new Date(2020, 0, 1),
              new Date(2021, 0, 1),
              new Date(2022, 0, 1),
            ],
            tickNumber: 3,
          },
        ]}
        {...emptySeries}
      />
    </Stack>
  );
}
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const emptySeries = {
  series: [],
  height: 150,
};

export default function OverlayWithAxis() {
  return (
    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ width: '100%' }}>
      <LineChart
        loading
        xAxis={[{ data: [0, 1, 2, 4, 5] }]}
        yAxis={[{ min: 0, max: 10 }]}
        {...emptySeries}
      />
      <LineChart
        yAxis={[{ min: -5, max: 5 }]}
        xAxis={[
          {
            scaleType: 'time',
            data: [
              new Date(2019, 0, 1),
              new Date(2020, 0, 1),
              new Date(2021, 0, 1),
              new Date(2022, 0, 1),
            ],
            tickNumber: 3,
          },
        ]}
        {...emptySeries}
      />
    </Stack>
  );
}
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
Custom overlay

To modify the default overlay message or translate it, use the noData or loading key in the localization.

<BarChart
  localeText={{
    loading: 'Data should be available soon.',
    noData: 'Select some data to display.',
  }}
/>

Copy
For more advanced customization, use the loadingOverlay and noDataOverlay slots link in the following demo.

<BarChart
  slotProps={{
    noDataOverlay: { message: 'No data to display in this chart' },
  }}
  series={[]}
  height={150}
/>
<BarChart
  loading
  xAxis={[{ data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }]}
  slots={{ loadingOverlay: LoadingOverlay }}
  series={[]}
  height={150}
/>
<BarChart
  slotProps={{
    noDataOverlay: { message: 'No data to display in this chart' },
  }}
  series={[]}
  height={150}
/>
<BarChart
  loading
  xAxis={[{ data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }]}
  slots={{ loadingOverlay: LoadingOverlay }}
  series={[]}
  height={150}
/>
Press Enter to start editing
Styling

Size

By default, charts adapt their sizing to fill their parent element. However, you can modify this behavior by providing height and/or width props.

Those will fix the chart's size to the given value (in px).

Placement

There are two concepts to consider when defining the placement of a chart:

margin: The space between the SVG border and the axis or drawing area.
axis size: The space taken by the axis. Each axis has its own size.
The axes have a default size. To update it, use the xAxis and yAxis configuration as follows:

x-axis: Uses the height prop to define the space taken by the axis.
y-axis: Uses the width prop instead.
Axes only take up space in the side they are positioned. If an axis is not displayed (position: 'none'), it will not take up any space, regardless of its size.

Copy
import { BarChart } from '@mui/x-charts/BarChart';

<BarChart
  // ...
  margin={{
    left: 40,
    right: 40,
    top: 40,
    bottom: 40,
  }}
  xAxis={[{
    height: 30,
    position: 'top'
  }]}
  yAxis={[{
    width: 30
    position: 'right'
  }]}
/>
Playground
left
40
right
40
top
40
bottom
40
xAxisHeight
30
yAxisWidth
30
hideXAxis
hideYAxis
CSS

Since the library relies on SVG for rendering, you can customize them as you do with other MUI System components with CSS overriding.

Chart components accept the sx props. From here, you can target any subcomponents with its class name.

l
r
Drawing area background

To set a background color in the drawing area, you should create a dedicated <rect />. This is only doable with composition because you have to place this new component before all plot components.

The following demo defines a basic <Background /> component that adds a light gray background.

<ChartContainer
  dataset={usUnemploymentRate}
  xAxis={xAxis}
  yAxis={yAxis}
  series={series}
  height={300}
>
  <Background />
  <ChartsGrid vertical horizontal />
  <LinePlot />
  <ChartsXAxis />
  <ChartsYAxis />
</ChartContainer>
<ChartContainer
  dataset={usUnemploymentRate}
  xAxis={xAxis}
  yAxis={yAxis}
  series={series}
  height={300}
>
  <Background />
  <ChartsGrid vertical horizontal />
  <LinePlot />
  <ChartsXAxis />
  <ChartsYAxis />
</ChartContainer>
Press Enter to start editing
Gradients and patterns

It is possible to use gradients and patterns to fill the charts. This can be done by passing your gradient or pattern definition as children of the chart component.

Note that the gradient or pattern defined that way is only usable for SVG. So a direct definition like color: "url(#Pattern)' would cause undefined colors in HTML elements.

series A
series B
import { BarChart } from '@mui/x-charts/BarChart';

export default function GradientTooltip() {
  return (
    <BarChart
      series={[
        {
          label: 'series A',
          data: [50],
          color: 'url(#Pattern)',
        },
        {
          label: 'series B',
          data: [100],
          color: 'url(#Gradient)',
        },
      ]}
      height={200}
    >
      <linearGradient id="Gradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0" stopColor="#123456" />
        <stop offset="1" stopColor="#81b2e4" />
      </linearGradient>
      <pattern
        id="Pattern"
        patternUnits="userSpaceOnUse"
        width="20"
        height="40"
        patternTransform="scale(0.5)"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="#123456" />
        <path
          d="M0 30h20L10 50zm-10-20h20L0 30zm20 0h20L20 30zM0-10h20L10 10z"
          strokeWidth="1"
          stroke="#81b2e4"
          fill="none"
        />
      </pattern>
    </BarChart>
  );
}