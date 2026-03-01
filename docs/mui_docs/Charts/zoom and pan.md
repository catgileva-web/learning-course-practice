Charts - Zoom and pan
Enables zooming and panning on specific charts or axis.

Zooming is possible on the Pro version of the charts: <LineChartPro />, <BarChartPro />, <ScatterChartPro />.

Basic usage

To enable zooming and panning, set the zoom prop to true on the wanted axis.

Enabling zoom will enable all the interactions, which are made to be as intuitive as possible.

The following actions are enabled by default:

Scroll: Zoom in/out by scrolling the mouse wheel.
Drag: Pan the chart by dragging the mouse.
Pinch: Zoom in/out by pinching the chart.
Additional zoom interactions can be enabled through configuration:

Tap and drag: Zoom in/out by tapping twice and then dragging vertically.
Enabling zoom adds touch-action: pan-y to allow panning on touch devices. This interferes with other touch interactions, such as scrolling horizontally.

If you want to customize the touch-action behavior, you can override it by targeting the .MuiChartsSurface-root class in your CSS.

Series A
Series B
import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

export default function ZoomScatterChart() {
  return (
    <ScatterChartPro
      height={300}
      xAxis={[
        {
          zoom: true,
        },
      ]}
      yAxis={[
        {
          zoom: true,
        },
      ]}
      series={series}
    />
  );
}

const data = [
  {
    id: 'data-0',
    x1: 329.39,
    x2: 391.29,
    y1: 443.28,
    y2: 153.9,
  },
  {
    id: 'data-1',
    x1: 96.94,
    x2: 139.6,
    y1: 110.5,
    y2: 217.8,
  },
  {
    id: 'data-2',
    x1: 336.35,
    x2: 282.34,
    y1: 175.23,
    y2: 286.32,
  },
  {
    id: 'data-3',
    x1: 159.44,
    x2: 384.85,
    y1: 195.97,
    y2: 325.12,
  },
  {
    id: 'data-4',
    x1: 188.86,
    x2: 182.27,
    y1: 351.77,
    y2: 144.58,
  },
  {
    id: 'data-5',
    x1: 143.86,
    x2: 360.22,
    y1: 43.253,
    y2: 146.51,
  },
  {
    id: 'data-6',
    x1: 202.02,
    x2: 209.5,
    y1: 376.34,
    y2: 309.69,
  },
  {
    id: 'data-7',
    x1: 384.41,
    x2: 258.93,
    y1: 31.514,
    y2: 236.38,
  },
  {
    id: 'data-8',
    x1: 256.76,
    x2: 70.571,
    y1: 231.31,
    y2: 440.72,
  },
  {
    id: 'data-9',
    x1: 143.79,
    x2: 419.02,
    y1: 108.04,
    y2: 20.29,
  },
  {
    id: 'data-10',
    x1: 103.48,
    x2: 15.886,
    y1: 321.77,
    y2: 484.17,
  },
  {
    id: 'data-11',
    x1: 272.39,
    x2: 189.03,
    y1: 120.18,
    y2: 54.962,
  },
  {
    id: 'data-12',
    x1: 23.57,
    x2: 456.4,
    y1: 366.2,
    y2: 418.5,
  },
  {
    id: 'data-13',
    x1: 219.73,
    x2: 235.96,
    y1: 451.45,
    y2: 181.32,
  },
  {
    id: 'data-14',
    x1: 54.99,
    x2: 434.5,
    y1: 294.8,
    y2: 440.9,
  },
  {
    id: 'data-15',
    x1: 134.13,
    x2: 383.8,
    y1: 121.83,
    y2: 273.52,
  },
  {
    id: 'data-16',
    x1: 12.7,
    x2: 270.8,
    y1: 287.7,
    y2: 346.7,
  },
  {
    id: 'data-17',
    x1: 176.51,
    x2: 119.17,
    y1: 134.06,
    y2: 74.528,
  },
  {
    id: 'data-18',
    x1: 65.05,
    x2: 78.93,
    y1: 104.5,
    y2: 150.9,
  },
  {
    id: 'data-19',
    x1: 162.25,
    x2: 63.707,
    y1: 413.07,
    y2: 26.483,
  },
  {
    id: 'data-20',
    x1: 68.88,
    x2: 150.8,
    y1: 74.68,
    y2: 333.2,
  },
  {
    id: 'data-21',
    x1: 95.29,
    x2: 329.1,
    y1: 360.6,
    y2: 422.0,
  },
  {
    id: 'data-22',
    x1: 390.62,
    x2: 10.01,
    y1: 330.72,
    y2: 488.06,
  },
];

const series = [
  {
    label: 'Series A',
    data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
  },
  {
    label: 'Series B',
    data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
  },
];
import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

export default function ZoomScatterChart() {
  return (
    <ScatterChartPro
      height={300}
      xAxis={[
        {
          zoom: true,
        },
      ]}
      yAxis={[
        {
          zoom: true,
        },
      ]}
      series={series}
    />
  );
}

const data = [
  {
    id: 'data-0',
    x1: 329.39,
    x2: 391.29,
    y1: 443.28,
    y2: 153.9,
  },
  {
    id: 'data-1',
    x1: 96.94,
    x2: 139.6,
    y1: 110.5,
    y2: 217.8,
  },
  {
    id: 'data-2',
    x1: 336.35,
    x2: 282.34,
    y1: 175.23,
    y2: 286.32,
  },
  {
    id: 'data-3',
    x1: 159.44,
    x2: 384.85,
    y1: 195.97,
    y2: 325.12,
  },
  {
    id: 'data-4',
    x1: 188.86,
    x2: 182.27,
    y1: 351.77,
    y2: 144.58,
  },
  {
    id: 'data-5',
    x1: 143.86,
    x2: 360.22,
    y1: 43.253,
    y2: 146.51,
  },
  {
    id: 'data-6',
    x1: 202.02,
    x2: 209.5,
    y1: 376.34,
    y2: 309.69,
  },
  {
    id: 'data-7',
    x1: 384.41,
    x2: 258.93,
    y1: 31.514,
    y2: 236.38,
  },
  {
    id: 'data-8',
    x1: 256.76,
    x2: 70.571,
    y1: 231.31,
    y2: 440.72,
  },
  {
    id: 'data-9',
    x1: 143.79,
    x2: 419.02,
    y1: 108.04,
    y2: 20.29,
  },
  {
    id: 'data-10',
    x1: 103.48,
    x2: 15.886,
    y1: 321.77,
    y2: 484.17,
  },
  {
    id: 'data-11',
    x1: 272.39,
    x2: 189.03,
    y1: 120.18,
    y2: 54.962,
  },
  {
    id: 'data-12',
    x1: 23.57,
    x2: 456.4,
    y1: 366.2,
    y2: 418.5,
  },
  {
    id: 'data-13',
    x1: 219.73,
    x2: 235.96,
    y1: 451.45,
    y2: 181.32,
  },
  {
    id: 'data-14',
    x1: 54.99,
    x2: 434.5,
    y1: 294.8,
    y2: 440.9,
  },
  {
    id: 'data-15',
    x1: 134.13,
    x2: 383.8,
    y1: 121.83,
    y2: 273.52,
  },
  {
    id: 'data-16',
    x1: 12.7,
    x2: 270.8,
    y1: 287.7,
    y2: 346.7,
  },
  {
    id: 'data-17',
    x1: 176.51,
    x2: 119.17,
    y1: 134.06,
    y2: 74.528,
  },
  {
    id: 'data-18',
    x1: 65.05,
    x2: 78.93,
    y1: 104.5,
    y2: 150.9,
  },
  {
    id: 'data-19',
    x1: 162.25,
    x2: 63.707,
    y1: 413.07,
    y2: 26.483,
  },
  {
    id: 'data-20',
    x1: 68.88,
    x2: 150.8,
    y1: 74.68,
    y2: 333.2,
  },
  {
    id: 'data-21',
    x1: 95.29,
    x2: 329.1,
    y1: 360.6,
    y2: 422.0,
  },
  {
    id: 'data-22',
    x1: 390.62,
    x2: 10.01,
    y1: 330.72,
    y2: 488.06,
  },
];

const series = [
  {
    label: 'Series A',
    data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
  },
  {
    label: 'Series B',
    data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
  },
];
Press Enter to start editing
Series A
Series B
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';

export default function ZoomBarChart() {
  return (
    <BarChartPro
      height={300}
      xAxis={[{ data: data.map((v, i) => i), zoom: true }]}
      series={series}
    />
  );
}

const data = [
  {
    y1: 443.28,
    y2: 153.9,
  },
  {
    y1: 110.5,
    y2: 217.8,
  },
  {
    y1: 175.23,
    y2: 286.32,
  },
  {
    y1: 195.97,
    y2: 325.12,
  },
  {
    y1: 351.77,
    y2: 144.58,
  },
  {
    y1: 43.253,
    y2: 146.51,
  },
  {
    y1: 376.34,
    y2: 309.69,
  },
  {
    y1: 31.514,
    y2: 236.38,
  },
  {
    y1: 231.31,
    y2: 440.72,
  },
  {
    y1: 108.04,
    y2: 20.29,
  },
  {
    y1: 321.77,
    y2: 484.17,
  },
  {
    y1: 120.18,
    y2: 54.962,
  },
  {
    y1: 366.2,
    y2: 418.5,
  },
  {
    y1: 451.45,
    y2: 181.32,
  },
  {
    y1: 294.8,
    y2: 440.9,
  },
  {
    y1: 121.83,
    y2: 273.52,
  },
  {
    y1: 287.7,
    y2: 346.7,
  },
  {
    y1: 134.06,
    y2: 74.528,
  },
  {
    y1: 104.5,
    y2: 150.9,
  },
  {
    y1: 413.07,
    y2: 26.483,
  },
  {
    y1: 74.68,
    y2: 333.2,
  },
  {
    y1: 360.6,
    y2: 422.0,
  },
  {
    y1: 330.72,
    y2: 488.06,
  },
];

const series = [
  {
    label: 'Series A',
    data: data.map((v) => v.y1),
  },
  {
    label: 'Series B',
    data: data.map((v) => v.y2),
  },
];
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';

export default function ZoomBarChart() {
  return (
    <BarChartPro
      height={300}
      xAxis={[{ data: data.map((v, i) => i), zoom: true }]}
      series={series}
    />
  );
}

const data = [
  {
    y1: 443.28,
    y2: 153.9,
  },
  {
    y1: 110.5,
    y2: 217.8,
  },
  {
    y1: 175.23,
    y2: 286.32,
  },
  {
    y1: 195.97,
    y2: 325.12,
  },
  {
    y1: 351.77,
    y2: 144.58,
  },
  {
    y1: 43.253,
    y2: 146.51,
  },
  {
    y1: 376.34,
    y2: 309.69,
  },
  {
    y1: 31.514,
    y2: 236.38,
  },
  {
    y1: 231.31,
    y2: 440.72,
  },
  {
    y1: 108.04,
    y2: 20.29,
  },
  {
    y1: 321.77,
    y2: 484.17,
  },
  {
    y1: 120.18,
    y2: 54.962,
  },
  {
    y1: 366.2,
    y2: 418.5,
  },
  {
    y1: 451.45,
    y2: 181.32,
  },
  {
    y1: 294.8,
    y2: 440.9,
  },
  {
    y1: 121.83,
    y2: 273.52,
  },
  {
    y1: 287.7,
    y2: 346.7,
  },
  {
    y1: 134.06,
    y2: 74.528,
  },
  {
    y1: 104.5,
    y2: 150.9,
  },
  {
    y1: 413.07,
    y2: 26.483,
  },
  {
    y1: 74.68,
    y2: 333.2,
  },
  {
    y1: 360.6,
    y2: 422.0,
  },
  {
    y1: 330.72,
    y2: 488.06,
  },
];

const series = [
  {
    label: 'Series A',
    data: data.map((v) => v.y1),
  },
  {
    label: 'Series B',
    data: data.map((v) => v.y2),
  },
];
Press Enter to start editing
Series A
Series B
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';

export default function ZoomLineChart() {
  return (
    <LineChartPro
      height={300}
      xAxis={[
        {
          zoom: true,
          scaleType: 'point',
          data: data.map((v, i) => i),
        },
      ]}
      series={series}
    />
  );
}

const data = [
  {
    y1: 443.28,
    y2: 153.9,
  },
  {
    y1: 110.5,
    y2: 217.8,
  },
  {
    y1: 175.23,
    y2: 286.32,
  },
  {
    y1: 195.97,
    y2: 325.12,
  },
  {
    y1: 351.77,
    y2: 144.58,
  },
  {
    y1: 43.253,
    y2: 146.51,
  },
  {
    y1: 376.34,
    y2: 309.69,
  },
  {
    y1: 31.514,
    y2: 236.38,
  },
  {
    y1: 231.31,
    y2: 440.72,
  },
  {
    y1: 108.04,
    y2: 20.29,
  },
  {
    y1: 321.77,
    y2: 484.17,
  },
  {
    y1: 120.18,
    y2: 54.962,
  },
  {
    y1: 366.2,
    y2: 418.5,
  },
  {
    y1: 451.45,
    y2: 181.32,
  },
  {
    y1: 294.8,
    y2: 440.9,
  },
  {
    y1: 121.83,
    y2: 273.52,
  },
  {
    y1: 287.7,
    y2: 346.7,
  },
  {
    y1: 134.06,
    y2: 74.528,
  },
  {
    y1: 104.5,
    y2: 150.9,
  },
  {
    y1: 413.07,
    y2: 26.483,
  },
  {
    y1: 74.68,
    y2: 333.2,
  },
  {
    y1: 360.6,
    y2: 422.0,
  },
  {
    y1: 330.72,
    y2: 488.06,
  },
];

const series = [
  {
    label: 'Series A',
    data: data.map((v) => v.y1),
  },
  {
    label: 'Series B',
    data: data.map((v) => v.y2),
  },
];
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';

export default function ZoomLineChart() {
  return (
    <LineChartPro
      height={300}
      xAxis={[
        {
          zoom: true,
          scaleType: 'point',
          data: data.map((v, i) => i),
        },
      ]}
      series={series}
    />
  );
}

const data = [
  {
    y1: 443.28,
    y2: 153.9,
  },
  {
    y1: 110.5,
    y2: 217.8,
  },
  {
    y1: 175.23,
    y2: 286.32,
  },
  {
    y1: 195.97,
    y2: 325.12,
  },
  {
    y1: 351.77,
    y2: 144.58,
  },
  {
    y1: 43.253,
    y2: 146.51,
  },
  {
    y1: 376.34,
    y2: 309.69,
  },
  {
    y1: 31.514,
    y2: 236.38,
  },
  {
    y1: 231.31,
    y2: 440.72,
  },
  {
    y1: 108.04,
    y2: 20.29,
  },
  {
    y1: 321.77,
    y2: 484.17,
  },
  {
    y1: 120.18,
    y2: 54.962,
  },
  {
    y1: 366.2,
    y2: 418.5,
  },
  {
    y1: 451.45,
    y2: 181.32,
  },
  {
    y1: 294.8,
    y2: 440.9,
  },
  {
    y1: 121.83,
    y2: 273.52,
  },
  {
    y1: 287.7,
    y2: 346.7,
  },
  {
    y1: 134.06,
    y2: 74.528,
  },
  {
    y1: 104.5,
    y2: 150.9,
  },
  {
    y1: 413.07,
    y2: 26.483,
  },
  {
    y1: 74.68,
    y2: 333.2,
  },
  {
    y1: 360.6,
    y2: 422.0,
  },
  {
    y1: 330.72,
    y2: 488.06,
  },
];

const series = [
  {
    label: 'Series A',
    data: data.map((v) => v.y1),
  },
  {
    label: 'Series B',
    data: data.map((v) => v.y2),
  },
];
Press Enter to start editing
Zooming options

You can customize the zooming behavior by setting the zoomOptions prop.

The following options are available:

minStart: The starting percentage of the axis range. Between 0 and 100.
maxEnd: The ending percentage of the zoom range.
step: The step of the zooming function. Defines the granularity of the zoom.
minSpan: Restricts the minimum span size.
maxSpan: Restricts the maximum span size.
panning: Enables or disables panning.
Series A
Series B
Copy
import { BarChart } from '@mui/x-charts/BarChart';

<BarChart
  // ...
  xAxis={[
    {
  // ...
  zoom: {
    minStart: 0,
    maxEnd: 100,
    minSpan: 10,
    maxSpan: 100,
    step: 5,
    panning: true,
  }
    }
  ]}
/>
Playground
panning
minStart
0
maxEnd
100
minSpan
10
maxSpan
100
step
5
Zoom filtering

You can make the zoom of an axis affect one or more axes extremums by setting the zoom.filterMode prop on the axis config.

If zoom.filterMode is set to "discard" the data points outside the visible range of this axis are filtered out and the other axes will modify their zoom range to fit the visible ones.
If zoom.filterMode is set to "keep" (default) the data points outside the visible range are kept. Then, other axes will not be impacted.
See how the secondary axis adapts to the visible part of the primary axis in the following example.

Letter Frequency
./ZoomFilterMode.tsx
./letterFrequency.ts
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import { dataset, valueFormatter } from './letterFrequency';

export default function ZoomFilterMode() {
  return (
    <BarChartPro
      height={300}
      dataset={dataset}
      xAxis={[
        {
          dataKey: 'letter',
          zoom: { filterMode: 'discard' },
        },
      ]}
      yAxis={[{ valueFormatter }]}
      series={[{ label: 'Letter Frequency', dataKey: 'frequency', valueFormatter }]}
    />
  );
}
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import { dataset, valueFormatter } from './letterFrequency';

export default function ZoomFilterMode() {
  return (
    <BarChartPro
      height={300}
      dataset={dataset}
      xAxis={[
        {
          dataKey: 'letter',
          zoom: { filterMode: 'discard' },
        },
      ]}
      yAxis={[{ valueFormatter }]}
      series={[{ label: 'Letter Frequency', dataKey: 'frequency', valueFormatter }]}
    />
  );
}
Press Enter to start editing
Zoom slider

You can provide an overview that lets users manipulate the zoomed area by setting the zoom.slider.enabled property on the axis config.

import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

const dataLength = 801;
const data = Array.from({ length: dataLength }).map((_, i) => ({
  x: i,
  y: 50 + Math.sin(i / 5) * 25,
}));
const series2Data = Array.from({ length: dataLength }).map((_, i) => ({
  x: i,
  y: 50 + Math.sin(i / 10) * 25,
}));

const xData = data.map((d) => d.x);

export default function ZoomSlider() {
  return (
    <ScatterChartPro
      xAxis={[
        {
          id: 'x',
          data: xData,
          zoom: {
            filterMode: 'discard',
            minSpan: 10,
            panning: true,
            slider: { enabled: true },
          },
          valueFormatter: (v: number) => v.toLocaleString('en-US'),
        },
        {
          id: 'x2',
          data: series2Data.map((d) => d.x),
          position: 'top',
          zoom: {
            slider: { enabled: true },
          },
        },
      ]}
      yAxis={[
        { id: 'y', width: 28, zoom: { slider: { enabled: true } } },
        {
          id: 'y2',
          position: 'right',
          width: 28,
          zoom: { slider: { enabled: true } },
        },
      ]}
      series={[{ data }, { data: series2Data, xAxisId: 'x2', yAxisId: 'y2' }]}
      height={400}
      margin={{ bottom: 40 }}
      initialZoom={[
        { axisId: 'x', start: 45, end: 55 },
        { axisId: 'x2', start: 30, end: 70 },
        { axisId: 'y', start: 40, end: 60 },
        { axisId: 'y2', start: 30, end: 70 },
      ]}
    />
  );
}
import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

const dataLength = 801;
const data = Array.from({ length: dataLength }).map((_, i) => ({
  x: i,
  y: 50 + Math.sin(i / 5) * 25,
}));
const series2Data = Array.from({ length: dataLength }).map((_, i) => ({
  x: i,
  y: 50 + Math.sin(i / 10) * 25,
}));

const xData = data.map((d) => d.x);

export default function ZoomSlider() {
  return (
    <ScatterChartPro
      xAxis={[
        {
          id: 'x',
          data: xData,
          zoom: {
            filterMode: 'discard',
            minSpan: 10,
            panning: true,
            slider: { enabled: true },
          },
          valueFormatter: (v: number) => v.toLocaleString('en-US'),
        },
        {
          id: 'x2',
          data: series2Data.map((d) => d.x),
          position: 'top',
          zoom: {
            slider: { enabled: true },
          },
        },
      ]}
      yAxis={[
        { id: 'y', width: 28, zoom: { slider: { enabled: true } } },
        {
          id: 'y2',
          position: 'right',
          width: 28,
          zoom: { slider: { enabled: true } },
        },
      ]}
      series={[{ data }, { data: series2Data, xAxisId: 'x2', yAxisId: 'y2' }]}
      height={400}
      margin={{ bottom: 40 }}
      initialZoom={[
        { axisId: 'x', start: 45, end: 55 },
        { axisId: 'x2', start: 30, end: 70 },
        { axisId: 'y', start: 40, end: 60 },
        { axisId: 'y2', start: 30, end: 70 },
      ]}
    />
  );
}
Press Enter to start editing
You can set the zoom.slider.size property to customize the size reserved for the zoom slider. This can be useful if you're using a custom zoom slider and want to update the space reserved for it. If you're using the default zoom slider, updating zoom.slider.size effectively changes the padding around the slider.

The size is the height on an x-axis and the width on a y-axis.

Tooltip

The zoom slider supports a tooltip that displays the current zoom range.

You can configure the tooltip by setting the zoom.slider.showTooltip property on the axis config. The following options are available:

true: The tooltip is always displayed.
'hover': The tooltip is displayed on hover (default).
false: The tooltip is never displayed.
Tooltip value formatting
The value shown in the tooltip can also be customized by using the valueFormatter property of the respective axis.

When formatting the zoom slider tooltip, the valueFormatter is called with zoom-slider-tooltip as its location.

hover
Show Tooltip
Blue
Yellow
import * as React from 'react';
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import type { ZoomSliderShowTooltip } from '@mui/x-charts-pro/models';
import type { AxisValueFormatterContext } from '@mui/x-charts/models';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function ZoomSliderTooltip() {
  const [showTooltip, setShowTooltip] =
    React.useState<ZoomSliderShowTooltip>('hover');

  return (
    <Stack width="100%">
      <FormControl sx={{ width: 150, mb: 2, alignSelf: 'center' }}>
        <InputLabel id="show-tooltip-label">Show Tooltip</InputLabel>
        <Select
          labelId="show-tooltip-label"
          id="show-tooltip-select"
          value={showTooltip}
          label="Show Tooltip"
          onChange={(event) =>
            setShowTooltip(event.target.value as ZoomSliderShowTooltip)
          }
        >
          <MenuItem value="always">Always</MenuItem>
          <MenuItem value="hover">On hover</MenuItem>
          <MenuItem value="never">Never</MenuItem>
        </Select>
      </FormControl>

      <BarChartPro
        height={300}
        series={[
          { data: pData, label: 'Blue' },
          { data: uData, label: 'Yellow' },
        ]}
        xAxis={[
          {
            id: 'x',
            data: xLabels,
            valueFormatter: (
              value: string,
              { location }: AxisValueFormatterContext,
            ) =>
              location === 'zoom-slider-tooltip' ? `${value.slice(5)}` : `${value}`,
            zoom: { slider: { enabled: true, showTooltip } },
          },
        ]}
        yAxis={[{ width: 60, max: 10000 }]}
        initialZoom={[{ axisId: 'x', start: 20, end: 80 }]}
      />
    </Stack>
  );
}
import * as React from 'react';
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import type { ZoomSliderShowTooltip } from '@mui/x-charts-pro/models';
import type { AxisValueFormatterContext } from '@mui/x-charts/models';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function ZoomSliderTooltip() {
  const [showTooltip, setShowTooltip] =
    React.useState<ZoomSliderShowTooltip>('hover');

  return (
    <Stack width="100%">
      <FormControl sx={{ width: 150, mb: 2, alignSelf: 'center' }}>
        <InputLabel id="show-tooltip-label">Show Tooltip</InputLabel>
        <Select
          labelId="show-tooltip-label"
          id="show-tooltip-select"
          value={showTooltip}
          label="Show Tooltip"
          onChange={(event) =>
            setShowTooltip(event.target.value as ZoomSliderShowTooltip)
          }
        >
          <MenuItem value="always">Always</MenuItem>
          <MenuItem value="hover">On hover</MenuItem>
          <MenuItem value="never">Never</MenuItem>
        </Select>
      </FormControl>

      <BarChartPro
        height={300}
        series={[
          { data: pData, label: 'Blue' },
          { data: uData, label: 'Yellow' },
        ]}
        xAxis={[
          {
            id: 'x',
            data: xLabels,
            valueFormatter: (
              value: string,
              { location }: AxisValueFormatterContext,
            ) =>
              location === 'zoom-slider-tooltip' ? `${value.slice(5)}` : `${value}`,
            zoom: { slider: { enabled: true, showTooltip } },
          },
        ]}
        yAxis={[{ width: 60, max: 10000 }]}
        initialZoom={[{ axisId: 'x', start: 20, end: 80 }]}
      />
    </Stack>
  );
}
Press Enter to start editing
Limits

The zoom slider uses the same limits as the zooming options. You can set the minStart, maxEnd, minSpan, and maxSpan properties on the axis config to restrict the zoom slider range.

The zoom slider does not display values outside the range delimited by minStart and maxEnd.

Composition

When using composition, you can render the axes' sliders by rendering the ChartZoomSlider component.

import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainerPro } from '@mui/x-charts-pro/ChartContainerPro';
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath';
import { ChartZoomSlider } from '@mui/x-charts-pro/ChartZoomSlider';
import { Chance } from 'chance';

const chance = new Chance(42);

const xAxisData = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const firstSeriesData = Array.from({ length: 26 }, () =>
  chance.integer({ min: 0, max: 10 }),
);
const secondSeriesData = Array.from({ length: 26 }, () =>
  chance.integer({ min: 0, max: 10 }),
);

export default function ZoomSliderComposition() {
  const clipPathId = React.useId();

  return (
    <ChartContainerPro
      series={[
        { type: 'line', data: firstSeriesData },
        { type: 'line', data: secondSeriesData },
      ]}
      xAxis={[
        {
          data: xAxisData,
          scaleType: 'band',
          id: 'x-axis-id',
          height: 45,
          zoom: { slider: { enabled: true } },
        },
      ]}
      height={200}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <BarPlot />
        <LinePlot />
      </g>
      <ChartsXAxis label="X axis" axisId="x-axis-id" />
      <ChartZoomSlider />
      <ChartsClipPath id={clipPathId} />
    </ChartContainerPro>
  );
}
import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainerPro } from '@mui/x-charts-pro/ChartContainerPro';
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath';
import { ChartZoomSlider } from '@mui/x-charts-pro/ChartZoomSlider';
import { Chance } from 'chance';

const chance = new Chance(42);

const xAxisData = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const firstSeriesData = Array.from({ length: 26 }, () =>
  chance.integer({ min: 0, max: 10 }),
);
const secondSeriesData = Array.from({ length: 26 }, () =>
  chance.integer({ min: 0, max: 10 }),
);

export default function ZoomSliderComposition() {
  const clipPathId = React.useId();

  return (
    <ChartContainerPro
      series={[
        { type: 'line', data: firstSeriesData },
        { type: 'line', data: secondSeriesData },
      ]}
      xAxis={[
        {
          data: xAxisData,
          scaleType: 'band',
          id: 'x-axis-id',
          height: 45,
          zoom: { slider: { enabled: true } },
        },
      ]}
      height={200}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <BarPlot />
        <LinePlot />
      </g>
      <ChartsXAxis label="X axis" axisId="x-axis-id" />
      <ChartZoomSlider />
      <ChartsClipPath id={clipPathId} />
    </ChartContainerPro>
  );
}
Press Enter to start editing
Preview

When the zoom slider is enabled, you can preview the zoomed area by enabling the zoom.slider.preview property on the axis config.

Share of Primary Energy Consumption from Renewables (2023)
Source: Our World in Data. Updated: 2023.
./ZoomSliderPreview.tsx
../dataset/globalGdpPerCapita.ts
../dataset/usUnemploymentRate.ts
../dataset/shareOfRenewables.ts
../dataset/globalBirthsPerWoman.ts
../dataset/countryData.ts
../dataset/populationPrediction2050.ts
import * as React from 'react';
import { LineChartPro, LineChartProProps } from '@mui/x-charts-pro/LineChartPro';
import { ScatterValueType, XAxis } from '@mui/x-charts/models';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import {
  ScatterChartPro,
  ScatterChartProProps,
} from '@mui/x-charts-pro/ScatterChartPro';
import { BarChartPro, BarChartProProps } from '@mui/x-charts-pro/BarChartPro';
import {
  dateAxisFormatter,
  usUnemploymentRate,
} from '../dataset/usUnemploymentRate';
import { globalGdpPerCapita } from '../dataset/globalGdpPerCapita';
import { globalBirthPerWoman } from '../dataset/globalBirthsPerWoman';
import {
  continents,
  countriesInContinent,
  countryData,
} from '../dataset/countryData';
import { shareOfRenewables } from '../dataset/shareOfRenewables';
import { populationPrediction2050 } from '../dataset/populationPrediction2050';

const lineData = usUnemploymentRate.map((d) => d.rate / 100);

const percentageFormatter = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 3,
});
const gdpPerCapitaFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
});
const populationFormatter = new Intl.NumberFormat('en-US', { notation: 'compact' });

const lineXAxis = {
  scaleType: 'time',
  id: 'x',
  data: usUnemploymentRate.map((d) => d.date),
  valueFormatter: dateAxisFormatter,
} satisfies XAxis;

const lineSettings = {
  yAxis: [
    {
      id: 'y',
      width: 44,
      valueFormatter: (v: number | null) => percentageFormatter.format(v!),
      min: 0,
    },
  ],
  series: [
    {
      data: lineData,
      showMark: false,
      valueFormatter: (v: number | null) => percentageFormatter.format(v!),
    },
  ],
  height: 400,
} satisfies Partial<LineChartProProps>;

const areaXAxis = {
  id: 'x',
  data: new Array(101).fill(null).map((_, i) => i),
  label: 'Age',
  valueFormatter: (v: number | null) =>
    v === 100 ? '100+' : Math.round(v!).toString(),
} satisfies XAxis;

const areaSettings = {
  yAxis: [
    {
      id: 'y',
      width: 44,
      valueFormatter: (v: number | null) => populationFormatter.format(v!),
    },
  ],
  series: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'].map((continent) => ({
    data: populationPrediction2050
      .filter((point) => point.location === continent)
      .map((point) => point.value),
    showMark: false,
    area: true,
    label: continent,
    stack: 'population',
    valueFormatter: (v: number | null) => populationFormatter.format(v!),
  })),
  height: 400,
} satisfies Partial<LineChartProProps>;

const scatterXAxis = {
  valueFormatter: (v: number | null) => gdpPerCapitaFormatter.format(v!),
};
const scatterSettings = {
  yAxis: [{ id: 'y', width: 16, min: 0 }],
  series: continents.map((continent) => ({
    label: continent,
    data: countriesInContinent[continent]
      .map((code) => ({
        id: code,
        x: globalGdpPerCapita.find((d) => d.code === code)?.gdpPerCapita,
        y: globalBirthPerWoman.find((d) => d.code === code)?.rate,
      }))
      .filter(
        (d): d is { id: string; x: number; y: number } =>
          d.x !== undefined && d.y !== undefined,
      ),
    valueFormatter: (value: ScatterValueType | null) =>
      `${countryData[value!.id as keyof typeof countryData].country} - Birth rate: ${value!.y} - GDP per capita: ${gdpPerCapitaFormatter.format(value!.x)}`,
  })),
  height: 400,
} satisfies Partial<ScatterChartProProps>;

const sortedShareOfRenewables = shareOfRenewables.toSorted(
  (a, b) => a.renewablesPercentage - b.renewablesPercentage,
);
const barXAxis = {
  data: sortedShareOfRenewables.map((d) => countryData[d.code].country),
  tickLabelStyle: { angle: -45 },
  height: 90,
} satisfies XAxis<'band'>;
const barSettings = {
  series: [
    {
      data: sortedShareOfRenewables.map((d) => d.renewablesPercentage / 100),
      valueFormatter: (v: number | null) => percentageFormatter.format(v!),
    },
  ],
  height: 400,
} satisfies Partial<BarChartProProps>;

export default function ZoomSliderPreview() {
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
        {['bar', 'line', 'area', 'scatter'].map((type) => (
          <ToggleButton key={type} value={type} aria-label="left aligned">
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {chartType === 'bar' && <BarChartPreview />}
      {chartType === 'line' && <LineChartPreview />}
      {chartType === 'area' && <AreaChartPreview />}
      {chartType === 'scatter' && <ScatterChartPreview />}
    </Stack>
  );
}

function LineChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Unemployment Rate in United States (1948-2025)
      </Typography>
      <LineChartPro
        {...lineSettings}
        xAxis={[
          { ...lineXAxis, zoom: { slider: { enabled: true, preview: true } } },
        ]}
      />
      <Typography variant="caption">
        Source: Federal Reserve Bank of St. Louis. Updated: Jun 6, 2025 7:46 AM CDT.
      </Typography>
    </React.Fragment>
  );
}

function AreaChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Population by Age Group in 2050 (Projected)
      </Typography>
      <LineChartPro
        {...areaSettings}
        xAxis={[
          { ...areaXAxis, zoom: { slider: { enabled: true, preview: true } } },
        ]}
      />
      <Typography variant="caption">
        Source: World Population Prospects: The 2024 Revision, United Nations.
      </Typography>
    </React.Fragment>
  );
}

function BarChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Share of Primary Energy Consumption from Renewables (2023)
      </Typography>
      <BarChartPro
        {...barSettings}
        xAxis={[{ ...barXAxis, zoom: { slider: { enabled: true, preview: true } } }]}
      />
      <Typography variant="caption">
        Source: Our World in Data. Updated: 2023.
      </Typography>
    </React.Fragment>
  );
}

function ScatterChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Births per woman vs GDP per capita (USD, 2023)
      </Typography>
      <ScatterChartPro
        {...scatterSettings}
        xAxis={[
          { ...scatterXAxis, zoom: { slider: { enabled: true, preview: true } } },
        ]}
      />
      <Typography variant="caption">
        GDP per capita is expressed in international dollars at 2021 prices. <br />
        Source: Our World in Data. Updated: 2023.
      </Typography>
    </React.Fragment>
  );
}
import * as React from 'react';
import { LineChartPro, LineChartProProps } from '@mui/x-charts-pro/LineChartPro';
import { ScatterValueType, XAxis } from '@mui/x-charts/models';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import {
  ScatterChartPro,
  ScatterChartProProps,
} from '@mui/x-charts-pro/ScatterChartPro';
import { BarChartPro, BarChartProProps } from '@mui/x-charts-pro/BarChartPro';
import {
  dateAxisFormatter,
  usUnemploymentRate,
} from '../dataset/usUnemploymentRate';
import { globalGdpPerCapita } from '../dataset/globalGdpPerCapita';
import { globalBirthPerWoman } from '../dataset/globalBirthsPerWoman';
import {
  continents,
  countriesInContinent,
  countryData,
} from '../dataset/countryData';
import { shareOfRenewables } from '../dataset/shareOfRenewables';
import { populationPrediction2050 } from '../dataset/populationPrediction2050';

const lineData = usUnemploymentRate.map((d) => d.rate / 100);

const percentageFormatter = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 3,
});
const gdpPerCapitaFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
});
const populationFormatter = new Intl.NumberFormat('en-US', { notation: 'compact' });

const lineXAxis = {
  scaleType: 'time',
  id: 'x',
  data: usUnemploymentRate.map((d) => d.date),
  valueFormatter: dateAxisFormatter,
} satisfies XAxis;

const lineSettings = {
  yAxis: [
    {
      id: 'y',
      width: 44,
      valueFormatter: (v: number | null) => percentageFormatter.format(v!),
      min: 0,
    },
  ],
  series: [
    {
      data: lineData,
      showMark: false,
      valueFormatter: (v: number | null) => percentageFormatter.format(v!),
    },
  ],
  height: 400,
} satisfies Partial<LineChartProProps>;

const areaXAxis = {
  id: 'x',
  data: new Array(101).fill(null).map((_, i) => i),
  label: 'Age',
  valueFormatter: (v: number | null) =>
    v === 100 ? '100+' : Math.round(v!).toString(),
} satisfies XAxis;

const areaSettings = {
  yAxis: [
    {
      id: 'y',
      width: 44,
      valueFormatter: (v: number | null) => populationFormatter.format(v!),
    },
  ],
  series: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'].map((continent) => ({
    data: populationPrediction2050
      .filter((point) => point.location === continent)
      .map((point) => point.value),
    showMark: false,
    area: true,
    label: continent,
    stack: 'population',
    valueFormatter: (v: number | null) => populationFormatter.format(v!),
  })),
  height: 400,
} satisfies Partial<LineChartProProps>;

const scatterXAxis = {
  valueFormatter: (v: number | null) => gdpPerCapitaFormatter.format(v!),
};
const scatterSettings = {
  yAxis: [{ id: 'y', width: 16, min: 0 }],
  series: continents.map((continent) => ({
    label: continent,
    data: countriesInContinent[continent]
      .map((code) => ({
        id: code,
        x: globalGdpPerCapita.find((d) => d.code === code)?.gdpPerCapita,
        y: globalBirthPerWoman.find((d) => d.code === code)?.rate,
      }))
      .filter(
        (d): d is { id: string; x: number; y: number } =>
          d.x !== undefined && d.y !== undefined,
      ),
    valueFormatter: (value: ScatterValueType | null) =>
      `${countryData[value!.id as keyof typeof countryData].country} - Birth rate: ${value!.y} - GDP per capita: ${gdpPerCapitaFormatter.format(value!.x)}`,
  })),
  height: 400,
} satisfies Partial<ScatterChartProProps>;

const sortedShareOfRenewables = shareOfRenewables.toSorted(
  (a, b) => a.renewablesPercentage - b.renewablesPercentage,
);
const barXAxis = {
  data: sortedShareOfRenewables.map((d) => countryData[d.code].country),
  tickLabelStyle: { angle: -45 },
  height: 90,
} satisfies XAxis<'band'>;
const barSettings = {
  series: [
    {
      data: sortedShareOfRenewables.map((d) => d.renewablesPercentage / 100),
      valueFormatter: (v: number | null) => percentageFormatter.format(v!),
    },
  ],
  height: 400,
} satisfies Partial<BarChartProProps>;

export default function ZoomSliderPreview() {
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
        {['bar', 'line', 'area', 'scatter'].map((type) => (
          <ToggleButton key={type} value={type} aria-label="left aligned">
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {chartType === 'bar' && <BarChartPreview />}
      {chartType === 'line' && <LineChartPreview />}
      {chartType === 'area' && <AreaChartPreview />}
      {chartType === 'scatter' && <ScatterChartPreview />}
    </Stack>
  );
}

function LineChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Unemployment Rate in United States (1948-2025)
      </Typography>
      <LineChartPro
        {...lineSettings}
        xAxis={[
          { ...lineXAxis, zoom: { slider: { enabled: true, preview: true } } },
        ]}
      />
      <Typography variant="caption">
        Source: Federal Reserve Bank of St. Louis. Updated: Jun 6, 2025 7:46 AM CDT.
      </Typography>
    </React.Fragment>
  );
}

function AreaChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Population by Age Group in 2050 (Projected)
      </Typography>
      <LineChartPro
        {...areaSettings}
        xAxis={[
          { ...areaXAxis, zoom: { slider: { enabled: true, preview: true } } },
        ]}
      />
      <Typography variant="caption">
        Source: World Population Prospects: The 2024 Revision, United Nations.
      </Typography>
    </React.Fragment>
  );
}

function BarChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Share of Primary Energy Consumption from Renewables (2023)
      </Typography>
      <BarChartPro
        {...barSettings}
        xAxis={[{ ...barXAxis, zoom: { slider: { enabled: true, preview: true } } }]}
      />
      <Typography variant="caption">
        Source: Our World in Data. Updated: 2023.
      </Typography>
    </React.Fragment>
  );
}

function ScatterChartPreview() {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        Births per woman vs GDP per capita (USD, 2023)
      </Typography>
      <ScatterChartPro
        {...scatterSettings}
        xAxis={[
          { ...scatterXAxis, zoom: { slider: { enabled: true, preview: true } } },
        ]}
      />
      <Typography variant="caption">
        GDP per capita is expressed in international dollars at 2021 prices. <br />
        Source: Our World in Data. Updated: 2023.
      </Typography>
    </React.Fragment>
  );
}
Press Enter to start editing
Scatter marker size

The size of the preview marker in scatter charts is 1px by default. You can customize it by setting the zoom.slider.preview.markerSize property on the series configuration object.

Births per woman vs GDP per capita (USD, 2023)
Europe
Asia
North America
South America
Africa
Oceania
GDP per capita is expressed in international dollars at 2021 prices.
Source: Our World in Data. Updated: 2023.
Marker Size: 2


./ZoomSliderPreviewCustomMarkerSize.tsx
../dataset/globalGdpPerCapita.ts
../dataset/countryData.ts
../dataset/globalBirthsPerWoman.ts
import * as React from 'react';
import { ScatterValueType } from '@mui/x-charts/models';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {
  ScatterChartPro,
  ScatterChartProProps,
} from '@mui/x-charts-pro/ScatterChartPro';
import Slider from '@mui/material/Slider';
import { globalGdpPerCapita } from '../dataset/globalGdpPerCapita';
import { globalBirthPerWoman } from '../dataset/globalBirthsPerWoman';
import {
  continents,
  countriesInContinent,
  countryData,
} from '../dataset/countryData';

const gdpPerCapitaFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
});

const scatterXAxis = {
  valueFormatter: (v: number | null) => gdpPerCapitaFormatter.format(v!),
};

const dataPerContinent = continents.map((continent) =>
  countriesInContinent[continent]
    .map((code) => ({
      id: code,
      x: globalGdpPerCapita.find((d) => d.code === code)?.gdpPerCapita,
      y: globalBirthPerWoman.find((d) => d.code === code)?.rate,
    }))
    .filter(
      (d): d is { id: string; x: number; y: number } =>
        d.x !== undefined && d.y !== undefined,
    ),
);

const scatterSettings = {
  yAxis: [{ id: 'y', width: 16, min: 0 }],
  height: 300,
} satisfies Partial<ScatterChartProProps>;

export default function ZoomSliderPreviewCustomMarkerSize() {
  const [markerSize, setMarkerSize] = React.useState(2);
  const series = continents.map((continent, continentIndex) => ({
    label: continent,
    data: dataPerContinent[continentIndex],
    preview: { markerSize },
    valueFormatter: (value: ScatterValueType | null) =>
      `${countryData[value!.id as keyof typeof countryData].country} - Birth rate: ${value!.y} - GDP per capita: ${gdpPerCapitaFormatter.format(value!.x)}`,
  }));

  return (
    <Stack
      width="100%"
      gap={2}
      direction="row"
      justifyContent="center"
      flexWrap={{ xs: 'wrap-reverse', sm: 'nowrap' }}
    >
      <Stack width="100%" gap={2}>
        <Typography variant="h6" sx={{ alignSelf: 'center' }}>
          Births per woman vs GDP per capita (USD, 2023)
        </Typography>
        <ScatterChartPro
          {...scatterSettings}
          xAxis={[
            { ...scatterXAxis, zoom: { slider: { enabled: true, preview: true } } },
          ]}
          series={series}
        />
        <Typography variant="caption">
          GDP per capita is expressed in international dollars at 2021 prices. <br />
          Source: Our World in Data. Updated: 2023.
        </Typography>
      </Stack>

      <Stack
        minWidth="120px"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
      >
        <Typography id="marker-size-slider" gutterBottom>
          Marker Size: {markerSize}
        </Typography>
        <Slider
          size="small"
          min={1}
          max={10}
          aria-labelledby="marker-size-slider"
          onChange={(event, value) => setMarkerSize(value)}
          value={markerSize}
        />
      </Stack>
    </Stack>
  );
}
import * as React from 'react';
import { ScatterValueType } from '@mui/x-charts/models';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {
  ScatterChartPro,
  ScatterChartProProps,
} from '@mui/x-charts-pro/ScatterChartPro';
import Slider from '@mui/material/Slider';
import { globalGdpPerCapita } from '../dataset/globalGdpPerCapita';
import { globalBirthPerWoman } from '../dataset/globalBirthsPerWoman';
import {
  continents,
  countriesInContinent,
  countryData,
} from '../dataset/countryData';

const gdpPerCapitaFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
});

const scatterXAxis = {
  valueFormatter: (v: number | null) => gdpPerCapitaFormatter.format(v!),
};

const dataPerContinent = continents.map((continent) =>
  countriesInContinent[continent]
    .map((code) => ({
      id: code,
      x: globalGdpPerCapita.find((d) => d.code === code)?.gdpPerCapita,
      y: globalBirthPerWoman.find((d) => d.code === code)?.rate,
    }))
    .filter(
      (d): d is { id: string; x: number; y: number } =>
        d.x !== undefined && d.y !== undefined,
    ),
);

const scatterSettings = {
  yAxis: [{ id: 'y', width: 16, min: 0 }],
  height: 300,
} satisfies Partial<ScatterChartProProps>;

export default function ZoomSliderPreviewCustomMarkerSize() {
  const [markerSize, setMarkerSize] = React.useState(2);
  const series = continents.map((continent, continentIndex) => ({
    label: continent,
    data: dataPerContinent[continentIndex],
    preview: { markerSize },
    valueFormatter: (value: ScatterValueType | null) =>
      `${countryData[value!.id as keyof typeof countryData].country} - Birth rate: ${value!.y} - GDP per capita: ${gdpPerCapitaFormatter.format(value!.x)}`,
  }));

  return (
    <Stack
      width="100%"
      gap={2}
      direction="row"
      justifyContent="center"
      flexWrap={{ xs: 'wrap-reverse', sm: 'nowrap' }}
    >
      <Stack width="100%" gap={2}>
        <Typography variant="h6" sx={{ alignSelf: 'center' }}>
          Births per woman vs GDP per capita (USD, 2023)
        </Typography>
        <ScatterChartPro
          {...scatterSettings}
          xAxis={[
            { ...scatterXAxis, zoom: { slider: { enabled: true, preview: true } } },
          ]}
          series={series}
        />
        <Typography variant="caption">
          GDP per capita is expressed in international dollars at 2021 prices. <br />
          Source: Our World in Data. Updated: 2023.
        </Typography>
      </Stack>

      <Stack
        minWidth="120px"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
      >
        <Typography id="marker-size-slider" gutterBottom>
          Marker Size: {markerSize}
        </Typography>
        <Slider
          size="small"
          min={1}
          max={10}
          aria-labelledby="marker-size-slider"
          onChange={(event, value) => setMarkerSize(value)}
          value={markerSize}
        />
      </Stack>
    </Stack>
  );
}
Press Enter to start editing
Zoom management

External zoom management

You can manage the zoom state by two means:

By defining an initial state with the initialZoom prop.
By imperatively setting a zoom value with the setZoomData() method of the public API.
In addition, the onZoomChange prop is a function that receives the new zoom state.

The zoom state is an array of objects that define the zoom state for each axis with zoom enabled.

axisId: The id of the axis to control.
start: The starting percentage of the axis range.
end: The ending percentage of the zoom range.
Series A
Series B
[
  {
    "axisId": "my-x-axis",
    "start": 20,
    "end": 40
  }
]
./ExternalZoomManagement.tsx
./randomData.ts
import * as React from 'react';
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ZoomData } from '@mui/x-charts-pro/models';
import { useChartProApiRef } from '@mui/x-charts-pro/hooks';
import { randomData } from './randomData';

const initialZoomData: ZoomData[] = [
  {
    axisId: 'my-x-axis',
    start: 20,
    end: 40,
  },
];
export default function ExternalZoomManagement() {
  const apiRef = useChartProApiRef<'line'>();
  const [zoomData, setZoomData] = React.useState(initialZoomData);

  return (
    <Stack sx={{ width: '100%', justifyContent: 'flex-start' }}>
      <LineChartPro
        {...chartProps}
        initialZoom={initialZoomData}
        apiRef={apiRef}
        onZoomChange={setZoomData}
        xAxis={[
          {
            zoom: true,
            scaleType: 'point',
            id: 'my-x-axis',
            data: randomData.map((v, i) => i),
          },
        ]}
      />
      <pre>{JSON.stringify(zoomData, null, 2)}</pre>
      <div>
        <Button
          variant="contained"
          onClick={() =>
            apiRef.current?.setZoomData([
              { axisId: 'my-x-axis', start: 0, end: 100 },
            ])
          }
        >
          Reset zoom
        </Button>
      </div>
    </Stack>
  );
}

const chartProps = {
  height: 300,
  sx: { width: '100%' },
  series: [
    {
      label: 'Series A',
      data: randomData.map((v) => v.y1),
    },
    {
      label: 'Series B',
      data: randomData.map((v) => v.y2),
    },
  ],
};
import * as React from 'react';
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ZoomData } from '@mui/x-charts-pro/models';
import { useChartProApiRef } from '@mui/x-charts-pro/hooks';
import { randomData } from './randomData';

const initialZoomData: ZoomData[] = [
  {
    axisId: 'my-x-axis',
    start: 20,
    end: 40,
  },
];
export default function ExternalZoomManagement() {
  const apiRef = useChartProApiRef<'line'>();
  const [zoomData, setZoomData] = React.useState(initialZoomData);

  return (
    <Stack sx={{ width: '100%', justifyContent: 'flex-start' }}>
      <LineChartPro
        {...chartProps}
        initialZoom={initialZoomData}
        apiRef={apiRef}
        onZoomChange={setZoomData}
        xAxis={[
          {
            zoom: true,
            scaleType: 'point',
            id: 'my-x-axis',
            data: randomData.map((v, i) => i),
          },
        ]}
      />
      <pre>{JSON.stringify(zoomData, null, 2)}</pre>
      <div>
        <Button
          variant="contained"
          onClick={() =>
            apiRef.current?.setZoomData([
              { axisId: 'my-x-axis', start: 0, end: 100 },
            ])
          }
        >
          Reset zoom
        </Button>
      </div>
    </Stack>
  );
}

const chartProps = {
  height: 300,
  sx: { width: '100%' },
  series: [
    {
      label: 'Series A',
      data: randomData.map((v) => v.y1),
    },
    {
      label: 'Series B',
      data: randomData.map((v) => v.y2),
    },
  ],
};
Press Enter to start editing
Zoom synchronization

To synchronize zoom between multiple charts, you can control the zoom state.

Series A
Series B
Series A
Series B
[
  {
    "axisId": "shared-x-axis",
    "start": 20,
    "end": 40
  }
]
./ZoomControlled.tsx
./randomData.ts
import * as React from 'react';
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ZoomData } from '@mui/x-charts-pro/models';
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import { randomData } from './randomData';

const lineAxis = [
  {
    zoom: true,
    scaleType: 'point' as const,
    id: 'shared-x-axis',
    data: randomData.map((v, i) => i),
  },
];

const barAxis = [
  {
    zoom: true,
    id: 'shared-x-axis',
    data: randomData.map((v, i) => i),
  },
];

const initialZoomData: ZoomData[] = [
  {
    axisId: 'shared-x-axis',
    start: 20,
    end: 40,
  },
];
export default function ZoomControlled() {
  const [zoomData, setZoomData] = React.useState(initialZoomData);

  return (
    <Stack sx={{ width: '100%', justifyContent: 'flex-start' }}>
      <LineChartPro
        {...chartProps}
        onZoomChange={setZoomData}
        zoomData={zoomData}
        xAxis={lineAxis}
      />
      <BarChartPro
        {...chartProps}
        onZoomChange={setZoomData}
        zoomData={zoomData}
        xAxis={barAxis}
      />
      <pre>{JSON.stringify(zoomData, null, 2)}</pre>
      <div>
        <Button
          variant="contained"
          onClick={() =>
            setZoomData([{ axisId: 'shared-x-axis', start: 0, end: 100 }])
          }
        >
          Reset zoom
        </Button>
      </div>
    </Stack>
  );
}

const chartProps = {
  height: 300,
  sx: { width: '100%' },
  series: [
    {
      label: 'Series A',
      data: randomData.map((v) => v.y1),
    },
    {
      label: 'Series B',
      data: randomData.map((v) => v.y2),
    },
  ],
};
import * as React from 'react';
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ZoomData } from '@mui/x-charts-pro/models';
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import { randomData } from './randomData';

const lineAxis = [
  {
    zoom: true,
    scaleType: 'point' as const,
    id: 'shared-x-axis',
    data: randomData.map((v, i) => i),
  },
];

const barAxis = [
  {
    zoom: true,
    id: 'shared-x-axis',
    data: randomData.map((v, i) => i),
  },
];

const initialZoomData: ZoomData[] = [
  {
    axisId: 'shared-x-axis',
    start: 20,
    end: 40,
  },
];
export default function ZoomControlled() {
  const [zoomData, setZoomData] = React.useState(initialZoomData);

  return (
    <Stack sx={{ width: '100%', justifyContent: 'flex-start' }}>
      <LineChartPro
        {...chartProps}
        onZoomChange={setZoomData}
        zoomData={zoomData}
        xAxis={lineAxis}
      />
      <BarChartPro
        {...chartProps}
        onZoomChange={setZoomData}
        zoomData={zoomData}
        xAxis={barAxis}
      />
      <pre>{JSON.stringify(zoomData, null, 2)}</pre>
      <div>
        <Button
          variant="contained"
          onClick={() =>
            setZoomData([{ axisId: 'shared-x-axis', start: 0, end: 100 }])
          }
        >
          Reset zoom
        </Button>
      </div>
    </Stack>
  );
}

const chartProps = {
  height: 300,
  sx: { width: '100%' },
  series: [
    {
      label: 'Series A',
      data: randomData.map((v) => v.y1),
    },
    {
      label: 'Series B',
      data: randomData.map((v) => v.y2),
    },
  ],
};
Press Enter to start editing
Zoom interactions configuration

You can have fine-grained control over which interactions are enabled and under which conditions by using the zoomInteractionConfig prop.

Interactions

The zoomInteractionConfig prop allows you to specify which interactions are enabled for zooming and panning:

<BarChartPro
  zoomInteractionConfig={{
    // Enable wheel, pinch, and tap-and-drag zoom
    zoom: ['wheel', 'pinch', 'tapAndDrag'],
    // Enable drag panning
    pan: ['drag'],
  }}
/>

Copy
Zoom interactions:

wheel (default): Zoom in/out by scrolling the mouse wheel
pinch (default): Zoom in/out by pinching on touch devices
tapAndDrag: Zoom in/out by tapping twice and then dragging vertically. Dragging up zooms in, dragging down zooms out.
brush: Zoom into a selected area by clicking and dragging to create a selection rectangle.
doubleTapReset: Reset the zoom level to the original state when double-tapping.
Pan interactions:

wheel (default*): Pan the chart by scrolling the mouse wheel. On a desktop trackpad, it enables pan using two fingers. Only pans the horizontal axis by default. Use allowedDirection to customize which axes are affected.
drag (default): Pan the chart by dragging with the mouse or touch
pressAndDrag: Pan the chart by pressing and holding, then dragging. Useful for avoiding conflicts with selection gestures.
* The wheel pan interaction is only added automatically if pan is enabled for at least one of the x-axis and none of the y-axis.

When modifying the zoom interaction configuration, care should be taken as to not create a bad user experience.

For example, the "drag" and "brush" interactions do not work well together.

If both are needed, the pointerMode and requiredKeys options described in the next sections can help.

Series A
Copy
import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

<ScatterChartPro
  // ...
  zoomInteractionConfig={{
    zoom: ["wheel", "pinch"],
    pan: ["drag", "wheel"],
  }}
/>
Playground
Zoom interactions

Wheel
Pinch
Tap and drag
Brush
Double tap reset
Pan interactions

Drag
Press and drag
Pan on wheel
import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';
import ChartsUsageDemo from 'docsx/src/modules/components/ChartsUsageDemo';

const knobs = {
  // Zoom interactions
  zoom: {
    knob: 'title',
    displayName: 'Zoom interactions',
  },
  wheel: {
    displayName: 'Wheel',
    knob: 'switch',
    defaultValue: true,
  },
  pinch: {
    displayName: 'Pinch',
    knob: 'switch',
    defaultValue: true,
  },
  tapAndDrag: {
    displayName: 'Tap and drag',
    knob: 'switch',
    defaultValue: false,
  },
  brush: {
    displayName: 'Brush',
    knob: 'switch',
    defaultValue: false,
  },
  doubleTapReset: {
    displayName: 'Double tap reset',
    knob: 'switch',
    defaultValue: false,
  },

  // Pan interactions
  pan: {
    knob: 'title',
    displayName: 'Pan interactions',
  },
  drag: {
    displayName: 'Drag',
    knob: 'switch',
    defaultValue: true,
  },
  pressAndDrag: {
    displayName: 'Press and drag',
    knob: 'switch',
    defaultValue: false,
  },
  wheelPan: {
    displayName: 'Pan on wheel',
    knob: 'switch',
    defaultValue: true,
  },
} as const;

export default function ZoomAndPanInteractions() {
  return (
    <ChartsUsageDemo
      componentName="Zoom and Pan Interactions demo"
      data={knobs}
      renderDemo={(props) => {
        // Build zoom interactions array
        const zoomInteractions: any[] = [];
        if (props.wheel) {
          zoomInteractions.push('wheel');
        }
        if (props.pinch) {
          zoomInteractions.push('pinch');
        }
        if (props.tapAndDrag) {
          zoomInteractions.push('tapAndDrag');
        }
        if (props.brush) {
          zoomInteractions.push('brush');
        }
        if (props.doubleTapReset) {
          zoomInteractions.push('doubleTapReset');
        }

        // Build pan interactions array
        const panInteractions: any[] = [];
        if (props.drag) {
          panInteractions.push('drag');
        }
        if (props.pressAndDrag) {
          panInteractions.push('pressAndDrag');
        }
        if (props.wheelPan) {
          panInteractions.push('wheel');
        }

        const zoomInteractionConfig = {
          zoom: zoomInteractions,
          pan: panInteractions,
        };

        return (
          <div style={{ width: '100%' }}>
            <ScatterChartPro
              height={300}
              xAxis={[
                {
                  data: data.map((v, i) => i),
                  zoom: true,
                },
              ]}
              yAxis={[
                {
                  zoom: true,
                  width: 40,
                },
              ]}
              series={series}
              zoomInteractionConfig={zoomInteractionConfig}
            />
          </div>
        );
      }}
      getCode={({ props }) => {
        // Build zoom interactions array for code generation
        const zoomInteractions: any[] = [];
        if (props.wheel) {
          zoomInteractions.push('wheel');
        }
        if (props.pinch) {
          zoomInteractions.push('pinch');
        }
        if (props.tapAndDrag) {
          zoomInteractions.push('tapAndDrag');
        }
        if (props.brush) {
          zoomInteractions.push('brush');
        }
        if (props.doubleTapReset) {
          zoomInteractions.push('doubleTapReset');
        }

        // Build pan interactions array
        const panInteractions: any[] = [];
        if (props.drag) {
          panInteractions.push('drag');
        }
        if (props.pressAndDrag) {
          panInteractions.push('pressAndDrag');
        }
        if (props.wheelPan) {
          panInteractions.push('wheel');
        }

        const zoomConfig =
          zoomInteractions.length > 0
            ? `["${zoomInteractions.join('", "')}"]`
            : '[]';
        const panConfig =
          panInteractions.length > 0 ? `["${panInteractions.join('", "')}"]` : '[]';

        return `import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

<ScatterChartPro
  // ...
  zoomInteractionConfig={{
    zoom: ${zoomConfig},
    pan: ${panConfig},
  }}
/>`;
      }}
    />
  );
}

const data = [
  {
    x: 443,
    y: 153,
  },
  {
    x: 110,
    y: 217,
  },
  {
    x: 175,
    y: 286,
  },
  {
    x: 195,
    y: 325,
  },
  {
    x: 351,
    y: 144,
  },
  {
    x: 43,
    y: 146,
  },
  {
    x: 376,
    y: 309,
  },
  {
    x: 31,
    y: 236,
  },
  {
    x: 231,
    y: 440,
  },
  {
    x: 108,
    y: 20,
  },
];

const series = [
  {
    label: 'Series A',
    data,
  },
];
import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';
import ChartsUsageDemo from 'docsx/src/modules/components/ChartsUsageDemo';

const knobs = {
  // Zoom interactions
  zoom: {
    knob: 'title',
    displayName: 'Zoom interactions',
  },
  wheel: {
    displayName: 'Wheel',
    knob: 'switch',
    defaultValue: true,
  },
  pinch: {
    displayName: 'Pinch',
    knob: 'switch',
    defaultValue: true,
  },
  tapAndDrag: {
    displayName: 'Tap and drag',
    knob: 'switch',
    defaultValue: false,
  },
  brush: {
    displayName: 'Brush',
    knob: 'switch',
    defaultValue: false,
  },
  doubleTapReset: {
    displayName: 'Double tap reset',
    knob: 'switch',
    defaultValue: false,
  },

  // Pan interactions
  pan: {
    knob: 'title',
    displayName: 'Pan interactions',
  },
  drag: {
    displayName: 'Drag',
    knob: 'switch',
    defaultValue: true,
  },
  pressAndDrag: {
    displayName: 'Press and drag',
    knob: 'switch',
    defaultValue: false,
  },
  wheelPan: {
    displayName: 'Pan on wheel',
    knob: 'switch',
    defaultValue: true,
  },
} as const;

export default function ZoomAndPanInteractions() {
  return (
    <ChartsUsageDemo
      componentName="Zoom and Pan Interactions demo"
      data={knobs}
      renderDemo={(props) => {
        // Build zoom interactions array
        const zoomInteractions: any[] = [];
        if (props.wheel) {
          zoomInteractions.push('wheel');
        }
        if (props.pinch) {
          zoomInteractions.push('pinch');
        }
        if (props.tapAndDrag) {
          zoomInteractions.push('tapAndDrag');
        }
        if (props.brush) {
          zoomInteractions.push('brush');
        }
        if (props.doubleTapReset) {
          zoomInteractions.push('doubleTapReset');
        }

        // Build pan interactions array
        const panInteractions: any[] = [];
        if (props.drag) {
          panInteractions.push('drag');
        }
        if (props.pressAndDrag) {
          panInteractions.push('pressAndDrag');
        }
        if (props.wheelPan) {
          panInteractions.push('wheel');
        }

        const zoomInteractionConfig = {
          zoom: zoomInteractions,
          pan: panInteractions,
        };

        return (
          <div style={{ width: '100%' }}>
            <ScatterChartPro
              height={300}
              xAxis={[
                {
                  data: data.map((v, i) => i),
                  zoom: true,
                },
              ]}
              yAxis={[
                {
                  zoom: true,
                  width: 40,
                },
              ]}
              series={series}
              zoomInteractionConfig={zoomInteractionConfig}
            />
          </div>
        );
      }}
      getCode={({ props }) => {
        // Build zoom interactions array for code generation
        const zoomInteractions: any[] = [];
        if (props.wheel) {
          zoomInteractions.push('wheel');
        }
        if (props.pinch) {
          zoomInteractions.push('pinch');
        }
        if (props.tapAndDrag) {
          zoomInteractions.push('tapAndDrag');
        }
        if (props.brush) {
          zoomInteractions.push('brush');
        }
        if (props.doubleTapReset) {
          zoomInteractions.push('doubleTapReset');
        }

        // Build pan interactions array
        const panInteractions: any[] = [];
        if (props.drag) {
          panInteractions.push('drag');
        }
        if (props.pressAndDrag) {
          panInteractions.push('pressAndDrag');
        }
        if (props.wheelPan) {
          panInteractions.push('wheel');
        }

        const zoomConfig =
          zoomInteractions.length > 0
            ? `["${zoomInteractions.join('", "')}"]`
            : '[]';
        const panConfig =
          panInteractions.length > 0 ? `["${panInteractions.join('", "')}"]` : '[]';

        return `import { ScatterChartPro } from '@mui/x-charts-pro/ScatterChartPro';

<ScatterChartPro
  // ...
  zoomInteractionConfig={{
    zoom: ${zoomConfig},
    pan: ${panConfig},
  }}
/>`;
      }}
    />
  );
}

const data = [
  {
    x: 443,
    y: 153,
  },
  {
    x: 110,
    y: 217,
  },
  {
    x: 175,
    y: 286,
  },
  {
    x: 195,
    y: 325,
  },
  {
    x: 351,
    y: 144,
  },
  {
    x: 43,
    y: 146,
  },
  {
    x: 376,
    y: 309,
  },
  {
    x: 31,
    y: 236,
  },
  {
    x: 231,
    y: 440,
  },
  {
    x: 108,
    y: 20,
  },
];

const series = [
  {
    label: 'Series A',
    data,
  },
];
Press Enter to start editing
Brush zoom

The brush zoom interaction allows users to select a specific area to zoom into by clicking and dragging to create a selection rectangle. This provides an intuitive way to focus on a particular region of interest in the chart.

Click and drag on the chart to select an area to zoom into. Double-tap to reset the zoom.

Temperature (°C)
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BrushZoom() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Click and drag on the chart to select an area to zoom into. Double-tap to
        reset the zoom.
      </Typography>
      <LineChartPro
        height={300}
        series={[
          {
            data: yData,
            label: 'Temperature (°C)',
            area: true,
          },
        ]}
        xAxis={[
          {
            data: xData,
            scaleType: 'point',
            zoom: true,
          },
        ]}
        zoomInteractionConfig={{
          // Enable brush zoom and double-tap reset
          zoom: ['brush', 'doubleTapReset'],
          // Disable default interactions for this demo
          pan: [],
        }}
      />
    </Box>
  );
}

const xData = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const yData = [2, 5.5, 9, 13.5, 18, 21, 23.5, 23, 20, 15, 9, 4];
import { LineChartPro } from '@mui/x-charts-pro/LineChartPro';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BrushZoom() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Click and drag on the chart to select an area to zoom into. Double-tap to
        reset the zoom.
      </Typography>
      <LineChartPro
        height={300}
        series={[
          {
            data: yData,
            label: 'Temperature (°C)',
            area: true,
          },
        ]}
        xAxis={[
          {
            data: xData,
            scaleType: 'point',
            zoom: true,
          },
        ]}
        zoomInteractionConfig={{
          // Enable brush zoom and double-tap reset
          zoom: ['brush', 'doubleTapReset'],
          // Disable default interactions for this demo
          pan: [],
        }}
      />
    </Box>
  );
}

const xData = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const yData = [2, 5.5, 9, 13.5, 18, 21, 23.5, 23, 20, 15, 9, 4];
Press Enter to start editing
Key modifiers

Some interactions allow setting up required keys to be pressed to enable the interaction. This can be set up using the requiredKeys property in the interaction configuration.

<BarChartPro
  zoomInteractionConfig={{
    // Only zoom when Control key is pressed
    zoom: [{ type: 'wheel', requiredKeys: ['Control'] }],
    // Only pan when Shift key is pressed
    pan: [{ type: 'drag', requiredKeys: ['Shift'] }],
  }}
/>

Copy
Available keys include:

Modifier keys: 'Shift', 'Control', 'Alt', 'Meta'
'ControlOrMeta' which resolves to Control on Windows and Linux and to Meta on macOS.
Any other key can be used as well, such as 'Space' and 'Enter' based on event.key values.
It is also possible to require multiple keys to be pressed simultaneously:

<BarChartPro
  zoomInteractionConfig={{
    // Only pan when both Shift and Control are pressed
    pan: [{ type: 'drag', requiredKeys: ['Shift', 'Control'] }],
  }}
/>

Copy
Pointer Modes

Interactions can also be restricted to specific pointer types by using the mode property:

<BarChartPro
  zoomInteractionConfig={{
    // Only pan with touch, not mouse
    pan: [{ type: 'drag', pointerMode: 'touch' }],
  }}
  // other props
/>

Copy
Available pointer modes:

undefined: Allow both mouse and touch interactions (default)
'mouse': Only allow mouse interactions
'touch': Only allow touch interactions
Multiple interactions of the same type

It is possible to define multiple interactions of the same type with different configurations.

In the example below, the pan drag interaction is configured to require a specific key combination for mouse, while touch interactions don't require any key to be pressed:

<BarChartPro
  zoomInteractionConfig={{
    pan: [
      { type: 'drag', pointerMode: 'mouse', requiredKeys: ['ControlOrMeta'] },
      { type: 'drag', pointerMode: 'touch', requiredKeys: [] },
    ],
  }}
  // other props
/>

Copy
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<BarChartPro />
<ChartZoomSlider />
<ChartsBrushOverlay />
<LineChartPro />
<ScatterChartPro />