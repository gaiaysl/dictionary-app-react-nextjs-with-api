import React from 'react'
import styles from "./Header.module.css"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import categories from "../../data/category"
const Header = ({setCategory,category,word,setWord}) =>{


    const handleChange = (language) =>{
    setCategory(language);
        setWord("");
    }

    return(
        <div className={styles.header}>

            <div className={styles.cerc}>
                <span className={styles.title}>{word ? word : "Word Hunt"} </span>
            </div>

            <div className={styles.inputs}>

                <TextField
                    className={styles.search}
                    label="Standard"
                    value = {word}
                    onChange={(e) =>
                        setWord(e.target.value)}


                />

                <TextField
                    className={styles.select}
                    select
                    label="Language"
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)}

                >
                    {categories.map((option)=> (

                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                    ))}

                </TextField>
            </div>
        </div>
    );
};

export default Header