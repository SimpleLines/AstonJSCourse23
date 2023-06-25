function createPerson({ name = 'New User', skills = [] }) {
  return {
    name,
    skills,
    addSkill(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
      return this;
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((sk) => sk !== skill);
      return this;
    },
    addName(name) {
      this.name = name;
      return this;
    },
  };
}