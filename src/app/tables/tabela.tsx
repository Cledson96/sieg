"use client";

import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { data, DataType } from "./date";

type DataIndex = keyof DataType;

export default function Tabela({ filtro }: { filtro: string }): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Esfera",
      dataIndex: "esfera",
      key: "esfera",
      width: "130px",
      ...getColumnSearchProps("esfera"),
      sorter: (a, b) => a.esfera.length - b.esfera.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Orgão",
      dataIndex: "orgao",
      key: "orgao",
      width: "130px",
      ...getColumnSearchProps("orgao"),
      sorter: (a, b) => a.orgao.length - b.orgao.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tipo Equipamento	",
      dataIndex: "tipo",
      key: "tipo",
      width: "130px",
      ...getColumnSearchProps("tipo"),
      sorter: (a, b) => a.tipo.length - b.tipo.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Qtd Min.",
      dataIndex: "qtdMin",
      width: "100px",
      key: "qtdMin",
      ...getColumnSearchProps("qtdMin"),
      sorter: (a, b) => a.qtdMin - b.qtdMin,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Qtd Max.",
      dataIndex: "qtdMax",
      width: "100px",
      key: "qtdMax",
      ...getColumnSearchProps("qtdMax"),
      sorter: (a, b) => a.qtdMax - b.qtdMax,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Descrição",
      dataIndex: "descricao",
      key: "descricao",
      ...getColumnSearchProps("descricao"),
      sorter: (a, b) => a.descricao.length - b.descricao.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Modelo",
      dataIndex: "modelo",
      width: "100px",
      key: "modelo",
      ...getColumnSearchProps("modelo"),
      sorter: (a, b) => a.modelo.length - b.modelo.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Valor unitário",
      dataIndex: "valor",
      width: "100px",
      key: "valor",
      ...getColumnSearchProps("valor"),
      sorter: (a, b) => a.valor.length - b.valor.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data.filter((ref) => ref.filtro === filtro)}
      scroll={{ x: "scroll" }}
      pagination={{ pageSize: 5 }}
    />
  );
}
