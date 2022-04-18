import React from "react";
import styles from "../Definitions/Definitions.module.css"

const Definitions = ({word, category, meanings,LightMode}) => {


    return  <div className={styles.meanings}>

        <div >
        {meanings[0] && word && category === "en" && (
            <audio
                className={styles.audio}
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                controls
            >
                <p >Your browser does not support the audio element.</p>
            </audio>
        )}
        </div>

            {word===""?(<span className={styles.subTitle}>Start by typing a word in search</span>
                ):(
                    meanings.map((mean)=> mean.meanings.map((item)=>(
                            item.definitions.map((def) =>(
                                <div className={styles.mean}
                                >

                                    <p>{def.definition}</p>
                                    <hr />
                                    {def.example && (
                                        <div >
                                        <b>Example :</b> {def.example}
                                      </div>
                                        )}
                                    {def.synonyms && (
                                        <div>
                                                <b>synonyms : </b>
                                            {def.synonyms.map((s)=>`${s},`)}
                                            </div>
                                    )}
                                </div>
                            ))
                        )))
                )}

        </div>;


};
export default Definitions;

