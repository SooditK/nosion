import * as React from "react";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "react-notion/src/styles.css";

async function getData(id: string) {
  const { data } = await axios.get(
    `https://notion-api.splitbee.io/v1/page/${id}`
  );
  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return <>{data && <NotionRenderer blockMap={data} />}</>;
}
