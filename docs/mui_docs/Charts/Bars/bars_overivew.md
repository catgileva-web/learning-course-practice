Charts - Bars
Bar charts express quantities through a bar's length, using a common baseline.
ads via Carbon
Grow your database for up to 30% less this Black Friday. Advance servers have it covered. Up to 30.72 TB NVMe drives.
ads via Carbon

Overview

Bar charts are ideal for comparing discrete categories. They excel at visualizing differences in magnitude across categories (or a group of categories), highlight trends, and compare proportions at a glance. The categories can represent progressive values such as time periods, or independent groups such as products, countries, age brackets, etc. Here are the basic requirements to create a bar chart:

One categorical dimension (x-axis for vertical bars, y-axis for horizontal bars)
One or more numerical metric for length of each bar
The horizontal bar chart below compares voter turnout in some European countries:

European countries with lowest & highest voter turnout

lowest turnout
average
highest turnout
Basics

Bar charts series should contain a data property containing an array of values.

You can specify bar ticks with the xAxis prop. This axis might have scaleType='band' and its data should have the same length as your series.

<BarChart
  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
  series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
  height={300}
/>
<BarChart
  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
  series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
  height={300}
/>
Press Enter to start editing
Using a dataset

If your data is stored in an array of objects, you can use the dataset helper prop. It accepts an array of objects such as dataset={[{x: 1, y: 32}, {x: 2, y: 41}, ...]}.

You can reuse this data when defining the series and axis, thanks to the dataKey property.

For example xAxis={[{ dataKey: 'x'}]} or series={[{ dataKey: 'y'}]}.

London
Paris
New York
Seoul
<BarChart
  dataset={dataset}
  xAxis={[{ dataKey: 'month' }]}
  series={[
    { dataKey: 'london', label: 'London', valueFormatter },
    { dataKey: 'paris', label: 'Paris', valueFormatter },
    { dataKey: 'newYork', label: 'New York', valueFormatter },
    { dataKey: 'seoul', label: 'Seoul', valueFormatter },
  ]}
  {...chartSetting}
/>
<BarChart
  dataset={dataset}
  xAxis={[{ dataKey: 'month' }]}
  series={[
    { dataKey: 'london', label: 'London', valueFormatter },
    { dataKey: 'paris', label: 'Paris', valueFormatter },
    { dataKey: 'newYork', label: 'New York', valueFormatter },
    { dataKey: 'seoul', label: 'Seoul', valueFormatter },
  ]}
  {...chartSetting}
/>
Press Enter to start editing
Bar size

You can define bar dimensions with categoryGapRatio and barGapRatio properties.

The categoryGapRatio defines the gap between two categories. The ratio is obtained by dividing the size of the gap by the size of the category (the space used by bars).

The barGapRatio defines the gap between two bars of the same category. It's the size of the gap divided by the size of the bar. So a value of 1 will result in a gap between bars equal to the bar width. And a value of -1 will make bars overlap on top of each other.

Netflix balance sheet

Copy
import { BarChart } from '@mui/x-charts/BarChart';

<BarChart
  // ...
  xAxis={[
    {
      scaleType: 'band',
      data: ['Page 1', 'Page 2', 'Page 3'],
      categoryGapRatio: 0.3,
      barGapRatio: 0.1,
    },
  ]}
/>
Playground
categoryGapRatio
0.3
barGapRatio
0.1
Stacking

Each bar series can get a stack property expecting a string value. Series with the same stack will be stacked on top of each other.

Netflix balance sheet

<Typography>Netflix balance sheet</Typography>
<BarChart
  dataset={balanceSheet}
  series={addLabels([
    { dataKey: 'currAss', stack: 'assets' },
    { dataKey: 'nCurrAss', stack: 'assets' },
    { dataKey: 'curLia', stack: 'liability' },
    { dataKey: 'nCurLia', stack: 'liability' },
    { dataKey: 'capStock', stack: 'equity' },
    { dataKey: 'retEarn', stack: 'equity' },
    { dataKey: 'treas', stack: 'equity' },
  ])}
  xAxis={[{ dataKey: 'year' }]}
  {...config}
/>
<Typography>Netflix balance sheet</Typography>
<BarChart
  dataset={balanceSheet}
  series={addLabels([
    { dataKey: 'currAss', stack: 'assets' },
    { dataKey: 'nCurrAss', stack: 'assets' },
    { dataKey: 'curLia', stack: 'liability' },
    { dataKey: 'nCurLia', stack: 'liability' },
    { dataKey: 'capStock', stack: 'equity' },
    { dataKey: 'retEarn', stack: 'equity' },
    { dataKey: 'treas', stack: 'equity' },
  ])}
  xAxis={[{ dataKey: 'year' }]}
  {...config}
/>
Press Enter to start editing
Stacking strategy

You can use the stackOffset and stackOrder properties to define how the series will be stacked.

By default, they are stacked in the order you defined them, with positive values stacked above 0 and negative values stacked below 0.

For more information, see stacking docs.

Layout

Bar direction

Bar charts can be rendered with a horizontal layout by providing the layout="horizontal" prop. If you're using composition, you should set the property layout: 'horizontal' to each bar series object.

Seoul rainfall
<BarChart
  dataset={dataset}
  yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
  series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
  layout="horizontal"
  {...chartSetting}
/>
<BarChart
  dataset={dataset}
  yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
  series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
  layout="horizontal"
  {...chartSetting}
/>
Press Enter to start editing
Tick placement

When using a "band" scale, the axis has some additional customization properties about the tick position.

tickPlacement for the position of ticks
tickLabelPlacement for the position of the label associated with the tick
You can test all configuration options in the following demo:

tickPlacement
start
end
middle
extremities
tickLabelPlacement
tick
middle
Seoul rainfall
<TickParamsSelector
  tickPlacement={tickPlacement}
  tickLabelPlacement={tickLabelPlacement}
  setTickPlacement={setTickPlacement}
  setTickLabelPlacement={setTickLabelPlacement}
/>
<BarChart
  dataset={dataset}
  xAxis={[{ dataKey: 'month', tickPlacement, tickLabelPlacement }]}
  {...chartSetting}
/>
<TickParamsSelector
  tickPlacement={tickPlacement}
  tickLabelPlacement={tickLabelPlacement}
  setTickPlacement={setTickPlacement}
  setTickLabelPlacement={setTickLabelPlacement}
/>
<BarChart
  dataset={dataset}
  xAxis={[{ dataKey: 'month', tickPlacement, tickLabelPlacement }]}
  {...chartSetting}
/>
Press Enter to start editing
Minimum bar size

You can set a minimum bar size with the minBarSize property. This property is useful when you want to ensure that bars are always visible, even when the data is sparse or the chart is small.

The minBarSize property is ignored if the series value is null or 0. It also doesn't work with stacked series.

minBarSize: 10px


Log scale

A bar chart renders a bar from 0 to the value of a data point. However, the logarithm of zero is undefined, meaning that a y-axis with a log scale cannot plot the bar.

You can work around this limitation by using a symlog scale.

Customization

Grid

You can add a grid in the background of the chart with the grid prop.

See Axis—Grid documentation for more information.

Seoul rainfall
<BarChart
  dataset={dataset}
  yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
  series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
  layout="horizontal"
  grid={{ vertical: true }}
  {...chartSetting}
/>
<BarChart
  dataset={dataset}
  yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
  series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
  layout="horizontal"
  grid={{ vertical: true }}
  {...chartSetting}
/>
Press Enter to start editing
Color scale

As with other charts, you can modify the series color either directly, or with the color palette.

You can also modify the color by using axes colorMap which maps values to colors. The bar charts use by priority:

The value axis color
The band axis color
The series color
Learn more about the colorMap properties in the Styling docs.

piecewise
x-axis colorMap
None
y-axis colorMap
<BarChart
  /* ... */
  xAxis={[{
    colorMap: {
      type: 'piecewise',
      thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
      colors: ['blue', 'red', 'blue'],
    }
  }]}
  yAxis={[{}]}
/>
Border radius

To give your bar chart rounded corners, you can change the value of the borderRadius property on the BarChart.

It works with any positive value and is properly applied to horizontal layouts, stacks, and negative values.

Border Radius


10
vertical
layout
High
Low
<BarChart
  // ...
  borderRadius={10}
/>
CSS

You can customize the bar chart elements using CSS selectors.

Each series renders a g element that contains a data-series attribute. You can use this attribute to target elements based on their series.

<BarChart
  {...settings}
  sx={{
    [`& .${barClasses.series}[data-series="2"] .${barElementClasses.root}`]: {
      fill: 'url(#bar-gradient)',
    },
    [`& .${barClasses.seriesLabels}[data-series="2"] .${barLabelClasses.root}`]:
      {
        fontWeight: 'bold',
      },
  }}
>
  <defs>
    <Gradient id="bar-gradient" />
  </defs>
</BarChart>
<BarChart
  {...settings}
  sx={{
    [`& .${barClasses.series}[data-series="2"] .${barElementClasses.root}`]: {
      fill: 'url(#bar-gradient)',
    },
    [`& .${barClasses.seriesLabels}[data-series="2"] .${barLabelClasses.root}`]:
      {
        fontWeight: 'bold',
      },
  }}
>
  <defs>
    <Gradient id="bar-gradient" />
  </defs>
</BarChart>
Press Enter to start editing
Gradients

By default, a gradient's units are set to objectBoundingBox. When applied to a bar, the gradient stretches to fill the entire size of the bar, regardless of the bar's value.

Alternatively, you can set gradientUnits to userSpaceOnUse, which stretches the gradient to fill the entire size of the chart. userSpaceOnUse means that the gradient's coordinates are relative to the SVG, meaning that a gradient with x1="0" and x2="100%" stretches across the entire width of the SVG. This effectively reveals the gradient depending on the bar's value, as the gradient is clipped to the bar's size.

Household Savings in OECD Countries (2016)
Gradient Units
objectBoundingBox (default)
userSpaceOnUse
Source: Our World in Data
Note that, in the example above, there are two gradients:

The series color property references the gradient with gradientUnits="objectBoundingBox", which is applied to the tooltip, legend, and other elements that reference the series color.
The bar's fill property is overridden using CSS to reference the gradient with gradientUnits="userSpaceOnUse".
The first gradient is used for elements showing the whole gradient, such as tooltips and legend. The second one is shown in the bars themselves that display the part of the gradient that corresponds to their value.

Labels

You can display labels on the bars. This can be useful to show the value of each bar directly on the chart.

If you provide 'value' to the barLabel property of a bar series, the value of that bar is shown. Alternatively, the barLabel property accepts a function that is called with the bar item and context about the bar.

In the example below, the value of the first series is displayed using the default formatter, and format the value of the second series as US dollars. The labels of the third series are hidden.

<BarChart
  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
  series={[
    { data: [4, 3, 5], barLabel: 'value' },
    {
      data: [1, 6, 3],
      barLabel: (item) => dollarFormatter.format(item.value!),
    },
    { data: [2, 5, 6] },
  ]}
  height={300}
  margin={{ left: 0 }}
  yAxis={[{ width: 30 }]}
/>
<BarChart
  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
  series={[
    { data: [4, 3, 5], barLabel: 'value' },
    {
      data: [1, 6, 3],
      barLabel: (item) => dollarFormatter.format(item.value!),
    },
    { data: [2, 5, 6] },
  ]}
  height={300}
  margin={{ left: 0 }}
  yAxis={[{ width: 30 }]}
/>
Press Enter to start editing
Label placement

The position of the bar label can be customized. To do so, set a series' barLabelPlacement property to one of the following values:

center: the label is centered on the bar;
outside: the label is placed after the end of the bar, from the point of the view of the origin. For a vertical positive bar, the label is above its top edge; for a horizontal negative bar, the label is placed to the left of its leftmost limit.
<BarChart
  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
  series={[
    { data: [1, 1, -4], barLabel: 'value', barLabelPlacement: 'outside' },
    { data: [2, 0, -1], barLabel: 'value', barLabelPlacement: 'center' },
    { data: [3, -1, 4], barLabel: 'value' },
  ]}
  height={300}
  yAxis={[{ width: 30, min: -5 }]}
/>
<BarChart
  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
  series={[
    { data: [1, 1, -4], barLabel: 'value', barLabelPlacement: 'outside' },
    { data: [2, 0, -1], barLabel: 'value', barLabelPlacement: 'center' },
    { data: [3, -1, 4], barLabel: 'value' },
  ]}
  height={300}
  yAxis={[{ width: 30, min: -5 }]}
/>
Press Enter to start editing
When using outside placement, if the label does not fit in the chart area, it will be clipped. To avoid this, you can decrease/increase the axis min/max respectively so that there's enough space for the labels.

Custom labels

You can display, change, or hide labels based on conditional logic. To do so, provide a function to the barLabel. Labels are not displayed if the function returns null.

In the example we display a 'High' text on values higher than 10, and hide values when the generated bar height is lower than 60px.

Series A1
Series A2
Series B1
<BarChart
  series={[
    { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
    { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },
    { data: [14, 6, 5, 8, 9], label: 'Series B1' },
  ]}
  barLabel={(item, context) => {
    if ((item.value ?? 0) > 10) {
      return 'High';
    }
    return context.bar.height < 60 ? null : item.value?.toString();
  }}
  height={350}
  margin={{ left: 0 }}
/>
<BarChart
  series={[
    { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
    { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },
    { data: [14, 6, 5, 8, 9], label: 'Series B1' },
  ]}
  barLabel={(item, context) => {
    if ((item.value ?? 0) > 10) {
      return 'High';
    }
    return context.bar.height < 60 ? null : item.value?.toString();
  }}
  height={350}
  margin={{ left: 0 }}
/>
Press Enter to start editing
You can further customize the labels by providing a component to the barLabel slot.

In the example below, we position the labels above the bars they refer to.

<ChartContainer
  xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C'] }]}
  series={[{ type: 'bar', id: 'base', data: [5, 17, 11] }]}
  height={400}
  yAxis={[{ width: 30 }]}
  margin={{ left: 0, right: 10 }}
>
  <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
  <ChartsXAxis />
  <ChartsYAxis />
</ChartContainer>
<ChartContainer
  xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C'] }]}
  series={[{ type: 'bar', id: 'base', data: [5, 17, 11] }]}
  height={400}
  yAxis={[{ width: 30 }]}
  margin={{ left: 0, right: 10 }}
>
  <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
  <ChartsXAxis />
  <ChartsYAxis />
</ChartContainer>
Press Enter to start editing
Click event

Bar charts provides two click handlers:

onItemClick for click on a specific bar.
onAxisClick for a click anywhere in the chart
They both provide the following signature.

const clickHandler = (
  event, // The mouse event.
  params, // An object that identifies the clicked elements.
) => {};

Copy
A
B
C
Click on the chart

// Data from item click
// The data will appear here

// Data from axis click
// The data will appear here
There is a slight difference between the event of onItemClick and onAxisClick:

For onItemClick it's a React synthetic mouse event emitted by the bar component.
For onAxisClick it's a native mouse event emitted by the svg component.
If you're composing a custom component, you can incorporate click events as shown in the code snippet below. Note that onAxisClick can handle both bar and line series if you mix them.

<ChartContainer onAxisClick={onAxisClick}>
  {/* ... */}
  <BarPlot onItemClick={onItemClick} />
</ChartContainer>

Copy
Animation

Chart containers respect prefers-reduced-motion, but you can also disable animations manually by setting the skipAnimation prop to true.

When skipAnimation is enabled, the chart renders without any animations.

// For a single component chart
<BarChart skipAnimation />

// For a composed chart
<ChartContainer>
  <BarPlot skipAnimation />
</ChartContainer>

Copy
series 1
series 2
skipAnimation
Number of items


5
Number of series


2
Composition

Use the <ChartDataProvider /> to provide series, xAxis, and yAxis props for composition.

In addition to the common chart components available for composition, you can use the <BarPlot /> component that renders the bars and their labels.

Here's how the Bar Chart is composed:

<ChartDataProvider>
  <ChartsWrapper>
    <ChartsLegend />
    <ChartsSurface>
      <ChartsGrid />
      <g clipPath={`url(#${clipPathId})`}>
        <BarPlot />
        <ChartsOverlay />
        <ChartsAxisHighlight />
      </g>
      <ChartsAxis />
      <ChartsClipPath id={clipPathId} />
    </ChartsSurface>
    <ChartsTooltip />
  </ChartsWrapper>
</ChartDataProvider>

Copy
GDP growth rate comparison (2024 vs 2010-19 Avg)
2024
2010-19 Average
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<BarChart />
<BarChartPro />
<BarElement />
<BarLabel />
<BarPlot />
<ChartsGrid />