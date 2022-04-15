import React from 'react';
import { getColor  } from '../helper';
import APIBody from './apiBody';

const accordionButtonStyle = `accordion-button collapsed relative flex items-center w-full py-1 px-2 text-base text-gray-800 text-left
                    border-0 rounded-none transition focus:outline-none`;

const ApiBox = ({ apis, activeApi, onClickHandler, data }) => {
  return (
    <div className="col-span-8">
      {
        apis.map(api => {
          const colorObj = getColor(api.method, api.deprecated);
          const uniqueStr = (api.id).replace(/[^a-zA-Z ]/g, "")
          return (
            <div key={api.id} className="accordion my-2" id={`accordionApibox`}>
              <div className={`accordion-item '${getColor(api.method, api.deprecated).rowColor}'  
                  border border-${getColor(api.method, api.deprecated).borderColor} shadow-xl`}>
                <h2 className="accordion-header" id={`heading-${uniqueStr}`}>
                  <button className={`
                                  ${colorObj.rowColor}
                                  ${accordionButtonStyle}
                                  focus:${colorObj.rowColor}
                                `}
                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${uniqueStr}`} aria-expanded="false"
                    aria-controls={`collapse${uniqueStr}`}
                    onClick={() => {
                      let value = '';
                      if (api.id !== activeApi) value = api.id
                      onClickHandler(value)
                    }}
                  >
                    <span className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 
                                            uppercase text-white ${getColor(api.method, api.deprecated).buttonColor}`}> {api.method}</span>
                    <span className={`font-semibold text-md mb-2 mr-4 text-black ${colorObj.textStrike}`}>{api.path}</span>
                    <span className="text-xs mb-2 text-black">{api.summary}</span>

                  </button>
                </h2>
                <APIBody api={api} data={data} uniqueStr={uniqueStr} activeApi={activeApi} />
              </div>
            </div>

          );
        })
      }
    </div>
  )
}

export default ApiBox;