function createPerson({ name = 'New User', skills = [] }) {
     const obj = {
       name,
       skills,
       addSkill(skill) {
         if (!this.skills.includes(skill)) {
             this.skills.push(skill);
         }
         return this;
       },
       removeSkill(skillDelete) {
         let foundIndex = this.skills.indexOf(skillDelete);
         if (foundIndex !== -1){
         this.skills.splice(foundIndex, 1);
         } 
         return this;
       },
       addName(newName) {
         this.name = newName;
         return this;
       },
     };
   
     return obj;
   }