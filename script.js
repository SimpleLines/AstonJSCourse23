function deleteElementFromArray(arr, elem) {
  if (!arr.includes(elem)) {
    return arr;
  }
  let indexEl = arr.findIndex((el) => el == elem);
  const newArr = arr.slice(0, indexEl).concat(arr.slice(indexEl + 1));
  return newArr;
}

const addElementsToArray = (arr, index) => (...el) => {
    if (!Number.isInteger(index) || index < 0) {
      throw Error(
        " the index cannot be a negative number or a fractional number "
      );
    }
    let newArr = [];
    return arr.length - 1 < index || index === undefined
      ? newArr.concat(arr, ...el)
      : newArr.concat(arr.slice(0, index), ...el, arr.slice(index));
};

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
