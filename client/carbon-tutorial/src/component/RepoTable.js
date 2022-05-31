import React from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarSearch
} from 'carbon-components-react';

const RepoTable = ({ rows, headers }) => {
    return (
      <DataTable rows={rows} headers={headers}>
  {({ rows, headers,onInputChange, getTableProps, getHeaderProps, getRowProps }) => (
    <Table {...getTableProps()}>
      <TableHead>
      <TableToolbar>
          <TableToolbarSearch on onChange={onInputChange} />
        </TableToolbar>
        <TableRow>
          {headers.map((header) => (
            <TableHeader {...getHeaderProps({ header, isSortable: true })}>
            {header.header}
          </TableHeader>
          ))}
        </TableRow>
        
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow {...getRowProps({ row })}>
            {row.cells.map((cell) => (
              <TableCell key={cell.id}>{cell.value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )}
</DataTable>
    );
  };

  export default RepoTable;
