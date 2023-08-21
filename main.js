function validate(form)
{
    if(form.username.value.length == 0)
    {
        alert("Please Enter Valid Username.");
        form.username.focus();
        return false;
    }
    if(form.password.value.length == 0)
    {
        alert("Please Enter Valid Password.");
        form.password.focus();
        return false;
    }
    return true;
}