const Info = ({ data }) => {

    return (
       <div  className="px-2">
            <div className="grid grid-cols-12">
            <div className="py-4 col-span-9 text-left">
                <div className="font-bold text-xs mb-2">
                    [ Base Url: <span>{`${data.host} ${data.basePath}`}</span> ]
                </div>
                <div className="text-gray-700">
                    {data?.info?.description}
                </div>
            </div>

            <div className="pt-4 pb-2 font-semibold text-right col-span-3 text-sm">
                <p>Terms: 
                    <span className="underline text-blue-400">{data?.info?.termsOfService}</span>
                </p>
                <p>Email: 
                    <span className="underline text-blue-400">{data?.info?.contact?.email}</span>
                </p>
            </div>
        </div>
        <hr></hr>
        
       </div>
    );
}

export default Info;
