

const CatchAllRoute = async({
    params,
}:{ params:Promise<{slug:string}> 
}) => {


    // 
const {slug} = await params ;

  console.log(slug);
    // 
  return (
    <div>CatchAllRoute {slug}</div>
  )
}

export default CatchAllRoute