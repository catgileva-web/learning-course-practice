Chart composition
Creating advanced custom charts.
ads via Carbon
Blockchain runs better on trusted infra. Deploy your next project on star-rated Dedicated Servers. Start Building
ads via Carbon

Overview

The @mui/x-charts follows an architecture based on context providers. The overall idea is to pass your series and axes definitions to special components. This component transforms the data and makes it available to its children, which can be composed.

There are two main classes of components, which are used to create a chart.

Structural components

These are used to define the chart's structure and data.

The Data Provider and Surface components
As the name suggests, the ChartDataProvider provides the data to the children components. While the ChartsSurface renders the SVG elements.

<ChartDataProvider
  // The configuration of the chart
  series={[{ type: 'bar', data: [100, 200] }]}
  xAxis={[{ scaleType: 'band', data: ['A', 'B'] }]}
  width={500}
  height={300}
>
  <ChartsLegend />
  <ChartsSurface
    // Ref needs to be directly on the ChartsSurface
    ref={mySvgRef}
  >
    {children}
  </ChartsSurface>
</ChartDataProvider>

Copy
The demos here are using the ChartContainer component. To see demos using the separate ChartDataProvider and ChartsSurface components, check the HTML components documentation.

The
ChartContainer
helper
This component is a composition of the two previous components. It can be used instead of them when there is no need to customize anything outside the chart's graphical elements.

<ChartContainer
  // The configuration of the chart
  series={[{ type: 'bar', data: [100, 200] }]}
  xAxis={[{ scaleType: 'band', data: ['A', 'B'] }]}
  width={500}
  height={300}
  // Ref is forwarded internally to the ChartsSurface
  ref={mySvgRef}
>
  {children}
</ChartContainer>

Copy
Graphical components

These are any component that render the graphical elements of the chart. They are the children of the Structural components shown above. There are many of them, so they won't all be listed here. You can even create your own components.

Some examples of graphical components are:

LinePlot
BarPlot
ChartsXAxis
ChartsLegend
ChartsTooltip
Container options

Responsive

The <ChartContainer /> is responsive by default. The component automatically adjusts its dimensions to fit the available space defined by the parent element.

To control the dimensions of the chart, the width and height props can be provided. The chart then renders with the specified dimensions.

The parent element must have intrinsic dimensions. If the parent's dimensions rely on its content, the responsive charts will not render.

The following demo lets you switch between a chart using defined sizes, <ChartContainer width={500} height={300} />, and a chart without any sizes, <ChartContainer />, so you can see how they differ.

Use responsive container
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function BasicComposition() {
  const [isResponsive, setIsResponsive] = React.useState(false);

  const sizingProps = isResponsive ? {} : { width: 500, height: 300 };
  return (
    <Box sx={{ width: '100%', overflow: 'auto' }}>
      <FormControlLabel
        checked={isResponsive}
        control={
          <Checkbox onChange={(event) => setIsResponsive(event.target.checked)} />
        }
        label="Use responsive container"
        labelPlacement="end"
      />

      <Paper sx={{ margin: 1, height: 300 }} elevation={3}>
        <ChartContainer
          series={[
            {
              type: 'bar',
              data: [1, 2, 3, 2, 1],
            },
            {
              type: 'line',
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ['A', 'B', 'C', 'D', 'E'],
              scaleType: 'band',
              id: 'x-axis-id',
              height: 45,
            },
          ]}
          {...sizingProps}
        >
          <BarPlot />
          <LinePlot />
          <MarkPlot />
          <ChartsXAxis label="X axis" axisId="x-axis-id" />
        </ChartContainer>
      </Paper>
    </Box>
  );
}
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function BasicComposition() {
  const [isResponsive, setIsResponsive] = React.useState(false);

  const sizingProps = isResponsive ? {} : { width: 500, height: 300 };
  return (
    <Box sx={{ width: '100%', overflow: 'auto' }}>
      <FormControlLabel
        checked={isResponsive}
        control={
          <Checkbox onChange={(event) => setIsResponsive(event.target.checked)} />
        }
        label="Use responsive container"
        labelPlacement="end"
      />

      <Paper sx={{ margin: 1, height: 300 }} elevation={3}>
        <ChartContainer
          series={[
            {
              type: 'bar',
              data: [1, 2, 3, 2, 1],
            },
            {
              type: 'line',
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ['A', 'B', 'C', 'D', 'E'],
              scaleType: 'band',
              id: 'x-axis-id',
              height: 45,
            },
          ]}
          {...sizingProps}
        >
          <BarPlot />
          <LinePlot />
          <MarkPlot />
          <ChartsXAxis label="X axis" axisId="x-axis-id" />
        </ChartContainer>
      </Paper>
    </Box>
  );
}
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
Properties

The chart container gets all props that are not specific to a single graphical element. This includes:

The xAxis and yAxis props—find more information in the Axis doc
The colors prop as defined in the color palette page
The series and dataset props
Series
The series prop is an array of series definitions. You can find an explanation about each specific series type in their respective docs page: Line, Bar, Pie, and Scatter.

When using a single Charts component, the library can guess which kind of series you are defining. For example, the Bar Chart component assumes that series will be of type 'bar'.

With composition, the chart container isn't able to guess the series type, so you must explicitly define it.

<BarChart
  series={[{
    data: [1, 2, 3] // No need to specify it is a bar series
  }]}
/>

<ChartContainer
  series={[
    { data: [1, 2, 3], type: 'bar' }, // This series is for the bar chart
    { data: [3, 2, 1], type: 'line' } // This series is for the line chart
  ]}
>
  <BarPlot /> {/* Will only display series with type: 'bar' */}
  <LinePlot /> {/* Will only display series with type: 'line' */}
</ChartContainer>

Copy
Those series can use the dataset prop the same way that a single-component chart does—see Using a dataset in the Bar Chart documentation for more details.

In the next demo, the chart is made by composing the <BarPlot /> and <LinePlot /> components. By modifying the series type property, you can switch between rendering a line and a bar.

<ChartContainer
  series={[
    { type, data: [1, 2, 3, 2, 1] },
    { type, data: [4, 3, 1, 3, 4] },
  ]}
>
  <BarPlot />
  <LinePlot />
  <ChartsXAxis label="X axis" axisId="x-axis-id" />
</ChartContainer>

Copy
line
series type
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function SwitchSeriesType() {
  const [type, setType] = React.useState<'line' | 'bar'>('line');

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value as 'line' | 'bar')}
        label="series type"
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="line">line</MenuItem>
        <MenuItem value="bar">bar</MenuItem>
      </TextField>

      <div>
        <ChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ['A', 'B', 'C', 'D', 'E'],
              scaleType: 'band',
              id: 'x-axis-id',
              height: 45,
            },
          ]}
          height={200}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis label="X axis" axisId="x-axis-id" />
        </ChartContainer>
      </div>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function SwitchSeriesType() {
  const [type, setType] = React.useState<'line' | 'bar'>('line');

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value as 'line' | 'bar')}
        label="series type"
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="line">line</MenuItem>
        <MenuItem value="bar">bar</MenuItem>
      </TextField>

      <div>
        <ChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ['A', 'B', 'C', 'D', 'E'],
              scaleType: 'band',
              id: 'x-axis-id',
              height: 45,
            },
          ]}
          height={200}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis label="X axis" axisId="x-axis-id" />
        </ChartContainer>
      </div>
    </Box>
  );
}
Press Enter to start editing
DoiT Cloud Intelligence™ - Identify the 4 costly FinOps mistakes — and learn how to fix them fast.
ad by Carbon
Subcomponents

The CSS z-index property does not exist on SVG elements. Elements rendered after overlap on top of elements rendered before. The order of elements in composition is the only way to define how they overlap.

Plotting

To display data, you have components named <XxxPlot /> such as <LinePlot />, <AreaPlot />, <MarkPlot />, <BarPlot />, etc.

Clipping

To ensure chart elements stay confined to the designated drawing area, use the ChartsClipPath component. This component defines a rectangular clip path that acts as a boundary.

Define the Clip Path: Use <ChartsClipPath id={clipPathId} /> to establish the clip path for the drawing area. clipPathId must be a unique identifier.
Wrap the Chart: Enclose the chart elements you want to clip within a <g> element. Set the clipPath attribute to url(#${clipPathId}) to reference the previously defined clip path. Example: <g clipPath={`url(#${clipPathId})`}>
<ChartContainer>
  <g clipPath={`url(#${clipPathId})`}>
    // The plotting to clip in the drawing area.
    <ScatterPlot />
    <LinePlot />
  </g>
  <ChartsClipPath id={clipPathId} /> // Defines the clip path of the drawing area.
</ChartContainer>

Copy
The following demo lets you toggle clipping for scatter and line plots. Observe how line markers extend beyond the clip area, rendering on top of the axes.

Clip the plot

-20

20
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useId from '@mui/utils/useId';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';

import { Chance } from 'chance';

const chance = new Chance(42);

const data = Array.from({ length: 100 }, () => ({
  x: chance.floating({ min: -25, max: 25 }),
  y: chance.floating({ min: -25, max: 25 }),
})).map((d, index) => ({ ...d, id: index }));

const minDistance = 10;

export default function LimitOverflow() {
  const [isLimited, setIsLimited] = React.useState(false);
  const [xLimits, setXLimites] = React.useState<number[]>([-20, 20]);

  const id = useId();
  const clipPathId = `${id}-clip-path`;

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setXLimites([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setXLimites([clamped - minDistance, clamped]);
      }
    } else {
      setXLimites(newValue as number[]);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <FormControlLabel
        checked={isLimited}
        control={
          <Checkbox onChange={(event) => setIsLimited(event.target.checked)} />
        }
        label="Clip the plot"
        labelPlacement="end"
      />
      <ChartContainer
        xAxis={[
          {
            label: 'x',
            min: xLimits[0],
            max: xLimits[1],
            data: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
          },
        ]}
        series={[
          { type: 'scatter', data, markerSize: 8 },
          {
            type: 'line',
            data: [10, 13, 12, 5, -6, -3, 4, 20, 18, 17, 12, 11],
            showMark: true,
          },
        ]}
        height={300}
      >
        <ChartsGrid vertical horizontal />
        <g clipPath={`url(#${clipPathId})`}>
          <ScatterPlot />
          <LinePlot />
        </g>
        <ChartsXAxis />
        <ChartsYAxis />
        <MarkPlot />
        {isLimited && <ChartsClipPath id={clipPathId} />}
      </ChartContainer>

      <Slider
        value={xLimits}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={-40}
        max={40}
      />
    </Box>
  );
}
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useId from '@mui/utils/useId';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';

import { Chance } from 'chance';

const chance = new Chance(42);

const data = Array.from({ length: 100 }, () => ({
  x: chance.floating({ min: -25, max: 25 }),
  y: chance.floating({ min: -25, max: 25 }),
})).map((d, index) => ({ ...d, id: index }));

const minDistance = 10;

export default function LimitOverflow() {
  const [isLimited, setIsLimited] = React.useState(false);
  const [xLimits, setXLimites] = React.useState<number[]>([-20, 20]);

  const id = useId();
  const clipPathId = `${id}-clip-path`;

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setXLimites([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setXLimites([clamped - minDistance, clamped]);
      }
    } else {
      setXLimites(newValue as number[]);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <FormControlLabel
        checked={isLimited}
        control={
          <Checkbox onChange={(event) => setIsLimited(event.target.checked)} />
        }
        label="Clip the plot"
        labelPlacement="end"
      />
      <ChartContainer
        xAxis={[
          {
            label: 'x',
            min: xLimits[0],
            max: xLimits[1],
            data: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
          },
        ]}
        series={[
          { type: 'scatter', data, markerSize: 8 },
          {
            type: 'line',
            data: [10, 13, 12, 5, -6, -3, 4, 20, 18, 17, 12, 11],
            showMark: true,
          },
        ]}
        height={300}
      >
        <ChartsGrid vertical horizontal />
        <g clipPath={`url(#${clipPathId})`}>
          <ScatterPlot />
          <LinePlot />
        </g>
        <ChartsXAxis />
        <ChartsYAxis />
        <MarkPlot />
        {isLimited && <ChartsClipPath id={clipPathId} />}
      </ChartContainer>

      <Slider
        value={xLimits}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={-40}
        max={40}
      />
    </Box>
  );
}
Press Enter to start editing
Auth0 - Boost your app’s Identity with Auth0. Now with Custom Domain, Passwordless, and more!
ad by Carbon
The provided demo is generating a unique ID with useId().

const id = useId();
const clipPathId = `${id}-clip-path`;

Copy
It's important to generate unique IDs for clip paths, especially when dealing with multiple charts on a page. Assigning a static ID like "my-id" would lead to conflicts.

Axis

To add axes, use <ChartsXAxis /> and <ChartsYAxis /> as defined in the axis page.

It takes an axisId prop that indicates which axis, defined in the container, should be rendered. If axisId is not provided it will pick the first one.

Grid

To add a grid, use the <ChartsGrid /> component.

See Axis—Grid documentation for more information.

Legend

To add a legend, use the <ChartsLegend /> component.

The Charts Legend is an HTML element since v8. It must be rendered inside the Data Provider to get access to the data, but outside the Surface since it's not an SVG element.

// ✅ Correct
<ChartDataProvider>
  <ChartsLegend />
  <ChartsSurface>{/* SVG components */}</ChartsSurface>
</ChartDataProvider>

// ❌ Incorrect
<ChartContainer>
  <ChartsLegend />
</ChartContainer>

Copy
See HTML components documentation for more information on how to use custom legends.

Interaction

You can also add interactive elements such as <ChartsAxisHighlight /> and <ChartsTooltip />.

Sales Data
import { ChartDataProvider } from '@mui/x-charts/ChartDataProvider';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import Box from '@mui/material/Box';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function LegendTooltipComposition() {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ChartDataProvider
        height={300}
        series={[{ type: 'line', data: pData, label: 'Sales Data' }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={{ top: 30, right: 30, bottom: 20, left: 20 }}
      >
        <ChartsLegend />
        <ChartsTooltip />
        <ChartsSurface>
          <ChartsXAxis />
          <ChartsYAxis />
          <LinePlot />
          <MarkPlot />
          <ChartsAxisHighlight x="line" />
        </ChartsSurface>
      </ChartDataProvider>
    </Box>
  );
}
import { ChartDataProvider } from '@mui/x-charts/ChartDataProvider';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import Box from '@mui/material/Box';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function LegendTooltipComposition() {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ChartDataProvider
        height={300}
        series={[{ type: 'line', data: pData, label: 'Sales Data' }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={{ top: 30, right: 30, bottom: 20, left: 20 }}
      >
        <ChartsLegend />
        <ChartsTooltip />
        <ChartsSurface>
          <ChartsXAxis />
          <ChartsYAxis />
          <LinePlot />
          <MarkPlot />
          <ChartsAxisHighlight x="line" />
        </ChartsSurface>
      </ChartDataProvider>
    </Box>
  );
}
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
By default, the container listens to mouse events to keep track of where the mouse is located on the chart.

If you are not using the axis highlight or the tooltip, consider disabling this feature with the disableAxisListener prop.

<ChartContainer {...} disableAxisListener>

Copy
Examples

Bell curve

This example demonstrates how to combine scatter and line plots to overlay a normal distribution curve (bell curve) over scattered data points. The bell curve is calculated based on the mean and standard deviation of the data.

./BellCurveOverlay.tsx
../dataset/internetUsageByCountry.ts
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';
import { internetUsageByCountry } from '../dataset/internetUsageByCountry';

const data = Object.values(internetUsageByCountry);

function calculateStatistics(values: number[]) {
  const n = values.length;
  const mean = values.reduce((sum, val) => sum + val, 0) / n;
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
  const stdDev = Math.sqrt(variance);
  return { mean, stdDev };
}

function normalDistribution(x: number, mean: number, stdDev: number) {
  const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
}

export default function BellCurveOverlay() {
  const { mean, stdDev } = calculateStatistics(data);

  // Generate bell curve data
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const bellCurveData: number[] = [];
  const xValues: number[] = [];
  const numPoints = 100;

  for (let i = 0; i <= numPoints; i += 1) {
    const x = min - range * 0.1 + ((max - min + range * 0.2) * i) / numPoints;
    xValues.push(x);
    bellCurveData.push(normalDistribution(x, mean, stdDev));
  }

  // Stack points that are close together
  const binWidth = range / 70; // Adjust this to control stacking sensitivity
  const sortedData = [...data].sort((a, b) => a - b);
  const bins: Map<number, number[]> = new Map();

  // Group values into bins
  sortedData.forEach((value) => {
    const binIndex = Math.round(value / binWidth);
    if (!bins.has(binIndex)) {
      bins.set(binIndex, []);
    }
    bins.get(binIndex)!.push(value);
  });

  // Create scatter data with stacked y-positions
  const scatterData: Array<{ x: number; y: number; id: number }> = [];
  let globalIndex = 0;
  const baseY = 0.0005;
  const stackHeight = 0.001;

  bins.forEach((values) => {
    values.forEach((value, stackIndex) => {
      scatterData.push({
        x: value,
        y: baseY + stackIndex * stackHeight,
        id: globalIndex,
      });
      globalIndex += 1;
    });
  });

  return (
    <div style={{ width: '100%' }}>
      <ChartContainer
        series={[
          {
            type: 'scatter',
            data: scatterData,
            label: 'Data points',
            id: 'scatter',
            markerSize: 4,
          },
          {
            type: 'line',
            data: bellCurveData,
            label: 'Normal distribution',
            id: 'bell-curve',
            color: '#f97316',
            curve: 'natural',
            showMark: false,
          },
        ]}
        xAxis={[
          {
            data: xValues,
            min: min - range * 0.1,
            max: max + range * 0.1,
            label: 'Individuals using the Internet (% of population)',
            valueFormatter: (value: string) => `${value}%`,
          },
        ]}
        yAxis={[
          {
            position: 'none',
          },
        ]}
        height={400}
      >
        <ScatterPlot />
        <LinePlot />
        <ChartsReferenceLine
          x={mean}
          label="Mean"
          lineStyle={{ strokeWidth: 2 }}
          labelStyle={{ fontWeight: 'bold' }}
          labelAlign="start"
          spacing={{ y: 40 }}
        />
        <ChartsReferenceLine
          x={mean - stdDev}
          label="-1σ"
          lineStyle={{ strokeWidth: 1.5, strokeDasharray: '5 5' }}
          labelAlign="start"
          spacing={{ y: 40 }}
        />
        <ChartsReferenceLine
          x={mean + stdDev}
          label="+1σ"
          lineStyle={{ strokeWidth: 1.5, strokeDasharray: '5 5' }}
          labelAlign="start"
          spacing={{ y: 40 }}
        />
        <ChartsXAxis />
        <ChartsYAxis />
      </ChartContainer>
    </div>
  );
}
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';
import { internetUsageByCountry } from '../dataset/internetUsageByCountry';

const data = Object.values(internetUsageByCountry);

function calculateStatistics(values: number[]) {
  const n = values.length;
  const mean = values.reduce((sum, val) => sum + val, 0) / n;
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
  const stdDev = Math.sqrt(variance);
  return { mean, stdDev };
}

function normalDistribution(x: number, mean: number, stdDev: number) {
  const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
}

export default function BellCurveOverlay() {
  const { mean, stdDev } = calculateStatistics(data);

  // Generate bell curve data
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const bellCurveData: number[] = [];
  const xValues: number[] = [];
  const numPoints = 100;

  for (let i = 0; i <= numPoints; i += 1) {
    const x = min - range * 0.1 + ((max - min + range * 0.2) * i) / numPoints;
    xValues.push(x);
    bellCurveData.push(normalDistribution(x, mean, stdDev));
  }

  // Stack points that are close together
  const binWidth = range / 70; // Adjust this to control stacking sensitivity
  const sortedData = [...data].sort((a, b) => a - b);
  const bins: Map<number, number[]> = new Map();

  // Group values into bins
  sortedData.forEach((value) => {
    const binIndex = Math.round(value / binWidth);
    if (!bins.has(binIndex)) {
      bins.set(binIndex, []);
    }
    bins.get(binIndex)!.push(value);
  });

  // Create scatter data with stacked y-positions
  const scatterData: Array<{ x: number; y: number; id: number }> = [];
  let globalIndex = 0;
  const baseY = 0.0005;
  const stackHeight = 0.001;

  bins.forEach((values) => {
    values.forEach((value, stackIndex) => {
      scatterData.push({
        x: value,
        y: baseY + stackIndex * stackHeight,
        id: globalIndex,
      });
      globalIndex += 1;
    });
  });

  return (
    <div style={{ width: '100%' }}>
      <ChartContainer
        series={[
          {
            type: 'scatter',
            data: scatterData,
            label: 'Data points',
            id: 'scatter',
            markerSize: 4,
          },
          {
            type: 'line',
            data: bellCurveData,
            label: 'Normal distribution',
            id: 'bell-curve',
            color: '#f97316',
            curve: 'natural',
            showMark: false,
          },
        ]}
        xAxis={[
          {
            data: xValues,
            min: min - range * 0.1,
            max: max + range * 0.1,
            label: 'Individuals using the Internet (% of population)',
            valueFormatter: (value: string) => `${value}%`,
          },
        ]}
        yAxis={[
          {
            position: 'none',
          },
        ]}
        height={400}
      >
        <ScatterPlot />
        <LinePlot />
        <ChartsReferenceLine
          x={mean}
          label="Mean"
          lineStyle={{ strokeWidth: 2 }}
          labelStyle={{ fontWeight: 'bold' }}
          labelAlign="start"
          spacing={{ y: 40 }}
        />
        <ChartsReferenceLine
          x={mean - stdDev}
          label="-1σ"
          lineStyle={{ strokeWidth: 1.5, strokeDasharray: '5 5' }}
          labelAlign="start"
          spacing={{ y: 40 }}
        />
        <ChartsReferenceLine
          x={mean + stdDev}
          label="+1σ"
          lineStyle={{ strokeWidth: 1.5, strokeDasharray: '5 5' }}
          labelAlign="start"
          spacing={{ y: 40 }}
        />
        <ChartsXAxis />
        <ChartsYAxis />
      </ChartContainer>
    </div>
  );
}
Press Enter to start editing
SerpApi - Scrape Google and other search engines from fast, easy, and complete API. 0.66s average response time.
ad by Carbon
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<ChartContainer />
<ChartContainerPro />
<ChartDataProvider />
<ChartDataProviderPro />
<ChartsGrid />
<ChartsSurface />