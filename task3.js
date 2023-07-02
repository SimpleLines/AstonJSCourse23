function createPerson({ name = 'New User', skills = [] }) {
  let person = {
    name: name,
    skills: skills,
    addSkill: function (skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
      return this;
    },
    removeSkill: function (skill) {
      this.skills = this.skills.filter((elem) => elem !== skill);
      return this;
    },
    addName: function (newName) {
      this.name = newName;
      return this;
    },
  };
  return person;
}
