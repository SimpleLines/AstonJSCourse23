class User {
  constructor(name, skills) {
    this.name = name || 'New User';
    this.skills = skills || [];
  }

  addName(newName) {
    this.name = newName;
  }
  addSkill(skill) {
    if(!this.skills.includes(skill)) {
      this.skills = [...this.skills, skill];
    }
  }
  removeSkill(skill) {
    let copy = [...this.skills];
    copy.splice(copy.indexOf(skill), 1);
    this.skills = [...copy];
  }
}

function createUser(data = {}) {
  return new User(data.name, data.skills);
}