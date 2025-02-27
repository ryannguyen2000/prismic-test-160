import { Fragment } from "react";
import { createClient } from "@/prismicio";

import ClientWrapper from "@/components/grid-systems/ClientWrapGridSystem";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const { uid } = await params;

  return (
    <Fragment>
      <ClientWrapper layoutId={uid} pathName={uid} />
    </Fragment>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
