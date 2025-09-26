

const CatchAllRoute = async({
    params,
}:{ params:Promise<{slug:string}> 
}) => {


    // 
const {slug} = await params ;

    // 
  return (
    <div>CatchAllRoute {slug}</div>
  )
}

export default CatchAllRoute