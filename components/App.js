import styles from "../components/App.module.css"
import axios from "axios";
import {useEffect, useState} from "react";
import Container from '@mui/material/Container';
import Header from "../components/Header/Header"
import Definitions from "./Definitions/Definitions";
import { alpha, styled } from '@mui/material/styles';
import {blue, pink} from '@mui/material/colors';
import Switch from '@mui/material/Switch';


function App(){

    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en");
    const [LightMode, setLightMode] = useState(false);


    const DarkMode = styled(Switch)(({ theme }) => ({
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
        <div
             style={{
                 height: "110vh",
                 backgroundColor: LightMode ? "#fff" : "#282c34",
                 color: LightMode? "black" : "white",
                 transition: "all 0.5s linear",
             }}

        >

            <Container
                maxWidth="md"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    justifyContent: "space-evenly",
                }}
            >

                <div
                    className={styles.swich}
                >
                    <span>{LightMode ? "Dark" : "Light"} Mode</span>
                    <DarkMode
                        checked={LightMode}
                        onChange={() => setLightMode(!LightMode)}
                    />
                </div>

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
                </Container>
        </div>
    );
}

export default App;