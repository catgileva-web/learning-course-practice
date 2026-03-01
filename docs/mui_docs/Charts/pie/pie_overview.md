Charts - Pie
Pie charts express portions of a whole, using arcs or angles within a circle.
ads via Carbon
Cloud solutions built for developers. Simple ordering. Instant delivery. Open Source. Discover more
ads via Carbon

Overview

Pie charts are ideal for showing proportions of a whole. They excel at visualizing how categories contribute to a total, making relative shares easy to compare at a glance. Here are the basic requirements to create a pie chart:

One categorical dimension (each category represented as a slice)
One numerical metric representing the value or size of each slice (converted into percentage of the whole)
The pie chart below compares survival rates of passengers in different classes on the Titanic:

Titanic survival statistics
import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

interface TitanicDatum {
  Class: '1st' | '2nd' | '3rd' | 'Crew';
  Survived: 'Yes' | 'No';
  Count: number;
}

interface ChartDatum {
  id: string;
  label: string;
  value: number;
  percentage: number;
  color: string;
}

type ClassType = '1st' | '2nd' | '3rd' | 'Crew';

// Convert hex color to rgba with opacity
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// https://en.wikipedia.org/wiki/Passengers_of_the_Titanic#/media/File:Titanic_casualties.svg
const titanicData: TitanicDatum[] = [
  { Class: '1st', Survived: 'No', Count: 123 },
  { Class: '1st', Survived: 'Yes', Count: 202 },
  { Class: '2nd', Survived: 'No', Count: 167 },
  { Class: '2nd', Survived: 'Yes', Count: 118 },
  { Class: '3rd', Survived: 'No', Count: 528 },
  { Class: '3rd', Survived: 'Yes', Count: 178 },
  { Class: 'Crew', Survived: 'No', Count: 696 },
  { Class: 'Crew', Survived: 'Yes', Count: 212 },
];

const classes: ClassType[] = ['1st', '2nd', '3rd', 'Crew'];

const totalCount = titanicData.reduce(
  (acc: number, item: TitanicDatum) => acc + item.Count,
  0,
);

// Define colors for each class
const classColors: Record<ClassType, string> = {
  '1st': '#fa938e',
  '2nd': '#98bf45',
  '3rd': '#51cbcf',
  Crew: '#d397ff',
};

// Different opacity based on class
const opacityMap: Record<ClassType, number> = {
  '1st': 0.9,
  '2nd': 0.7,
  '3rd': 0.5,
  Crew: 0.3,
};

const classData: ChartDatum[] = classes.map((pClass: ClassType) => {
  const classTotal = titanicData
    .filter((item: TitanicDatum) => item.Class === pClass)
    .reduce((acc: number, item: TitanicDatum) => acc + item.Count, 0);
  return {
    id: pClass,
    label: `${pClass} Class:`,
    value: classTotal,
    percentage: (classTotal / totalCount) * 100,
    color: classColors[pClass],
  };
});

const classSurvivalData: ChartDatum[] = classes.flatMap((pClass: ClassType) => {
  const classTotal = classData.find((d: ChartDatum) => d.id === pClass)!.value ?? 0;
  const baseColor = classColors[pClass];
  return titanicData
    .filter((item: TitanicDatum) => item.Class === pClass)
    .sort((a: TitanicDatum, b: TitanicDatum) => (a.Survived > b.Survived ? 1 : -1))
    .map((item: TitanicDatum) => ({
      id: `${pClass}-${item.Survived}`,
      label: item.Survived,
      value: item.Count,
      percentage: (item.Count / classTotal) * 100,
      color: item.Survived === 'Yes' ? baseColor : `${baseColor}80`, // 80 is 50% opacity for 'No'
    }));
});

// Create a simplified dataset that groups all classes together for Yes/No
const survivalData: ChartDatum[] = [
  {
    id: 'Yes',
    label: 'Survived:',
    value: titanicData
      .filter((item: TitanicDatum) => item.Survived === 'Yes')
      .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0),
    percentage:
      (titanicData
        .filter((item: TitanicDatum) => item.Survived === 'Yes')
        .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['3rd'],
  },
  {
    id: 'No',
    label: 'Did not survive:',
    value: titanicData
      .filter((item: TitanicDatum) => item.Survived === 'No')
      .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0),
    percentage:
      (titanicData
        .filter((item: TitanicDatum) => item.Survived === 'No')
        .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['1st'],
  },
];

// Create dataset for class distribution by survival status (Yes first, then No)
const survivalClassData: ChartDatum[] = [...titanicData]
  .sort((a: TitanicDatum) => (a.Survived === 'Yes' ? -1 : 1))
  .map((item: TitanicDatum) => {
    const baseColor = survivalData.find(
      (d: ChartDatum) => d.id === item.Survived,
    )!.color;
    return {
      id: `${item.Class}-${item.Survived}`,
      label: `${item.Class} class:`,
      value: item.Count,
      percentage:
        (item.Count /
          (item.Survived === 'Yes'
            ? survivalData[0]!.value
            : survivalData[1]!.value)) *
        100,
      color: hexToRgba(baseColor, opacityMap[item.Class] || 1),
    };
  });

const StyledText = styled('text')(({ theme }: { theme: Theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

interface PieCenterLabelProps {
  children: React.ReactNode;
}

function PieCenterLabel({ children }: PieCenterLabelProps): React.ReactElement {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

type ViewType = 'class' | 'survival';

export default function TitanicPie(): React.ReactElement {
  const [view, setView] = React.useState<ViewType>('class');
  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: ViewType | null,
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const innerRadius = 50;
  const middleRadius = 120;

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Titanic survival statistics
      </Typography>
      <ToggleButtonGroup
        color="primary"
        size="small"
        value={view}
        exclusive
        onChange={handleViewChange}
      >
        <ToggleButton value="class">View by Class</ToggleButton>
        <ToggleButton value="survival">View by Survival</ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 400 }}>
        {view === 'class' ? (
          <PieChart
            series={[
              {
                innerRadius,
                outerRadius: middleRadius,
                data: classData,
                arcLabel: (item) =>
                  `${item.id} (${(item as any).percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
              {
                innerRadius: middleRadius,
                outerRadius: middleRadius + 20,
                data: classSurvivalData,
                arcLabel: (item) =>
                  `${item.label} (${(item as any).percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                arcLabelRadius: 160,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontSize: '12px',
              },
            }}
            hideLegend
          >
            <PieCenterLabel>Class</PieCenterLabel>
          </PieChart>
        ) : (
          <PieChart
            series={[
              {
                innerRadius,
                outerRadius: middleRadius,
                data: survivalData,
                arcLabel: (item) =>
                  `${item.id} (${(item as any).percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
              {
                innerRadius: middleRadius,
                outerRadius: middleRadius + 20,
                data: survivalClassData,
                arcLabel: (item) => {
                  const id = (item as any).id || '';
                  const percentage = (item as any).percentage || 0;
                  return `${id.split('-')[0]} (${percentage.toFixed(0)}%)`;
                },
                arcLabelRadius: 160,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontSize: '12px',
              },
            }}
            hideLegend
          >
            <PieCenterLabel>Survived</PieCenterLabel>
          </PieChart>
        )}
      </Box>
    </Box>
  );
}
import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

interface TitanicDatum {
  Class: '1st' | '2nd' | '3rd' | 'Crew';
  Survived: 'Yes' | 'No';
  Count: number;
}

interface ChartDatum {
  id: string;
  label: string;
  value: number;
  percentage: number;
  color: string;
}

type ClassType = '1st' | '2nd' | '3rd' | 'Crew';

// Convert hex color to rgba with opacity
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// https://en.wikipedia.org/wiki/Passengers_of_the_Titanic#/media/File:Titanic_casualties.svg
const titanicData: TitanicDatum[] = [
  { Class: '1st', Survived: 'No', Count: 123 },
  { Class: '1st', Survived: 'Yes', Count: 202 },
  { Class: '2nd', Survived: 'No', Count: 167 },
  { Class: '2nd', Survived: 'Yes', Count: 118 },
  { Class: '3rd', Survived: 'No', Count: 528 },
  { Class: '3rd', Survived: 'Yes', Count: 178 },
  { Class: 'Crew', Survived: 'No', Count: 696 },
  { Class: 'Crew', Survived: 'Yes', Count: 212 },
];

const classes: ClassType[] = ['1st', '2nd', '3rd', 'Crew'];

const totalCount = titanicData.reduce(
  (acc: number, item: TitanicDatum) => acc + item.Count,
  0,
);

// Define colors for each class
const classColors: Record<ClassType, string> = {
  '1st': '#fa938e',
  '2nd': '#98bf45',
  '3rd': '#51cbcf',
  Crew: '#d397ff',
};

// Different opacity based on class
const opacityMap: Record<ClassType, number> = {
  '1st': 0.9,
  '2nd': 0.7,
  '3rd': 0.5,
  Crew: 0.3,
};

const classData: ChartDatum[] = classes.map((pClass: ClassType) => {
  const classTotal = titanicData
    .filter((item: TitanicDatum) => item.Class === pClass)
    .reduce((acc: number, item: TitanicDatum) => acc + item.Count, 0);
  return {
    id: pClass,
    label: `${pClass} Class:`,
    value: classTotal,
    percentage: (classTotal / totalCount) * 100,
    color: classColors[pClass],
  };
});

const classSurvivalData: ChartDatum[] = classes.flatMap((pClass: ClassType) => {
  const classTotal = classData.find((d: ChartDatum) => d.id === pClass)!.value ?? 0;
  const baseColor = classColors[pClass];
  return titanicData
    .filter((item: TitanicDatum) => item.Class === pClass)
    .sort((a: TitanicDatum, b: TitanicDatum) => (a.Survived > b.Survived ? 1 : -1))
    .map((item: TitanicDatum) => ({
      id: `${pClass}-${item.Survived}`,
      label: item.Survived,
      value: item.Count,
      percentage: (item.Count / classTotal) * 100,
      color: item.Survived === 'Yes' ? baseColor : `${baseColor}80`, // 80 is 50% opacity for 'No'
    }));
});

// Create a simplified dataset that groups all classes together for Yes/No
const survivalData: ChartDatum[] = [
  {
    id: 'Yes',
    label: 'Survived:',
    value: titanicData
      .filter((item: TitanicDatum) => item.Survived === 'Yes')
      .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0),
    percentage:
      (titanicData
        .filter((item: TitanicDatum) => item.Survived === 'Yes')
        .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['3rd'],
  },
  {
    id: 'No',
    label: 'Did not survive:',
    value: titanicData
      .filter((item: TitanicDatum) => item.Survived === 'No')
      .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0),
    percentage:
      (titanicData
        .filter((item: TitanicDatum) => item.Survived === 'No')
        .reduce((sum: number, item: TitanicDatum) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['1st'],
  },
];

// Create dataset for class distribution by survival status (Yes first, then No)
const survivalClassData: ChartDatum[] = [...titanicData]
  .sort((a: TitanicDatum) => (a.Survived === 'Yes' ? -1 : 1))
  .map((item: TitanicDatum) => {
    const baseColor = survivalData.find(
      (d: ChartDatum) => d.id === item.Survived,
    )!.color;
    return {
      id: `${item.Class}-${item.Survived}`,
      label: `${item.Class} class:`,
      value: item.Count,
      percentage:
        (item.Count /
          (item.Survived === 'Yes'
            ? survivalData[0]!.value
            : survivalData[1]!.value)) *
        100,
      color: hexToRgba(baseColor, opacityMap[item.Class] || 1),
    };
  });

const StyledText = styled('text')(({ theme }: { theme: Theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

interface PieCenterLabelProps {
  children: React.ReactNode;
}

function PieCenterLabel({ children }: PieCenterLabelProps): React.ReactElement {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

type ViewType = 'class' | 'survival';

export default function TitanicPie(): React.ReactElement {
  const [view, setView] = React.useState<ViewType>('class');
  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: ViewType | null,
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const innerRadius = 50;
  const middleRadius = 120;

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Titanic survival statistics
      </Typography>
      <ToggleButtonGroup
        color="primary"
        size="small"
        value={view}
        exclusive
        onChange={handleViewChange}
      >
        <ToggleButton value="class">View by Class</ToggleButton>
        <ToggleButton value="survival">View by Survival</ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 400 }}>
        {view === 'class' ? (
          <PieChart
            series={[
              {
                innerRadius,
                outerRadius: middleRadius,
                data: classData,
                arcLabel: (item) =>
                  `${item.id} (${(item as any).percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
              {
                innerRadius: middleRadius,
                outerRadius: middleRadius + 20,
                data: classSurvivalData,
                arcLabel: (item) =>
                  `${item.label} (${(item as any).percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                arcLabelRadius: 160,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontSize: '12px',
              },
            }}
            hideLegend
          >
            <PieCenterLabel>Class</PieCenterLabel>
          </PieChart>
        ) : (
          <PieChart
            series={[
              {
                innerRadius,
                outerRadius: middleRadius,
                data: survivalData,
                arcLabel: (item) =>
                  `${item.id} (${(item as any).percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
              {
                innerRadius: middleRadius,
                outerRadius: middleRadius + 20,
                data: survivalClassData,
                arcLabel: (item) => {
                  const id = (item as any).id || '';
                  const percentage = (item as any).percentage || 0;
                  return `${id.split('-')[0]} (${percentage.toFixed(0)}%)`;
                },
                arcLabelRadius: 160,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontSize: '12px',
              },
            }}
            hideLegend
          >
            <PieCenterLabel>Survived</PieCenterLabel>
          </PieChart>
        )}
      </Box>
    </Box>
  );
}
Press Enter to start editing
GetStream.io - Build in-app chat, video & moderation, faster with enterprise-grade reliability
ad by Carbon
Basics

Pie charts series must contain a data property containing an array of objects. Each object corresponds to a slice of the pie. It must contain a property value and can have other optional properties like label.

If you plan to update/reorder those data, you should add an id property which is used for key props.

series A
series B
series C
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  );
}
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  );
}
Press Enter to start editing
AWS - Build and deploy your dream web app with powerful cloud hosting from AWS.
ad by Carbon
Donut chart

A donut chart (or doughnut chart) is essentially a pie chart with a hollow center.

You can transform any pie chart into a donut chart by setting the innerRadius property to a value greater than 0.

import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export default function DonutChart() {
  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
      {...settings}
    />
  );
}
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export default function DonutChart() {
  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
      {...settings}
    />
  );
}
Press Enter to start editing
Pluralsight - Learn five ways to advance your tech career in 2025
ad by Carbon
Colors

The pie colors can be customized in two ways.

You can provide a color palette. Each arc of the pie will be colored according to this palette.
You can provide a color property in data objects which overrides the palette.
<PieChart
  colors={['red', 'blue', 'green']} // Use palette
  series={[
    {
      data: [
        { value: 10, color: 'orange' }, // Use color property
        // ...
      ],
    },
  ]}
/>

Copy
Default

Palette

Item

./PieColor.tsx
./webUsageStats.ts
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { platforms } from './webUsageStats';

const palette = ['lightcoral', 'slateblue'];

const colorPerItem = [
  { ...platforms[0], color: 'orange' },
  { ...platforms[1], color: 'gray' },
];

export default function PieColor() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Default</Typography>
        <PieChart
          series={[
            {
              data: platforms,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart
          colors={palette}
          series={[
            {
              data: platforms,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Item</Typography>
        <PieChart
          series={[
            {
              data: colorPerItem,
            },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  hideLegend: true,
};
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { platforms } from './webUsageStats';

const palette = ['lightcoral', 'slateblue'];

const colorPerItem = [
  { ...platforms[0], color: 'orange' },
  { ...platforms[1], color: 'gray' },
];

export default function PieColor() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Default</Typography>
        <PieChart
          series={[
            {
              data: platforms,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart
          colors={palette}
          series={[
            {
              data: platforms,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Item</Typography>
        <PieChart
          series={[
            {
              data: colorPerItem,
            },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  hideLegend: true,
};
Press Enter to start editing
AWS - Databases that are secure, reliable, and built for performance.
ad by Carbon
Sizing

Pie series shape is described by multiple properties:

innerRadius The radius between the center and the beginning of the arc. The default is set to 0.
outerRadius The radius between the center and the end of the arc. The default is the largest value available in the drawing area.
arcLabelRadius The radius between the center and the arc label.
paddingAngle The angle (in degrees) between two arcs.
cornerRadius Similar to the CSS border-radius.
startAngle/endAngle The angle range of the pie chart. Values are given in degrees.
cx/cy The center of the pie charts. By default the middle of the drawing area.
Copy
import { PieChart } from '@mui/x-charts/PieChart';

<PieChart
  series={[
    {
      data: [ ... ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 150,
    }
  ]}
/>
Playground
innerRadius
30
outerRadius
100
paddingAngle
5
cornerRadius
5
startAngle
-45
endAngle
225
cx
150
cy
150
The following properties accept percentage string (for example '50%').

innerRadius/outerRadius/arcLabelRadius with '100%' equivalent to maximal radius fitting in the drawing area.
cx, cy with '100%' equivalent to the drawing area width/height.
Labels

You can display labels on the arcs. To do so, the series should get arcLabel property. It can either get a function that gets the object associated with the arc and returns the label. Or you can pass one of the following values:

'value' display the raw value of the arc.
'formattedValue' display the returned value of valueFormatter for the arc.
'label' display the label property of the arc if provided.
To avoid displaying labels on small arcs, you can provide arcLabelMinAngle property. Arcs with angles smaller than the value (in deg) will not have labels.

Windows
OS X
Linux
Chrome OS
Other
./PieArcLabel.tsx
./webUsageStats.ts
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}

const size = {
  width: 200,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}

const size = {
  width: 200,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
Press Enter to start editing
AWS - AWS Compute offers scalable and flexible computing resources to power your business growth.
ad by Carbon
Highlight

Pie series can get highlightScope property to manage element highlighting. Its behavior is described in the dedicated page.

When elements are highlighted or faded they can be customized with dedicated CSS classes: .MuiPieArc-faded and .MuiPieArc-highlighted.

CSS is well suited to modify the color, stroke-width, or opacity. However, to modify the size of a pie arc, you must use the highlighted and faded properties, with which you can override any of the properties innerRadius, outerRadius, and cornerRadius when an arc is highlighted or faded.

If you do not want to provide absolute values, you can use additionalRadius which will be added to the outerRadius. This value can be negative to reduce arc size.

Windows
OS X
Linux
Chrome OS
Other
./PieActiveArc.tsx
./webUsageStats.ts
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={200}
      width={200}
    />
  );
}
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={200}
      width={200}
    />
  );
}
Press Enter to start editing
DoiT Cloud Intelligence™ - A strategic guide to cloud financial planning for FinOps leaders
ad by Carbon
Click event

Pie Chart provides an onItemClick handler for handling clicks on specific pie arcs. It has the following signature.

const onItemClick = (
  event, // The mouse event.
  params, // An object that identifies the clicked element.
) => {};

Copy
Click on the chart

// Data from item click
// The data will appear here
CSS

You can customize the different elements rendered by a pie chart using CSS.

In the example below, the outer series is selected using the data-series attribute to reduce its opacity.

<PieChart
  {...settings}
  sx={{
    [`.${pieClasses.series}[data-series="outer"] .${pieArcClasses.root}`]: {
      opacity: 0.6,
    },
  }}
/>
<PieChart
  {...settings}
  sx={{
    [`.${pieClasses.series}[data-series="outer"] .${pieArcClasses.root}`]: {
      opacity: 0.6,
    },
  }}
/>
Press Enter to start editing
Animation

Chart containers respect prefers-reduced-motion, but you can also disable animations manually by setting the skipAnimation prop to true.

When skipAnimation is enabled, the chart renders without any animations.

// For a single component chart
<PieChart skipAnimation />

// For a composed chart
<ChartContainer>
  <PiePlot skipAnimation />
</ChartContainer>

Copy
Android
iOS
Other (Mobile)
Windows
OS X
skipAnimation
Number of items


5
Radius


50
Composition

Use the <ChartDataProvider /> to provide the series prop for composition.

In addition to the common chart components available for composition, you can use the <PiePlot /> component that renders the pie slices and their labels.

Here's how the Pie Chart is composed:

<ChartDataProvider plugins={PIE_CHART_PLUGINS}>
  <ChartsWrapper>
    <ChartsLegend />
    <ChartsSurface>
      <PiePlot />
      <ChartsOverlay />
    </ChartsSurface>
    <ChartsTooltip trigger="item" />
  </ChartsWrapper>
</ChartDataProvider>

Copy
The <ChartDataProvider /> accepts a plugins prop. This is done to remove cartesian-axis features which are useless for a pie chart, and interfere with the pie position.

For pro users, use the PIE_CHART_PRO_PLUGINS instead to activate the export feature.

API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<ChartsWrapper />
<PieArc />
<PieArcLabel />
<PieArcLabelPlot />
<PieArcPlot />
<PieChart />
<PieChartPro />
<PiePlot />
