
import axios from "axios";
import {useEffect, useState} from "react";

import Header from "./Header/Header"
import Definitions from "./Definitions/Definitions";
import DarkMode from '../components/DarkMode'
import Content from "./Content/Content";



function Api(){

    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en");
    const [LightMode, setLightMode] = useState(false);




    const dictionaryApi = async () => {
        try {
            const data =  await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
            );

            setMeanings(data.data);

        } catch (error) {
            console.log(error);
        }
    };

    //console.log(meanings);

    useEffect(() => {
        dictionaryApi();

    }, [word, category])

    return (
     <div >
         <div className="mx-auto  ">
                <Header word={word}/>
                </div>
                <div className=" h-44 mx-auto flex flex-col justify-center items-center">
                  <Content
              word ={word} 
              setWord={setWord}
              category={category}
                    setCategory={setCategory}
                   
              />
              </div>
              <div>
                {meanings &&(
                    <Definitions
                        word={word}
                        meanings={meanings}
                        category={category}
                        
                    />
                    )}
                
                </div>
                </div>
    );
}

export default Api;