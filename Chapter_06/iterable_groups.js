/*
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
*/

class Group {
    constructor(range) {
        this.set = [];
    }

    static from(range) {
        let obj = new Group;
        for (let n of range) {
            obj.add(n);
        }
        return obj;
    }

    [Symbol.iterator]() {
        let index = -1;
        let newSet = this.set;

        return {
            next: () => ({
                value: newSet[++index],
                done: !(index in newSet)
            })
        }
    };

    // iterator from https://stackoverflow.com/questions/28739745/how-to-make-an-iterator-out-of-an-es6-class 

    add(n) {
        if (!this.has(n)) this.set.push(n);
    }
    delete(n) {
        let r = this.set.indexOf(n);
        this.set.splice(r, 1);
    }
    has(n) {
        return this.set.includes(n);
    }

}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c
