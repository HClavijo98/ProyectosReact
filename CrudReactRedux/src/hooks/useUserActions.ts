import { useAppDispatch } from "./store";
import { addNewUser, updateOldUser, deleteUserById, UserId } from "../store/users/slice";

export function useUserActions() {
  const dispatch = useAppDispatch();

  function addUser({ name, email, github }: { name: string; email: string; github: string }) {
    dispatch(addNewUser({ name, email, github }))
  }

  function updateUser({ id, name, email, github }: { id: string, name: string; email: string; github: string }) {
    dispatch(updateOldUser({ id, name, email, github }))
  }

  function removeUser(id: UserId) {
    dispatch(deleteUserById(id));
  }

  return { addUser, updateUser, removeUser };
}
