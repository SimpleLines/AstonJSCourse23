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

const wizard = createPerson({name:'Harry Potter', skills:['magic', 'kindness']});
wizard
  .addName('Lord Voldemort')
  ?.addSkill('strength')
  ?.addSkill('health')
  ?.removeSkill('kindness')
  ?.addSkill('anger')
  ?.addSkill('anger');

console.log(wizard);