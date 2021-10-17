import Head from "next/head";
import { ReactNode } from "react";
import { APP_NAME } from "app/config/constants";
import { Header } from "./header";
import { Box } from "@chakra-ui/react";

interface ITemplate {
  children: ReactNode;
  title?: string;
}

export function Template({ children, title = APP_NAME }: ITemplate) {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}

      <Header />

      {/* 14 = 3.5rem */}
      <Box mt="14" h="calc(100vh - 3.5rem)">
        {children}
      </Box>
    </>
  );
}
