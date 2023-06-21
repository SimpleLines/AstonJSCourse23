function createPerson({ name = "New User", skills = [] }) {
  return {
    name,
    skills,
    addSkill: function (skill) {
      if (this.skills.indexOf(skill) === -1) this.skills.push(skill);
      return this;
    },
    removeSkill: function (skill) {
      const index = this.skills.indexOf(skill);
      this.skills.splice(index, index);
      return this;
    },
    addName: function (name) {
      this.name = name;
      return this;
    },
  };
}