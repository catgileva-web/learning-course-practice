Data Grid - Styling
The grid CSS can be easily overwritten.
 ads via Carbon
The official certification of competence for the Vue.js Framework. Start Today!
ads via Carbon

Using the sx prop

For one-off styles, the sx prop can be used. It allows to apply simple to complex customizations directly onto the Data Grid element. The keys accepted can be any CSS property as well as the custom properties provided by MUI. For more details, visit the sx prop page.

<DataGrid sx={{ m: 2 }} /> // Sets the margin to 2 times the spacing unit = 16px

Copy
Desk
Commodity
Trader Name
Trader Email
D-534
Coffee C
Bertha Henry
uvhe@uv.nu
D-451
Frozen Concentrated Orange Juice
Luis Dennis
bejwovte@nicwanup.gm
D-794
Soybeans
Cynthia Reese
ze@davob.sx
D-2184
Oats
Lura Copeland
gi@hucati.hm
D-6483
Oats
Johanna Rice
uk@zot.bg
D-4720
Corn
Duane Wilson
wujec@gojomihu.ne
D-3670
Rapeseed
Mary Holloway
pic@tahobuv.sv
D-6061
Sugar No.14
Mina Cooper
tal@jeb.pe
Rows per page:


1–20 of 20

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function SxProp() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 5,
  });

  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid
        {...data}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </Box>
  );
}

Press Enter to start editing
GetStream.io - Real-time communication APIs loved by developers worldwide.
ad by Carbon
Styling column headers

The GridColDef type has properties to apply class names and custom CSS on the header.

headerClassName: to apply class names into the column header. It can also be a function, which is called with a GridColumnHeaderParams object.
headerAlign: to align the content of the header. It must be 'left' | 'right' | 'center'.
const columns: GridColDef[] = [
  {
    field: 'first',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'last',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
];

Copy
first
last
Jane
Carter
Jack
Smith
Gill
Martin
Rows per page:


1–3 of 3

import * as React from 'react';
import Box from '@mui/material/Box';
import { GridColDef, DataGrid } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'first',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'last',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
];

const rows = [
  {
    id: 1,
    first: 'Jane',
    last: 'Carter',
  },
  {
    id: 2,
    first: 'Jack',
    last: 'Smith',
  },
  {
    id: 3,
    first: 'Gill',
    last: 'Martin',
  },
];

export default function StylingHeaderGrid() {
  return (
    <Box
      sx={{
        height: 300,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(255, 7, 0, 0.55)',
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

Press Enter to start editing
Pluralsight - Technical skills aren’t the only thing you need. Stay competitive with professional soft skills.
ad by Carbon
Styling rows

The getRowClassName prop can be used to apply a custom CSS class on each row. It's called with a GridRowParams object and must return a string. Sometimes it might be needed to override the existing rules using higher specificity CSS selectors.

interface GridRowParams<R extends GridRowModel = GridRowModel> {
  /**
   * The grid row id.
   */
  id: GridRowId;
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: R;
  /**
   * All grid columns.
   */
  columns: GridColDef[];
}

Copy
Desk
Commodity
Trader Name
Trader Email
Quantity
Filled Quantity
Is Filled
Status
D-2148
Rough Rice
Alfred Ortiz
onwif@ogih.mt
25,355
94.269 %
Rejected
D-2347
Coffee C
Peter Cooper
padgu@rebpu.ga
83,219
43.37 %
Rejected
D-104
Soybeans
Jonathan Hines
lic@biore.va
25,552
60.199 %
Partially Filled
D-2267
Soybean Oil
Winnie Lamb
sehu@vama.ba
79,667
34.54 %
Open
D-2446
Rough Rice
Devin Bryan
re@zavakdif.bf
88,721
59.42 %
Rejected
D-8913
Cocoa
Lois Washington
gez@utodib.yt
36,969
81.49 %
Filled
D-4915
Soybean Oil
Essie Copeland
meza@nab.py
39,643
22.44 %
Filled
D-6021
Milk
Dale West
disus@awku.ae
26,721
60.069 %
Open
D-8519
Frozen Concentrated Orange Juice
Emilie Allison
gi@pu.ec
35,249
57.341 %
Rejected
D-5175
Soybeans
Johanna Burgess
pob@ca.sd
12,487
53.64 %
Partially Filled
D-1025
Soybeans
Frances Hart
ini@biwa.dm
57,667
14.45 %
Filled
D-189
Rough Rice
Travis Gibbs
luvsu@esdafub.gq
30,448
63.14 %
Rejected
Rows per page:


1–100 of 100

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten, styled, Theme } from '@mui/material/styles';

const getBackgroundColor = (color: string, theme: Theme, coefficient: number) => ({
  backgroundColor: darken(color, coefficient),
  ...theme.applyStyles('light', {
    backgroundColor: lighten(color, coefficient),
  }),
});

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .super-app-theme--Open': {
    ...getBackgroundColor(theme.palette.info.main, theme, 0.7),
    '&:hover': {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.6),
    },
    '&.Mui-selected': {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.5),
      '&:hover': {
        ...getBackgroundColor(theme.palette.info.main, theme, 0.4),
      },
    },
  },
  '& .super-app-theme--Filled': {
    ...getBackgroundColor(theme.palette.success.main, theme, 0.7),
    '&:hover': {
      ...getBackgroundColor(theme.palette.success.main, theme, 0.6),
    },
    '&.Mui-selected': {
      ...getBackgroundColor(theme.palette.success.main, theme, 0.5),
      '&:hover': {
        ...getBackgroundColor(theme.palette.success.main, theme, 0.4),
      },
    },
  },
  '& .super-app-theme--PartiallyFilled': {
    ...getBackgroundColor(theme.palette.warning.main, theme, 0.7),
    '&:hover': {
      ...getBackgroundColor(theme.palette.warning.main, theme, 0.6),
    },
    '&.Mui-selected': {
      ...getBackgroundColor(theme.palette.warning.main, theme, 0.5),
      '&:hover': {
        ...getBackgroundColor(theme.palette.warning.main, theme, 0.4),
      },
    },
  },
  '& .super-app-theme--Rejected': {
    ...getBackgroundColor(theme.palette.error.main, theme, 0.7),
    '&:hover': {
      ...getBackgroundColor(theme.palette.error.main, theme, 0.6),
    },
    '&.Mui-selected': {
      ...getBackgroundColor(theme.palette.error.main, theme, 0.5),
      '&:hover': {
        ...getBackgroundColor(theme.palette.error.main, theme, 0.4),
      },
    },
  },
}));

export default function StylingRowsGrid() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  });

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        {...data}
        loading={loading}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
      />
    </Box>
  );
}

Press Enter to start editing
Styling cells

There are multiple ways to apply a custom CSS class on a cell.

Using thecellClassName property of GridColDef:
This property allows to set a CSS class that is applied on every cell of the column it was defined. It can also be a function, which is called with a GridCellParams object.

const columns: GridColDef[] = [
  {
    field: 'name',
    cellClassName: 'super-app-theme--cell',
  },
  {
    field: 'score',
    type: 'number',
    cellClassName: (params: GridCellParams<number>) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),
  },
];

Copy
name
score
Jane
100
Jack
-100
Gill
-50
Rows per page:


1–3 of 3

import * as React from 'react';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { GridColDef, DataGrid, GridCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'name',
    cellClassName: 'super-app-theme--cell',
  },
  {
    field: 'score',
    type: 'number',
    width: 140,
    cellClassName: (params: GridCellParams<any, number>) => {
      if (params.value == null) {
        return '';
      }

      return clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      });
    },
  },
];

const rows = [
  {
    id: 1,
    name: 'Jane',
    score: 100,
  },
  {
    id: 2,
    name: 'Jack',
    score: -100,
  },
  {
    id: 3,
    name: 'Gill',
    score: -50,
  },
];

export default function StylingCellsGrid() {
  return (
    <Box
      sx={{
        height: 300,
        width: '100%',
        '& .super-app-theme--cell': {
          backgroundColor: 'rgba(224, 183, 60, 0.55)',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.negative': {
          backgroundColor: 'rgba(157, 255, 118, 0.49)',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.positive': {
          backgroundColor: '#d47483',
          color: '#1a3e72',
          fontWeight: '600',
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

Press Enter to start editing
Using the getCellClassName prop:
This prop is called for every cell in every column. Different from the first option, this prop is defined at the Data Grid level, not column level. It is also called with a GridCellParams object.

city
oct
nov
dec
Amsterdam
7.1 °C
4 °C
10.2 °C
Barcelona
14.9 °C
12.3 °C
18.2 °C
Paris
8.1 °C
5.4 °C
12.3 °C
São Paulo
20.2 °C
21.1 °C
19.2 °C
Rows per page:


1–4 of 4

import * as React from 'react';
import Box from '@mui/material/Box';
import { GridColDef, DataGrid, GridCellParams, gridClasses } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'city' },
  { field: 'oct', type: 'number', valueFormatter: (value) => `${value} °C` },
  { field: 'nov', type: 'number', valueFormatter: (value) => `${value} °C` },
  { field: 'dec', type: 'number', valueFormatter: (value) => `${value} °C` },
];

const rows = [
  { id: 1, city: 'Amsterdam', oct: 7.1, nov: 4, dec: 10.2 },
  { id: 2, city: 'Barcelona', oct: 14.9, nov: 12.3, dec: 18.2 },
  { id: 3, city: 'Paris', oct: 8.1, nov: 5.4, dec: 12.3 },
  { id: 4, city: 'São Paulo', oct: 20.2, nov: 21.1, dec: 19.2 },
];

export default function StylingAllCells() {
  return (
    <Box
      sx={{
        height: 300,
        width: '100%',
        [`.${gridClasses.cell}.cold`]: {
          backgroundColor: '#b9d5ff91',
          color: '#1a3e72',
        },
        [`.${gridClasses.cell}.hot`]: {
          backgroundColor: '#ff943975',
          color: '#1a3e72',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getCellClassName={(params: GridCellParams<any, any, number>) => {
          if (params.field === 'city' || params.value == null) {
            return '';
          }
          return params.value >= 15 ? 'hot' : 'cold';
        }}
      />
    </Box>
  );
}

Press Enter to start editing
Cell alignment

Use the align property in GridColDef to change the alignment of content of the cells. Choose between one of the following values: 'left' | 'right' | 'center'.

You must use headerAlign to align the content of the header.
Striped rows

You can use the indexRelativeToCurrentPage param passed to getRowClassName to apply alternating styles to the rows.

The following demo illustrates how this can be achieved.

Avatar
Name
Website
Rating
Email
Phone
Username
Ricardo Mathis
http://ipoura.ch/bac

2
wuodutuk@faj.gb
(813) 715-9422
@enwu
Rosa McDonald
http://kat.bh/hese

5
dib@cazadcah.la
(773) 341-6683
@cek
Edwin Fernandez
http://rij.kg/huf

2
maevaro@ma.edu
(454) 445-6174
@kigmaz
Brent Tran
http://bu.uk/lehdugcu

5
meg@odkakaca.me
(329) 726-5908
@jimhude
Jeffery Gray
http://jovihuma.cm/mif

3
ujhihmak@jajeso.vu
(476) 254-7778
@ca
Susie Delgado
http://boojji.ro/humjo

1
tecnous@zujtogi.sh
(560) 624-7256
@bo
Scott Vega
http://girug.cg/fon

5
bewacgur@gozgib.tz
(525) 367-3533
@up
Dora Montgomery
http://ok.ac/dagekadel

2
jauho@le.lb
(508) 224-2439
@cuojirac
Elijah Bryan
http://vutnuzah.ht/bugima

4
tahukuwu@viozfe.mt
(648) 984-7947
@ci
Rows per page:


1–100 of 200

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

export default function StripedGrid() {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    rowLength: 200,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StripedDataGrid
        loading={loading}
        {...data}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </div>
  );
}

Press Enter to start editing
DoiT Cloud Intelligence™ - Unlock the power of FinOps at scale. Download O'Reilly's Cloud FinOps.
ad by Carbon
Container, header, and pinned sections

By default, the Data Grid uses the Material UI theme.palette.background.default color for the background color of the grid container, the column headers, and the pinned rows and columns.

You can override these background colors with the following theme configuration:

import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  palette: {
    DataGrid: {
      // Container background
      bg: '#f8fafc',
      // Pinned rows and columns background
      pinnedBg: '#f1f5f9',
      // Column header background
      headerBg: '#eaeff5',
    },
  },
});

Copy
Light and dark mode in Material UI v6

Material UI v6 users can use the colorSchemes property to specify different colors for light and dark mode:

import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        DataGrid: {
          bg: '#f8fafc',
          pinnedBg: '#f1f5f9',
          headerBg: '#eaeff5',
        },
      },
    },
    dark: {
      palette: {
        DataGrid: {
          bg: '#334155',
          pinnedBg: '#293548',
          headerBg: '#1e293b',
        },
      },
    },
  },
});

Copy
Light and dark mode in Material UI v5

Material UI v5 supports specifying different colors for light and dark mode with two different themes, as shown in the demo below.

ID
First name
Last name
Age
Full name
2
Cersei
Lannister
31
Cersei Lannister
3
Jaime
Lannister
31
Jaime Lannister
4
Arya
Stark
11
Arya Stark
5
Daenerys
Targaryen
Daenerys Targaryen
6
Melisandre
150
Melisandre
7
Ferrara
Clifford
44
Ferrara Clifford
8
Rossini
Frances
36
Rossini Frances
1
Jon
Snow
14
Jon Snow
Total Rows: 8
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GridColDef } from '@mui/x-data-grid';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type PaletteMode = 'light' | 'dark';

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      DataGrid: {
        bg: mode === 'light' ? '#f8fafc' : '#334155',
        pinnedBg: mode === 'light' ? '#f1f5f9' : '#293548',
        headerBg: mode === 'light' ? '#eaeff5' : '#1e293b',
      },
    },
  });

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function BackgroundColorsGrid() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <Stack direction="column" gap={1} style={{ width: '100%', height: 400 }}>
      <ToggleButtonGroup
        size="small"
        color="primary"
        value={mode}
        onChange={(event, value) => setMode(value === null ? mode : value)}
        exclusive
      >
        <ToggleButton value="light" aria-label="Light mode" sx={{ gap: 1 }}>
          <LightModeIcon fontSize="small" /> Light
        </ToggleButton>
        <ToggleButton value="dark" aria-label="Dark mode" sx={{ gap: 1 }}>
          <DarkModeIcon fontSize="small" /> Dark
        </ToggleButton>
      </ToggleButtonGroup>

      <ThemeProvider theme={theme}>
        <DataGridPremium
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            pinnedColumns: {
              left: ['id'],
            },
          }}
          pinnedRows={{
            bottom: [rows[0]],
          }}
        />
      </ThemeProvider>
    </Stack>
  );
}

Press Enter to start editing
Custom theme

The following demo leverages the CSS customization API to match the Ant Design specification.


Desk
Commodity
Trader Name
Trader Email
Quantity
Filled Quantity
Is Filled
Status

D-5316
Rough Rice
James Medina
amu@we.mu
54,321
6.78 %
Partially Filled

D-1602
Rough Rice
Leo Hogan
iwus@of.nc
20,188
50.52 %
Filled

D-920
Milk
Harold Robertson
si@rolamir.gg
74,506
2.95 %
Partially Filled

D-7690
Corn
Essie Sanders
tokibo@baod.af
6,019
80.761 %
Filled

D-9818
Sugar No.14
Chester Murray
raomu@ennid.mv
89,297
94.79 %
Open
import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Theme, styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function customCheckbox(theme: Theme) {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: '1px solid #d9d9d9',
      borderRadius: 2,
      ...theme.applyStyles('dark', {
        borderColor: 'rgb(67, 67, 67)',
      }),
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#1890ff',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color: 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: '#1d1d1d',
    ...theme.applyStyles('light', {
      backgroundColor: '#fafafa',
    }),
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: '1px solid #303030',
    ...theme.applyStyles('light', {
      borderRightColor: '#f0f0f0',
    }),
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: '1px solid #303030',
    ...theme.applyStyles('light', {
      borderBottomColor: '#f0f0f0',
    }),
  },
  '& .MuiDataGrid-cell': {
    color: 'rgba(255,255,255,0.65)',
    ...theme.applyStyles('light', {
      color: 'rgba(0,0,0,.85)',
    }),
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
  ...customCheckbox(theme),
  ...theme.applyStyles('light', {
    color: 'rgba(0,0,0,.85)',
  }),
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event: React.ChangeEvent<unknown>, value: number) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
}

const PAGE_SIZE = 5;

export default function AntDesignGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10,
  });

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        checkboxSelection
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
        }}
        {...data}
      />
    </div>
  );
}
