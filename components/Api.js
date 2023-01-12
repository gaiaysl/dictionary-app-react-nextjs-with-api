
import axios from "axios";
import {useEffect, useState} from "react";

import Header from "./Header/Header"
import Definitions from "./Definitions/Definitions";
import DarkMode from '../components/DarkMode'



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
        <div className=""
           

        >
               <DarkMode/>


             
                
                <Header
                    category={category}
                    setCategory={setCategory}
                    word ={word}
                    setWord={setWord}

                />
                {meanings &&(
                    <Definitions
                        word={word}
                        meanings={meanings}
                        category={category}
                        LightMode={LightMode}
                    />
                    )}
                
        </div>
    );
}

export default Api;