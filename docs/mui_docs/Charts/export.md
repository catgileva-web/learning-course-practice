Charts - Export
Export charts as a PDF from the print dialog, or as an image.

Export is available for the following charts: <LineChartPro />, <BarChartPro />, <ScatterChartPro />, PieChartPro />, <Heatmap />, <FunnelChart />, <RadarChartPro /> and <SankeyChart />.

Enabling export

Charts can be exported using the browser's native print dialog or as an image.

Default toolbar

To enable exporting from the chart's toolbar, you need to enable it by passing the showToolbar prop to the chart component.

The toolbar then renders a button that opens a menu with the export options.

By default, the exported media does not show the toolbar.

You can override the onBeforeExport callback to customize this behavior.

Inflation rate in France, Germany and the UK, 1960-2024

Germany
United Kingdom
France
Source: World Bank
<Typography sx={{ alignSelf: 'center', my: 1 }}>
  Inflation rate in France, Germany and the UK, 1960-2024
</Typography>
<LineChartPro {...settings} showToolbar />
<Typography variant="caption">Source: World Bank</Typography>
<Typography sx={{ alignSelf: 'center', my: 1 }}>
  Inflation rate in France, Germany and the UK, 1960-2024
</Typography>
<LineChartPro {...settings} showToolbar />
<Typography variant="caption">Source: World Bank</Typography>
Press Enter to start editing
Image export requires the rasterizehtml npm dependency to be installed in your project.

Follow the installation instructions.

Custom toolbar

See the Toolbar composition section for more information on how to create a custom toolbar.

Image export pre-requisites

For image export to work, you need to add the rasterizehtml npm dependency in your project.

npm
pnpm
yarn
Copy
npm install rasterizehtml
Export options

Export behavior can be modified with print and image export options.

Options can be passed to the built-in Toolbar with slotProps.toolbar.

Where relevant, the options are automatically shown in the toolbar. You can customize their respective behavior by passing an options object either to slotsProps.toolbar or to the Export trigger itself if you have a custom toolbar:

// Default toolbar:
<BarChartPro slotProps={{ toolbar: { printOptions, imageExportOptions } }} />

// Custom trigger:
<ChartsToolbarImageExportTrigger options={imageExportOptions} />
<ChartsToolbarPrintExportTrigger options={printExportOptions} />

Copy
Export formats

Using the export options, you can customize the available export formats.

The print export can be disabled by setting the disableToolbarButton property to true.

The image export formats can be customized by providing an array of objects to the imageExportOptions property. These objects must contain the type property, which specifies the image format.

If the browser does not support a requested image format, the export defaults to PNG.

In the example below, you can toggle which export formats are available to the user.

Additionally, the name of the exported file has been customized to resemble the chart's title.

Population vs GDP Per Capita (USD), 2019

Europe
Asia
North America
South America
Africa
Oceania
Source: World Bank
Export Options
Print
image/png
image/jpeg
image/webp
const filename = 'Population_vs_GDP_Per_Capita_USD_2019';
          
<ScatterChartPro
  // ...
  slotProps={{
    toolbar: {
      printOptions: { fileName },
      imageExportOptions: [
        { type: "image/png" , filename }
      ]
    },
  }}
/>
onBeforeExport

To add custom styles or modify the chart's appearance before exporting, use the onBeforeExport callback.

When exporting, the chart is rendered onto an iframe and then exported as an image or PDF. The onBeforeExport callback gives you access to the iframe before the export process starts.

For example, you can add the title and caption to the exported chart, as shown below:

Inflation rate in France, Germany and the UK, 1960-2024

Germany
United Kingdom
France
Source: World Bank
<Typography ref={titleRef} sx={{ alignSelf: 'center', my: 1 }}>
  Inflation rate in France, Germany and the UK, 1960-2024
</Typography>
<LineChartPro
  {...settings}
  showToolbar
  slotProps={{
    toolbar: {
      printOptions: { onBeforeExport },
      imageExportOptions: [{ type: 'image/png', onBeforeExport }],
    },
  }}
/>
<Typography ref={captionRef} variant="caption">
  Source: World Bank
</Typography>
<Typography ref={titleRef} sx={{ alignSelf: 'center', my: 1 }}>
  Inflation rate in France, Germany and the UK, 1960-2024
</Typography>
<LineChartPro
  {...settings}
  showToolbar
  slotProps={{
    toolbar: {
      printOptions: { onBeforeExport },
      imageExportOptions: [{ type: 'image/png', onBeforeExport }],
    },
  }}
/>
<Typography ref={captionRef} variant="caption">
  Source: World Bank
</Typography>
Press Enter to start editing
If you don't want to manually add elements to the chart export, you can create a chart through composition and include the elements you want to export as part of the chart. See the Composition section below for more information.

Copy styles

The styles of the page the chart belongs to are copied to the export iframe by default.

You can disable this behavior by setting the copyStyles property to false in the export options.

<BarChartPro slotProps={{ toolbar: { printOptions: { copyStyles: false } } }} />

Copy
Composition

As detailed in the Composition page, charts can alternatively be composed of more specific components to create custom visualizations.

When exporting a chart, the ChartsWrapper element is considered the root element of the chart, and every descendant is included in the export. As such, you need to ensure that the ChartsWrapper element is the root element of the chart you want to export.

If you want to use a custom wrapper element, you need to use the useChartRootRef() hook to set the reference to the chart's root element so that exporting works properly, as exemplified below.

Composite Chart
Bar
Line
Content Security Policy (CSP)

If your application uses a Content Security Policy (CSP), you might need to adjust it to allow exporting to work correctly. You can read more about it in the Content Security Policy (CSP) guide.

apiRef

Print/Export as PDF

The apiRef prop exposes a exportAsPrint() method that can be used to open the browser's print dialog.

The print dialog lets you print the chart or save it as a PDF, as well as configuring other settings.

scatter
Chart Type
Series A
Series B
Export as image

The apiRef prop also exposes a exportAsImage() method to export the chart as an image.

Image export requires the rasterizehtml npm dependency to be installed in your project.

Follow the installation instructions here.

Usage
The function accepts an options object with the type property, which specifies the image format. The available formats are:

image/png and image/jpeg, which are supported across all supported platforms
image/webp which is only supported in some browsers
If the format is not supported by the browser, exportAsImage() falls back to image/png.

Additionally, for lossy formats such as image/jpeg and image/webp, the options object also accepts the quality property, which is a number between 0 and 1. The default value is 0.9.

Series A
Series B
Image Format
image/png
image/jpeg
image/webp
0.9
Quality
Only applicable to lossy formats.

<LineChartPro
  apiRef={apiRef}
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    { data: [4, 9, 1, 4, 9, 6], label: 'Series A' },
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
      label: 'Series B',
    },
  ]}
  height={300}
  grid={{ vertical: true, horizontal: true }}
/>
<ExportParamsSelector apiRef={apiRef} />
<LineChartPro
  apiRef={apiRef}
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    { data: [4, 9, 1, 4, 9, 6], label: 'Series A' },
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
      label: 'Series B',
    },
  ]}
  height={300}
  grid={{ vertical: true, horizontal: true }}
/>
<ExportParamsSelector apiRef={apiRef} />
Press Enter to start editing
API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

<BarChartPro />
<FunnelChart />
<Heatmap />
<LineChartPro />
<RadarChartPro />
<SankeyChart />
<ScatterChartPro />