import React from "react";
import { Link } from "react-router-dom";
import { PageArea } from "./styled"

const Page = () => {
  return (
    <PageArea>
      
      <h1>Pagina Não Encontrada</h1>

      <Link className="back" to="/">Voltar para a Home</Link>
    </PageArea>
  );
};

export default Page;
