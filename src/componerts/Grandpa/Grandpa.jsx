import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

 export const AssetContext = createContext('gold');

const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
           <AssetContext.Provider value="gold">
           <section className="flex">
              <Dad asset={asset}></Dad>
              <Uncle asset={asset}></Uncle>
              <Aunty></Aunty>
           </section>
           </AssetContext.Provider>

        </div>
    );
};

export default Grandpa;



/* 

1. create acontext and  export it
2.Add provider for the context with a value.vale could be anything 
3. useContext to access value in the context API

*/