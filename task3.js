function createPerson({ name = "New User", skills = [] } = {}) {
  return {
    name,
    skills,
    addSkill(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
    },
    removeSkill(skill) {
      const index = this.skills.indexOf(skill);
      if (index !== -1) {
        this.skills.splice(index, 1);
      }
    },
    addName(newName) {
      this.name = newName;
    },
  };
}

