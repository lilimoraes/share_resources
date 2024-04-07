import React from "react";
import { Link } from "react-router-dom";
import { PageArea } from "./styled"

const Page = () => {
  return (
    <PageArea>
      
      <h1>Page not found</h1>

      <Link className="back" to="/">Back to Home</Link>
    </PageArea>
  );
};

export default Page;
