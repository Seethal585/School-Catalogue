console.log('School Catalogue')
class School
{
    constructor(name, level, numOfStudents)
    {
        this._name = name
        this._level = level
        this._numOfStudents = numOfStudents
    }
    get name()
    {
        return this._name
    }
    get level()
    {
        return this._level
    }
    get numOfStudents()
    {
        return this._numOfStudents
    }
    set numOfStudents(num)
    {
        // if(typeof this.numOfStudents === 'number') 
        // {
        //     console.log('inside if')
        //     this._numOfStudents = num
        // }
        // else
        // {
        //     console.log('Invalid input: numberOfStudents must be set to a Number.')
        // }
        if(num.isNaN())
        {
            console.log('Invalid input: numberOfStudents must be set to a Number.') 
        }
        else
        {
            this._numOfStudents = num
        }
    }
    quickFacts()
    {
        console.log(`${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeacher)
    {
        const randomIndex = Math.floor(substituteTeacher.length * Math.random())
        return substituteTeacher[randomIndex]
    }
}
class primarySchool extends School
{
    constructor(name, numOfStudents, pickupPolicy)
    {
        super(name,'primary',numOfStudents)
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy()
    {
        return this._pickupPolicy
    }
}
class highSchool extends School
{
    constructor(name,numOfStudents,SportsTeams)
    {
        super(name,'high',numOfStudents)
        this._sportsTeams = SportsTeams
    }
    get SportsTeams()
    {
        return this._sportsTeams
    }
}
const lorraineHansbury = new primarySchool('Lorraine Hansbury', 'def', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
const alSmith = new highSchool('Al E. Smith', 'drf', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.SportsTeams)
