
import {isValidUsername} from '6pp' // to check user name is correct or not
export const usernameValidator = (username) =>
{

    if(!isValidUsername(username))
    return{
        isValid: false,
        errorMessage:"Username is Invalid",}
}