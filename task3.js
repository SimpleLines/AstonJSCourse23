function createPerson({ name = 'New User', skills = [] }) {
    return {
        name,
        skills,
        addSkill: function (skill) {
            this.skills.push(skill)
            this.skills = [...new Set(this.skills)]
            return this
        },
        removeSkill: function (skill) {
            const index = this.skills.indexOf(skill)
            if (index !== -1) {
                this.skills.splice(index, 1);
            }
            return this
        },
        addName: function (name) {
            this.name = name
            return this
        }
    }
}