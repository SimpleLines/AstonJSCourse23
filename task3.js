function createPerson(obj = {}) {
  return {
    name: obj.name || "New User",
    skills: obj.skills || [],
    addName: function(name) {
      this.name = name
    },
    addSkill(skill){
      if (!this.skills.includes(skill)) {
        this.skills.push(skill)
      };
    },
    removeSkill: function(skill) {
      const indexSkill = this.skills.indexOf(skill)
      if (indexSkill !== -1) {
        this.skills.splice(indexSkill, 1)
      };
    },
  };
};