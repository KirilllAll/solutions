const numUniqueEmails = function(emails) {
    const set = new Set();

    for (const email of emails){
        const [name, dom] = email.split('@');
        const first = name.split('+')[0];
        // replace & regs
        set.add(`${first.replace(/\./g, '')}@${dom}`)
    }
    return set.size
};

const testData = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

