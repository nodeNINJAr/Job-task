

interface IInfo {
    subtitle : string,
    title: string,
    desc:string,
}

function Heading({subtitle, title, desc}:IInfo) {

    // 
  return (
    <div className="flex justify-center items-center flex-col space-y-4 mb-6">
        {subtitle && <span className="!font-rubik font-medium text-xl text-[#749B3F] bg-[#749B3F1A] rounded-sm py-1 px-3">{subtitle}</span>}
          {title &&  <h1 className="font-medium text-3xl md:text-5xl capitalize text-primary text-center">{title}</h1>} 
         {desc &&  <p className="text-secondary text-sm leading-6 text-center w-10/12 md:w-1/2">{desc}</p>}
    </div>
  )
}

export default Heading