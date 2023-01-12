
const Definitions = ({word, category, meanings}) => {


    return  <div className=" flex flex-col justify-center gap-y-2  " >

        <div className=" mx-auto " >
        {meanings[0] && word && category === "en" && (
            <audio
                className=""
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                controls
            >
                <p >Your browser does not support the audio element.</p>
            </audio>
        )}
        </div>

            {word===""?(<span >Start by typing a word in search</span>
                ):(
                    meanings.map((mean)=> mean.meanings.map((item)=>(
                            item.definitions.map((def) =>(
                                <div className="
                               
                                bg-gray-100 rounded-2xl p-4
                                 backdrop-blur-2xl py-3 mb-1
                                shadow-lg shadow-gray/50 hover:drop-shadow-2xl
                                 transition-all ease-in-out duration-400"
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

