import { useEffect, useState } from "react"





const Create = (from) => {

    const handleInput = (ev, x) => {
        if (x.owner === 'james') {
            from.setValue({ ...from.value, jamesData: ev.target.value })
        }

        if (x.owner === 'adam') {
            const prev = from.value.jamesData
            from.setValue({ ...from.value, jamesData: prev + ev.target.value,adamData:ev.target.value })

        }

        if (x.owner === 'amir') {
            const prev = from.value.jamesData
            const prev2 = from.value.adamData
            from.setValue({ ...from.value, jamesData: prev + ev.target.value, adamData: prev2 + ev.target.value, amirData:ev.target.value })

        }


        console.log(from.value, "checkvalue")
    }



    return (
        <>
            <p>{from.value&&from.data&&from.data.owner === 'adam' ? from.value.adamData : from.value&&from.data&&from.data.owner === 'james' ? from.value.jamesData : from.value&&from.data&&from.data.owner === 'amir' ?  from.value.amirData : ''}</p>
                {/* {JSON.stringify(from.value)} */}
            {from.data && from.data.owner ? 
            
            <input defaultValue={from.data.owner === 'james' ? from.value.jamesData : from.data.owner === 'adam' ? from.value.adamData : from.value.amirData} 
             className="inputz" type="text" onChange={(e) => handleInput(e, from.data)} ></input>
                : ''}
        
        

        </>
        
    )



}



const Structure = () => {
    const [value, setValue] = useState({ jamesData: '0', adamData: '0', amirData: '0' })


    return (

        <>
        <h1>Test new push</h1>
        <h1>Test new push 2</h1>

            <div className="container1">
                <div className="boxes">
                    <div className="insideBox">
                        <p>Rashdan</p>
                        <Create />
                    </div>
                </div>

                <div className="boxes" >
                    <div className="insideBox">
                        <p>James </p>
                        <Create value={value} setValue={setValue} data={{ edit: ['james'], owner: 'james' }} />

                    </div>
                </div>

                <div className="boxes">
                    <div className="insideBox">
                        <p>Adam</p>
                        <Create value={value} setValue={setValue} data={{ edit: ['adam', 'james'], owner: 'adam' }} />
                    </div>
                </div>

                <div className="boxes">
                    <div className="insideBox">
                        <p>Amir </p>
                        <Create value={value} setValue={setValue} data={{ edit: ['adam', 'james', 'amir'], owner: 'amir' }} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Structure