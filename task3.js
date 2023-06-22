const createPerson = ({ name = 'New User', skills = [] } = {}) => {
  return {
    name,
    skills: [...new Set(skills)],
    addSkill(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }

      return this;
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill);
      return this;
    },
    addName(newName) {
      if (newName) {
        this.name = newName;
      }

      return this;
    },
  }
}