import React from 'react';
import DataStore from './menu';

const DataStoreContext = React.createContext(DataStore);

export const DataStoreProvider = ({ children }) => (
    <DataStoreContext.Provider value={DataStore}>
        {children}
    </DataStoreContext.Provider>
);

export default DataStoreContext;
