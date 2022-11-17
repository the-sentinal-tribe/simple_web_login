function regvalidation()
{
    var user=document.registration.user;
    var email=document.registration.email;
    var password=document.registration.password;
    var confirm_pass=document.registration.confirm_pass;
    {
        if(password_valid(password,7,12))
    {
        if(allemail(email))
    {
        if(allchar(user))
    {
        if(confirm_pass_valied(confirm_pass,7,12))
    {}
    }
}
    }
}

return false;
}

function user_validation(user, ab, cd)
{
    var user_len = user.value.length;
    if(user_len == 0 || user_len >= cd || user_len < ab)
    {
        alert("username should not be empty / length must between "+cd+" to "+ab);
        user.focus();
        return false;
    }
    return true;
}
