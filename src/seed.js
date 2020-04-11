import faker from 'faker';

export const seedData = () => {
    const fullJobList = [];
    for (let i = 0; i < 10; i++) {
        const jobListing = {
            title: faker.name.jobTitle(),
            company: faker.company.companyName(),
            desc: faker.lorem.paragraph(),
            longDesc: faker.lorem.paragraphs(),
            skills: [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words(),
            faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words()],
            key: i
        }
        fullJobList.push(jobListing);
    }
    return fullJobList
}