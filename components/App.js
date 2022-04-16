import styles from "../components/App.module.css"
import axios from "axios";
import {useEffect, useState} from "react";
import Container from '@mui/material/Container';
import Header from "../components/Header/Header"
import Definitions from "./Definitions/Definitions";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


function App(){

    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en");
    const [lightMode, setLightMode] = useState(false);
    const Mode = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: pink[600],
            '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: pink[600],
        },
    }));

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
        <div className={styles.app} >

            <Container maxWidth="md" className={styles.container}>

                <div
                    style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
                >
                    <span>Light Mode</span>
                <Mode
                    checked={lightMode}
                    onChange={()=> setLightMode (!lightMode)}/>
                </div>

                <Header
                    category={category} setCategory={setCategory}
                    word ={word} setWord={setWord}
                />
                {meanings &&(
                    <Definitions
                        word={word}
                        meanings={meanings}
                        category={category}/>
                    )}
                </Container>
        </div>
    );
}

export default App;