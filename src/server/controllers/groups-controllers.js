import * as groupsServices from "../../services/groupsServices.js";

export const getAllGroupsController = async(req, res)=> {
    const result = await groupsServices.getAllGroup();

    res.json(result);
}

export const addGroupController = async (req, res)=> {
    const result = await groupsServices.addGroup(req.body);

    res.status(201).json(result);
}

export const deleteGroupsController = async (req, res)=> {
    const result = await groupsServices.deleteGroups(req.body);

    res.status(201).json(result);
}

export const toggleGroupsActiveController = async(req, res)=> {
    const result = await groupsServices.toggleGroupsActive(req.body);

    res.json(result);
}

export const updateGroupByIdController = async(req, res)=> {
    const {id} = req.params;
    const result = await groupsServices.updateGroupById(id, req.body);

    res.json(result);
}