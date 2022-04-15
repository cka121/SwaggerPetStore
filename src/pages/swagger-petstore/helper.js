import { JSONPrettyUI, JSONPretty } from '../../components/json-pretty-ui';

const getGroupedPathsAndApis = (sdata = {}) => {

    return sdata.tags.reduce((container, t) => {

        const value = (Object.keys(sdata.paths).sort().reduce((acc, p) => {
            if (!Object.hasOwn(acc.groupedPaths, t)) acc.groupedPaths[t] = [];

            if (p.includes(t, 1)) {
                const apis = Object.entries(sdata.paths[p])
                    .map(([k, v]) => ({ ...v, id: `${k}-${p}`, method: k, path: p })) || []
                acc.apis = [
                    ...acc.apis,
                    ...apis
                ]
                acc.groupedPaths[t] = [...acc.groupedPaths[t], ...apis]
            }

            return acc;
        }, { groupedPaths: {}, apis: [] }));

        container.groupedPaths = { ...container.groupedPaths, ...value.groupedPaths };
        container.apis = [...container.apis, ...value.apis]

        return container;
    }, { groupedPaths: {}, apis: [] })
}

export const getFormattedData = (sdata) => {
    let data = { ...sdata, tags: sdata.tags.map(t => t.name) }
    const { groupedPaths, apis } = getGroupedPathsAndApis({ ...data });

    return {
        ...data,
        groupedPaths,
        apis
    };

}
export const colorMapperWithMethods = {
    post: 'green',
    get: 'sky',
    put: 'orange',
    delete: 'red'
}

export const getColor = (prop, deprecated) => {
    if (deprecated) {
        return {
            buttonColor: "bg-gray-400",
            rowColor: "bg-gray-100",
            textStrike: "line-through",
            borderColor: "border-gray-500 bg-gray-100"
        }
    }

    switch (prop) {
        case 'put':
            return { 
                buttonColor: "bg-orange-500", rowColor: "bg-orange-50/95", 
                borderColor: "border-orange-500 bg-orange-100", textColor: "text-orange-300" }
        case 'get': 
            return { 
                buttonColor: "bg-cyan-500", rowColor: "bg-cyan-50/95", 
                borderColor: "border-cyan-500 bg-cyan-100",  textColor: "text-cyan-500" }
        case 'delete':
            return { 
                buttonColor: "bg-red-500", rowColor: "bg-red-50/95", 
                borderColor: "border-red-500 bg-red-100",  textColor: "text-red-500" }
        case 'patch':
            return { 
                buttonColor: "bg-yellow-500", rowColor: "bg-yellow-50/95", 
                borderColor: "border-yellow-500 bg-yellow-100",  textColor: "text-yellow-500" } 
        case 'head':
            return { buttonColor: "bg-brown-500", rowColor: "bg-brown-50/95", 
            borderColor: "border-brown-500 bg-brown-100",  textColor: "text-brown-500" }
        case 'options':
            return { buttonColor: "bg-voilet-500", rowColor: "bg-voilet-50/95", 
            borderColor: "border-voilet-500 bg-voilet-100",  textColor: "text-violet-500" }
        default:
           return  { buttonColor: "bg-green-500", rowColor: "bg-green-50/95",
            borderColor: "border-green-500 bg-green-100",  textColor: "text-green-500" }
    }
}

const propExist = (param, prop ) => {
    return typeof param === 'object' ? param.hasOwnProperty(prop) : false
}

const isArray = (type) => type === 'array';

const getValue = (object, searchKey) => {
    let value;
    if(object){
      Object.keys(object).some((key) => {
          if (key === searchKey) {
              value = object[key];
              return true;
          }
          if (object[key] && typeof object[key] === 'object') {
              value = getValue(object[key],searchKey);
              return value !== undefined;
          }
      });
    }
    return value;
}

const getPropertiesObj = (data, pathArray) => {
    let propObj;
    pathArray.forEach((p,i) => {
        if(i === 0) {
            propObj = data[p]
        }
        else 
        propObj = propObj[p];
    })

    return propObj;
}

export const getParametersUI = (params, data) => {
    const searchKey = '$ref';
    if(params.length > 0) {
        const paramObj = params[0];
        if(propExist(paramObj, 'schema')) {
            const arrayProp = isArray(paramObj.schema.type);
            const ref =  getValue(paramObj, searchKey);
            const arr= (ref.split('/'));
            arr.splice(0, 1);
            const propObj = getPropertiesObj(data,arr);
            return <JSONPretty 
                    id="json-pretty" 
                    theme={JSONPrettyUI} 
                    data={arrayProp ? [propObj.properties] : propObj.properties}
                    style={{textAlign:'left', padding:'4px', fontSize:'13px'}}>
                </JSONPretty>  
        }
        else {
            return params.map((param)=>{
                return (<div className="m-2 flex " key={param.name}>
                <span className='flex-col'>{param.name} {param.required ? <span className='text-red-400'>&nbsp;*</span> : ""}</span>
                <input className="flex-col border border-black" type={param.type}/>
                </div>)
              })
        }
    }
    
    return null;
};