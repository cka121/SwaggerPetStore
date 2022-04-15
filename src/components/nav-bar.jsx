import React  from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const { items } = useSelector(state => state);

    return (
    <div className="p-5 h-16 bg-cyan-700 opacity-0.5 block">
            <div className="block leading-5 font-bold text-xl">
                <span className="text-white font-bold font-sans mr-1">Swagger PetStore</span>
                    { items?.info? (<span
                        className="inline-block bg-cyan-100 rounded-full 
                        px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        { items?.info?.version}
                    </span>) : null}
                </div>
        </div>
    );
}

export default NavBar;