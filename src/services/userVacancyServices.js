import UserVacancy from "../db/models/UserVacancy.js";

export const getVacancies = query => UserVacancy.findAll({
    where: query,
});

export const getVacanciesByUser = userId => UserVacancy.findAll({
    where: {
        userId
    },
    attributes: ['resourceId']
});

export const addVacancy = data => UserVacancy.create(data);


export const getVacancy = query => UserVacancy.findOne({
    where: query,
});

export const getLastAddedVacancy = query => UserVacancy.findOne({
    where: query,
    order: [ [ 'createdAt', 'ASC' ]]
});

export const getFirstUnpublishVacancy = query => UserVacancy.findOne({
    where: query,
    order: [ [ 'createdAt', 'ASC' ]]
});


export const updateVacancy = async (query, data) => {
    const vacancy = await getVacancy(query);
    if(!vacancy) {
        return null;
    }
    return vacancy.update(data, {
        returning: true,
    });
}