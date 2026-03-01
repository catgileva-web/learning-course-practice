Charts - Tooltip
Tooltip provides extra data on charts item.
ads via Carbon
Accelerate innovation, reduce costs, and secure your data with AWS cloud storage.
ads via Carbon

In all charts components, the tooltip is accessible via the slot tooltip. If you are using composition, you can use the <ChartsTooltip /> component.

Tooltip trigger

The Tooltip can be triggered by two kinds of events:

'item'—when the user's mouse hovers over an item on the chart, the tooltip displays data about this specific item.
'axis'—the user's mouse position is associated with a value of the x-axis. The tooltip displays data about all series at this specific x value.
'none'—disable the tooltip.
To pass this trigger attribute to the tooltip use slotProps.tooltip.trigger.

<BarChart {...barChartsParams} slotProps={{ tooltip: { trigger: 'axis' } }} />
<BarChart {...barChartsParams} slotProps={{ tooltip: { trigger: 'item' } }} />
<BarChart {...barChartsParams} slotProps={{ tooltip: { trigger: 'axis' } }} />
<BarChart {...barChartsParams} slotProps={{ tooltip: { trigger: 'item' } }} />
Press Enter to start editing
Web Awesome - Build faster with Web Awesome — open-source web components for modern developers.
ad by Carbon
Formatting

The format of data rendered in the tooltip can be modified thanks to the series valueFormatter property. The same can be applied to axes values when a tooltip is triggered by the 'axis'.

Here is a demo with:

The time axis values formatted to only show the year
The series values are formatted in U.S. Dollars.
French GDP per capita
German GDP per capita
UK GDP per capita
<LineChart
  {...lineChartsParams}
  xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
  series={lineChartsParams.series.map((series) => ({
    ...series,
    valueFormatter: (v) => (v === null ? '' : currencyFormatter(v)),
  }))}
/>
<LineChart
  {...lineChartsParams}
  xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
  series={lineChartsParams.series.map((series) => ({
    ...series,
    valueFormatter: (v) => (v === null ? '' : currencyFormatter(v)),
  }))}
/>
Press Enter to start editing
Auth0 - All the connections, none of the limits. Unlimited Okta and social connections on our Free Plan.
ad by Carbon
Advanced formatting

The series valueFormatter provides a context as its second argument containing a dataIndex property which you can use to calculate other data-related values.

In the demo below you can notice we use dataIndex to add each team's rank in the tooltip.

Amber Ants
Eagle Warriors
Elephant Trunk
Jaguars
Smooth Pandas
<PieChart
  series={[
    {
      data: data.map((d) => ({ label: d.team, id: d.team, value: d.points })),
      valueFormatter: (v, { dataIndex }) => {
        const { rank } = data[dataIndex];
        return `has ${v.value} points and is ranked ${rank}.`;
      },
    },
  ]}
  {...otherProps}
/>
<PieChart
  series={[
    {
      data: data.map((d) => ({ label: d.team, id: d.team, value: d.points })),
      valueFormatter: (v, { dataIndex }) => {
        const { rank } = data[dataIndex];
        return `has ${v.value} points and is ranked ${rank}.`;
      },
    },
  ]}
  {...otherProps}
/>
Press Enter to start editing
AWS - Accelerate innovation, reduce costs, and secure your data with AWS cloud storage.
ad by Carbon
Axis formatter

To modify how data is displayed in the axis use the valueFormatter property.

Its second argument is a context that provides a location property with either 'tick' or 'tooltip'.

In this demo, you can see:

The country axis displays only the country code
The label displays annotated data Country: name (code)
<BarChart
  xAxis={[
    {
      scaleType: 'band',
      dataKey: 'code',
      valueFormatter: (code, context) =>
        context.location === 'tick'
          ? code
          : `Country: ${dataset.find((d) => d.code === code)?.name} (${code})`,
    },
  ]}
  {...chartParams}
/>
<BarChart
  xAxis={[
    {
      scaleType: 'band',
      dataKey: 'code',
      valueFormatter: (code, context) =>
        context.location === 'tick'
          ? code
          : `Country: ${dataset.find((d) => d.code === code)?.name} (${code})`,
    },
  ]}
  {...chartParams}
/>
Press Enter to start editing
Label formatting

The label text inside the tooltip can also be formatted conditionally by providing a function to the series label property.

Here is an example of how to shorten series label in the tooltip but not the legend.

<LineChart
  // ...
  series={[
    {
      data: [ ... ],
      label: (location) => location === 'tooltip' ? 'BR' : 'Brazil'
    }
  ]}
/>

Copy
See Label—Conditional formatting for more details.

Hiding values

Axis

You can hide the axis value with hideTooltip in the axis props. It removes the header showing the x-axis value from the tooltip.

<LineChart
  // ...
  xAxis={[{ data: [ ... ], hideTooltip: true }]}
/>

Copy
Series

To hide a series, the formatted value should be null. To display the series with a blank space, return an empty string.

Position

By default the tooltip is placed relative to the pointer position. If the pointer is not available, it is placed relative to the node instead (for example, the bar in a bar chart).

This behavior can be modified with the anchor, position, and placement props.

The anchor: 'pointer' | 'node' indicates if the tooltip should be placed relative to the pointer or the node.
The position: 'top' | 'right' | 'bottom' | 'left' defines the anchor position compared to the node. This prop has no effect if the anchor is the pointer.
The placement is the tooltip placement from PopperJS. It specifies the tooltip position in relation to the anchor position. By default the same value as position if defined.
For example, setting anchor: 'node', position: 'bottom' and placement: 'top' on a bar chart would render a tooltip above the bottom of a bar.

You can pass those props to the tooltip using slotProps.tooltip, or directly to either <ChartsTooltip /> or <ChartsTooltipContainer /> if you're using composition.

Monthly precipitation
London
Paris
New York
Seoul
Copy
import { BarChart } from '@mui/x-charts/BarChart';

<BarChart
  // ...
  slotProps={{
    tooltip: {
      trigger: 'item',
        anchor: node,
        position: top,
      },
    }}
/>
Playground
anchor
node

position
top

placement
undefined

Style modification

The tooltip can be styled using CSS classes, similar to other elements. However, there is one caveat regarding using portal.

The tooltip renders as a child of the document's body element. From a DOM perspective, it's not inside the chart. So using the chart's sx prop as follows does not work:

import { chartsTooltipClasses } from '@mui/x-charts';

<LineChart
  sx={{
    [`& .${chartsTooltipClasses.root} .${chartsTooltipClasses.valueCell}`]: {
      color: 'red',
    },
  }}
/>;

Copy
To apply the same style as above, use the sx prop of the tooltip itself, which should be set in slotProps.tooltip.

<LineChart
  {...params}
  slotProps={{
    tooltip: {
      sx: {
        [`&.${chartsTooltipClasses.root} .${chartsTooltipClasses.valueCell}`]: {
          color: 'red',
        },
      },
    },
  }}
/>
<LineChart
  {...params}
  slotProps={{
    tooltip: {
      sx: {
        [`&.${chartsTooltipClasses.root} .${chartsTooltipClasses.valueCell}`]: {
          color: 'red',
        },
      },
    },
  }}
/>
Press Enter to start editing
Another option is to disable the portal by setting slotProps.tooltip.disablePortal to true. In that case, the tooltip renders as a child of the chart, and CSS rules apply as expected.

Using a custom tooltip

For advanced use cases, it can be necessary to create your own tooltip. You can replace the default tooltip in single component charts by using slots.

<LineChart slots={{ tooltip: CustomItemTooltip }} />

Copy
With composition, you can use your component inside the ChartDataProvider.

<ChartDataProvider>
  <ChartsSurface>{/* ... */}</ChartsSurface>
  <CustomItemTooltip />
</ChartDataProvider>

Copy
Creating a tooltip

To create your custom tooltip, the library exports some helpers which are explained in the following sections:

<ChartsTooltipContainer /> a wrapper providing the open/close state and the position of the tooltip.
<ChartsItemTooltipContent /> renders the content of the default item tooltip.
<ChartsAxisTooltipContent /> renders the content of the default axis tooltip.
useItemTooltip() provides all basic information associated to the current item tooltip.
useAxesTooltip() provides all basic information associated to the current axes tooltip.
Modifying the position

To override the tooltip position, you can create a wrapper that manages the position.

function CustomTooltipPopper(props){
  // ... (event management) ...

  return <NoSsr>
      <Popper {/* position */}>
        {props.children}
      </Popper>
    </NoSsr>
}

Copy
Then you can either render built-in content (with <ChartsItemTooltipContent /> or <ChartsAxisTooltipContent />) or your own component.

<CustomTooltipPopper>
  <ChartsItemTooltipContent />
</CustomTooltipPopper>

Copy
The following demo shows how to use additional hooks such as useXAxis() and useDrawingArea() to customize the tooltip position.

tooltip placement
mouse
top of chart
top of bar
Modifying the content
To keep the default placement, use the <ChartsTooltipContainer /> wrapper. It accepts a prop trigger = 'item' | 'axis' that defines when the Popper should open.

Item content
The useItemTooltip() hook provides the information about the current item the user is interacting with. It contains:

identifier: An object that identify the item. Which often contains its series type, series id, and data index.
color: The color used to display the item. This includes the impact of color map.
label, value, formattedValue: Values computed to simplify the tooltip creation.
Axis content
The useAxesTooltip() hook returns the information about the current axes user is interacting with and the relevant series. For each axis, it contains:

identifier: An object that identify the axis. Which often contains its series type, series id, and data index.
color: The color used to display the item. This includes the impact of color map.
label, value, formattedValue: Values computed to simplify the tooltip creation.
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<ChartsAxisTooltipContent />
<ChartsItemTooltipContent />
<ChartsTooltip />
<ChartsTooltipContainer />