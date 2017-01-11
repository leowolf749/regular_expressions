/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        let isName = new RegExp('^[A-Za-z]+-*[ A-Za-z]+$').test(input);
        return isName;
    },
    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits. It may or may not include parentheses, spaces,
     * and dashes.
     */
    phone: function (input) {
        let phoneNum = new RegExp('^[(0-9)]* *[0-9]{3,4} *-*[0-9]{4,7}$').test(input);
        return phoneNum;
    },
    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        let email = new RegExp('^\\w+\\.*\\_*[a-zA-Z]*@{1}\\w+\\.\\w+\\.*\\w*$').test(input);
        return email;
    },
    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by one of {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        let address = new RegExp('^[0-9]+\\ [a-zA-Z]+\\ [a-zA-Z]+\\ ?[Ave,St,Park,Lane,Blvd]+$').test(input);
        return address;
    },
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        let username = new RegExp('^[a-zA-Z][a-zA-Z0-9]{4,16}$').test(input);
        return username;
    },
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {

    },

    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {

    },
};