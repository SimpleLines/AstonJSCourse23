function createPerson({ name = "New User", skills = [] }) {
  return {
    name,
    skills,
    addSkill: function (skill) {
      if (this.skills.includes(skill)) {
        return this.skills;
      } else {
        this.skills.push(skill);
        return this.skills;
      }
    },
    removeSkill: function (skill) {
      return (this.skills = this.skills.filter((el) => el !== skill));
    },
    addName: function (value) {
      return (this.name = value);
    },
  };
}
