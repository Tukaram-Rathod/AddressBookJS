/**Welcome To Address Book Program 
 * Creating a contact with first name , last name 
 * address, city , state , zip , phone number and email
 * Checking contacts to be in proper pattern 
 * Throw error if regex fails
 * Created new addressbook array and push the contacts in it
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

    /* @Description - to validate first name should start with captital character
     * to used throw keyword for the invalid first name */

    get firstName() { return this.firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this.firstName = firstName;
        else
            throw "Invalid first Name";
    }

    /* @Description - to validate last name should start with captital character
    * to used throw keyword for the invalid last name */

    get lastName() { return this.lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
        this.lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    /* @Description - to validate address should start with captital letters or small letters
    * to used throw keyword for the invalid address */

    get address() { return this.address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this.address = address;
        else
            throw "Invalid address ";
    }

    /* @Description - to validate city should start with captital letters or small letters
    * to used throw keyword for the invalid city  */

    get city() { return this.city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this.city = city;
        else
            throw "Invalid city ";
    }

    /* @Description - to validate state should start with captital letters or small letters
    * to used throw keyword for the invalid state  */

    get state() { return this.state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this.state = state;
        else
            throw "Invalid state";
    }

    /* @Description - to validate zip  should start with numbers 
    * to used throw keyword for the invalid state  */

    get zip() { return this.zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
        this.zip = zip;
        else
            throw "Invalid zip ";
    }

    /* @Description - to validate phone number should start with numbers to allow max 10 digit
    * to used throw keyword for the invalid phone number  */

    get mobileNumber() { return this.mobileNumber; }
    set mobileNumber(mobileNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(mobileNumber))
            this.mobileNumber = mobileNumber;
        else
            throw "Invalid phone number";
    }

    /* @Description - to validate email id  should start with small letter to allow one number and one
    * special character. 
    * to used throw keyword for the invalid phone number  */

    get email() { return this.email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this.email = email;
        else
            throw "Invalid email";
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
   /* @Description - to create a new address book array and add new contacts 
 * to added new details for contact person using their name and edit it
 * used to slice method to delete contact by using person name  */
try {        
    var addressBook = new Array();
    console.log("<<<<<Welcome to AddressBook Application>>>>>");
   
    addressBook.push(new Contact("Ashish","Rathod","Gangakhed","Parbhani","Maharashtra",431514,8805925703,"Ashu03.mit@gmail.com")); 
    addressBook.push(new Contact("Sakha","Rathod","Gangakhed","Parbhani","Maharashtra",431514,8788594431,"Sakha2111@gmail.com"));      
   
    console.log('contacts before being updated \n');
    addressBook.forEach((contact) => console.log(contact.toString()));
   
    addressBook.filter(contact => contact.firstName == 'Ashish').map(contact => contact.firstName = 'Tukaram');
    console.log('contacts after being updated \n');
    addressBook.forEach((contact) => console.log(contact.toString()));

    let index = addressBook.findIndex(contact => Contact.firstName = 'Sakha');
    addressBook.slice(index,1);
    console.log("contact after deletted ");
    addressBook.forEach((contact) => console.log(contact.toString()));

    /* @Description - declear function and return count value if the codition failed the increase the count
    * value.
    * by using reduce method to count the number of contact which is present is array*/

    let count = 0;
    function findNumberOfContacts(contact) {
        if (contact != null)
            return count++;
    }
    addressBook.reduce(findNumberOfContacts, 0);
    console.log(' Total number of contacts in array  : ' + count);

    let newContact = new Contact("Bahubali", 'Mahedra', "Chittod", 'Alahabad', 'Up',
        "450 678", "91 8054564446", "bahu.sep@gmail.com");


    function checkDuplicates(count, contact) {
        if (contact != null)
            count++;
        return count;
    }

    function addContact() {
        if (countDuplicate == 0) addressBook.push(newContact);
        else console.log("\nContact not added in the address book. Duplicate Entry found.\n");
    }

    let countDuplicate = addressBook.filter(contact => contact.firstName == newContact.firstName)
                                                .map(contact => contact).reduce(checkDuplicates, 0);

    addContact();

    console.log('Checking duplicate while adding new contact in the address book ');
    addressBook.forEach((contact) => console.log(contact.toString()));

    
}catch (e) {
    console.log('Regex test is fail \n' + e);
}   