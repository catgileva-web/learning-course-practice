Data Grid integration
🧪
Learn how to integrate the MUI X Charts and Data Grid for better data visualization.

MUI X Charts seamlessly integrate with the Data Grid for data visualization with dynamic Chart updates based on the Data Grid state changes (whether through the Data Grid API or user interactions).

This feature is in preview. It is ready for production use, but its API, visuals and behavior may change in future minor or patch releases.

This integration is possible via the <GridChartsIntegrationContextProvider /> and <GridChartsRendererProxy /> components from the @mui/x-data-grid-premium package, and the <ChartRenderer /> component from the @mui/x-charts-premium package.

Check Data Grid - Charts integration for more information and examples.

The demo below shows how to implement all of the elements mentioned above:

​

a7d8df37-3059-5878-933f-1c0f223227dd
Milton Carson
http://re.us/hoc
2
d0ed1f91-d5ce-54de-ad44-a20dfe1a5b64
Vernon Rodriguez
http://sogcuuk.sm/fa
4
d61deece-b6b3-5653-8a55-7d19acfa62cc
Ruth Marsh
http://tali.vu/ihjuz
1
dfd776e5-e060-50b5-8960-aa496b4e40ce
Sophie Murphy
http://ruhvefik.gf/ge
2
f545a32a-c9e1-523d-b680-a170b94d3125
Joshua Curry
http://afipukim.il/sej
1
7bbb868c-f2a2-5e06-b584-0ba27ba6d532
Matthew Moreno
http://alki.nu/wu
5
56d5da62-3ff5-5a39-b831-0bf49b49ec4e
Dominic Brooks
http://tuzapbu.hm/elpejco
4
a188f872-927c-5d83-b18b-344bdb89ed6a
Ann Barnes
http://homcum.fk/zo
3
Total Rows: 20
Charts
Column
Bar
Line
Area
Pie
Salary
import { useDemoData } from '@mui/x-data-grid-generator';
import {
  DataGridPremium,
  GridChartsPanel,
  GridChartsIntegrationContextProvider,
  GridChartsRendererProxy,
  GridSidebarValue,
} from '@mui/x-data-grid-premium';
import {
  ChartsRenderer,
  configurationOptions,
} from '@mui/x-charts-premium/ChartsRenderer';

export default function GridChartsIntegrationBasic() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 20,
    editable: true,
  });

  return (
    <GridChartsIntegrationContextProvider>
      <div style={{ gap: 32, width: '100%' }}>
        <div style={{ height: 420, paddingBottom: 16 }}>
          <DataGridPremium
            {...data}
            showToolbar
            chartsIntegration
            slots={{
              chartsPanel: GridChartsPanel,
            }}
            slotProps={{
              chartsPanel: {
                schema: configurationOptions,
              },
            }}
            initialState={{
              sidebar: {
                open: true,
                value: GridSidebarValue.Charts,
              },
              chartsIntegration: {
                charts: {
                  main: {
                    dimensions: ['name'],
                    values: ['salary'],
                    chartType: 'column',
                  },
                },
              },
            }}
            experimentalFeatures={{
              charts: true,
            }}
          />
        </div>
        <GridChartsRendererProxy id="main" renderer={ChartsRenderer} />
      </div>
    </GridChartsIntegrationContextProvider>
  );
}
