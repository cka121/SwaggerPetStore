import React from 'react';
import Collapse from './collapse.js';

const SideNav = ({ groupedPaths, onClickHandler }) => {

    return (
        <div className="col-span-4 mr-10 ">
            {
                Object.keys(groupedPaths).map((p, i) => {
                    return (
                        <section className="side-nav-sections" id="side-nav-sections">
                            {<Collapse
                                paths={groupedPaths[p]}
                                onClickHandler={onClickHandler}
                                title={p}
                                index={i}
                            />
                            }
                        </section>
                    )
                })
            }
        </div>
    );
}

export default SideNav;
