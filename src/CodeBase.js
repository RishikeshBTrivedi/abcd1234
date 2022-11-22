import React from 'react'

const CodeBase = () => {
    const [data, setdata] = useState({})
    
    const getData = async()=> {
        const req = await fetch("http://localhost:5000/fetchCodeBase",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
        
        })
        const res = await req.json()
        setdata(res)
        
    }
    useEffect(() => {
        getData()
    
    }, [])
  return (
    <div className=' border- border-2 border-sky-500 w-fit h-3/4'>
        {data.map((data , _i) => (
            <div>
                <h4 className='text-white'>{data.title}</h4>
                <h3 className='font-bold text-amber-400'>{data.content}</h3>
            </div>
            
        ))}
    </div>
  )
}

export default CodeBase