import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { PageArea, Fake, OthersArea, BreadChumb } from "./styled";
import useApi from "../../helpers/OlxApi";
import { FiMessageCircle, FiChevronRight } from "react-icons/fi";

import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

const Page = () => {
  const api = useApi();
  const { id } = useParams();

  //USESTATE DECLARATIONS
  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  useEffect(() => {
    const getAdInfo = async (id) => {
      const json = await api.getAd(id, true);
      console.log(json);
      setAdInfo(json);
      setLoading(false);
    };
    getAdInfo(id);
  }, [api, id]);

  //FUNCTIONS
  const formatDate = (date) => {
    let cDate = new Date(date);

    let months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    let cDay = cDate.getDate();
    let cMonth = cDate.getMonth();
    let cYear = cDate.getFullYear();

    return `${months[cMonth]}, ${cDay}, ${cYear}`;
  };

  return (
    <PageContainer>
      {adInfo.category && (
        <BreadChumb>
          <Link to="/">Home</Link>
          <FiChevronRight />
          <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
          <FiChevronRight />
          <Link
            to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}
          >
            {adInfo.category.name}
          </Link>
          <FiChevronRight /> {adInfo.title}
        </BreadChumb>
      )}

      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="adName">
              {loading && <Fake height={20} />}
              {adInfo.title && <h2>{adInfo.title}</h2>}
              {adInfo.dateCreated && (
                <small>Published in {formatDate(adInfo.dateCreated)}</small>
              )}
            </div>
            <div className="box adImage">
              {loading && <Fake height={300} />}
              {adInfo.images && (
                <Slide>
                  {adInfo.images.map((img, k) => (
                    <div key={k} className="each-slide">
                      <img src={img} alt="" />
                    </div>
                  ))}
                </Slide>
              )}
            </div>

            <div className="aInfo">
              <div className="adDescription">
                {loading && <Fake height={100} />}
                {adInfo.views && <small>Views: {adInfo.views}</small>}
                <br />
                <br />
                <span className="price-info">$ {adInfo.price}</span>
                <br />
                <br />
                {adInfo.description}
              </div>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <div className="box box--padding">
            {loading && <Fake height={20} />}
            {adInfo.priceNegotiable && "Price Negotiable"}
            {!adInfo.priceNegotiable && adInfo.price && (
              <div className="price">
                <span>R$ {adInfo.price}</span>
              </div>
            )}
          </div>
          {loading && <Fake height={50} />}
          {adInfo.userInfo && (
            <>
              <div className="createdBy box box--padding">
                <strong>{adInfo.userInfo.name}</strong>
                <br />
                <a
                  href={`mailto:${adInfo.userInfo.email}`}
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  className="contactSellerLink"
                >
                  <FiMessageCircle /> Start chat
                </a>
                <small>E-mail: {adInfo.userInfo.email}</small>
                <small>Estado: {adInfo.stateName}</small>
              </div>
              <div className="box-info">
                <h4>Safety Tips</h4>
                <span>
                Don't make payments early <br /> to check what...
                </span>
              </div>
            </>
          )}
        </div>
      </PageArea>

      <OthersArea>
        {adInfo.others && (
          <>
            <h2>Other offers from the seller</h2>
            <div className="list">
              {adInfo.others.map((i, k) => (
                <AdItem key={k} data={i} />
              ))}
            </div>
          </>
        )}
      </OthersArea>
    </PageContainer>
  );
};

export default Page;
