import { JSONPrettyUI, JSONPretty } from '../../../components/json-pretty-ui';

import { getParametersUI } from '../helper';

const apiButtonStyle = `form-select appearance-none block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                    bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 ocus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none`;
const APIBody = ({api, data, uniqueStr, activeApi}) => {
  return (
    <div id={`collapse${uniqueStr}`}
    className={`accordion-collapse ${activeApi === api.id ? 'show' : 'collapse'}`}
    aria-labelledby={`heading-${uniqueStr}`}
    data-bs-parent="#accordion-apibox"
  >
    <div class="accordion-body py-4 px-5">
      <div className="text-left my-2">
          <div className="my-4">
          <span className="text-left py-2 font-bold text-gray-700">Parameters:</span>
            {getParametersUI(api.parameters, data)}
              Parameter content type:
            <select className="ml-3 mt-3 w-60  p-2 rounded transition ease-in-out m-0  hover:text-gray-700 focus:text-gray-700 focus:bg-white " aria-label="content-type">
              {
                api.produces.map(prod => {
                  return (
                    <option>{prod}</option>
                  )
                })
              }
            </select>
          </div>
      </div>
      <div className="text-left py-2 font-bold text-gray-700">Responses:
        <JSONPretty
          id="json-pretty" theme={JSONPrettyUI}
          data={api.responses || {}}
          style={{ textAlign: 'left', padding: '4px', fontSize: '13px' }}>
        </JSONPretty>
      </div>
    </div>
  </div>
  );
}

export default APIBody;