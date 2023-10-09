import Link  from "next/link"

const DashBoardTableulli = (props) =>{

    return(
      <>
            <li className={props.width}>
                <Link  href="javascript:void(0)" className={`inline-block border-r-[1px] border-black w-full p-4 ${props.textcolor} font-semibold ${props.bgcolor} focus:outline-none" aria-current="page`}>{props.name}</Link>
            </li>
         
            </>
        
    )
}

export default DashBoardTableulli