
const Definitions = ({word, category, meanings}) => {


    return  <div className=" flex flex-col justify-center gap-y-3 text-black dark:text-white    " >

        <div className=" mx-auto gap-y-2 " >
        {meanings[0] && word && category === "en" && (
            <audio
                className="mb-10"
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                controls
            >
                <p >Your browser does not support the audio element.</p>
            </audio>
        )}
        </div>

            {word===""?(<div className=" mx-auto" >Start by typing a word in search</div>
                ):(
                    meanings.map((mean)=> mean.meanings.map((item)=>(
                            item.definitions.map((def) =>(
                                <div className="
                               mx-auto sm:max-w-4xl sm:w-full max-w-xl w-full
                                bg-purple-300 dark:bg-slate-600 rounded-2xl p-4
                                  py-3 mb-1
                                shadow-lg shadow-gray/50 hover:drop-shadow-2xl
                                 transition-all ease-in-out duration-400  "
                                >

                                    <p className="mx-auto  ">{def.definition}</p>
                                    <hr />
                                    {def.example && (
                                        <div className="text-center" >
                                        <b>Example :</b> {def.example}
                                      </div>
                                        )}
                                    {def.synonyms && (
                                        <div > 
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

