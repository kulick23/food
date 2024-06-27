declare module 'redux-mock-store' {
    import { Store, AnyAction } from 'redux';

    interface MockStoreCreator<S = {}> {
        (state?: S | {}): MockStoreEnhanced<S>;
    }

    export interface MockStoreEnhanced<S = {}> extends Store<S> {
        getActions(): AnyAction[];
        clearActions(): void;
    }

    const configureStore: (middlewares?: any[]) => MockStoreCreator;
    export default configureStore;
}
