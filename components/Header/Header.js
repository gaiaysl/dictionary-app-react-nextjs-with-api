import DarkMode from "../DarkMode";
const Header = ({word}) =>{

    return(
       
        <div className=' flex flex-col justify-center items-center gap-y-6 h-56  ' >

            <div className='  w-full max-w-xl px-8 text-center items-center  ' >
                
            <div className="flex flex-row  justify-between mx-auto">
           
           
                <span className='font-bold text-4xl  mx-auto ' >{word ? word : "Word Hunt"} </span>
                <DarkMode/>
            </div>
            </div>

                            </div>
                        );
                    };

export default Header