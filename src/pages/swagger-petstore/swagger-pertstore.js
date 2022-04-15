import React, { Component, PropTypes, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../../redux/actions/items';
import { MAIN_DATA_URL } from '../../enums/api';
import Info from './components/info';
import SideNav from './components/side-nav';
import ApiBox from './components/apiBox';

const SwaggerPetstore = () => {
    const storeState = useSelector(state => state);
    const dispatch = useDispatch();
    const hasError = storeState.hasError;
    const isLoading = storeState.isLoading;
    const [activeApi, updateActiveApi] = useState(null);

    useEffect(() => {
        dispatch(itemsFetchData(MAIN_DATA_URL));
    }, []);

    const handleOnClick = (id) => {
        updateActiveApi(id);
    };

    const getUI = () => {
        if (hasError) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <div className="rounded-lg overflow-hidden shadow-lg m-5 p-5">
                    <Info data={storeState.items} />
                    <div className='text-bold text-gray-700 text-2xl pt-3'>
                            <h2>APIs</h2>
                        </div>
                <div className="rounded-2xl m-2 p-8">
                    <div className="grid grid-cols-12">
                    
                        <SideNav
                            onClickHandler={handleOnClick}
                            groupedPaths={storeState.items.groupedPaths}
                        />
                        <ApiBox
                            apis={storeState.items.apis}
                            activeApi={activeApi}
                            onClickHandler={handleOnClick}
                            data={storeState.items}
                        />
                    </div>
                </div>
                </div>

            </div>
        )
    }

    return (
        <div>
            {getUI()}
        </div>
    )


}
export default SwaggerPetstore;