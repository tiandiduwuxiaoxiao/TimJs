function TimJs(age, account) {
    this.name = 'tim';
    this.age = age || 18;
    this.account = account || Number.MAX_SAFE_INTEGER;
    return Object.freeze(this);
}

TimJs.prototype.getName = function () {
    return this.name;
}

TimJs.prototype.getAge = function () {
    return this.age;
}

TimJs.prototype.getAccount = function () {
    return this.account;
}

TimJs.prototype.getGirlFriend = function () {
    return undefined;
}

module.exports = TimJs;
