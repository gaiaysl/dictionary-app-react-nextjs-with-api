import DarkMode from "../DarkMode";
const Header = ({word}) =>{

    return(
        <div className=' flex flex-col justify-center items-center gap-y-6 h-56  ' >
  
            <div className='  w-full max-w-7xl text-center items-center ' >
              
            <DarkMode/>
          
                <span className='font-bold text-4xl  ' >{word ? word : "Word Hunt"} </span>
            </div>


                            </div>
                        );
                    };

export default Header