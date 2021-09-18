import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { userReducer, workspaceReducer } from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
    workspace: workspaceReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

const persistor = persistStore(store);

export { store, persistor }