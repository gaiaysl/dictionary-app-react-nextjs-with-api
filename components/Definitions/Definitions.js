import React from "react";
import styles from "../Definitions/Definitions.module.css"

const Definitions = ({word, category, meanings}) => {


    return  <div className={styles.meanings}>

        <div className={styles.audio}>
        {meanings[0] && word && category === "en" && (
            <audio
                style={{ backgroundColor: "#fff", borderRadius: 10 }}
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                controls
            >
                Your browser does not support the audio element.
            </audio>
        )}
        </div>

            {word===""?(<span className={styles.subTitle}>Start by typing a word in search</span>
                ):(
                    meanings.map((mean)=> mean.meanings.map((item)=>(
                            item.definitions.map((def) =>(
                                <div className={styles.mean}>
                                    <b>{def.definition}</b>
                                    <hr style={{backgroundColor: "black", width:"100%" }}/>
                                    {def.example && (
                                        <span>
                                        <b>Example :</b> {def.example}
                                      </span>
                                        )}
                                    {def.synonyms && (
                                        <span>
                                                <b>synonyms : </b>
                                            {def.synonyms.map((s)=>`${s},`)}
                                            </span>
                                    )}
                                </div>
                            ))
                        )))
                )}

        </div>;


};
export default Definitions;

