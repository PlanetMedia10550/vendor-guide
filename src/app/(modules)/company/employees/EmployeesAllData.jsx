"use client";
import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Link from "next/link";
import Image from "next/image";

const EmployeesAllData = ({resultData}) => {
  const columns = [
      {field: 'manager_name', header: 'Manager Name',sortable:'sortable', colbody2: true},
      {field: 'email', header: 'Email'},
      {field: 'mobile', header: 'Mobile'},
      {field: 'manager_type', header: 'Manager Type'},
      {field: 'id', header: 'Action', colbody: true},
  ];

  const paginatorLeft = <Button type="button"  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"  />;
  const paginatorRight = <Button type="button" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"  />;

  const favoriteBtn = (property) => {
      return <Link href={`/company/employees/${property.id}`} type="button" className="rounded-[0.7rem]  px-7 py-1 text-sm border-solid  border border-gray-500 font-semibold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-[#c1272d] text-white px-4 py-2" severity="info"  >View </Link>;
  };

  const representativeBodyTemplate = (rowData) => {

    return (
        <div className="flex items-center gap-2">
            <Image className="h-8 w-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2" alt={rowData.manager_name} src={rowData.image_url} width="32" height="32" />
            <span className="text-left block align-middle text-sm font-lato">{rowData.manager_name}</span>
        </div>
    );
  };

  return (
    <DataTable className="table w-full  text-gray-700  dataTable no-footer dt-responsive " value={resultData} paginator rows={10} paginatorTemplate="  PrevPageLink CurrentPageReport NextPageLink "
            currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} pt={{
                thead:{className:'border-[1px] border-black'},
                tbody:{className:'border-[1px] border-black'}
            }} >
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} sortable={col.sortable} body={col.colbody?favoriteBtn:col.colbody2?representativeBodyTemplate:''}   style={{ width: '25%' }} pt={{
                    headerCell:{className: 'p-4 pr-8 border-b-[1px] border-black  text-black sorting sorting_asc whitespace-nowrap text-black text-left '},
                    bodyCell:{className: 'p-4 pr-8  border-b-[1px] border-black sorting_1 whitespace-nowrap text-sm justify-around '}
                    }}  />
                ))}
    </DataTable>
  )
}

export default EmployeesAllData