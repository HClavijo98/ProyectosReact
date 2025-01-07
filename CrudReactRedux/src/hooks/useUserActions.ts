import { useAppDispatch } from "./store";
import { deleteUserById, UserId } from "../store/users/slice";

export function useUserActions() {
  const dispatch = useAppDispatch();

  function removeUser(id: UserId) {
    dispatch(deleteUserById(id));
  }

  return { removeUser };
}
