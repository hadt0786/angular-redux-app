import { ProfileDataModel } from './profileModel';

export const PROFILE_INITIAL_STATE: ProfileDataModel = {
    loaded: false,
    error: false,
    data: {
        contactDetails: {
            emailAddresses: {
                personal: '',
                work: ''
            },
            postalAddress: {
                line1: '',
                line2: '',
                line3: '',
                line4: '',
                postcode: ''
            },
            telephoneNumbers: {
                home: '',
                mobile: '',
                work: ''
            }
        },
        personalDetails: {
            dateOfBirth: '',
            forename: '',
            gender: '',
            maritalStatus: '',
            nationalInsuranceNumber: '',
            printPreference: '',
            surname: '',
            title: ''
        }
    }
};
