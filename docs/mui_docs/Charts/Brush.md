Charts - Brush
The brush interaction allows users to select a region on the chart by clicking and dragging.

Overview

The brush feature provides a way to track user selections on charts through a click-and-drag interaction. It captures the start and current positions of the user's selection, which can be used for various purposes such as:

Highlighting trends or clusters within a defined range
Selecting data points for further inspection, editing, or annotation
Triggering callbacks or custom events based on the selection area
The brush is available in the LineChart, BarChart, and ScatterChart types and provides visual feedback through the ChartsBrushOverlay component.

Basic usage

The brush gesture can be enabled by setting brushConfig={{ enabled: true }} in a cartesian chart.

By default, the brush gesture has no visual feedback. If you want to see the selected area, you can add the ChartsBrushOverlay component as a child of your chart.

Alternatively, if you want to create a custom interaction, you can use the useBrush hook, as shown in the Custom overlay section below.

Click and drag on the chart to see the brush selection overlay.

Sales
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartsBrushOverlay } from '@mui/x-charts/ChartsBrushOverlay';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BrushBasic() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Click and drag on the chart to see the brush selection overlay.
      </Typography>
      <BarChart
        height={300}
        series={[
          {
            data: [4, 8, 6, 12, 9, 15, 11, 14, 13, 18, 16, 20],
            label: 'Sales',
          },
        ]}
        brushConfig={{ enabled: true }}
        xAxis={[{ data: xAxisData }]}
      >
        <ChartsBrushOverlay />
      </BarChart>
    </Box>
  );
}

const xAxisData = [
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
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartsBrushOverlay } from '@mui/x-charts/ChartsBrushOverlay';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BrushBasic() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Click and drag on the chart to see the brush selection overlay.
      </Typography>
      <BarChart
        height={300}
        series={[
          {
            data: [4, 8, 6, 12, 9, 15, 11, 14, 13, 18, 16, 20],
            label: 'Sales',
          },
        ]}
        brushConfig={{ enabled: true }}
        xAxis={[{ data: xAxisData }]}
      >
        <ChartsBrushOverlay />
      </BarChart>
    </Box>
  );
}

const xAxisData = [
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
Press Enter to start editing
Customization examples

Custom overlay

You can create a custom brush overlay by building your own component that uses the useBrush hook. This example shows how to display the values at the start and end positions, along with the difference and percentage change between them.

Custom brush overlay showing the values at start and end positions, and the difference between them.

Market Value
import { LineChart } from '@mui/x-charts/LineChart';
import {
  useBrush,
  useDrawingArea,
  useLineSeries,
  useXScale,
} from '@mui/x-charts/hooks';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CustomBrushOverlay() {
  const theme = useTheme();
  const drawingArea = useDrawingArea();
  const brush = useBrush();
  const xScale = useXScale<'point'>();
  const series = useLineSeries('marketValue');

  if (!brush || !series) {
    return null;
  }

  const { left, top, width, height } = drawingArea;

  // Clamp coordinates to drawing area
  const clampX = (x: number) => Math.max(left, Math.min(left + width, x));
  const clampedStartX = clampX(brush.start.x!);
  const clampedCurrentX = clampX(brush.current.x!);

  const minX = Math.min(clampedStartX, clampedCurrentX);
  const maxX = Math.max(clampedStartX, clampedCurrentX);
  const rectWidth = maxX - minX;

  const color = theme.palette.primary.main;

  if (rectWidth < 1) {
    return null;
  }

  const getIndex = (x: number) =>
    Math.floor(
      (x - Math.min(...xScale.range()) + xScale.step() / 2) / xScale.step(),
    );
  // Calculate the approximate data indices based on x position
  const startIndex = getIndex(clampedStartX);
  const currentIndex = getIndex(clampedCurrentX);

  const startValue = series.data[startIndex]!;
  const currentValue = series.data[currentIndex]!;
  const difference = currentValue - startValue;
  const percentChange = ((difference / startValue) * 100).toFixed(2);

  // Get the date labels
  const startDate = (xScale.domain()[startIndex] as string) || '';
  const currentDate = (xScale.domain()[currentIndex] as string) || '';

  return (
    <g>
      {/* Start line */}
      <line
        x1={clampedStartX}
        y1={top}
        x2={clampedStartX}
        y2={top + height}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5,5"
        pointerEvents="none"
      />

      {/* Current line */}
      <line
        x1={clampedCurrentX}
        y1={top}
        x2={clampedCurrentX}
        y2={top + height}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5,5"
        pointerEvents="none"
      />

      {/* Selection rectangle */}
      <rect
        x={minX}
        y={top}
        width={rectWidth}
        height={height}
        fill={color}
        fillOpacity={0.1}
        pointerEvents="none"
      />

      {/* Start label */}
      <g transform={`translate(${clampedStartX}, ${top + 15})`}>
        <rect x={-30} y={0} width={60} height={40} fill={color} rx={4} />
        {/* Date label */}
        <text x={0} y={16} textAnchor="middle" fill="white" fontSize={10}>
          {startDate}
        </text>
        {/* Value label */}
        <text
          x={0}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={11}
          fontWeight="bold"
        >
          {startValue.toFixed(2)}
        </text>
      </g>

      {/* End label */}
      <g transform={`translate(${clampedCurrentX}, ${top + 15})`}>
        <rect x={-30} y={0} width={60} height={40} fill={color} rx={4} />
        {/* Date label */}
        <text x={0} y={16} textAnchor="middle" fill="white" fontSize={10}>
          {currentDate}
        </text>
        {/* Value label */}
        <text
          x={0}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={11}
          fontWeight="bold"
        >
          {currentValue.toFixed(2)}
        </text>
      </g>

      {/* Difference label in the middle */}
      <g transform={`translate(${(minX + maxX) / 2}, ${top + height - 30})`}>
        <rect
          x={-50}
          y={0}
          width={100}
          height={26}
          fill={
            difference >= 0 ? theme.palette.success.main : theme.palette.error.main
          }
          rx={4}
        />
        <text
          x={0}
          y={17}
          textAnchor="middle"
          fill="white"
          fontSize={12}
          fontWeight="bold"
        >
          {difference >= 0 ? '+' : ''}
          {difference.toFixed(2)} ({percentChange}%)
        </text>
      </g>
    </g>
  );
}

const marketData = [
  100, 96.56, 97.04, 98.95, 102.66, 106.18, 107.76, 109.78, 113.57, 111.54, 107.69,
  104.58, 106.62, 103.81, 104.46, 105.14, 108.94, 112.81, 112.62, 117.52, 122.17,
  122.11, 121.44, 122.5, 125.42, 127.46, 129.21, 124.71, 125.0, 125.28, 125.15,
  125.06, 120.48, 115.83, 116.47, 119.58, 118.99, 123.46, 126.83, 130.84, 131.12,
  131.31, 129.14, 133.35, 130.15, 129.02, 132.57, 136.1, 139.33, 139.66,
];
const dates = Array.from({ length: 50 }, (_, i) => {
  const date = new Date(2024, 0, i + 1);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
});

export default function BrushCustomOverlay() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Custom brush overlay showing the values at start and end positions, and the
        difference between them.
      </Typography>
      <LineChart
        height={300}
        series={[
          {
            data: marketData,
            label: 'Market Value',
            showMark: false,
            id: 'marketValue',
          },
        ]}
        brushConfig={{ enabled: true }}
        xAxis={[
          {
            data: dates,
            scaleType: 'point',
          },
        ]}
      >
        <CustomBrushOverlay />
      </LineChart>
    </Box>
  );
}
import { LineChart } from '@mui/x-charts/LineChart';
import {
  useBrush,
  useDrawingArea,
  useLineSeries,
  useXScale,
} from '@mui/x-charts/hooks';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CustomBrushOverlay() {
  const theme = useTheme();
  const drawingArea = useDrawingArea();
  const brush = useBrush();
  const xScale = useXScale<'point'>();
  const series = useLineSeries('marketValue');

  if (!brush || !series) {
    return null;
  }

  const { left, top, width, height } = drawingArea;

  // Clamp coordinates to drawing area
  const clampX = (x: number) => Math.max(left, Math.min(left + width, x));
  const clampedStartX = clampX(brush.start.x!);
  const clampedCurrentX = clampX(brush.current.x!);

  const minX = Math.min(clampedStartX, clampedCurrentX);
  const maxX = Math.max(clampedStartX, clampedCurrentX);
  const rectWidth = maxX - minX;

  const color = theme.palette.primary.main;

  if (rectWidth < 1) {
    return null;
  }

  const getIndex = (x: number) =>
    Math.floor(
      (x - Math.min(...xScale.range()) + xScale.step() / 2) / xScale.step(),
    );
  // Calculate the approximate data indices based on x position
  const startIndex = getIndex(clampedStartX);
  const currentIndex = getIndex(clampedCurrentX);

  const startValue = series.data[startIndex]!;
  const currentValue = series.data[currentIndex]!;
  const difference = currentValue - startValue;
  const percentChange = ((difference / startValue) * 100).toFixed(2);

  // Get the date labels
  const startDate = (xScale.domain()[startIndex] as string) || '';
  const currentDate = (xScale.domain()[currentIndex] as string) || '';

  return (
    <g>
      {/* Start line */}
      <line
        x1={clampedStartX}
        y1={top}
        x2={clampedStartX}
        y2={top + height}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5,5"
        pointerEvents="none"
      />

      {/* Current line */}
      <line
        x1={clampedCurrentX}
        y1={top}
        x2={clampedCurrentX}
        y2={top + height}
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5,5"
        pointerEvents="none"
      />

      {/* Selection rectangle */}
      <rect
        x={minX}
        y={top}
        width={rectWidth}
        height={height}
        fill={color}
        fillOpacity={0.1}
        pointerEvents="none"
      />

      {/* Start label */}
      <g transform={`translate(${clampedStartX}, ${top + 15})`}>
        <rect x={-30} y={0} width={60} height={40} fill={color} rx={4} />
        {/* Date label */}
        <text x={0} y={16} textAnchor="middle" fill="white" fontSize={10}>
          {startDate}
        </text>
        {/* Value label */}
        <text
          x={0}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={11}
          fontWeight="bold"
        >
          {startValue.toFixed(2)}
        </text>
      </g>

      {/* End label */}
      <g transform={`translate(${clampedCurrentX}, ${top + 15})`}>
        <rect x={-30} y={0} width={60} height={40} fill={color} rx={4} />
        {/* Date label */}
        <text x={0} y={16} textAnchor="middle" fill="white" fontSize={10}>
          {currentDate}
        </text>
        {/* Value label */}
        <text
          x={0}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={11}
          fontWeight="bold"
        >
          {currentValue.toFixed(2)}
        </text>
      </g>

      {/* Difference label in the middle */}
      <g transform={`translate(${(minX + maxX) / 2}, ${top + height - 30})`}>
        <rect
          x={-50}
          y={0}
          width={100}
          height={26}
          fill={
            difference >= 0 ? theme.palette.success.main : theme.palette.error.main
          }
          rx={4}
        />
        <text
          x={0}
          y={17}
          textAnchor="middle"
          fill="white"
          fontSize={12}
          fontWeight="bold"
        >
          {difference >= 0 ? '+' : ''}
          {difference.toFixed(2)} ({percentChange}%)
        </text>
      </g>
    </g>
  );
}

const marketData = [
  100, 96.56, 97.04, 98.95, 102.66, 106.18, 107.76, 109.78, 113.57, 111.54, 107.69,
  104.58, 106.62, 103.81, 104.46, 105.14, 108.94, 112.81, 112.62, 117.52, 122.17,
  122.11, 121.44, 122.5, 125.42, 127.46, 129.21, 124.71, 125.0, 125.28, 125.15,
  125.06, 120.48, 115.83, 116.47, 119.58, 118.99, 123.46, 126.83, 130.84, 131.12,
  131.31, 129.14, 133.35, 130.15, 129.02, 132.57, 136.1, 139.33, 139.66,
];
const dates = Array.from({ length: 50 }, (_, i) => {
  const date = new Date(2024, 0, i + 1);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
});

export default function BrushCustomOverlay() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Custom brush overlay showing the values at start and end positions, and the
        difference between them.
      </Typography>
      <LineChart
        height={300}
        series={[
          {
            data: marketData,
            label: 'Market Value',
            showMark: false,
            id: 'marketValue',
          },
        ]}
        brushConfig={{ enabled: true }}
        xAxis={[
          {
            data: dates,
            scaleType: 'point',
          },
        ]}
      >
        <CustomBrushOverlay />
      </LineChart>
    </Box>
  );
}
Press Enter to start editing
Data selection

The brush can also be used to select and display data points within the selection area. This example shows a scatter chart where you can select points by dragging, and the selected points are displayed below the chart.

Drag to select points on the scatter chart. Selected points will be displayed below.

No points selected. Drag on the chart to select data points.

import * as React from 'react';
import { ChartDataProvider } from '@mui/x-charts/ChartDataProvider';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { ChartsAxis } from '@mui/x-charts/ChartsAxis';
import {
  useBrush,
  useScatterSeries,
  useXScale,
  useYScale,
} from '@mui/x-charts/hooks';
import { ChartsBrushOverlay } from '@mui/x-charts/ChartsBrushOverlay';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const scatterData = [
  { x: 5, y: 12, id: 1 },
  { x: 12, y: 18, id: 2 },
  { x: 18, y: 9, id: 3 },
  { x: 25, y: 22, id: 4 },
  { x: 32, y: 15, id: 5 },
  { x: 40, y: 28, id: 6 },
  { x: 48, y: 20, id: 7 },
  { x: 55, y: 35, id: 8 },
  { x: 62, y: 25, id: 9 },
  { x: 70, y: 40, id: 10 },
  { x: 78, y: 32, id: 11 },
  { x: 85, y: 45, id: 12 },
  { x: 15, y: 30, id: 13 },
  { x: 35, y: 38, id: 14 },
  { x: 50, y: 42, id: 15 },
  { x: 65, y: 36, id: 16 },
  { x: 22, y: 25, id: 17 },
  { x: 44, y: 33, id: 18 },
  { x: 58, y: 29, id: 19 },
  { x: 72, y: 37, id: 20 },
];

const empty: { x: number; y: number; id: number }[] = [];

function ChartContent() {
  return (
    <React.Fragment>
      <ScatterPlot />
      <ChartsAxis />
      <ChartsBrushOverlay />
    </React.Fragment>
  );
}

function SelectedPointsList() {
  const brush = useBrush();
  const series = useScatterSeries('data');
  const xScale = useXScale<'linear'>();
  const yScale = useYScale<'linear'>();

  const selectedData = React.useMemo(() => {
    if (!brush || !series || !xScale || !yScale) {
      return empty;
    }

    const { start, current } = brush;

    // Get the min/max x and y positions
    const minX = Math.min(start.x!, current.x!);
    const maxX = Math.max(start.x!, current.x!);
    const minY = Math.min(start.y!, current.y!);
    const maxY = Math.max(start.y!, current.y!);

    // Convert pixel coordinates back to data values
    const minDataX = xScale.invert(minX);
    const maxDataX = xScale.invert(maxX);
    const minDataY = yScale.invert(maxY);
    const maxDataY = yScale.invert(minY);

    // Filter data points within the brush selection
    const d = series.data
      .map((point, index) => ({
        x: point.x as number,
        y: point.y as number,
        id: (point.id as number) ?? index + 1,
      }))
      .filter((point) => {
        return (
          point.x >= (minDataX as number) &&
          point.x <= (maxDataX as number) &&
          point.y >= (minDataY as number) &&
          point.y <= (maxDataY as number)
        );
      });

    return d;
  }, [brush, series, xScale, yScale]);

  if (selectedData.length === 0) {
    return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="text.secondary">
          No points selected. Drag on the chart to select data points.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Selected Points ({selectedData.length}):
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
        {selectedData.map((point) => (
          <Chip
            key={point.id}
            label={`#${point.id}: (${point.x}, ${point.y})`}
            color="primary"
            variant="outlined"
            size="small"
          />
        ))}
      </Stack>
    </Box>
  );
}

export default function BrushScatterList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Drag to select points on the scatter chart. Selected points will be displayed
        below.
      </Typography>
      <ChartDataProvider
        series={[
          {
            type: 'scatter',
            data: scatterData,
            id: 'data',
            label: 'Data Points',
          },
        ]}
        xAxis={[{ id: 'x-axis', min: 0, max: 100 }]}
        yAxis={[{ id: 'y-axis', min: 0, max: 50 }]}
        height={400}
        brushConfig={{ enabled: true }}
      >
        <ChartsSurface>
          <ChartContent />
        </ChartsSurface>
        <SelectedPointsList />
      </ChartDataProvider>
    </Box>
  );
}
import * as React from 'react';
import { ChartDataProvider } from '@mui/x-charts/ChartDataProvider';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { ChartsAxis } from '@mui/x-charts/ChartsAxis';
import {
  useBrush,
  useScatterSeries,
  useXScale,
  useYScale,
} from '@mui/x-charts/hooks';
import { ChartsBrushOverlay } from '@mui/x-charts/ChartsBrushOverlay';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const scatterData = [
  { x: 5, y: 12, id: 1 },
  { x: 12, y: 18, id: 2 },
  { x: 18, y: 9, id: 3 },
  { x: 25, y: 22, id: 4 },
  { x: 32, y: 15, id: 5 },
  { x: 40, y: 28, id: 6 },
  { x: 48, y: 20, id: 7 },
  { x: 55, y: 35, id: 8 },
  { x: 62, y: 25, id: 9 },
  { x: 70, y: 40, id: 10 },
  { x: 78, y: 32, id: 11 },
  { x: 85, y: 45, id: 12 },
  { x: 15, y: 30, id: 13 },
  { x: 35, y: 38, id: 14 },
  { x: 50, y: 42, id: 15 },
  { x: 65, y: 36, id: 16 },
  { x: 22, y: 25, id: 17 },
  { x: 44, y: 33, id: 18 },
  { x: 58, y: 29, id: 19 },
  { x: 72, y: 37, id: 20 },
];

const empty: { x: number; y: number; id: number }[] = [];

function ChartContent() {
  return (
    <React.Fragment>
      <ScatterPlot />
      <ChartsAxis />
      <ChartsBrushOverlay />
    </React.Fragment>
  );
}

function SelectedPointsList() {
  const brush = useBrush();
  const series = useScatterSeries('data');
  const xScale = useXScale<'linear'>();
  const yScale = useYScale<'linear'>();

  const selectedData = React.useMemo(() => {
    if (!brush || !series || !xScale || !yScale) {
      return empty;
    }

    const { start, current } = brush;

    // Get the min/max x and y positions
    const minX = Math.min(start.x!, current.x!);
    const maxX = Math.max(start.x!, current.x!);
    const minY = Math.min(start.y!, current.y!);
    const maxY = Math.max(start.y!, current.y!);

    // Convert pixel coordinates back to data values
    const minDataX = xScale.invert(minX);
    const maxDataX = xScale.invert(maxX);
    const minDataY = yScale.invert(maxY);
    const maxDataY = yScale.invert(minY);

    // Filter data points within the brush selection
    const d = series.data
      .map((point, index) => ({
        x: point.x as number,
        y: point.y as number,
        id: (point.id as number) ?? index + 1,
      }))
      .filter((point) => {
        return (
          point.x >= (minDataX as number) &&
          point.x <= (maxDataX as number) &&
          point.y >= (minDataY as number) &&
          point.y <= (maxDataY as number)
        );
      });

    return d;
  }, [brush, series, xScale, yScale]);

  if (selectedData.length === 0) {
    return (
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="text.secondary">
          No points selected. Drag on the chart to select data points.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Selected Points ({selectedData.length}):
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
        {selectedData.map((point) => (
          <Chip
            key={point.id}
            label={`#${point.id}: (${point.x}, ${point.y})`}
            color="primary"
            variant="outlined"
            size="small"
          />
        ))}
      </Stack>
    </Box>
  );
}

export default function BrushScatterList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Drag to select points on the scatter chart. Selected points will be displayed
        below.
      </Typography>
      <ChartDataProvider
        series={[
          {
            type: 'scatter',
            data: scatterData,
            id: 'data',
            label: 'Data Points',
          },
        ]}
        xAxis={[{ id: 'x-axis', min: 0, max: 100 }]}
        yAxis={[{ id: 'y-axis', min: 0, max: 50 }]}
        height={400}
        brushConfig={{ enabled: true }}
      >
        <ChartsSurface>
          <ChartContent />
        </ChartsSurface>
        <SelectedPointsList />
      </ChartDataProvider>
    </Box>
  );
}
Press Enter to start editing
Using the useBrush hook

The useBrush hook provides access to the current brush state.

The hook returns an object with:

start - The starting point of the brush selection ({ x: number, y: number } | null)
current - The current point of the brush selection ({ x: number, y: number } | null)
import { useBrush } from '@mui/x-charts/hooks';

function MyCustomOverlay() {
  const brush = useBrush();

  // No brush is in progress
  if (!brush) {
    return null;
  }

  const { start, current } = brush;

  // start.x, start.y - The coordinates where the brush started
  // current.x, current.y - The current coordinates of the brush

  return <g>{/* Your custom overlay */}</g>;
}

Copy
Configuration

The brushConfig prop accepts an object with the following options:

enabled (boolean, default: false) - Whether the brush interaction is enabled
preventTooltip (boolean, default: true) - Whether to prevent tooltip from showing during brush interaction
preventHighlight (boolean, default: true) - Whether to prevent highlighting during brush interaction
Example:

<LineChart
  brushConfig={{
    enabled: true,
    preventTooltip: true,
    preventHighlight: true,
  }}
  // ... other props
/>

Copy
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<ChartsBrushOverlay />
