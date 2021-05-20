/**Welcome To Address Book Program 
 * Creating a contact with first name , last name 
 * address, city , state , zip , phone number and email
*/
/** Created Contact Class */
class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;
/** Created Constructor */
    constructor (firstName,lastName,address,city,state,zip,mobileNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }
/** ToString Method for Printing Result */
    toString() {
        return "\nFirst Name    : " + this.firstName +
        "\nLast Name     : " + this.lastName +
        "\nAddress       : " + this.address +
        "\nCity          : " + this.city +
        "\nState         : " + this.state +
        "\nZip           : " + this.zip +
        "\nMobile Number : " + this.mobileNumber +
        "\nEmail         : " + this.email;
    }
}
console.log("<<<<<Welcome to AddressBook Application>>>>>");

/** UC1 - Ability to Create Contact in Address Book */
let contact = new Contact("Ashish","Rathod","Gangakhed","Parbhani","Maharashtra",431514,8805925703,"Ashu03.mit@gmail.com");
console.log(contact.toString());