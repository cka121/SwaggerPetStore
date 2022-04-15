import React from "react";

import '../../../styles.css';
import { getColor } from "../helper";

const Collapse = ({ paths, onClickHandler, title, index }) => {

    return (
        <div className="cursor-pointer mb-4 text-lg">
            <div
                className=""
                data-bs-toggle="collapse"
                href={`#collapseWithScrollbar-${title}`}
            >
                <h3 className="text-left font-bold">{title}</h3>
            </div>
            <div
                class={`my-2 overflow-y-auto text-left ${index === 0 ? 'show': ''}}`}
                id={`collapseWithScrollbar-${title}`}
            > {
                    paths.map(api => {
                        const colorObj = getColor(api.method);

                        return (
                            <div className={`cursor-pointer hover:bg-gray-100 rounded-sm mb-0.5 text-sm grid grid-cols-4`} onClick={() => onClickHandler(api.id)}>
                                <span className={`${colorObj.textColor} inline-block rounded-md px-2 py-1 text-sm font-semibold  mr-2 uppercase`}>
                                    {api.method}
                                </span>
                                <span className="pr-2 ">{api.path}</span>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Collapse;