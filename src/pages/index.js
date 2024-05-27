import Head from "next/head";

import {
  TopSection,
  Contact,
  Skills,
  WorkExperience,
  ViewSwitch,
} from "@/components/root";

export default function Root() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="The software engineer blog" />
        {/*<script*/}
        {/*  src="https://apis.google.com/js/platform.js"*/}
        {/*  async*/}
        {/*  defer*/}
        {/*></script>*/}
      </Head>

      <TopSection />
      <Skills />
      <WorkExperience />
      <Contact />
      <div className={"h-[300px] w-full bg-none"}></div>
      <ViewSwitch />
    </>
  );
}
