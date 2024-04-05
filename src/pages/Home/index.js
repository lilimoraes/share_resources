import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchArea, PageArea, AreaGalery } from "./styled";
import useApi from "../../helpers/OlxApi";
import { FiSearch } from "react-icons/fi";

import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

const Page = () => {
  const api = useApi();

  //DECLARAÇÔES USESTATE
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  //REQUISIÇÂO ESTADOS
  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStates();
  }, [api]);

  //REQUISICAO CATEGORIAS
  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, [api]);

  //REQUISICAO ANUNCIOS RECENTES
  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: "desc",
        limit: 10,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, [api]);

  //FUNÇÔES

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input
                type="text"
                name="q"
                placeholder="I'm looking for..."
              />
              <select name="state">
                {stateList.map((i, k) => (
                  <option key={k} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <button>
                <FiSearch />
              </button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, k) => (
              <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                <img src={i.img} alt="" />
                <br />
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>
          <h2>Recent announcements</h2>
          <div className="list">
            {adList.map((i, k) => (
              <AdItem key={k} data={i} />
            ))}
          </div>
          <Link to="/ads" className="seeAllLink">
            See All
          </Link>
        </PageArea>
      </PageContainer>

      <AreaGalery>
        <PageContainer>
          <h2>Premium Gallery</h2>
          <div className="list">
            {adList.map((i, k) => (
              <AdItem key={k} data={i} />
            ))}
          </div>
        </PageContainer>
      </AreaGalery>
    </>
  );
};

export default Page;
