function createPerson(settings) {
    const name = settings.name || "New User";
    const skills = settings.skills || [];
    
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
      }
    };
  }
  
