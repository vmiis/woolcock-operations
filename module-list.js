(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":           {url:"$H/m/hr-form.html",Table:"new-hire"},
        "m2":           {url:"$H/m/hr-data.html",Table:"new-hire",form_module:"m1"},
        "me":   	    {url:"$H/m/me.html"},
        "my-groups":   	{url:"$H/m/my-groups.html"},
        "users":   	    {url:"$H/m/users.html"},
        "forms":   	    {url:"$H/m/forms.html"},
        "admin":   	    {url:"$H/m/admin.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
