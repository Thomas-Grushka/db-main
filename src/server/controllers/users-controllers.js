import * as usersSerivces from "../../services/userServices.js";
import {getGroupIdById} from "../../services/groupsServices.js";

export const getUsersByGroupIdController = async(req, res)=> {
    const {groupId} = await getGroupIdById(req.params.id);

    const result = await usersSerivces.getAllUsersFromGroup(groupId);

    res.json(result);
}
