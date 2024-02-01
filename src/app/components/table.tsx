"use client";

import { useEffect } from "react";
import DataTable, { type Config } from "datatables.net";
import "datatables.net-responsive-dt";
import type { Prisma } from "@prisma/client";

export const Table = ({
  table,
  opts,
}: {
  table: Prisma.ModelName;
  opts: Config;
}) => {
  useEffect(() => {
    new DataTable(table, {
      ...opts,
      responsive: true,
    }).columns
      .adjust()
      .responsive.recalc();
  }, [table, opts]);

  return <table id={table}></table>;
};
