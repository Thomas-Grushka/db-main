import Vacancy from "../db/models/Vacancy.js";

export const getVacancies = query => Vacancy.findAll({
    where: query,
});

export const getVacanciesResourceIds = query => Vacancy.findAll({
    where: query,
    attributes: ['resourceId']
})

export const getVacancy = query => Vacancy.findOne({
    where: query,
});

export const getLastAddedVacancy = query => Vacancy.findOne({
    where: query,
    order: [ [ 'createdAt', 'ASC' ]]
});

export const getFirstUnpublishVacancy = query => Vacancy.findOne({
    where: query,
    order: [ [ 'createdAt', 'ASC' ]]
});


export const addVacancy = data => Vacancy.create(data);

export const updateVacancy = async (query, data) => {
    const vacancy = await getVacancy(query);
    if(!vacancy) {
        return null;
    }
    return vacancy.update(data, {
        returning: true,
    });
}