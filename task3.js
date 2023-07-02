const createPerson = ({ name = "New User", skills = []} = {}) => {
    return {
        name,
        skills,
        addSkill(skill) {
            if (!this.skills.includes(skill)) {
                this.skills.push(skill)
            }
            return this
        },
        removeSkill(skillToRemove) {
            this.skills = this.skills.filter((skill) => skill !== skillToRemove)
            return this
        },
        addName(newName) {
            this.name = newName
            return this
        },
    }
}
