import { Suspense } from "react";
import { CacheNone } from '@shopify/hydrogen';
import { Layout } from "../components/Layout.server";
import { Page } from "../components/PageBuilder/PageBuilder.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Page path="/pages/color" cachingStrategy={CacheNone()} />
      </Suspense>
    </Layout>
  );
}
