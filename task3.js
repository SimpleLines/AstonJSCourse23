function createPerson({ name = 'New user', skills = [] }) {
  return {
    name,
    skills,
    addName(name) {
      this.name = name;
    },
    addSkill(skill) {
      if (this.skills.includes(skill)) {
        return this.skills;
      }
      this.skills.push(skill);
    },
    removeSkill(skill) {
      const foundSkill = this.skills.indexOf(skill);
      this.skills.splice(foundSkill, 1);
    },
  };
}