import { db } from "@/server/db";
import { Table } from "./components/table";
import type { ConfigColumns } from "datatables.net";

export default async function HomePage() {
  const data = await db.post.findMany();
  const columns: ConfigColumns[] = [
    {
      data: "name",
    },
  ];

  return (
    <main>
      <Table
        table="Post"
        opts={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data,
          columns,
        }}
      />
    </main>
  );
}
