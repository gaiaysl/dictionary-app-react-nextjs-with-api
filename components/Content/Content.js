
import categories from "../../data/category";

export default function Content({category, setCategory, word, setWord}){
        const handleChange = (language) =>{
            setCategory(language);
                setWord("");
            }
return(
    <div className=" sm:gap-x-1 max-w-xl  w-full flex flex-row  justify-center mx-auto py-4">
        <input
                    className='sm:w-96  border-2 rounded-lg p-3  '
                    label="Standard"
                    value = {word}
                    onChange={(e) =>
                        setWord(e.target.value)}
                />

        <select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            id="countries" 
            className="bg-gray-50 border sm:w-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {categories.map((option)=> (
                <option key={option.id} value={option.value}>{option.label}</option>
            ))}
        </select>  
    </div>
    )}