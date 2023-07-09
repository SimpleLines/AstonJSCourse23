function createPerson({ name = 'New User', skills = [] }) {
    const person = {
        name,
        skills,
        addSkill(skill) {
            if (!this.skills.includes(skill)) {
                this.skills.push(skill);
            }
            return this;
        },
        removeSkill(skill) {
            const index = this.skills.indexOf(skill);
            if (index !== -1) {
                this.skills.splice(index, 1);
            }
            return this;
        },
        addName(name) {
            this.name = name;
            return this;
        },
    };
    return person;
}