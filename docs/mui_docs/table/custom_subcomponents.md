Data Grid - Custom slots and subcomponents
Learn how to override parts of the grid.
 ads via Carbon
Unlock faster, more reliable blockchain infrastructure with AMD Bare Metal. Deploy Now.
ads via Carbon

Interacting with the Data Grid

The grid exposes two hooks to help you access the Data Grid data while overriding component slots.

They can be used as below:

useGridApiContext: returns the apiRef object (more details on the API object page).
useGridSelector: returns the result of a selector on the current state (more details on the State page).
function CustomPagination() {
  const apiRef = useGridApiContext();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      count={pageCount}
      page={paginationModel.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

Copy
Component slots

See Common concepts—Slots and subcomponents to learn how to use slots.
See GridSlotsComponent to learn about the available slots.
Columns panel

In the following demo, the columns panel is replaced with a custom component that represents the column groups as a nested list.

Internal
Basic info
Names

ID
First name
Last name
Age

1
Jon
Snow
35

2
Cersei
Lannister
42

3
Jaime
Lannister
45

4
Arya
Stark
16

5
Daenerys
Targaryen

6
Melisandre
150

7
Ferrara
Clifford
44
Rows per page:


1–9 of 9

import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridColumnGroup,
  GridColumnGroupingModel,
  GridColumnVisibilityModel,
  gridColumnVisibilityModelSelector,
  useGridApiContext,
  useGridRootProps,
  isLeaf,
  GridApi,
  gridColumnLookupSelector,
  GridColumnLookup,
  useGridSelector,
  GridColumnsPanelProps,
  GridColumnsPanel,
  GridPreferencePanelsValue,
} from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

const getColumnGroupLeaves = (
  group: GridColumnGroup,
  callback: (field: string) => void,
) => {
  group.children.forEach((child) => {
    if (isLeaf(child)) {
      callback(child.field);
    } else {
      getColumnGroupLeaves(child, callback);
    }
  });
};

function ColumnGroup({
  group,
  columnLookup,
  apiRef,
  columnVisibilityModel,
}: {
  group: GridColumnGroup;
  columnLookup: GridColumnLookup;
  apiRef: React.RefObject<GridApi>;
  columnVisibilityModel: GridColumnVisibilityModel;
}) {
  const leaves = React.useMemo(() => {
    const fields: string[] = [];
    getColumnGroupLeaves(group, (field) => fields.push(field));
    return fields;
  }, [group]);

  const { isGroupChecked, isGroupIndeterminate } = React.useMemo(() => {
    return {
      isGroupChecked: leaves.every(
        (field) => columnVisibilityModel[field] !== false,
      ),
      isGroupIndeterminate:
        leaves.some((field) => columnVisibilityModel[field] === false) &&
        !leaves.every((field) => columnVisibilityModel[field] === false),
    };
  }, [columnVisibilityModel, leaves]);

  const toggleColumnGroup = (checked: boolean) => {
    const newColumnVisibilityModel = {
      ...columnVisibilityModel,
    };
    getColumnGroupLeaves(group, (field) => {
      newColumnVisibilityModel[field] = checked;
    });
    apiRef.current.setColumnVisibilityModel(newColumnVisibilityModel);
  };

  const toggleColumn = (field: string, checked: boolean) => {
    apiRef.current.setColumnVisibility(field, checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isGroupChecked}
            indeterminate={isGroupIndeterminate}
            size="small"
            sx={{ p: 1 }}
          />
        }
        label={group.headerName ?? group.groupId}
        onChange={(_, newValue) => toggleColumnGroup(newValue)}
      />
      <Box sx={{ pl: 3.5 }}>
        {group.children.map((child) => {
          return isLeaf(child) ? (
            <Stack direction="row" key={child.field}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={columnVisibilityModel[child.field] !== false}
                    size="small"
                    sx={{ p: 1 }}
                  />
                }
                label={columnLookup[child.field].headerName ?? child.field}
                onChange={(_, newValue) => toggleColumn(child.field, newValue)}
              />
            </Stack>
          ) : (
            <ColumnGroup
              group={child}
              columnLookup={columnLookup}
              key={child.groupId}
              apiRef={apiRef}
              columnVisibilityModel={columnVisibilityModel}
            />
          );
        })}
      </Box>
    </div>
  );
}

function ColumnsPanel(props: GridColumnsPanelProps) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const columnLookup = useGridSelector(apiRef, gridColumnLookupSelector);
  const columnVisibilityModel = useGridSelector(
    apiRef,
    gridColumnVisibilityModelSelector,
  );

  const columnGroupingModel = rootProps.columnGroupingModel;

  if (!columnGroupingModel) {
    return <GridColumnsPanel {...props} />;
  }

  return (
    <Box sx={{ px: 2, py: 0.5 }}>
      {columnGroupingModel.map((group) => (
        <ColumnGroup
          group={group}
          columnLookup={columnLookup}
          columnVisibilityModel={columnVisibilityModel}
          key={group.groupId}
          apiRef={apiRef}
        />
      ))}
    </Box>
  );
}

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'Internal',
    description: '',
    children: [{ field: 'id' }],
  },
  {
    groupId: 'character',
    description: 'Information about the character',
    headerName: 'Basic info',
    children: [
      {
        groupId: 'naming',
        headerName: 'Names',
        children: [{ field: 'lastName' }, { field: 'firstName' }],
      },
      { field: 'age' },
    ],
  },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function CustomColumnsPanel() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        columnGroupingModel={columnGroupingModel}
        slots={{ columnsPanel: ColumnsPanel }}
        initialState={{
          preferencePanel: {
            open: true,
            openedPanelValue: GridPreferencePanelsValue.columns,
          },
        }}
      />
    </Box>
  );
}

Press Enter to start editing
Auth0 - Boost your app’s Identity with Auth0. Now with Custom Domain, Passwordless, and more!
ad by Carbon
Column menu

As mentioned above, the column menu is a component slot that can be recomposed easily and customized on each column as in the demo below.

default
name
stars
Open source
MUI
28000
Enterprise
DataGridPro
15000
Total Rows: 2
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {
  GridColumnMenu,
  GridColumnMenuContainer,
  GridColumnMenuProps,
  GridColumnMenuFilterItem,
  GridColumnMenuSortItem,
  useGridApiRef,
  DataGridPro,
  GridSlots,
} from '@mui/x-data-grid-pro';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

type PaletteColorKey = 'primary' | 'secondary';
type OwnerState = {
  color: PaletteColorKey;
};

const StyledGridColumnMenuContainer = styled(GridColumnMenuContainer)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }: { theme: Theme; ownerState: OwnerState }) => ({
  background: theme.palette[ownerState.color].main,
}));

const StyledGridColumnMenu = styled(GridColumnMenu)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }: { theme: Theme; ownerState: OwnerState }) => ({
  background: theme.palette[ownerState.color].main,
}));

export function CustomColumnMenuComponent(props: GridColumnMenuProps & OwnerState) {
  const { hideMenu, colDef, color, ...other } = props;

  if (colDef.field === 'name') {
    return (
      <StyledGridColumnMenuContainer
        hideMenu={hideMenu}
        colDef={colDef}
        ownerState={{ color }}
        {...other}
      >
        <GridColumnMenuSortItem onClick={hideMenu} colDef={colDef!} />
        <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef!} />
      </StyledGridColumnMenuContainer>
    );
  }
  if (colDef.field === 'stars') {
    return (
      <StyledGridColumnMenuContainer
        hideMenu={hideMenu}
        colDef={colDef}
        ownerState={{ color }}
        {...other}
      >
        <Box
          sx={{
            width: 127,
            height: 160,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <StarOutlineIcon sx={{ fontSize: 80 }} />
        </Box>
      </StyledGridColumnMenuContainer>
    );
  }
  return (
    <StyledGridColumnMenu
      hideMenu={hideMenu}
      colDef={colDef}
      ownerState={{ color }}
      {...other}
    />
  );
}

export default function CustomColumnMenu() {
  const [color, setColor] = React.useState<PaletteColorKey>('primary');
  const apiRef = useGridApiRef();

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        color={color}
        size="small"
        onClick={(event) => {
          event.stopPropagation();
          setColor((current) => (current === 'primary' ? 'secondary' : 'primary'));
          apiRef.current?.showColumnMenu('default');
        }}
      >
        Toggle menu background
      </Button>
      <Box sx={{ height: 250, mt: 1 }}>
        <DataGridPro
          apiRef={apiRef}
          columns={[
            { field: 'default', width: 150 },
            { field: 'name', width: 150 },
            { field: 'stars', width: 150 },
          ]}
          rows={[
            {
              id: 1,
              name: 'MUI',
              stars: 28000,
              default: 'Open source',
            },
            {
              id: 2,
              name: 'DataGridPro',
              stars: 15000,
              default: 'Enterprise',
            },
          ]}
          slots={{
            columnMenu: CustomColumnMenuComponent as GridSlots['columnMenu'],
          }}
          slotProps={{
            columnMenu: { color },
          }}
        />
      </Box>
    </Box>
  );
}

Press Enter to start editing
Pluralsight - Technical skills aren’t the only thing you need. Stay competitive with professional soft skills.
ad by Carbon
Toolbar

Pass the showToolbar prop to the <DataGrid /> component to enable the default toolbar.

​

Desk
Commodity
Trader Name
Trader Email
Quantity
D-2339
Corn
Joshua Carpenter
bic@igkiaca.km
68,784
D-7325
Cocoa
Sarah Ward
wuta@uhrif.ng
20,526
D-5944
Sugar No.11
Maggie McDonald
cudwoj@modekoto.bb
32,518
D-148
Cotton No.2
George Sparks
gorohu@nu.th
68,400
D-1898
Frozen Concentrated Orange Juice
Clarence Mann
woliha@nepos.gw
83,793
D-8149
Soybean Oil
Stanley Davidson
pahejebe@ruacju.ad
65,767
D-5064
Soybean Oil
Christine Thornton
zanewi@owwuw.fj
23,486
D-5780
Frozen Concentrated Orange Juice
Susan Chambers
ni@sipi.uk
25,230
Rows per page:


1–100 of 100

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function ToolbarGrid() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} loading={loading} showToolbar />
    </div>
  );
}

Press Enter to start editing
Pluralsight - Learn five ways to advance your tech career in 2025
ad by Carbon
You can also compose your own toolbar using the Toolbar component.

Legacy toolbar

The examples below use the <GridToolbar />, <GridToolbarContainer>, and various toolbar button components. They were deprecated in v8 and will be removed in v9. These components are now replaced by the new Toolbar component.
Each button in the toolbar is wrapped with a tooltip component. In order to override some of the props corresponding to the toolbar buttons, you can use the slotProps prop.

The following demo shows how to override the tooltip title of the density selector and the variant of the export button.

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: 'Change density' } }}
      />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { variant: 'outlined' },
        }}
      />
    </GridToolbarContainer>
  );
}

Copy
Custom Toolbar
Desk
Commodity
Trader Name
Trader Email
Quantity
D-7370
Soybeans
Ann Glover
dovcesbaw@kakluw.mk
79,056
D-2018
Rough Rice
Rosie Briggs
wuom@gawezobo.bo
33,520
D-5026
Oats
Katharine Rice
sevzo@zec.qa
1,685
D-8609
Coffee C
Olive Woods
lo@sionu.gf
36,068
D-77
Robusta coffee
Jeremy Terry
bec@pa.br
17,255
D-2607
Coffee C
John Edwards
mapfa@ritisak.kp
53,415
D-3722
Soybeans
Olive Schmidt
avzedho@bitazedeb.ai
13,717
D-2559
Soybean Oil
Bill Stokes
lew@jamcazeh.net
26,439
Rows per page:


1–10 of 10

import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>
        Custom Toolbar
      </Typography>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: 'Change density' } }}
      />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { material: { variant: 'outlined' } },
        }}
      />
    </GridToolbarContainer>
  );
}

export default function CustomToolbarGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        slots={{
          toolbar: CustomToolbar,
        }}
        showToolbar
      />
    </div>
  );
}

Press Enter to start editing
Footer

The grid exposes props to hide specific elements of the UI:

hideFooter: If true, the footer component is hidden.
hideFooterRowCount: If true, the row count in the footer is hidden.
hideFooterSelectedRowCount: If true, the selected row count in the footer is hidden.
hideFooterPagination: If true, the pagination component in the footer is hidden.
Avatar
Name
Website
Rating
Email
Genevieve Abbott
http://awa.gd/zuc

4
pivu@pajo.su
Alberta Simon
http://hepcof.net/nidomom

5
vas@mofuwaf.pw
Danny Turner
http://rajep.tr/mojdabo

2
tisos@udumi.ac
Maude Dennis
http://pi.ir/wi

3
oflafpec@ob.vg
Status connected
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridSlotsComponentsProps } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type FooterStatus = 'connected' | 'disconnected';

declare module '@mui/x-data-grid' {
  interface FooterPropsOverrides {
    status: FooterStatus;
  }
}

export function CustomFooterStatusComponent(
  props: NonNullable<GridSlotsComponentsProps['footer']>,
) {
  return (
    <Box sx={{ p: 1, display: 'flex' }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
        }}
      />
      Status {props.status}
    </Box>
  );
}

export default function CustomFooter() {
  const [status, setStatus] = React.useState<FooterStatus>('connected');
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ height: 350, width: '100%', mb: 1 }}>
        <DataGrid
          {...data}
          slots={{
            footer: CustomFooterStatusComponent,
          }}
          slotProps={{
            footer: { status },
          }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() =>
          setStatus((current) =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </Box>
  );
}

Press Enter to start editing
Pagination

The default pagination component is exported as GridPagination. This component is an extension of the TablePagination component, and it renders the page size control, the number of rows in the page and also the buttons to go to the previous and next page. You can replace the pagination component completely or reuse the default one.

The next demo reuses GridPagination but replaces the previous and next page buttons with Pagination, which renders a dedicated button for each page.

Desk
Commodity
Trader Name
Trader Email
Quantity
D-2339
Corn
Joshua Carpenter
bic@igkiaca.km
68,784
D-7325
Cocoa
Sarah Ward
wuta@uhrif.ng
20,526
D-5944
Sugar No.11
Maggie McDonald
cudwoj@modekoto.bb
32,518
D-148
Cotton No.2
George Sparks
gorohu@nu.th
68,400
D-1898
Frozen Concentrated Orange Juice
Clarence Mann
woliha@nepos.gw
83,793
D-8149
Soybean Oil
Stanley Davidson
pahejebe@ruacju.ad
65,767
D-5064
Soybean Oil
Christine Thornton
zanewi@owwuw.fj
23,486
D-5780
Frozen Concentrated Orange Juice
Susan Chambers
ni@sipi.uk
25,230
D-8042
Cotton No.2
Alejandro Blair
evhicef@owu.mk
9,737
Rows per page:


1–25 of 100

import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import MuiPagination from '@mui/material/Pagination';
import { TablePaginationProps } from '@mui/material/TablePagination';

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

export default function CustomPaginationGrid() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        loading={loading}
        pagination
        slotProps={{
          basePagination: {
            material: {
              ActionsComponent: Pagination,
            },
          },
        }}
        {...data}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 25 } },
        }}
      />
    </Box>
  );
}

Press Enter to start editing
Row

The slotProps.row prop can be used to pass additional props to the row component. One common use case might be to listen for events not exposed by default. The demo below shows a context menu when a row is right-clicked.

First
Last
Jane
Carter
Jack
Smith
Gill
Martin
Rows per page:


1–3 of 3

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const columns = [
  {
    field: 'first',
    headerName: 'First',
    width: 140,
  },
  {
    field: 'last',
    headerName: 'Last',
    width: 140,
  },
];

const initialRows = [
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

export default function RowContextMenu() {
  const [rows, setRows] = React.useState(initialRows);
  const [selectedRow, setSelectedRow] = React.useState<number>();

  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedRow(Number(event.currentTarget.getAttribute('data-id')));
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const convertToUppercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          first: row.first.toUpperCase(),
          last: row.last.toUpperCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    handleClose();
  };

  const convertToLowercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          first: row.first.toLowerCase(),
          last: row.last.toLowerCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    handleClose();
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        slotProps={{
          row: {
            onContextMenu: handleContextMenu,
            style: { cursor: 'context-menu' },
          },
        }}
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        slotProps={{
          root: {
            onContextMenu: (event: React.MouseEvent) => {
              event.preventDefault();
              handleClose();
            },
          },
        }}
      >
        <MenuItem onClick={convertToUppercase}>UPPERCASE</MenuItem>
        <MenuItem onClick={convertToLowercase}>lowercase</MenuItem>
      </Menu>
    </div>
  );
}

Press Enter to start editing
GetStream.io - Built by devs, for devs. Start Coding FREE. No CC required
ad by Carbon
Cell

The following demo uses the slotProps.cell prop to listen for specific events emitted by the cells. Try it by hovering a cell with the mouse and it should display the number of characters each cell has.

Desk
Commodity
Trader Name
D-3849
Soybeans
Randy Stevens
D-2943
Coffee C
Lawrence Wallace
D-8128
Frozen Concentrated Orange Juice
Lora Paul
D-2165
Frozen Concentrated Orange Juice
Jeremiah Walsh
D-5152
Coffee C
Daisy Bates
D-5961
Soybeans
Carolyn Fletcher
D-6483
Frozen Concentrated Orange Juice
Jerome Hansen
D-1543
Frozen Concentrated Orange Juice
Alta Conner
D-3774
Milk
Hallie Rhodes
Rows per page:


1–100 of 100

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function CellWithPopover() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 4,
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [value, setValue] = React.useState('');

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    const field = event.currentTarget.dataset.field!;
    const id = event.currentTarget.parentElement!.dataset.id!;
    const row = data.rows.find((r) => r.id === id)!;
    setValue(row[field]);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        loading={loading}
        slotProps={{
          cell: {
            onMouseEnter: handlePopoverOpen,
            onMouseLeave: handlePopoverClose,
          },
        }}
      />
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{`${value.length} characters.`}</Typography>
      </Popover>
    </div>
  );
}

Press Enter to start editing
GetStream.io - Still debugging your app's features? Try APIs that work.
ad by Carbon
Icons

As any component slot, every icon can be customized. However, it is not yet possible to use the slotProps with icons.

name
stars
DataGrid
15000
MUI
28000
Rows per page:


1–2 of 2

import * as React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid } from '@mui/x-data-grid';

export function SortedDescendingIcon() {
  return <ExpandMoreIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ExpandLessIcon className="icon" />;
}

const rows = [
  {
    id: 1,
    name: 'MUI',
    stars: 28000,
  },
  {
    id: 2,
    name: 'DataGrid',
    stars: 15000,
  },
];

const columns = [
  { field: 'name', width: 150 },
  { field: 'stars', width: 150 },
];

export default function CustomSortIcons() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          sorting: { sortModel: [{ field: 'name', sort: 'asc' }] },
        }}
        slots={{
          columnSortedDescendingIcon: SortedDescendingIcon,
          columnSortedAscendingIcon: SortedAscendingIcon,
        }}
      />
    </div>
  );
}

Press Enter to start editing
DoiT Cloud Intelligence™ - Unlock the power of FinOps at scale. Download O'Reilly's Cloud FinOps.
ad by Carbon
Material UI icons need to be passed like Icon as any due to typing issues that might be resolved in a later version.
Overlays

See the Overlays documentation on how to customize the loadingOverlay, noRowsOverlay, and noResultsOverlay.

Custom slot props with TypeScript

This section focuses on module augmentation.

See Custom slots and subcomponents—Usage with TypeScript if you don't want to use this approach.
If the custom component requires additional props to work properly, TypeScript may throw type errors. To solve these type errors, use module augmentation to enhance the props interface.

The naming of overridable interfaces uses a pattern like this:

`${slotNameInPascalCase}PropsOverrides`;

Copy
For example, for columnMenu slot, the interface name would be ColumnMenuPropsOverrides.

This file lists all the interfaces for each slot that could be used for augmentation.

Community
Pro
Premium
Copy
// augment the props for the toolbar slot
declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    someCustomString: string;
    someCustomNumber: number;
  }
}

<DataGrid
  slots={{
    // custom component passed to the toolbar slot
    toolbar: CustomGridToolbar,
  }}
  slotProps={{
    toolbar: {
      // props used by CustomGridToolbar
      someCustomString: 'Hello',
      someCustomNumber: 42,
    },
  }}
  showToolbar
/>;
This demo below shows how to use the slotProps prop and module augmentation to pass a new prop status to the footer slot.

Avatar
Name
Website
Rating
Email
Estella Fisher
http://rojep.sz/kakcol

3
hus@jikuco.ls
Ina Casey
http://kijavep.mp/hosibnun

4
ipzeh@kuk.pe
Jeanette Greene
http://tec.cl/lom

5
zega@toterow.jo
Hannah Conner
http://iloza.sj/vehto

2
raeteuwa@mi.uk
Status connected
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridSlotsComponentsProps } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type FooterStatus = 'connected' | 'disconnected';

declare module '@mui/x-data-grid' {
  interface FooterPropsOverrides {
    status: FooterStatus;
  }
}

export function CustomFooterStatusComponent(
  props: NonNullable<GridSlotsComponentsProps['footer']>,
) {
  return (
    <Box sx={{ p: 1, display: 'flex' }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
        }}
      />
      Status {props.status}
    </Box>
  );
}

export default function CustomFooter() {
  const [status, setStatus] = React.useState<FooterStatus>('connected');
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ height: 350, width: '100%', mb: 1 }}>
        <DataGrid
          {...data}
          slots={{
            footer: CustomFooterStatusComponent,
          }}
          slotProps={{
            footer: { status },
          }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() =>
          setStatus((current) =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </Box>
  );
}
