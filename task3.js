function createPerson({name = "New User", skills = []}){
    return {
        name,
        skills,
        addSkill: function(skill){
            if(!this.skills.includes(skill)) this.skills.push(skill)
            return this
        },
        removeSkill: function(skill){
            let deletSkill = this.skills.indexOf(skill)
            if(deletSkill > -1) this.skills.splice(deletSkill, 1)
            return this
        },
        addName: function(name){
            this.name = name
            return this
        },
    }
}