function createPerson({name = "New User", skills = []}){
  return {
    name: name,
    skills: skills,    
    addSkill(addS){
      this.skills.push(addS);
      this.skills = [...new Set(this.skills)];
      return this;
    },
    removeSkill(remove){
      this.skills = this.skills.filter(function(item){
        return item !== remove;
      })
      return this;
    },
    addName(addN){
      this.name = addN;
      return this;
    },
  };
}