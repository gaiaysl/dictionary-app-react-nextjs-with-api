import React from 'react'

import categories from "../../data/category"
const Header = ({setCategory,category,word,setWord}) =>{


    const handleChange = (language) =>{
    setCategory(language);
        setWord("");
    }

    return(
        <div className=' flex flex-col  ' >

            <div className=' mx-auto py-4' >
                <span className='font-bold text-4xl  ' >{word ? word : "Word Hunt"} </span>
            </div>

            <div className=' mx-auto flex flex-row my-44' >



                <input
                    className=' border-2 rounded-lg p-1 w-82 mx-2 '
                    label="Standard"
                    value = {word}
                    onChange={(e) =>
                        setWord(e.target.value)}


                />


<select
value={category}
onChange={(e) =>
    setCategory(e.target.value)}
 id="countries" 
 className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
{categories.map((option)=> (
  <option >{option.value}</option>
))}

</select>

                
            </div>
        </div>
    );
};

export default Header