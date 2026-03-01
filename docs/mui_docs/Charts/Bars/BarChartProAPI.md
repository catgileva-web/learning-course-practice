BarChartPro API
API reference docs for the React BarChartPro component. Learn about the props, CSS, and other APIs of this exported module.
ads via Carbon
Built to meet your blockchain needs: High-Performance AMD Dedicated Servers. Deploy now
ads via Carbon

Demos
For examples and details on the usage of this React component, visit the component demo pages:

Charts - Bars
Charts - Export 
Charts - Zoom and pan 
Import
Copy
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
// or
import { BarChartPro } from '@mui/x-charts-pro';
Learn about the difference by reading this guide on minimizing bundle size.

Props
Props of the native component are also available.

Name	Type	Default	Description
series*	Array<object>	-	
The series to display in the bar chart. An array of BarSeries objects.

axisHighlight	{ x?: 'band'
| 'line'
| 'none', y?: 'band'
| 'line'
| 'none' }	-	
The configuration of axes highlight. Default is set to 'band' in the bar direction. Depends on layout prop.

See highlighting docs for more details.

borderRadius	number	-	
Defines the border radius of the bar element.

brushConfig	{ enabled?: bool, preventHighlight?: bool, preventTooltip?: bool }	-	
Configuration for the brush interaction.

colors	Array<string>
| func	rainbowSurgePalette	
Color palette used to colorize multiple series.

dataset	Array<object>	-	
An array of objects that can be used to populate series and axes data using their dataKey property.

disableAxisListener	bool	false	
If true, the charts will not listen to the mouse move event. It might break interactive features, but will improve performance.

grid	{ horizontal?: bool, vertical?: bool }	-	
Option to display a cartesian grid in the background.

height	number	-	
The height of the chart in px. If not defined, it takes the height of the parent element.

hideLegend	bool	-	
If true, the legend is not rendered.

highlightedAxis	Array<{ axisId: number
| string, dataIndex: number }>	-	
The controlled axis highlight. Identified by the axis id, and data index.

highlightedItem	{ dataIndex?: number, seriesId: number
| string }	-	
The highlighted item. Used when the highlight is controlled.

id	string	-	
This prop is used to help implement the accessibility logic. If you don't provide this prop. It falls back to a randomly generated id.

initialZoom	Array<{ axisId: number
| string, end: number, start: number }>	-	
The list of zoom data related to each axis. Used to initialize the zoom in a specific configuration without controlling it.

layout	'horizontal'
| 'vertical'	'vertical'	
The direction of the bar elements.

loading	bool	false	
If true, a loading overlay is displayed.

localeText	object	-	
Localized text for chart components.

margin	number
| { bottom?: number, left?: number, right?: number, top?: number }	-	
The margin between the SVG and the drawing area. It's used for leaving some space for extra information such as the x- and y-axis or legend.
Accepts a number to be used on all sides or an object with the optional properties: top, bottom, left, and right.

onAxisClick	func	-	
The function called for onClick events. The second argument contains information about all line/bar elements at the current mouse position.

Signature:
function(event: MouseEvent, data: null | ChartsAxisData) => void
event The mouse event recorded on the <svg/> element.
data The data about the clicked axis and items associated with it.
onHighlightChange	func	-	
The callback fired when the highlighted item changes.

Signature:
function(highlightedItem: HighlightItemData | null) => void
highlightedItem The newly highlighted item.
onHighlightedAxisChange	func	-	
The function called when the pointer position corresponds to a new axis data item. This update can either be caused by a pointer movement, or an axis update. In case of multiple axes, the function is called if at least one axis is updated. The argument contains the identifier for all axes with a data property.

Signature:
function(axisItems: Array<AxisItemIdentifier>) => void
axisItems The array of axes item identifiers.
onItemClick	func	-	
Callback fired when a bar item is clicked.

Signature:
function(event: React.MouseEvent<SVGElement, MouseEvent>, barItemIdentifier: BarItemIdentifier) => void
event The event source of the callback.
barItemIdentifier The bar item identifier.
onZoomChange	func	-	
Callback fired when the zoom has changed.

Signature:
function(zoomData: Array<ZoomData>) => void
zoomData Updated zoom data.
showToolbar	bool	false	
If true, shows the default chart toolbar.

skipAnimation	bool	-	
If true, animations are skipped. If unset or false, the animations respects the user's prefers-reduced-motion setting.

slotProps	object	{}	
The props used for each component slot.

slots	object	{}	
Overridable component slots.

See Slots API below for more details.

width	number	-	
The width of the chart in px. If not defined, it takes the width of the parent element.

xAxis	Array<{ axis?: 'x', barGapRatio?: number, categoryGapRatio?: number, classes?: object, colorMap?: { colors: Array<string>, type: 'ordinal', unknownColor?: string, values?: Array<Date
| number
| string> }
| { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, groups?: Array<{ getValue: func, tickLabelStyle?: object, tickSize?: number }>, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'band', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { colors: Array<string>, type: 'ordinal', unknownColor?: string, values?: Array<Date
| number
| string> }
| { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, groups?: Array<{ getValue: func, tickLabelStyle?: object, tickSize?: number }>, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'point', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'log', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, constant?: number, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'symlog', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'pow', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'sqrt', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number
| { valueOf: func }, min?: number
| { valueOf: func }, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'time', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number
| { valueOf: func }, min?: number
| { valueOf: func }, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'utc', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'x', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, height?: number, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'bottom'
| 'none'
| 'top', reverse?: bool, scaleType?: 'linear', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelMinGap?: number, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }>	-	
The configuration of the x-axes. If not provided, a default axis config is used. An array of AxisConfig objects.

yAxis	Array<{ axis?: 'y', barGapRatio?: number, categoryGapRatio?: number, classes?: object, colorMap?: { colors: Array<string>, type: 'ordinal', unknownColor?: string, values?: Array<Date
| number
| string> }
| { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, groups?: Array<{ getValue: func, tickLabelStyle?: object, tickSize?: number }>, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'band', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { colors: Array<string>, type: 'ordinal', unknownColor?: string, values?: Array<Date
| number
| string> }
| { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, groups?: Array<{ getValue: func, tickLabelStyle?: object, tickSize?: number }>, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'point', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'log', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, constant?: number, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'symlog', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'pow', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'sqrt', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number
| { valueOf: func }, min?: number
| { valueOf: func }, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'time', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number
| { valueOf: func }, min?: number
| { valueOf: func }, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'utc', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }
| { axis?: 'y', classes?: object, colorMap?: { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, disableLine?: bool, disableTicks?: bool, domainLimit?: 'nice'
| 'strict'
| func, hideTooltip?: bool, id?: number
| string, ignoreTooltip?: bool, label?: string, labelStyle?: object, max?: number, min?: number, offset?: number, position?: 'left'
| 'none'
| 'right', reverse?: bool, scaleType?: 'linear', slotProps?: object, slots?: object, sx?: Array<func
| object
| bool>
| func
| object, tickInterval?: 'auto'
| array
| func, tickLabelInterval?: 'auto'
| func, tickLabelPlacement?: 'middle'
| 'tick', tickLabelStyle?: object, tickMaxStep?: number, tickMinStep?: number, tickNumber?: number, tickPlacement?: 'end'
| 'extremities'
| 'middle'
| 'start', tickSize?: number, valueFormatter?: func, width?: number, zoom?: { filterMode?: 'discard'
| 'keep', maxEnd?: number, maxSpan?: number, minSpan?: number, minStart?: number, panning?: bool, slider?: { enabled?: bool, preview?: bool, showTooltip?: 'always'
| 'hover'
| 'never', size?: number }, step?: number }
| bool }>	-	
The configuration of the y-axes. If not provided, a default axis config is used. An array of AxisConfig objects.

zAxis	Array<{ colorMap?: { colors: Array<string>, type: 'ordinal', unknownColor?: string, values?: Array<Date
| number
| string> }
| { color: Array<string>
| func, max?: Date
| number, min?: Date
| number, type: 'continuous' }
| { colors: Array<string>, thresholds: Array<Date
| number>, type: 'piecewise' }, data?: array, dataKey?: string, id?: string, max?: number, min?: number }>	-	
The configuration of the z-axes.

zoomData	Array<{ axisId: number
| string, end: number, start: number }>	-	
The list of zoom data related to each axis.

zoomInteractionConfig	{ pan?: Array<'drag'
| 'pressAndDrag'
| 'wheel'
| { pointerMode?: 'mouse'
| 'touch', requiredKeys?: Array<string>, type: 'drag' }
| { pointerMode?: 'mouse'
| 'touch', requiredKeys?: Array<string>, type: 'pressAndDrag' }
| { allowedDirection?: 'x'
| 'xy'
| 'y', pointerMode?: any, requiredKeys?: Array<string>, type: 'wheel' }>, zoom?: Array<'brush'
| 'doubleTapReset'
| 'pinch'
| 'tapAndDrag'
| 'wheel'
| { pointerMode?: any, requiredKeys?: Array<string>, type: 'wheel' }
| { pointerMode?: any, requiredKeys?: array, type: 'pinch' }
| { pointerMode?: 'mouse'
| 'touch', requiredKeys?: Array<string>, type: 'tapAndDrag' }
| { pointerMode?: 'mouse'
| 'touch', requiredKeys?: Array<string>, type: 'doubleTapReset' }
| { pointerMode?: any, requiredKeys?: array, type: 'brush' }> }	-	
Configuration for zoom interactions.

The component cannot hold a ref.
Slots
Slot name	Class name	Default component	Description
axisLabel		ChartsText	Custom component for axis label.
axisLine		'line'	Custom component for the axis main line.
axisTick		'line'	Custom component for the axis tick.
axisTickLabel		ChartsText	Custom component for tick label.
bar		BarElementPath	The component that renders the bar.
barLabel		BarLabel	The component that renders the bar label.
baseButton			
baseDivider			
baseIconButton			
baseMenuItem			
baseMenuList			
basePopper			
baseTooltip			
exportIcon		ChartsExportIcon	Icon displayed on the toolbar's export button.
legend		ChartsLegend	Custom rendering of the legend.
loadingOverlay		ChartsLoadingOverlay	Overlay component rendered when the chart is in a loading state.
noDataOverlay		ChartsNoDataOverlay	Overlay component rendered when the chart has no data to display.
toolbar		ChartsToolbar	Custom component for the toolbar.
tooltip		ChartsTooltipRoot	Custom component for the tooltip popper.
zoomInIcon		ChartsZoomInIcon	Icon displayed on the toolbar's zoom in button.
zoomOutIcon		ChartsZoomOutIcon	Icon displayed on the toolbar's zoom out button.
Source code
If you did not find the information in this page, consider having a look at the implementation of the component for more detail.