import React, { ReactNode, createContext } from 'react';
import DataStore from './menu';

interface IDataStoreContext {
    dataStore: typeof DataStore;
}

const DataStoreContext = createContext<IDataStoreContext | undefined>(undefined);

interface DataStoreProviderProps {
    children: ReactNode;
}

export const DataStoreProvider: React.FC<DataStoreProviderProps> = ({ children }) => (
    <DataStoreContext.Provider value={{ dataStore: DataStore }}>
{children}
</DataStoreContext.Provider>
);

export default DataStoreContext;
