import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from "./users/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}

const syncWithDatabaseMiddleware: Middleware = store => next => action => {
	const { type, payload } = action
	const previousState = store.getState()

	next(action)

	if (type === 'users/addNewUser') {
		const userToAdd = payload;

        if (userToAdd) {
            toast.success(`Usuario ${userToAdd.name} añadido correctamente.`);
        } else {
            toast.error(`Error: el usuario con ID ${userToAdd} no se puede añadir.`);
            store.dispatch(rollbackUser(userToAdd)); // Si existe lógica de rollback.
        }
	}

	if (type === 'users/updateOldUser') {
		const userToUpdate = payload;
	
		if (userToUpdate && userToUpdate.id) {
			toast.success(`Usuario ${userToUpdate.name} actualizado correctamente.`);
		} else {
			toast.error(`Error: no se puede actualizar el usuario.`);
			if (userToUpdate) {
				store.dispatch(rollbackUser(userToUpdate)); // Asegúrate de que `rollbackUser` está bien definido.
			}
		}
	}

	if (type === 'users/deleteUserById') {
        const userIdToRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === userIdToRemove);

        if (userToRemove) {
            toast.success(`Usuario ${userToRemove.name} eliminado correctamente.`);
        } else {
            toast.error(`Error: el usuario con ID ${userIdToRemove} no existe.`);
            store.dispatch(rollbackUser(userToRemove)); // Si existe lógica de rollback.
        }
    }
}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: (getDefaultMiddleware) => {

		return (getDefaultMiddleware().concat(persistanceLocalStorageMiddleware), getDefaultMiddleware().concat(syncWithDatabaseMiddleware))
	  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch