Charts - Axis
Define, format, and customize Chart axes.
ads via Carbon
Databases that are secure, reliable, and built for performance with AWS.
ads via Carbon

An axis is a reference line that data points are measured against in a chart. The MUI X Line Chart, Bar Chart, Scatter Chart, and Heatmap give you customization options for both x-axes and y-axes to suit a wide range of use cases.

Creating custom axes

Use the xAxis and yAxis props to define custom axes. These props expect an array of objects.

In the demo below, two lines are rendered using the same data points. One has a linear y-axis and the other has a logarithmic one. Each axis definition is identified by its property id. Then each series specifies the axis it uses with the xAxisId and yAxisId properties.

linear
log
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const sample = [1, 10, 30, 50, 70, 90, 100];

export default function ScaleExample() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <LineChart
        xAxis={[{ data: sample }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', position: 'left' },
          { id: 'logAxis', scaleType: 'log', position: 'right' },
        ]}
        series={[
          { yAxisId: 'linearAxis', data: sample, label: 'linear' },
          { yAxisId: 'logAxis', data: sample, label: 'log' },
        ]}
        height={400}
      />
    </Box>
  );
}
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const sample = [1, 10, 30, 50, 70, 90, 100];

export default function ScaleExample() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <LineChart
        xAxis={[{ data: sample }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', position: 'left' },
          { id: 'logAxis', scaleType: 'log', position: 'right' },
        ]}
        series={[
          { yAxisId: 'linearAxis', data: sample, label: 'linear' },
          { yAxisId: 'logAxis', data: sample, label: 'log' },
        ]}
        height={400}
      />
    </Box>
  );
}
Press Enter to start editing
AWS - Build and deploy your dream web app with powerful cloud hosting from AWS.
ad by Carbon
ID management, as shown in the example above, is not necessary for most common use cases.

If you don't provide xAxisId or yAxisId then the series uses the axis defined first. This is why you won't see definitions of id, xAxisId, or yAxisId in most demos in the Charts docs—they rely on the default values.

Axis type and data

The axis type is specified by its property scaleType. The axis definition object has a data property which expects an array of values corresponding to the scaleType, as shown in the table below:

scaleType	Description	Number	Date	String
'band'	Splits the axis in equal bands.	✅	✅	✅
'point'	Splits the axis in equally spaced points.	✅	✅	✅
'linear' 'log' 'symlog' 'sqrt'	Maps numerical values to the available space.	✅	❌	❌
'time' 'utc'	Maps JavaScript Date() objects to the available space.	❌	✅	❌
Some series types also require specific axis attributes:

In line charts, the xAxis must have a data array so each y-value maps to a specific x-value for proper chart rendering.
In bar charts, the axis that represents categories (x-axis for vertical bars or y-axis for horizontal bars) must use scaleType: 'band'.
Axis formatter

Axis data can be displayed in ticks, tooltips, and other locations. You can use the valueFormatter property to change how the data is displayed. The formatter's second argument provides rendering context for advanced use cases.

In the demo below, valueFormatter is used to shorten months and introduce a new line for ticks. It uses the context.location to determine where the value is rendered.

Seoul rainfall
import { BarChart } from '@mui/x-charts/BarChart';

const otherSetting = {
  height: 300,
  yAxis: [{ label: 'rainfall (mm)', width: 60 }],
  grid: { horizontal: true },
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'January',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'February',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'March',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'April',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'August',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'September',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'October',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'November',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'December',
  },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function FormatterDemo() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          valueFormatter: (month, context) =>
            context.location === 'tick'
              ? `${month.slice(0, 3)} \n2023`
              : `${month} 2023`,
          height: 40,
        },
      ]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      {...otherSetting}
    />
  );
}
import { BarChart } from '@mui/x-charts/BarChart';

const otherSetting = {
  height: 300,
  yAxis: [{ label: 'rainfall (mm)', width: 60 }],
  grid: { horizontal: true },
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'January',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'February',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'March',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'April',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'August',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'September',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'October',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'November',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'December',
  },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function FormatterDemo() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          valueFormatter: (month, context) =>
            context.location === 'tick'
              ? `${month.slice(0, 3)} \n2023`
              : `${month} 2023`,
          height: 40,
        },
      ]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      {...otherSetting}
    />
  );
}
Press Enter to start editing
AWS - Accelerate your DevOps journey with AWS's comprehensive toolkit.
ad by Carbon
Ticks without labels

Some use cases may call for displaying ticks with no labels. For example, it's common to use ticks to indicate a logarithmic scale but omit the labels from the axis when they'd be too numerous or complex to display.

The default tick formatter achieves this by rendering an empty string for ticks that should not show labels. If you want to customize the formatting, but want to keep the default behavior for ticks without labels, you can check that the context.defaultTickLabel property is different from the empty string:

Worldwide Earthquake Count and Magnitude, 2020-2024
Source: US Geological Survey
Tick Format
Ignore empty ticks
Show all values
./TicksWithoutLabels.tsx
../dataset/earthquakeData.ts
import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AxisValueFormatterContext, ScatterValueType } from '@mui/x-charts/models';
import { earthquakeData } from '../dataset/earthquakeData';

const settings = {
  height: 400,
  grid: { horizontal: true },
};
const data = Object.entries(earthquakeData).reduce<ScatterValueType[]>(
  (acc, [magnitude, events]) => {
    acc.push({ x: Number.parseFloat(magnitude), y: events });

    return acc;
  },
  [],
);

const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

function valueFormatterIgnoreEmpty(value: any, context: AxisValueFormatterContext) {
  if (context.location === 'tick' && context.defaultTickLabel === '') {
    return '';
  }

  return formatter.format(value);
}

function valueFormatterShowAll(value: any) {
  return formatter.format(value);
}

export default function TicksWithoutLabels() {
  const [tickFormatter, setTickFormatter] = React.useState(
    () => valueFormatterIgnoreEmpty,
  );

  return (
    <Stack width="100%" direction={{ md: 'row' }} alignItems="center" rowGap={2}>
      <Stack width="100%">
        <Typography variant="h6" textAlign="center">
          Worldwide Earthquake Count and Magnitude, 2020-2024
        </Typography>
        <ScatterChart
          {...settings}
          xAxis={[{ height: 48, label: 'Magnitude' }]}
          yAxis={[
            {
              scaleType: 'log',
              valueFormatter: tickFormatter,
              label: 'Number of events (Log scale)',
              width: 50,
            },
          ]}
          series={[{ data }]}
        />
        <Typography variant="caption">Source: US Geological Survey</Typography>
      </Stack>
      <FormControl sx={{ flexShrink: 0 }}>
        <FormLabel id="tick-format-label">Tick Format</FormLabel>
        <RadioGroup
          aria-labelledby="tick-format-label"
          name="tick-format"
          value={tickFormatter === valueFormatterIgnoreEmpty ? 'empty' : 'all'}
          onChange={(event) =>
            setTickFormatter(() =>
              event.target.value === 'empty'
                ? valueFormatterIgnoreEmpty
                : valueFormatterShowAll,
            )
          }
        >
          <FormControlLabel
            value="empty"
            control={<Radio />}
            label="Ignore empty ticks"
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Show all values"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AxisValueFormatterContext, ScatterValueType } from '@mui/x-charts/models';
import { earthquakeData } from '../dataset/earthquakeData';

const settings = {
  height: 400,
  grid: { horizontal: true },
};
const data = Object.entries(earthquakeData).reduce<ScatterValueType[]>(
  (acc, [magnitude, events]) => {
    acc.push({ x: Number.parseFloat(magnitude), y: events });

    return acc;
  },
  [],
);

const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

function valueFormatterIgnoreEmpty(value: any, context: AxisValueFormatterContext) {
  if (context.location === 'tick' && context.defaultTickLabel === '') {
    return '';
  }

  return formatter.format(value);
}

function valueFormatterShowAll(value: any) {
  return formatter.format(value);
}

export default function TicksWithoutLabels() {
  const [tickFormatter, setTickFormatter] = React.useState(
    () => valueFormatterIgnoreEmpty,
  );

  return (
    <Stack width="100%" direction={{ md: 'row' }} alignItems="center" rowGap={2}>
      <Stack width="100%">
        <Typography variant="h6" textAlign="center">
          Worldwide Earthquake Count and Magnitude, 2020-2024
        </Typography>
        <ScatterChart
          {...settings}
          xAxis={[{ height: 48, label: 'Magnitude' }]}
          yAxis={[
            {
              scaleType: 'log',
              valueFormatter: tickFormatter,
              label: 'Number of events (Log scale)',
              width: 50,
            },
          ]}
          series={[{ data }]}
        />
        <Typography variant="caption">Source: US Geological Survey</Typography>
      </Stack>
      <FormControl sx={{ flexShrink: 0 }}>
        <FormLabel id="tick-format-label">Tick Format</FormLabel>
        <RadioGroup
          aria-labelledby="tick-format-label"
          name="tick-format"
          value={tickFormatter === valueFormatterIgnoreEmpty ? 'empty' : 'all'}
          onChange={(event) =>
            setTickFormatter(() =>
              event.target.value === 'empty'
                ? valueFormatterIgnoreEmpty
                : valueFormatterShowAll,
            )
          }
        >
          <FormControlLabel
            value="empty"
            control={<Radio />}
            label="Ignore empty ticks"
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Show all values"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
Press Enter to start editing
Pluralsight - Learn five ways to advance your tech career in 2025
ad by Carbon
Using the D3 formatter

The context gives you access to the axis scale, the number of ticks (if applicable), and the default formatted value. You can use the D3 tickFormat(tickNumber, specifier) method to adapt the tick format based on the scale properties as shown below:

import { ScaleLogarithmic } from '@mui/x-charts-vendor/d3-scale';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';

const otherSetting = {
  height: 300,
  grid: { horizontal: true, vertical: true },
};

// https://en.wikipedia.org/wiki/Low-pass_filter
const f0 = 440;
const frequencyResponse = (f: number) => 5 / Math.sqrt(1 + (f / f0) ** 2);

const dataset = [
  0.1, 0.5, 0.8, 1, 5, 8, 10, 50, 80, 100, 500, 800, 1_000, 5_000, 8_000, 10_000,
  50_000, 80_000, 100_000, 500_000, 800_000, 1_000_000,
].map((f) => ({ frequency: f, voltage: frequencyResponse(f) }));

export default function FormatterD3() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'log',
          label: 'f (Hz)',
          dataKey: 'frequency',
          tickNumber: 20,
          valueFormatter: (f, context) => {
            if (context.location === 'tick') {
              const d3Text = (
                context.scale as ScaleLogarithmic<number, number, never>
              ).tickFormat(
                context.tickNumber!,
                'e',
              )(f);

              return d3Text;
            }
            return `${f.toLocaleString()}Hz`;
          },
        },
      ]}
      yAxis={[
        {
          scaleType: 'log',
          label: 'Vo/Vi',
          width: 60,
          valueFormatter: (f, context) => {
            if (context.location === 'tick') {
              const d3Text = (
                context.scale as ScaleLogarithmic<number, number, never>
              ).tickFormat(
                30,
                'f',
              )(f);

              return d3Text;
            }
            return f.toLocaleString();
          },
        },
      ]}
      series={[{ dataKey: 'voltage' }]}
      {...otherSetting}
    >
      <ChartsReferenceLine x={f0} />
    </LineChart>
  );
}
import { ScaleLogarithmic } from '@mui/x-charts-vendor/d3-scale';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';

const otherSetting = {
  height: 300,
  grid: { horizontal: true, vertical: true },
};

// https://en.wikipedia.org/wiki/Low-pass_filter
const f0 = 440;
const frequencyResponse = (f: number) => 5 / Math.sqrt(1 + (f / f0) ** 2);

const dataset = [
  0.1, 0.5, 0.8, 1, 5, 8, 10, 50, 80, 100, 500, 800, 1_000, 5_000, 8_000, 10_000,
  50_000, 80_000, 100_000, 500_000, 800_000, 1_000_000,
].map((f) => ({ frequency: f, voltage: frequencyResponse(f) }));

export default function FormatterD3() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'log',
          label: 'f (Hz)',
          dataKey: 'frequency',
          tickNumber: 20,
          valueFormatter: (f, context) => {
            if (context.location === 'tick') {
              const d3Text = (
                context.scale as ScaleLogarithmic<number, number, never>
              ).tickFormat(
                context.tickNumber!,
                'e',
              )(f);

              return d3Text;
            }
            return `${f.toLocaleString()}Hz`;
          },
        },
      ]}
      yAxis={[
        {
          scaleType: 'log',
          label: 'Vo/Vi',
          width: 60,
          valueFormatter: (f, context) => {
            if (context.location === 'tick') {
              const d3Text = (
                context.scale as ScaleLogarithmic<number, number, never>
              ).tickFormat(
                30,
                'f',
              )(f);

              return d3Text;
            }
            return f.toLocaleString();
          },
        },
      ]}
      series={[{ dataKey: 'voltage' }]}
      {...otherSetting}
    >
      <ChartsReferenceLine x={f0} />
    </LineChart>
  );
}
Press Enter to start editing
SerpApi - Devs in SEO, OSINT, and AI rely on SerpApi for fast, fresh SERP data. 250 searches per month for free.
ad by Carbon
Axis subdomain

By default, the axis domain is computed so that all data is visible. To show a specific range of values, you can provide the min and/or max properties to the axis definition:

xAxis={[
  {
    min: 10,
    max: 50,
  },
]}

Copy

-25

25
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Chance } from 'chance';

const chance = new Chance(42);

const data = Array.from({ length: 200 }, () => ({
  x: chance.floating({ min: -25, max: 25 }),
  y: chance.floating({ min: -25, max: 25 }),
})).map((d, index) => ({ ...d, id: index }));

const minDistance = 10;

export default function MinMaxExample() {
  const [value, setValue] = React.useState<number[]>([-25, 25]);

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
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <ScatterChart
        xAxis={[
          {
            label: 'x',
            min: value[0],
            max: value[1],
          },
        ]}
        series={[{ data }]}
        height={300}
      />
      <Slider
        value={value}
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
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Chance } from 'chance';

const chance = new Chance(42);

const data = Array.from({ length: 200 }, () => ({
  x: chance.floating({ min: -25, max: 25 }),
  y: chance.floating({ min: -25, max: 25 }),
})).map((d, index) => ({ ...d, id: index }));

const minDistance = 10;

export default function MinMaxExample() {
  const [value, setValue] = React.useState<number[]>([-25, 25]);

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
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <ScatterChart
        xAxis={[
          {
            label: 'x',
            min: value[0],
            max: value[1],
          },
        ]}
        series={[{ data }]}
        height={300}
      />
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={-40}
        max={40}
      />
    </Box>
  );
}
Press Enter to start editing
AWS - AWS Compute offers scalable and flexible computing resources to power your business growth.
ad by Carbon
Relative axis subdomain

You can adjust the axis range relative to its data by using the domainLimit option. This expects one of three possible values:

"nice" (default): Rounds the domain to human-friendly values
"strict": Sets the domain to the min/max value to display
(minValue, maxValue) => { min, max }: Receives the calculated extrema as parameters, and should return the axis domain
The demo below illustrates these differences in behavior, showing data ranging from -15 to 92 with different domain limits:

nice
domain limit
import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const settings = {
  height: 220,
  series: [{ data: [60, -15, 66, 68, 87, 82, 83, 85, 92, 75, 76, 50, 91] }],
  margin: { top: 20, bottom: 10 },
} as const;

// Extend a value to match a multiple of the step.
function extend(value: number, step: number) {
  if (value > 0) {
    // If >0 go to the next step
    return step * Math.ceil(value / step);
  }
  // If <0 go to the previous step
  return step * Math.floor(value / step);
}

export default function CustomDomainYAxis() {
  const [domainLimit, setDomainLimit] = React.useState<
    'nice' | 'strict' | 'function'
  >('nice');

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        select
        value={domainLimit}
        onChange={(event) =>
          setDomainLimit(event.target.value as 'nice' | 'strict' | 'function')
        }
        label="domain limit"
        sx={{ minWidth: 150, mb: 2 }}
      >
        <MenuItem value="nice">nice</MenuItem>
        <MenuItem value="strict">strict</MenuItem>
        <MenuItem value="function">function</MenuItem>
      </TextField>
      <BarChart
        yAxis={[
          {
            domainLimit:
              domainLimit === 'function'
                ? (min, max) => ({
                    min: extend(min, 10),
                    max: extend(max, 10),
                  })
                : domainLimit,
          },
        ]}
        {...settings}
      />
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const settings = {
  height: 220,
  series: [{ data: [60, -15, 66, 68, 87, 82, 83, 85, 92, 75, 76, 50, 91] }],
  margin: { top: 20, bottom: 10 },
} as const;

// Extend a value to match a multiple of the step.
function extend(value: number, step: number) {
  if (value > 0) {
    // If >0 go to the next step
    return step * Math.ceil(value / step);
  }
  // If <0 go to the previous step
  return step * Math.floor(value / step);
}

export default function CustomDomainYAxis() {
  const [domainLimit, setDomainLimit] = React.useState<
    'nice' | 'strict' | 'function'
  >('nice');

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        select
        value={domainLimit}
        onChange={(event) =>
          setDomainLimit(event.target.value as 'nice' | 'strict' | 'function')
        }
        label="domain limit"
        sx={{ minWidth: 150, mb: 2 }}
      >
        <MenuItem value="nice">nice</MenuItem>
        <MenuItem value="strict">strict</MenuItem>
        <MenuItem value="function">function</MenuItem>
      </TextField>
      <BarChart
        yAxis={[
          {
            domainLimit:
              domainLimit === 'function'
                ? (min, max) => ({
                    min: extend(min, 10),
                    max: extend(max, 10),
                  })
                : domainLimit,
          },
        ]}
        {...settings}
      />
    </Box>
  );
}
Press Enter to start editing
Axis direction

By default, the axes run from left to right and from bottom to top. You can apply the reverse property to change this:

reverse x-axis
reverse left axis
reverse right axis
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

const dataset = [
  { min: -12, max: -4, precip: 79, month: 'Jan' },
  { min: -11, max: -3, precip: 66, month: 'Feb' },
  { min: -6, max: 2, precip: 76, month: 'Mar' },
  { min: 1, max: 9, precip: 106, month: 'Apr' },
  { min: 8, max: 17, precip: 105, month: 'Mai' },
  { min: 15, max: 24, precip: 114, month: 'Jun' },
  { min: 18, max: 26, precip: 106, month: 'Jul' },
  { min: 17, max: 26, precip: 105, month: 'Aug' },
  { min: 13, max: 21, precip: 100, month: 'Sept' },
  { min: 6, max: 13, precip: 116, month: 'Oct' },
  { min: 0, max: 6, precip: 93, month: 'Nov' },
  { min: -8, max: -1, precip: 93, month: 'Dec' },
];

const series = [
  { type: 'line', dataKey: 'min', color: '#577399' },
  { type: 'line', dataKey: 'max', color: '#fe5f55' },
  { type: 'bar', dataKey: 'precip', color: '#bfdbf7', yAxisId: 'rightAxis' },
] as const;

export default function ReverseExample() {
  const [reverseX, setReverseX] = React.useState(false);
  const [reverseLeft, setReverseLeft] = React.useState(false);
  const [reverseRight, setReverseRight] = React.useState(false);

  return (
    <Stack sx={{ width: '100%' }}>
      <Stack direction="row">
        <FormControlLabel
          checked={reverseX}
          control={
            <Checkbox onChange={(event) => setReverseX(event.target.checked)} />
          }
          label="reverse x-axis"
          labelPlacement="end"
        />
        <FormControlLabel
          checked={reverseLeft}
          control={
            <Checkbox onChange={(event) => setReverseLeft(event.target.checked)} />
          }
          label="reverse left axis"
          labelPlacement="end"
        />
        <FormControlLabel
          checked={reverseRight}
          control={
            <Checkbox onChange={(event) => setReverseRight(event.target.checked)} />
          }
          label="reverse right axis"
          labelPlacement="end"
        />
      </Stack>
      <Box sx={{ width: '100%' }}>
        <ChartContainer
          series={series}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
              label: 'Month',
              reverse: reverseX,
            },
          ]}
          yAxis={[
            { id: 'leftAxis', reverse: reverseLeft, width: 50 },
            { id: 'rightAxis', reverse: reverseRight, position: 'right', width: 50 },
          ]}
          dataset={dataset}
          height={400}
        >
          <ChartsGrid horizontal />
          <BarPlot />
          <LinePlot />
          <MarkPlot />

          <ChartsXAxis />
          <ChartsYAxis axisId="leftAxis" label="temperature (°C)" />
          <ChartsYAxis axisId="rightAxis" label="precipitation (mm)" />
          <ChartsTooltip />
        </ChartContainer>
      </Box>
    </Stack>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

const dataset = [
  { min: -12, max: -4, precip: 79, month: 'Jan' },
  { min: -11, max: -3, precip: 66, month: 'Feb' },
  { min: -6, max: 2, precip: 76, month: 'Mar' },
  { min: 1, max: 9, precip: 106, month: 'Apr' },
  { min: 8, max: 17, precip: 105, month: 'Mai' },
  { min: 15, max: 24, precip: 114, month: 'Jun' },
  { min: 18, max: 26, precip: 106, month: 'Jul' },
  { min: 17, max: 26, precip: 105, month: 'Aug' },
  { min: 13, max: 21, precip: 100, month: 'Sept' },
  { min: 6, max: 13, precip: 116, month: 'Oct' },
  { min: 0, max: 6, precip: 93, month: 'Nov' },
  { min: -8, max: -1, precip: 93, month: 'Dec' },
];

const series = [
  { type: 'line', dataKey: 'min', color: '#577399' },
  { type: 'line', dataKey: 'max', color: '#fe5f55' },
  { type: 'bar', dataKey: 'precip', color: '#bfdbf7', yAxisId: 'rightAxis' },
] as const;

export default function ReverseExample() {
  const [reverseX, setReverseX] = React.useState(false);
  const [reverseLeft, setReverseLeft] = React.useState(false);
  const [reverseRight, setReverseRight] = React.useState(false);

  return (
    <Stack sx={{ width: '100%' }}>
      <Stack direction="row">
        <FormControlLabel
          checked={reverseX}
          control={
            <Checkbox onChange={(event) => setReverseX(event.target.checked)} />
          }
          label="reverse x-axis"
          labelPlacement="end"
        />
        <FormControlLabel
          checked={reverseLeft}
          control={
            <Checkbox onChange={(event) => setReverseLeft(event.target.checked)} />
          }
          label="reverse left axis"
          labelPlacement="end"
        />
        <FormControlLabel
          checked={reverseRight}
          control={
            <Checkbox onChange={(event) => setReverseRight(event.target.checked)} />
          }
          label="reverse right axis"
          labelPlacement="end"
        />
      </Stack>
      <Box sx={{ width: '100%' }}>
        <ChartContainer
          series={series}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
              label: 'Month',
              reverse: reverseX,
            },
          ]}
          yAxis={[
            { id: 'leftAxis', reverse: reverseLeft, width: 50 },
            { id: 'rightAxis', reverse: reverseRight, position: 'right', width: 50 },
          ]}
          dataset={dataset}
          height={400}
        >
          <ChartsGrid horizontal />
          <BarPlot />
          <LinePlot />
          <MarkPlot />

          <ChartsXAxis />
          <ChartsYAxis axisId="leftAxis" label="temperature (°C)" />
          <ChartsYAxis axisId="rightAxis" label="precipitation (mm)" />
          <ChartsTooltip />
        </ChartContainer>
      </Box>
    </Stack>
  );
}
Press Enter to start editing
AWS - AWS Compute offers scalable and flexible computing resources to power your business growth.
ad by Carbon
Grid

You can add a grid in the background of a Cartesian chart with the grid prop. This prop accepts an object with vertical and horizontal properties that are responsible for creating their respective lines when set to true.

If you use composition you can pass these as props to the <ChartsGrid /> component:

<BarChart grid={{ vertical: true }}>

<ChartContainer>
  <ChartsGrid vertical />
</ChartContainer>

Copy
Seoul rainfall
./GridDemo.tsx
../dataset/weather.ts
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weather';

const chartSetting = {
  yAxis: [{ label: 'rainfall (mm)', width: 60 }],
  height: 300,
};

export default function GridDemo() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      grid={{ horizontal: true }}
      sx={{
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
      }}
      {...chartSetting}
    />
  );
}
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weather';

const chartSetting = {
  yAxis: [{ label: 'rainfall (mm)', width: 60 }],
  height: 300,
};

export default function GridDemo() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      grid={{ horizontal: true }}
      sx={{
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
      }}
      {...chartSetting}
    />
  );
}
Press Enter to start editing
AWS - AWS Compute offers scalable and flexible computing resources to power your business growth.
ad by Carbon
Tick position

Automatic tick position

Use the tickNumber property to customize the number of ticks.

This number does not necessarily represent the exact number of ticks displayed. This is because D3 automatically places ticks to optimize for human readability, and it rounds up or down from the provided tickNumber as needed to accomplish this.

For example, if you set tickNumber=5 but there are only four years to display on the axis, the component renders four total ticks (one for each year) instead of trying to divide four years into five.

To better control how the ticks render, you can also provide tickMinStep and tickMaxStep, which compute tickNumber so that the step between two ticks respects the minimum and maximum values.

In the demo below, the top axis has a tickMinStep of half a day, and the bottom axis has a tickMinStep of a full day.

import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 12),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 4),
];

const y1 = [5, 5, 10, 90, 85, 70, 30, 25, 25];
const y2 = [90, 85, 70, 25, 23, 40, 45, 40, 50];

const valueFormatter = (date: Date) =>
  date.getHours() === 0
    ? date.toLocaleDateString('fr-FR', {
        month: '2-digit',
        day: '2-digit',
      })
    : date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
      });

const config = {
  series: [{ data: y1 }, { data: y2 }],
  height: 300,
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;
export default function TickNumber() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            tickMinStep: 3600 * 1000 * 24, // min step: 24h
          },
          {
            ...xAxisCommon,
            id: 'half days',
            position: 'top',
            tickMinStep: 3600 * 1000 * 12, // min step: 12hu
          },
        ]}
        yAxis={[{ position: 'none' }]}
        {...config}
      />
    </Box>
  );
}
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 12),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 4),
];

const y1 = [5, 5, 10, 90, 85, 70, 30, 25, 25];
const y2 = [90, 85, 70, 25, 23, 40, 45, 40, 50];

const valueFormatter = (date: Date) =>
  date.getHours() === 0
    ? date.toLocaleDateString('fr-FR', {
        month: '2-digit',
        day: '2-digit',
      })
    : date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
      });

const config = {
  series: [{ data: y1 }, { data: y2 }],
  height: 300,
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;
export default function TickNumber() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            tickMinStep: 3600 * 1000 * 24, // min step: 24h
          },
          {
            ...xAxisCommon,
            id: 'half days',
            position: 'top',
            tickMinStep: 3600 * 1000 * 12, // min step: 12hu
          },
        ]}
        yAxis={[{ position: 'none' }]}
        {...config}
      />
    </Box>
  );
}
Press Enter to start editing
SerpApi - Devs in SEO, OSINT, and AI rely on SerpApi for fast, fresh SERP data. 250 searches per month for free.
ad by Carbon
Fixed tick position

If you want more control over the tick position, you can use the tickInterval property. This property accepts an array of values that define exactly where ticks are placed.

For axes with the 'point' scale type, the tickInterval property can be a filtering function of the type (value, index) => boolean.

In the demo below, both axes are set to scaleType='point'. The top axis demonstrates the default behavior with a tick for each point. The bottom axis uses a filtering function to only display a tick at the beginning of a day.

import Box from '@mui/material/Box';
import { ShowMarkParams } from '@mui/x-charts/models';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TickPosition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            scaleType: 'point',
            tickInterval: (time) => time.getHours() === 0,
            position: 'bottom',
          },
          {
            ...xAxisCommon,
            scaleType: 'point',
            position: 'top',
          },
        ]}
        {...config}
      />
    </Box>
  );
}

const valueFormatter = (date: Date) =>
  date.toLocaleDateString('fr-FR', {
    month: '2-digit',
    day: '2-digit',
  });

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 3),
  new Date(2023, 7, 31, 6),
  new Date(2023, 7, 31, 9),
  new Date(2023, 7, 31, 12),
  new Date(2023, 7, 31, 15),
  new Date(2023, 7, 31, 18),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 3),
  new Date(2023, 8, 1, 6),
  new Date(2023, 8, 1, 9),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 1, 15),
  new Date(2023, 8, 1, 18),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 3),
  new Date(2023, 8, 2, 6),
  new Date(2023, 8, 2, 9),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 2, 15),
  new Date(2023, 8, 2, 18),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 3),
  new Date(2023, 8, 3, 6),
  new Date(2023, 8, 3, 9),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 3, 15),
  new Date(2023, 8, 3, 18),
  new Date(2023, 8, 4),
];

const y1 = [
  5, 5.5, 5.3, 4.9, 5, 6.2, 8.9, 10, 15, 30, 80, 90, 94, 93, 85, 86, 75, 70, 68, 50,
  20, 30, 35, 28, 25, 27, 30, 28, 25,
];
const y2 = [
  90, 93, 89, 84, 85, 83, 73, 70, 63, 32, 30, 25, 18, 19, 23, 30, 32, 36, 40, 40, 42,
  45, 46, 42, 39, 40, 41, 43, 50,
];

const showMark = (params: ShowMarkParams) => {
  const { position } = params as ShowMarkParams<Date>;
  return position.getHours() === 0;
};

const config = {
  series: [
    { data: y1, showMark },
    { data: y2, showMark },
  ],
  height: 300,
  yAxis: [{ position: 'none' as const }],
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;
import Box from '@mui/material/Box';
import { ShowMarkParams } from '@mui/x-charts/models';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TickPosition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            scaleType: 'point',
            tickInterval: (time) => time.getHours() === 0,
            position: 'bottom',
          },
          {
            ...xAxisCommon,
            scaleType: 'point',
            position: 'top',
          },
        ]}
        {...config}
      />
    </Box>
  );
}

const valueFormatter = (date: Date) =>
  date.toLocaleDateString('fr-FR', {
    month: '2-digit',
    day: '2-digit',
  });

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 3),
  new Date(2023, 7, 31, 6),
  new Date(2023, 7, 31, 9),
  new Date(2023, 7, 31, 12),
  new Date(2023, 7, 31, 15),
  new Date(2023, 7, 31, 18),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 3),
  new Date(2023, 8, 1, 6),
  new Date(2023, 8, 1, 9),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 1, 15),
  new Date(2023, 8, 1, 18),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 3),
  new Date(2023, 8, 2, 6),
  new Date(2023, 8, 2, 9),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 2, 15),
  new Date(2023, 8, 2, 18),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 3),
  new Date(2023, 8, 3, 6),
  new Date(2023, 8, 3, 9),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 3, 15),
  new Date(2023, 8, 3, 18),
  new Date(2023, 8, 4),
];

const y1 = [
  5, 5.5, 5.3, 4.9, 5, 6.2, 8.9, 10, 15, 30, 80, 90, 94, 93, 85, 86, 75, 70, 68, 50,
  20, 30, 35, 28, 25, 27, 30, 28, 25,
];
const y2 = [
  90, 93, 89, 84, 85, 83, 73, 70, 63, 32, 30, 25, 18, 19, 23, 30, 32, 36, 40, 40, 42,
  45, 46, 42, 39, 40, 41, 43, 50,
];

const showMark = (params: ShowMarkParams) => {
  const { position } = params as ShowMarkParams<Date>;
  return position.getHours() === 0;
};

const config = {
  series: [
    { data: y1, showMark },
    { data: y2, showMark },
  ],
  height: 300,
  yAxis: [{ position: 'none' as const }],
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;
Press Enter to start editing
Filtering tick labels

You can use the tickLabelInterval property to only display labels on a specific subset of ticks. This is a filtering function in the (value, index) => boolean form. For example, tickLabelInterval: (value, index) => index % 2 === 0 will show the label every two ticks.

The value and index arguments are those of the ticks, not the axis data.

By default, ticks are filtered so that their labels don't overlap. You can override this behavior with tickLabelInterval: () => true which forces the tick label to be shown for each tick.

In the example below, the top axis is a reference for the default behavior: tick labels don't overflow. At the bottom, you can see one tick for the beginning and the middle of the day, but the tick label is only displayed for the beginning of the day.

import Box from '@mui/material/Box';
import { ShowMarkParams } from '@mui/x-charts/models';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TickLabelPosition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            id: 'bottomAxis',
            scaleType: 'point',
            tickInterval: (time) => [0, 12].includes(time.getHours()),
            tickLabelInterval: (time) => time.getHours() === 0,
            position: 'bottom',
          },
          {
            ...xAxisCommon,
            id: 'topAxis',
            scaleType: 'point',
            position: 'top',
          },
        ]}
        yAxis={[{ position: 'none' }]}
        {...config}
      />
    </Box>
  );
}

const valueFormatter = (date: Date) =>
  date.toLocaleDateString('fr-FR', {
    month: '2-digit',
    day: '2-digit',
  });

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 3),
  new Date(2023, 7, 31, 6),
  new Date(2023, 7, 31, 9),
  new Date(2023, 7, 31, 12),
  new Date(2023, 7, 31, 15),
  new Date(2023, 7, 31, 18),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 3),
  new Date(2023, 8, 1, 6),
  new Date(2023, 8, 1, 9),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 1, 15),
  new Date(2023, 8, 1, 18),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 3),
  new Date(2023, 8, 2, 6),
  new Date(2023, 8, 2, 9),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 2, 15),
  new Date(2023, 8, 2, 18),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 3),
  new Date(2023, 8, 3, 6),
  new Date(2023, 8, 3, 9),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 3, 15),
  new Date(2023, 8, 3, 18),
  new Date(2023, 8, 4),
];

const y1 = [
  5, 5.5, 5.3, 4.9, 5, 6.2, 8.9, 10, 15, 30, 80, 90, 94, 93, 85, 86, 75, 70, 68, 50,
  20, 30, 35, 28, 25, 27, 30, 28, 25,
];
const y2 = [
  90, 93, 89, 84, 85, 83, 73, 70, 63, 32, 30, 25, 18, 19, 23, 30, 32, 36, 40, 40, 42,
  45, 46, 42, 39, 40, 41, 43, 50,
];

const showMark = (params: ShowMarkParams) => {
  const { position } = params as ShowMarkParams<Date>;
  return position.getHours() === 0;
};

const config = {
  series: [
    { data: y1, showMark },
    { data: y2, showMark },
  ],
  height: 300,
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;
import Box from '@mui/material/Box';
import { ShowMarkParams } from '@mui/x-charts/models';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TickLabelPosition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            id: 'bottomAxis',
            scaleType: 'point',
            tickInterval: (time) => [0, 12].includes(time.getHours()),
            tickLabelInterval: (time) => time.getHours() === 0,
            position: 'bottom',
          },
          {
            ...xAxisCommon,
            id: 'topAxis',
            scaleType: 'point',
            position: 'top',
          },
        ]}
        yAxis={[{ position: 'none' }]}
        {...config}
      />
    </Box>
  );
}

const valueFormatter = (date: Date) =>
  date.toLocaleDateString('fr-FR', {
    month: '2-digit',
    day: '2-digit',
  });

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 3),
  new Date(2023, 7, 31, 6),
  new Date(2023, 7, 31, 9),
  new Date(2023, 7, 31, 12),
  new Date(2023, 7, 31, 15),
  new Date(2023, 7, 31, 18),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 3),
  new Date(2023, 8, 1, 6),
  new Date(2023, 8, 1, 9),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 1, 15),
  new Date(2023, 8, 1, 18),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 3),
  new Date(2023, 8, 2, 6),
  new Date(2023, 8, 2, 9),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 2, 15),
  new Date(2023, 8, 2, 18),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 3),
  new Date(2023, 8, 3, 6),
  new Date(2023, 8, 3, 9),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 3, 15),
  new Date(2023, 8, 3, 18),
  new Date(2023, 8, 4),
];

const y1 = [
  5, 5.5, 5.3, 4.9, 5, 6.2, 8.9, 10, 15, 30, 80, 90, 94, 93, 85, 86, 75, 70, 68, 50,
  20, 30, 35, 28, 25, 27, 30, 28, 25,
];
const y2 = [
  90, 93, 89, 84, 85, 83, 73, 70, 63, 32, 30, 25, 18, 19, 23, 30, 32, 36, 40, 40, 42,
  45, 46, 42, 39, 40, 41, 43, 50,
];

const showMark = (params: ShowMarkParams) => {
  const { position } = params as ShowMarkParams<Date>;
  return position.getHours() === 0;
};

const config = {
  series: [
    { data: y1, showMark },
    { data: y2, showMark },
  ],
  height: 300,
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
Position

You can customize axis positioning with the position property of the axis configuration. This property expects the following values:

'top' or 'bottom' for the x-axis
'left' or 'right' for the y-axis
'none' to hide the axis
import Box from '@mui/material/Box';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Chance } from 'chance';

const chance = new Chance(42);

const data = Array.from({ length: 200 }, () => ({
  x: chance.floating({ min: -25, max: 25 }),
  y: chance.floating({ min: -25, max: 25 }),
})).map((d, index) => ({ ...d, id: index }));

const params = {
  series: [{ data }],
  height: 300,
  margin: { top: 12, right: 12, bottom: 20, left: 12 },
};
export default function ModifyAxisPosition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <ScatterChart
        {...params}
        xAxis={[{ position: 'top' }]}
        yAxis={[{ position: 'right' }]}
      />
    </Box>
  );
}
import Box from '@mui/material/Box';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Chance } from 'chance';

const chance = new Chance(42);

const data = Array.from({ length: 200 }, () => ({
  x: chance.floating({ min: -25, max: 25 }),
  y: chance.floating({ min: -25, max: 25 }),
})).map((d, index) => ({ ...d, id: index }));

const params = {
  series: [{ data }],
  height: 300,
  margin: { top: 12, right: 12, bottom: 20, left: 12 },
};
export default function ModifyAxisPosition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <ScatterChart
        {...params}
        xAxis={[{ position: 'top' }]}
        yAxis={[{ position: 'right' }]}
      />
    </Box>
  );
}
Press Enter to start editing
AWS - Build and deploy your dream web app with powerful cloud hosting from AWS.
ad by Carbon
Hiding axes

To hide an axis, set its position to 'none'. Note that the axis is still computed and used for scaling.

import { BarChart } from '@mui/x-charts/BarChart';

export default function HidingAxis() {
  return (
    <BarChart
      series={[{ data: [1, 2, 3, 2, 1] }]}
      xAxis={[{ data: ['A', 'B', 'C', 'D', 'E'] }]}
      yAxis={[{ position: 'none' }]}
      height={300}
      width={300}
    />
  );
}
import { BarChart } from '@mui/x-charts/BarChart';

export default function HidingAxis() {
  return (
    <BarChart
      series={[{ data: [1, 2, 3, 2, 1] }]}
      xAxis={[{ data: ['A', 'B', 'C', 'D', 'E'] }]}
      yAxis={[{ position: 'none' }]}
      height={300}
      width={300}
    />
  );
}
Press Enter to start editing
Pluralsight - Learn five ways to advance your tech career in 2025
ad by Carbon
Multiple axes on one side

You can display multiple axes on one side. If two or more axes share the same position, they're displayed in the order they're defined from closest to farthest away from the chart.

linear
log
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const sample = [1, 10, 30, 50, 70, 90, 100];

export default function MultipleAxes() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <LineChart
        xAxis={[{ data: sample }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', position: 'left', width: 40 },
          { id: 'logAxis', scaleType: 'log', position: 'left' },
        ]}
        series={[
          { yAxisId: 'linearAxis', data: sample, label: 'linear' },
          { yAxisId: 'logAxis', data: sample, label: 'log' },
        ]}
        height={400}
      />
    </Box>
  );
}
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const sample = [1, 10, 30, 50, 70, 90, 100];

export default function MultipleAxes() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <LineChart
        xAxis={[{ data: sample }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', position: 'left', width: 40 },
          { id: 'logAxis', scaleType: 'log', position: 'left' },
        ]}
        series={[
          { yAxisId: 'linearAxis', data: sample, label: 'linear' },
          { yAxisId: 'logAxis', data: sample, label: 'log' },
        ]}
        height={400}
      />
    </Box>
  );
}
Press Enter to start editing
AWS - Build and deploy your dream web app with powerful cloud hosting from AWS.
ad by Carbon
Grouped axes

To group band or point axes together, provide a groups property in the axis definition. This property expects an array of objects with a getValue function. This feature is available for both x- and y-axes.

The getValue function receives the axis data value and should return a group name. Each group name is used as-is, overriding any valueFormatter for the axis. Groups are displayed in the order they're defined in the groups array.

X-axis grouping

In the demo below, the x-axis is grouped by month, quarter, and year.

Income
Expenses
import { BarChart } from '@mui/x-charts/BarChart';

export default function GroupedAxes() {
  return (
    <BarChart
      xAxis={[
        {
          data,
          scaleType: 'band',
          tickSize: 8,
          height: 32,
          groups: [
            { getValue: getMonth },
            { getValue: getQuarter },
            { getValue: getYear },
          ],
          valueFormatter,
        },
      ]}
      {...chartConfig}
    />
  );
}

const getMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });
const getQuarter = (date: Date) => `Q${Math.floor(date.getMonth() / 3) + 1}`;

const getYear = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric' });

const valueFormatter = (v: Date) =>
  v.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

const data = [
  new Date(2014, 11, 1),
  new Date(2015, 0, 1),
  new Date(2015, 1, 1),
  new Date(2015, 2, 1),
  new Date(2015, 3, 1),
  new Date(2015, 4, 1),
  new Date(2015, 5, 1),
  new Date(2015, 6, 1),
  new Date(2015, 7, 1),
  new Date(2015, 8, 1),
  new Date(2015, 9, 1),
  new Date(2015, 10, 1),
  new Date(2015, 11, 1),
  new Date(2016, 0, 1),
];
const a = [
  3190, 4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800, 2040,
];
const b = [
  1200, 2400, 1398, 9800, 3908, 4800, 3800, 4300, 2181, 2500, 2100, 3000, 2000, 2040,
];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index]));

const chartConfig = {
  height: 200,
  margin: { left: 0 },
  series: [
    {
      data: getPercents(a),
      label: 'Income',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
    {
      data: getPercents(b),
      label: 'Expenses',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
  yAxis: [
    {
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
} as const;
import { BarChart } from '@mui/x-charts/BarChart';

export default function GroupedAxes() {
  return (
    <BarChart
      xAxis={[
        {
          data,
          scaleType: 'band',
          tickSize: 8,
          height: 32,
          groups: [
            { getValue: getMonth },
            { getValue: getQuarter },
            { getValue: getYear },
          ],
          valueFormatter,
        },
      ]}
      {...chartConfig}
    />
  );
}

const getMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });
const getQuarter = (date: Date) => `Q${Math.floor(date.getMonth() / 3) + 1}`;

const getYear = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric' });

const valueFormatter = (v: Date) =>
  v.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

const data = [
  new Date(2014, 11, 1),
  new Date(2015, 0, 1),
  new Date(2015, 1, 1),
  new Date(2015, 2, 1),
  new Date(2015, 3, 1),
  new Date(2015, 4, 1),
  new Date(2015, 5, 1),
  new Date(2015, 6, 1),
  new Date(2015, 7, 1),
  new Date(2015, 8, 1),
  new Date(2015, 9, 1),
  new Date(2015, 10, 1),
  new Date(2015, 11, 1),
  new Date(2016, 0, 1),
];
const a = [
  3190, 4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800, 2040,
];
const b = [
  1200, 2400, 1398, 9800, 3908, 4800, 3800, 4300, 2181, 2500, 2100, 3000, 2000, 2040,
];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index]));

const chartConfig = {
  height: 200,
  margin: { left: 0 },
  series: [
    {
      data: getPercents(a),
      label: 'Income',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
    {
      data: getPercents(b),
      label: 'Expenses',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
  yAxis: [
    {
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
} as const;
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
Y-axis grouping

In the following demo, the y-axis is grouped by category and subcategory.

Sales
Profit
import { BarChart } from '@mui/x-charts/BarChart';

export default function GroupedYAxes() {
  return (
    <BarChart
      layout="horizontal"
      yAxis={[
        {
          data: categoryData,
          scaleType: 'band',
          width: 120,
          groups: [
            // Extract main category
            { getValue: (category) => category[1] },
            // Extract subcategory
            {
              getValue: (category) => category[0],
              tickSize: 120,
              tickLabelStyle: {
                angle: -90,
                textAnchor: 'middle',
              },
            },
          ],
          valueFormatter: (value) => value.join(' - '),
        },
      ]}
      {...chartConfig}
    />
  );
}

const categoryData = [
  ['Technology', 'Software'],
  ['Technology', 'Hardware'],
  ['Technology', 'AI/ML'],
  ['Finance', 'Banking'],
  ['Finance', 'Insurance'],
  ['Finance', 'Investment'],
  ['Healthcare', 'Pharmaceuticals'],
  ['Healthcare', 'Medical Devices'],
  ['Healthcare', 'Telemedicine'],
];

const salesData = [150, 120, 200, 180, 90, 160, 140, 110, 85];
const profitData = [45, 35, 80, 65, 25, 55, 50, 40, 30];

const chartConfig = {
  height: 400,
  xAxis: [{ valueFormatter: (value: number) => `${value}K` }],
  series: [
    {
      data: salesData,
      label: 'Sales',
      valueFormatter: (value: number | null) => `${value}K`,
    },
    {
      data: profitData,
      label: 'Profit',
      valueFormatter: (value: number | null) => `${value}K`,
    },
  ],
};
import { BarChart } from '@mui/x-charts/BarChart';

export default function GroupedYAxes() {
  return (
    <BarChart
      layout="horizontal"
      yAxis={[
        {
          data: categoryData,
          scaleType: 'band',
          width: 120,
          groups: [
            // Extract main category
            { getValue: (category) => category[1] },
            // Extract subcategory
            {
              getValue: (category) => category[0],
              tickSize: 120,
              tickLabelStyle: {
                angle: -90,
                textAnchor: 'middle',
              },
            },
          ],
          valueFormatter: (value) => value.join(' - '),
        },
      ]}
      {...chartConfig}
    />
  );
}

const categoryData = [
  ['Technology', 'Software'],
  ['Technology', 'Hardware'],
  ['Technology', 'AI/ML'],
  ['Finance', 'Banking'],
  ['Finance', 'Insurance'],
  ['Finance', 'Investment'],
  ['Healthcare', 'Pharmaceuticals'],
  ['Healthcare', 'Medical Devices'],
  ['Healthcare', 'Telemedicine'],
];

const salesData = [150, 120, 200, 180, 90, 160, 140, 110, 85];
const profitData = [45, 35, 80, 65, 25, 55, 50, 40, 30];

const chartConfig = {
  height: 400,
  xAxis: [{ valueFormatter: (value: number) => `${value}K` }],
  series: [
    {
      data: salesData,
      label: 'Sales',
      valueFormatter: (value: number | null) => `${value}K`,
    },
    {
      data: profitData,
      label: 'Profit',
      valueFormatter: (value: number | null) => `${value}K`,
    },
  ],
};
Press Enter to start editing
AWS - Accelerate your DevOps journey with AWS's comprehensive toolkit.
ad by Carbon
Tick size

You can customize the tick size for each group by providing a tickSize property in the groups array. The tickSize also affects the tick label position. Each item in the array corresponds to a group defined in the getValue function.

Income
Expenses
import { BarChart } from '@mui/x-charts/BarChart';

export default function GroupedAxesTickSize() {
  return (
    <BarChart
      xAxis={[
        {
          data,
          height: 32,
          groups: [
            {
              getValue: getMonth,
              tickSize: 0,
            },
            {
              getValue: formatQuarterYear,
              tickSize: 32,
            },
          ],
          valueFormatter,
        },
      ]}
      {...chartConfig}
    />
  );
}

const getMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });

const formatQuarterYear = (date: Date) => {
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `Q${quarter} '${year}`;
};

const valueFormatter = (v: Date) =>
  v.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

const data = [
  new Date(2015, 0, 1),
  new Date(2015, 1, 1),
  new Date(2015, 2, 1),
  new Date(2015, 3, 1),
  new Date(2015, 4, 1),
  new Date(2015, 5, 1),
  new Date(2015, 6, 1),
  new Date(2015, 7, 1),
  new Date(2015, 8, 1),
  new Date(2015, 9, 1),
  new Date(2015, 10, 1),
  new Date(2015, 11, 1),
];
const a = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800];
const b = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2181, 2500, 2100, 3000, 2000];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index]));

const chartConfig = {
  height: 200,
  margin: { left: 0 },
  series: [
    {
      data: getPercents(a),
      label: 'Income',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
    {
      data: getPercents(b),
      label: 'Expenses',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
  yAxis: [
    {
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
} as const;
import { BarChart } from '@mui/x-charts/BarChart';

export default function GroupedAxesTickSize() {
  return (
    <BarChart
      xAxis={[
        {
          data,
          height: 32,
          groups: [
            {
              getValue: getMonth,
              tickSize: 0,
            },
            {
              getValue: formatQuarterYear,
              tickSize: 32,
            },
          ],
          valueFormatter,
        },
      ]}
      {...chartConfig}
    />
  );
}

const getMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });

const formatQuarterYear = (date: Date) => {
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `Q${quarter} '${year}`;
};

const valueFormatter = (v: Date) =>
  v.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

const data = [
  new Date(2015, 0, 1),
  new Date(2015, 1, 1),
  new Date(2015, 2, 1),
  new Date(2015, 3, 1),
  new Date(2015, 4, 1),
  new Date(2015, 5, 1),
  new Date(2015, 6, 1),
  new Date(2015, 7, 1),
  new Date(2015, 8, 1),
  new Date(2015, 9, 1),
  new Date(2015, 10, 1),
  new Date(2015, 11, 1),
];
const a = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800];
const b = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2181, 2500, 2100, 3000, 2000];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index]));

const chartConfig = {
  height: 200,
  margin: { left: 0 },
  series: [
    {
      data: getPercents(a),
      label: 'Income',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
    {
      data: getPercents(b),
      label: 'Expenses',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
  yAxis: [
    {
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
} as const;
Press Enter to start editing
DoiT Cloud Intelligence™ - A strategic guide to cloud financial planning for FinOps leaders
ad by Carbon
Styling grouped axes

To target a specific group, use the data-group-index attribute as a selector. The example below has a yellow tick color for the last group and blue text for the first group.

Income
Expenses
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export default function GroupedAxesStyling() {
  return (
    <LineChart
      sx={{
        [`& [data-group-index="1"] .${axisClasses.tick}`]: {
          stroke: 'rgb(255, 180, 34)',
        },
        [`& [data-group-index="0"] .${axisClasses.tickLabel}`]: {
          fill: 'rgb(66, 84, 251)',
        },
      }}
      xAxis={[
        {
          data,
          scaleType: 'point',
          groups: [{ getValue: getMonth }, { getValue: formatQuarterYear }],
          valueFormatter,
        },
      ]}
      {...chartConfig}
    />
  );
}
const getMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });
const formatQuarterYear = (date: Date) => {
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `Q${quarter} '${year}`;
};

const valueFormatter = (v: Date) =>
  v.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

const data = [
  new Date(2015, 0, 1),
  new Date(2015, 1, 1),
  new Date(2015, 2, 1),
  new Date(2015, 3, 1),
  new Date(2015, 4, 1),
  new Date(2015, 5, 1),
  new Date(2015, 6, 1),
  new Date(2015, 7, 1),
  new Date(2015, 8, 1),
  new Date(2015, 9, 1),
  new Date(2015, 10, 1),
  new Date(2015, 11, 1),
  new Date(2016, 0, 1),
];
const a = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800, 2040,
];
const b = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 2181, 2500, 2100, 3000, 2000, 2040,
];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index]));

const chartConfig = {
  height: 200,
  margin: { left: 0 },
  series: [
    {
      data: getPercents(a),
      label: 'Income',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
    {
      data: getPercents(b),
      label: 'Expenses',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
  yAxis: [
    {
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
} as const;
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export default function GroupedAxesStyling() {
  return (
    <LineChart
      sx={{
        [`& [data-group-index="1"] .${axisClasses.tick}`]: {
          stroke: 'rgb(255, 180, 34)',
        },
        [`& [data-group-index="0"] .${axisClasses.tickLabel}`]: {
          fill: 'rgb(66, 84, 251)',
        },
      }}
      xAxis={[
        {
          data,
          scaleType: 'point',
          groups: [{ getValue: getMonth }, { getValue: formatQuarterYear }],
          valueFormatter,
        },
      ]}
      {...chartConfig}
    />
  );
}
const getMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });
const formatQuarterYear = (date: Date) => {
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `Q${quarter} '${year}`;
};

const valueFormatter = (v: Date) =>
  v.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

const data = [
  new Date(2015, 0, 1),
  new Date(2015, 1, 1),
  new Date(2015, 2, 1),
  new Date(2015, 3, 1),
  new Date(2015, 4, 1),
  new Date(2015, 5, 1),
  new Date(2015, 6, 1),
  new Date(2015, 7, 1),
  new Date(2015, 8, 1),
  new Date(2015, 9, 1),
  new Date(2015, 10, 1),
  new Date(2015, 11, 1),
  new Date(2016, 0, 1),
];
const a = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800, 2040,
];
const b = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 2181, 2500, 2100, 3000, 2000, 2040,
];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index]));

const chartConfig = {
  height: 200,
  margin: { left: 0 },
  series: [
    {
      data: getPercents(a),
      label: 'Income',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
    {
      data: getPercents(b),
      label: 'Expenses',
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
  yAxis: [
    {
      valueFormatter: (value: number | null) => `${(value ?? 0).toFixed(0)}%`,
    },
  ],
} as const;
Press Enter to start editing
Auth0 - Boost your app’s Identity with Auth0. Now with Custom Domain, Passwordless, and more!
ad by Carbon
Axis customization

Beyond the axis definition, there are several other ways to further customize how axes are rendered:

Fixing tick label overflow issues

When your tick labels are too long, they're clipped to avoid overflowing. To reduce clipping due to overflow, you can apply an angle to the tick labels or increase the axis size to accommodate them. In the demo below, the size of the x- and y-axes is modified to increase the space available for tick labels.

The first and last tick labels may bleed into the margin, and if that margin is not enough to display the label, it might be clipped. To avoid this, you can use the margin prop to increase the space between the chart and the edge of the container.

Increase axes size
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MarginAndLabelPosition() {
  const [fixMargin, setFixMargin] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <FormControlLabel
          checked={fixMargin}
          control={
            <Checkbox onChange={(event) => setFixMargin(event.target.checked)} />
          }
          label="Increase axes size"
          labelPlacement="end"
        />
      </Stack>

      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'code',
            valueFormatter: (value, context) =>
              context.location === 'tick'
                ? value.split('').join('\n')
                : usAirportPassengers.find((item) => item.code === value)!.fullName,
            label: 'airports',
            height: fixMargin ? 75 : undefined,
          },
        ]}
        // Other props
        height={300}
        dataset={usAirportPassengers}
        series={[
          { dataKey: '2018', label: '2018' },
          { dataKey: '2019', label: '2019' },
          { dataKey: '2020', label: '2020' },
          { dataKey: '2021', label: '2021' },
          { dataKey: '2022', label: '2022' },
        ]}
        hideLegend
        yAxis={[
          {
            valueFormatter: (value: number) => `${(value / 1000).toLocaleString()}k`,
            label: 'passengers',
            width: fixMargin ? 85 : undefined,
          },
        ]}
      />
    </Box>
  );
}

const usAirportPassengers = [
  {
    fullName: 'Hartsfield–Jackson Atlanta International Airport',
    code: 'ATL',
    2022: 45396001,
    2021: 36676010,
    2020: 20559866,
    2019: 53505795,
    2018: 51865797,
  },
  {
    fullName: 'Dallas/Fort Worth International Airport',
    code: 'DFW',
    2022: 35345138,
    2021: 30005266,
    2020: 18593421,
    2019: 35778573,
    2018: 32821799,
  },
  {
    fullName: 'Denver International Airport',
    code: 'DEN',
    2022: 33773832,
    2021: 28645527,
    2020: 16243216,
    2019: 33592945,
    2018: 31362941,
  },
  {
    fullName: "O'Hare International Airport",
    code: 'ORD',
    2022: 33120474,
    2021: 26350976,
    2020: 14606034,
    2019: 40871223,
    2018: 39873927,
  },
  {
    fullName: 'Los Angeles International Airport',
    code: 'LAX',
    2022: 32326616,
    2021: 23663410,
    2020: 14055777,
    2019: 42939104,
    2018: 42624050,
  },
  {
    fullName: 'John F. Kennedy International Airport',
    code: 'JFK',
    2022: 26919982,
    2021: 15273342,
    2020: 8269819,
    2019: 31036655,
    2018: 30620769,
  },
  {
    fullName: 'Harry Reid International Airport',
    code: 'LAS',
    2022: 25480500,
    2021: 19160342,
    2020: 10584059,
    2019: 24728361,
    2018: 23795012,
  },
  {
    fullName: 'Orlando International Airport',
    code: 'MCO',
    2022: 24469733,
    2021: 19618838,
    2020: 10467728,
    2019: 24562271,
    2018: 23202480,
  },
  {
    fullName: 'Miami International Airport',
    code: 'MIA',
    2022: 23949892,
    2021: 17500096,
    2020: 8786007,
    2019: 21421031,
    2018: 21021640,
  },
  {
    fullName: 'Charlotte Douglas International Airport',
    code: 'CLT',
    2022: 23100300,
    2021: 20900875,
    2020: 12952869,
    2019: 24199688,
    2018: 22281949,
  },
  {
    fullName: 'Seattle–Tacoma International Airport',
    code: 'SEA',
    2022: 22157862,
    2021: 17430195,
    2020: 9462411,
    2019: 25001762,
    2018: 24024908,
  },
  {
    fullName: 'Phoenix Sky Harbor International Airport',
    code: 'PHX',
    2022: 21852586,
    2021: 18940287,
    2020: 10531436,
    2019: 22433552,
    2018: 21622580,
  },
  {
    fullName: 'Newark Liberty International Airport',
    code: 'EWR',
    2022: 21572147,
    2021: 14514049,
    2020: 7985474,
    2019: 23160763,
    2018: 22797602,
  },
  {
    fullName: 'San Francisco International Airport',
    code: 'SFO',
    2022: 20411420,
    2021: 11725347,
    2020: 7745057,
    2019: 27779230,
    2018: 27790717,
  },
  {
    fullName: 'George Bush Intercontinental Airport',
    code: 'IAH',
    2022: 19814052,
    2021: 16242821,
    2020: 8682558,
    2019: 21905309,
    2018: 21157398,
  },
  {
    fullName: 'Logan International Airport',
    code: 'BOS',
    2022: 17443775,
    2021: 10909817,
    2020: 6035452,
    2019: 20699377,
    2018: 20006521,
  },
  {
    fullName: 'Fort Lauderdale–Hollywood International Airport',
    code: 'FLL',
    2022: 15370165,
    2021: 13598994,
    2020: 8015744,
    2019: 17950989,
    2018: 17612331,
  },
  {
    fullName: 'Minneapolis–Saint Paul International Airport',
    code: 'MSP',
    2022: 15242089,
    2021: 12211409,
    2020: 7069720,
    2019: 19192917,
    2018: 18361942,
  },
  {
    fullName: 'LaGuardia Airport',
    code: 'LGA',
    2022: 14367463,
    2021: 7827307,
    2020: 4147116,
    2019: 15393601,
    2018: 15058501,
  },
  {
    fullName: 'Detroit Metropolitan Airport',
    code: 'DTW',
    2022: 13751197,
    2021: 11517696,
    2020: 6822324,
    2019: 18143040,
    2018: 17436837,
  },
];
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MarginAndLabelPosition() {
  const [fixMargin, setFixMargin] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <FormControlLabel
          checked={fixMargin}
          control={
            <Checkbox onChange={(event) => setFixMargin(event.target.checked)} />
          }
          label="Increase axes size"
          labelPlacement="end"
        />
      </Stack>

      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'code',
            valueFormatter: (value, context) =>
              context.location === 'tick'
                ? value.split('').join('\n')
                : usAirportPassengers.find((item) => item.code === value)!.fullName,
            label: 'airports',
            height: fixMargin ? 75 : undefined,
          },
        ]}
        // Other props
        height={300}
        dataset={usAirportPassengers}
        series={[
          { dataKey: '2018', label: '2018' },
          { dataKey: '2019', label: '2019' },
          { dataKey: '2020', label: '2020' },
          { dataKey: '2021', label: '2021' },
          { dataKey: '2022', label: '2022' },
        ]}
        hideLegend
        yAxis={[
          {
            valueFormatter: (value: number) => `${(value / 1000).toLocaleString()}k`,
            label: 'passengers',
            width: fixMargin ? 85 : undefined,
          },
        ]}
      />
    </Box>
  );
}

const usAirportPassengers = [
  {
    fullName: 'Hartsfield–Jackson Atlanta International Airport',
    code: 'ATL',
    2022: 45396001,
    2021: 36676010,
    2020: 20559866,
    2019: 53505795,
    2018: 51865797,
  },
  {
    fullName: 'Dallas/Fort Worth International Airport',
    code: 'DFW',
    2022: 35345138,
    2021: 30005266,
    2020: 18593421,
    2019: 35778573,
    2018: 32821799,
  },
  {
    fullName: 'Denver International Airport',
    code: 'DEN',
    2022: 33773832,
    2021: 28645527,
    2020: 16243216,
    2019: 33592945,
    2018: 31362941,
  },
  {
    fullName: "O'Hare International Airport",
    code: 'ORD',
    2022: 33120474,
    2021: 26350976,
    2020: 14606034,
    2019: 40871223,
    2018: 39873927,
  },
  {
    fullName: 'Los Angeles International Airport',
    code: 'LAX',
    2022: 32326616,
    2021: 23663410,
    2020: 14055777,
    2019: 42939104,
    2018: 42624050,
  },
  {
    fullName: 'John F. Kennedy International Airport',
    code: 'JFK',
    2022: 26919982,
    2021: 15273342,
    2020: 8269819,
    2019: 31036655,
    2018: 30620769,
  },
  {
    fullName: 'Harry Reid International Airport',
    code: 'LAS',
    2022: 25480500,
    2021: 19160342,
    2020: 10584059,
    2019: 24728361,
    2018: 23795012,
  },
  {
    fullName: 'Orlando International Airport',
    code: 'MCO',
    2022: 24469733,
    2021: 19618838,
    2020: 10467728,
    2019: 24562271,
    2018: 23202480,
  },
  {
    fullName: 'Miami International Airport',
    code: 'MIA',
    2022: 23949892,
    2021: 17500096,
    2020: 8786007,
    2019: 21421031,
    2018: 21021640,
  },
  {
    fullName: 'Charlotte Douglas International Airport',
    code: 'CLT',
    2022: 23100300,
    2021: 20900875,
    2020: 12952869,
    2019: 24199688,
    2018: 22281949,
  },
  {
    fullName: 'Seattle–Tacoma International Airport',
    code: 'SEA',
    2022: 22157862,
    2021: 17430195,
    2020: 9462411,
    2019: 25001762,
    2018: 24024908,
  },
  {
    fullName: 'Phoenix Sky Harbor International Airport',
    code: 'PHX',
    2022: 21852586,
    2021: 18940287,
    2020: 10531436,
    2019: 22433552,
    2018: 21622580,
  },
  {
    fullName: 'Newark Liberty International Airport',
    code: 'EWR',
    2022: 21572147,
    2021: 14514049,
    2020: 7985474,
    2019: 23160763,
    2018: 22797602,
  },
  {
    fullName: 'San Francisco International Airport',
    code: 'SFO',
    2022: 20411420,
    2021: 11725347,
    2020: 7745057,
    2019: 27779230,
    2018: 27790717,
  },
  {
    fullName: 'George Bush Intercontinental Airport',
    code: 'IAH',
    2022: 19814052,
    2021: 16242821,
    2020: 8682558,
    2019: 21905309,
    2018: 21157398,
  },
  {
    fullName: 'Logan International Airport',
    code: 'BOS',
    2022: 17443775,
    2021: 10909817,
    2020: 6035452,
    2019: 20699377,
    2018: 20006521,
  },
  {
    fullName: 'Fort Lauderdale–Hollywood International Airport',
    code: 'FLL',
    2022: 15370165,
    2021: 13598994,
    2020: 8015744,
    2019: 17950989,
    2018: 17612331,
  },
  {
    fullName: 'Minneapolis–Saint Paul International Airport',
    code: 'MSP',
    2022: 15242089,
    2021: 12211409,
    2020: 7069720,
    2019: 19192917,
    2018: 18361942,
  },
  {
    fullName: 'LaGuardia Airport',
    code: 'LGA',
    2022: 14367463,
    2021: 7827307,
    2020: 4147116,
    2019: 15393601,
    2018: 15058501,
  },
  {
    fullName: 'Detroit Metropolitan Airport',
    code: 'DTW',
    2022: 13751197,
    2021: 11517696,
    2020: 6822324,
    2019: 18143040,
    2018: 17436837,
  },
];
Press Enter to start editing
GetStream.io - Still debugging your app's features? Try APIs that work.
ad by Carbon
Rendering

The demo below illustrates all of the props available to customize axis rendering:

Copy
import { ScatterChart } from '@mui/x-charts/ScatterChart';

<ScatterChart
  // ...
  xAxis={{
    disableLine: false,
    disableTicks: false,
    label: "my axis",
    tickSize: 6,
  }}
/>
Playground
disableLine
disableTicks
label
my axis
tickSize
6
Text customization

To customize the text elements (tick labels and axis labels), use the tickLabelStyle and labelStyle properties of the axis configuration.

When not set, the default values for the textAnchor and dominantBaseline properties depend on the value of the angle property. You can test how these values behave and relate to one another in the demo below:

London
Paris
New York
Seoul
Copy
import { BarChart } from '@mui/x-charts/BarChart';

<BarChart
  // ...
  xAxis={[
    {
      labelStyle: {
        fontSize: 14,
      },
      tickLabelStyle: {
        angle: 45,
        fontSize: 12,
      },
    },
  ]}
/>
Playground
angle
45
textAnchor
undefined

dominantBaseline
undefined

fontSize
12
labelFontSize
14
Adding tick label icons

A foreignObject element can be used to render non-SVG elements inside SVGs. You can leverage this to create components that interact with the charts data. In the demo below, custom tick labels are built by displaying an icon below the text.

Bear in mind that using foreignObject might prevent charts from being exported.

./TickLabelImage.tsx
../dataset/company.icons.ts
import * as React from 'react';
import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTextProps } from '@mui/x-charts/ChartsText';
import { iconMap } from '../dataset/company.icons';

function CustomTick(props: ChartsTextProps) {
  const { x, y, text } = props;
  const logo = iconMap[text];

  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-20} y={-10} width={40} height={40}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {logo && (
              <img
                src={logo}
                alt={text}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                }}
              />
            )}
          </Box>
        </div>
      </foreignObject>
    </g>
  );
}

export default function TickLabelImage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: ['Netflix', 'Alphabet', 'Microsoft'],
            id: 'companies',
          },
        ]}
        yAxis={[{ id: 'revenue', position: 'left', width: 60 }]}
        series={[
          {
            type: 'bar',
            yAxisId: 'revenue',
            data: [39, 350, 245.1],
          },
        ]}
        height={300}
      >
        <BarPlot />
        <ChartsXAxis axisId="companies" slots={{ axisTickLabel: CustomTick }} />
        <ChartsYAxis axisId="revenue" label="FY 2024 revenue in USD Billions" />
      </ChartContainer>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTextProps } from '@mui/x-charts/ChartsText';
import { iconMap } from '../dataset/company.icons';

function CustomTick(props: ChartsTextProps) {
  const { x, y, text } = props;
  const logo = iconMap[text];

  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-20} y={-10} width={40} height={40}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {logo && (
              <img
                src={logo}
                alt={text}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                }}
              />
            )}
          </Box>
        </div>
      </foreignObject>
    </g>
  );
}

export default function TickLabelImage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: ['Netflix', 'Alphabet', 'Microsoft'],
            id: 'companies',
          },
        ]}
        yAxis={[{ id: 'revenue', position: 'left', width: 60 }]}
        series={[
          {
            type: 'bar',
            yAxisId: 'revenue',
            data: [39, 350, 245.1],
          },
        ]}
        height={300}
      >
        <BarPlot />
        <ChartsXAxis axisId="companies" slots={{ axisTickLabel: CustomTick }} />
        <ChartsYAxis axisId="revenue" label="FY 2024 revenue in USD Billions" />
      </ChartContainer>
    </Box>
  );
}
Press Enter to start editing
AWS - Accelerate your DevOps journey with AWS's comprehensive toolkit.
ad by Carbon
Symlog scale

A log scale cannot plot zero because log(0) is undefined. To overcome this, you can use a symlog scale, which uses a linear scale for values close to zero and a logarithmic scale for the rest. You can customize the value where the scale switches from linear to logarithmic using the constant property, which defaults to 1.

import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SymlogScale() {
  const [chartType, setChartType] = React.useState('bar');

  const handleChartType = (event: any, newChartType: string) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };

  return (
    <Stack width="100%" gap={2}>
      <ToggleButtonGroup
        value={chartType}
        exclusive
        onChange={handleChartType}
        aria-label="chart type"
        fullWidth
      >
        {['bar', 'area'].map((type) => (
          <ToggleButton key={type} value={type} aria-label="left aligned">
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {chartType === 'bar' && <SymlogBarChart />}
      {chartType === 'area' && <SymlogAreaChart />}
    </Stack>
  );
}

function SymlogBarChart() {
  return (
    <BarChart
      xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
      yAxis={[{ scaleType: 'symlog', constant: 1, width: 52 }]}
      series={[
        { data: [4_000, 30, 50] },
        { data: [1, 600, 34] },
        { data: [20, 5, 60_000] },
      ]}
      height={500}
    />
  );
}

function SymlogAreaChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15] }]}
      yAxis={[{ scaleType: 'symlog', width: 56 }]}
      series={[
        {
          data: [10, 1_000, 5_000, 10_000, -50_000, 20_000, 100_000, -500],
          area: true,
        },
      ]}
      height={500}
    />
  );
}
import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SymlogScale() {
  const [chartType, setChartType] = React.useState('bar');

  const handleChartType = (event: any, newChartType: string) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };

  return (
    <Stack width="100%" gap={2}>
      <ToggleButtonGroup
        value={chartType}
        exclusive
        onChange={handleChartType}
        aria-label="chart type"
        fullWidth
      >
        {['bar', 'area'].map((type) => (
          <ToggleButton key={type} value={type} aria-label="left aligned">
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {chartType === 'bar' && <SymlogBarChart />}
      {chartType === 'area' && <SymlogAreaChart />}
    </Stack>
  );
}

function SymlogBarChart() {
  return (
    <BarChart
      xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
      yAxis={[{ scaleType: 'symlog', constant: 1, width: 52 }]}
      series={[
        { data: [4_000, 30, 50] },
        { data: [1, 600, 34] },
        { data: [20, 5, 60_000] },
      ]}
      height={500}
    />
  );
}

function SymlogAreaChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15] }]}
      yAxis={[{ scaleType: 'symlog', width: 56 }]}
      series={[
        {
          data: [10, 1_000, 5_000, 10_000, -50_000, 20_000, 100_000, -500],
          area: true,
        },
      ]}
      height={500}
    />
  );
}
Press Enter to start editing
AWS - AWS offers a range of generative AI services to help developers innovate faster.
ad by Carbon
Composition

If you're using composition, you must provide the axis settings in the <ChartContainer /> using the xAxis and yAxis props. This provides all the scaling properties to its children, and lets you use the <XAxis/> and <YAxis/> components as children.

In turn, those components require an axisId prop to link them to an axis you defined in the <ChartContainer />. You can choose their position with the position prop which accepts 'top'/'bottom' for <XAxis /> and 'left'/'right' for <YAxis />. The props described in the rendering playground above are also available.

import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

export default function AxisWithComposition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: ['Q1', 'Q2', 'Q3', 'Q4'],
            id: 'quarters',
            label: 'Quarters',
            height: 50,
          },
        ]}
        yAxis={[
          { id: 'money', position: 'right', width: 65 },
          { id: 'quantities', position: 'left', width: 65 },
        ]}
        series={[
          {
            type: 'line',
            id: 'revenue',
            yAxisId: 'money',
            data: [5645, 7542, 9135, 12221],
          },
          {
            type: 'bar',
            id: 'cookies',
            yAxisId: 'quantities',
            data: [3205, 2542, 3135, 8374],
          },
          {
            type: 'bar',
            id: 'icecream',
            yAxisId: 'quantities',
            data: [1645, 5542, 5146, 3735],
          },
        ]}
        height={400}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis
          axisId="quarters"
          label="2021 quarters"
          labelStyle={{ fontSize: 18 }}
        />
        <ChartsYAxis axisId="quantities" label="# units sold" />
        <ChartsYAxis axisId="money" label="revenue" />
      </ChartContainer>
    </Box>
  );
}
import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

export default function AxisWithComposition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: ['Q1', 'Q2', 'Q3', 'Q4'],
            id: 'quarters',
            label: 'Quarters',
            height: 50,
          },
        ]}
        yAxis={[
          { id: 'money', position: 'right', width: 65 },
          { id: 'quantities', position: 'left', width: 65 },
        ]}
        series={[
          {
            type: 'line',
            id: 'revenue',
            yAxisId: 'money',
            data: [5645, 7542, 9135, 12221],
          },
          {
            type: 'bar',
            id: 'cookies',
            yAxisId: 'quantities',
            data: [3205, 2542, 3135, 8374],
          },
          {
            type: 'bar',
            id: 'icecream',
            yAxisId: 'quantities',
            data: [1645, 5542, 5146, 3735],
          },
        ]}
        height={400}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis
          axisId="quarters"
          label="2021 quarters"
          labelStyle={{ fontSize: 18 }}
        />
        <ChartsYAxis axisId="quantities" label="# units sold" />
        <ChartsYAxis axisId="money" label="revenue" />
      </ChartContainer>
    </Box>
  );
}
Press Enter to start editing
SerpApi - No blocks, no proxies, no CAPTCHA. SerpApi handles it all at lightning speed. 250 searches/mo for free.
ad by Carbon
Reference line

Use the <ChartsReferenceLine /> component to add a reference line to a chart. You can provide an x or a y prop for a vertical or horizontal line, respectively, at this value.

You can also add a label to this reference line, and position it using the labelAlign prop which accepts 'start', 'middle', and 'end' values. Elements can be styled with the lineStyle and labelStyle props.

import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { LineSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 12),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 4),
];

const y1 = [5, 5, 10, 90, 85, 70, 30, 25, 25];
const y2 = [90, 85, 70, 25, 23, 40, 45, 40, 50];

const config = {
  series: [
    { type: 'line', data: y1 },
    { type: 'line', data: y2 },
  ] as LineSeriesType[],
  height: 400,
  xAxis: [
    {
      data: timeData,
      scaleType: 'time',
      valueFormatter: (date: Date) =>
        date.getHours() === 0
          ? date.toLocaleDateString('fr-FR', {
              month: '2-digit',
              day: '2-digit',
            })
          : date.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
            }),
    } as const,
  ],
};

export default function ReferenceLine() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ChartContainer {...config}>
        <LinePlot />
        <ChartsReferenceLine
          x={new Date(2023, 8, 2, 9)}
          lineStyle={{ strokeDasharray: '10 5' }}
          labelStyle={{ fontSize: '10', lineHeight: 1.2 }}
          label={`Wake up\n9AM`}
          labelAlign="start"
        />
        <ChartsReferenceLine y={50} label="Middle value" labelAlign="end" />
        <ChartsXAxis />
        <ChartsYAxis />
      </ChartContainer>
    </Box>
  );
}
import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { LineSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 12),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 4),
];

const y1 = [5, 5, 10, 90, 85, 70, 30, 25, 25];
const y2 = [90, 85, 70, 25, 23, 40, 45, 40, 50];

const config = {
  series: [
    { type: 'line', data: y1 },
    { type: 'line', data: y2 },
  ] as LineSeriesType[],
  height: 400,
  xAxis: [
    {
      data: timeData,
      scaleType: 'time',
      valueFormatter: (date: Date) =>
        date.getHours() === 0
          ? date.toLocaleDateString('fr-FR', {
              month: '2-digit',
              day: '2-digit',
            })
          : date.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
            }),
    } as const,
  ],
};

export default function ReferenceLine() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ChartContainer {...config}>
        <LinePlot />
        <ChartsReferenceLine
          x={new Date(2023, 8, 2, 9)}
          lineStyle={{ strokeDasharray: '10 5' }}
          labelStyle={{ fontSize: '10', lineHeight: 1.2 }}
          label={`Wake up\n9AM`}
          labelAlign="start"
        />
        <ChartsReferenceLine y={50} label="Middle value" labelAlign="end" />
        <ChartsXAxis />
        <ChartsYAxis />
      </ChartContainer>
    </Box>
  );
}
Press Enter to start editing
Auth0 - Our Auth0 plans just got a major boost! Enjoy Custom Domain, Passwordless, and up to 25,000 MAUs.
ad by Carbon
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<ChartsAxis />
<ChartsReferenceLine />
<ChartsReferenceLine />
<ChartsText />
<ChartsXAxis />
<ChartsYAxis />