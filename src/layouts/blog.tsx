"use client";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BlogLayout = ({ children }: Props): React.ReactElement => (
  <div className="flex flex-col flex-1">{children}</div>
);
