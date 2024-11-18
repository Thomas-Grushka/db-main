import Sequelize from "sequelize";

import Group from "../db/models/Group.js";

export const getAllGroup = () => Group.findAll();

export const getGroupIdById = id => Group.findByPk(id);

export const addGroup = (payload) => Group.create(payload);

export const deleteGroups = (payload) =>
  Group.destroy({
    where: {
      id: payload,
    },
  });

export const toggleGroupsActive = (payload) =>
  Group.update(
    { active: Sequelize.literal("NOT active") }, // Тоггл значения
    {
      where: {
        id: payload,
      },
      returning: true,
    }
  );

  export const updateGroupById = async (id, data) => {
    const group = await Group.findOne({
      where: {
        id,
      }
    });

    if(!group) {
        return null;
    }
    
    return group.update(data, {
        returning: true,
    });
}