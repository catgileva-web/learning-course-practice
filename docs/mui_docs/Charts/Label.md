Charts - Label
Label is the text reference of a series or data.
ads via Carbon
AMD-Powered Servers. Extend blockchain infra securely & globally with private linking (vRack). Deploy now
ads via Carbon

Basic display

To set a series' label, you can pass in a string as a series' property label. The provided label will be visible at different locations such as the legend, or the tooltip.

The Pie chart has some specificity described in its own section.

label 1
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicLabel() {
  return (
    <BarChart
      {...props}
      series={[
        {
          data: [2400, 1398, 9800],
          label: 'label 1',
        },
      ]}
    />
  );
}

const props = {
  height: 300,
  xAxis: [{ data: ['A', 'B', 'C'] }],
  yAxis: [{ width: 50 }],
};
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicLabel() {
  return (
    <BarChart
      {...props}
      series={[
        {
          data: [2400, 1398, 9800],
          label: 'label 1',
        },
      ]}
    />
  );
}

const props = {
  height: 300,
  xAxis: [{ data: ['A', 'B', 'C'] }],
  yAxis: [{ width: 50 }],
};
Press Enter to start editing
Swagger by SmartBear - Swagger sets the standard for API design, testing, and governance to get you AI-Ready.
ad by Carbon
Conditional formatting

The label property also accepts a function that lets you change the label content based on location.

The function receives location as its first argument which can have the following values:

'legend' to format the label in the Legend
'tooltip' to format the label in the Tooltip
simple label
legend label
import { BarChart } from '@mui/x-charts/BarChart';

export default function FunctionLabel() {
  return (
    <BarChart
      {...props}
      series={[
        { data: [2400, 1398, 9800], label: 'simple label' },
        { data: [500, 2398, 4300], label: (location) => `${location} label` },
      ]}
    />
  );
}

const props = {
  height: 300,
  xAxis: [{ data: ['A', 'B', 'C'] }],
  yAxis: [{ width: 50 }],
};
import { BarChart } from '@mui/x-charts/BarChart';

export default function FunctionLabel() {
  return (
    <BarChart
      {...props}
      series={[
        { data: [2400, 1398, 9800], label: 'simple label' },
        { data: [500, 2398, 4300], label: (location) => `${location} label` },
      ]}
    />
  );
}

const props = {
  height: 300,
  xAxis: [{ data: ['A', 'B', 'C'] }],
  yAxis: [{ width: 50 }],
};
Press Enter to start editing
SmartBear - Innovate your SDLC with SmartBear AI to transform your software development and testing processes.
ad by Carbon
Pie

The Pie chart behaves differently due to its nature. It has labels per slice instead of per series. It also has one more place where the label can be rendered.

Instead of receiving the label as part of the series. It instead receives it as part of the data set inside a series.

Its location argument can have the following values:

'legend' to format the label in the Legend
'tooltip' to format the label in the Tooltip
'arc' to format the Arc label when arcLabel is set to 'label'
legend+A
legend+B
legend+C
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieLabel() {
  return (
    <PieChart
      {...props}
      series={[
        {
          data: [
            { id: 0, value: 10, label: (location) => `${location}+A` },
            { id: 1, value: 15, label: (location) => `${location}+B` },
            { id: 2, value: 20, label: (location) => `${location}+C` },
          ],
          type: 'pie',
          arcLabel: 'label',
        },
      ]}
    />
  );
}

const props = {
  width: 200,
  height: 200,
};
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieLabel() {
  return (
    <PieChart
      {...props}
      series={[
        {
          data: [
            { id: 0, value: 10, label: (location) => `${location}+A` },
            { id: 1, value: 15, label: (location) => `${location}+B` },
            { id: 2, value: 20, label: (location) => `${location}+C` },
          ],
          type: 'pie',
          arcLabel: 'label',
        },
      ]}
    />
  );
}

const props = {
  width: 200,
  height: 200,
};
Press Enter to start editing
AWS - Accelerate innovation, reduce costs, and secure your data with AWS cloud storage.
ad by Carbon
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<BarChart />
<LineChart />
<PieChart />
<ScatterChart />
