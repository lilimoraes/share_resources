import React, { useState, useEffect } from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";


const Page = () => {
  const api = useApi();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stateLoc, setStateLoc] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [stateList, setStateList] = useState([]);
  const [listToken, setListToken] = useState([]);

  const [disabled, setDisabled] = useState(false);


  useEffect(()=>{
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };

    getStates();
  }, [api])
  
  //FUNCTION TO BRING USER DATA AND ADVERTISING
  useEffect(()=> {
    const getToken = async () => {
      const list = await api.getToken();
      setListToken(list);
    };

    getToken()
  }, [api]); 

  //FUNCTION CHANGE USER DATA
  const handleSubmit = async () => {
      const unRegister = async () => {
        const list = await api.unRegister();
        setListToken(list);
      };
  
      unRegister();
    } 
  
 




  return (
    <>
    <PageContainer>

      <PageTitle>My Account</PageTitle>
      <PageArea>

        <form onSubmit={handleSubmit} >
          <label className="area">
            <div className="area--title">Name</div>
              <div className="area--input">
                <input 
                disabled={disabled}
                placeholder={listToken.name}
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
              </div>
          </label>

            <label className="area">
              <div className="area--title">E-mail</div>
                <div className="area--input">
                  <input 
                  disabled={disabled}
                  placeholder={listToken.email}
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
            </label>

            <label className="area">
              <div className="area--title">State</div>
                <div className="area--input">
                 <select
                  value={stateLoc}
                  onChange={(e)=>setStateLoc(e.target.value)}
                 >
                   <option></option>
                   {stateList.map((i, k) => (
                     <option key={k} value={i._id}>
                       {i.name}
                     </option>
                   ))}

                 </select>
                </div>
            </label>

            <label className="area">
              <div className="area--title">Password</div>
                <div className="area--input">
                  <input 
                  disabled={disabled}
                  placeholder={listToken.password}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
            </label>

            <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button>Save data</button>
            </div>
          </label>
        </form>



      </PageArea>
    </PageContainer>

    <PageContainer>
      <PageTitle></PageTitle>
      <PageArea>
        <div className="myAds">

        </div>
      </PageArea>
    </PageContainer>
    </>

  );
};

export default Page;
