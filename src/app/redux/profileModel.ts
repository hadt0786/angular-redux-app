export interface ProfileDataModel {
    loaded: boolean,
    error: boolean,
    data: {
        contactDetails: {
            emailAddresses: {
                personal: string,
                work: string
            },
            postalAddress: {
                line1: string,
                line2: string,
                line3: string,
                line4: string,
                postcode: string
            },
            telephoneNumbers: {
                home: string,
                mobile: string,
                work: string
            }
        },
        personalDetails: {
            dateOfBirth: string,
            forename: string,
            gender: string,
            maritalStatus: string,
            nationalInsuranceNumber: string,
            printPreference: string,
            surname: string,
            title: string
        }
    };
}
