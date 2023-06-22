function createPerson({ name = "New User", skills = [] }) {
  return {
    name: name,
    skills: skills,

    addSkill: function (skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
    },

    removeSkill: function (skill) {
      this.skills = this.skills.filter((elem) => elem !== skill);
    },

    addName: function (name) {
      this.name = name;
    },
  };
}
