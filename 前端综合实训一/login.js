function checklogin() {
	var zh=document.f1.account.value;
	var mm=document.f1.password.value;
	var msg="\n系统提示信息：\n\n";
	if(zh=='')
	{
		msg+="账号不能为空，请重新输入！\n";
		alert(msg);
		document.f1.account.value="";
		document.all.f1.account.focus();
		return false;
	}
	else if(mm=='')
	{
		msg+="密码不能为空，请重新输入！\n";
		alert(msg);
		document.f1.password.value="";
		document.all.f1.password.focus();
		return false;
	}
	else if(zh.length>10)
	{
		msg+="账号不能超过十位，请重新输入！\n";
		alert(msg);
		document.f1.account.value="";
		document.all.f1.account.focus();
		return false;
	}
	else if(mm.length>20)
	{
		msg+="密码不能超过二十位，请重新输入！\n";
		alert(msg);
		document.f1.password.value="";
		document.all.f1.password.focus();
		return false;
	}
    else
    {
    	msg+="登录成功！\n";
    	alert(msg);
    	window.location.href="框架主页.html";
    }
}

function registration() {
	var zh=document.f1.account.value;
	var mm=document.f1.password.value;
	var msg="\n系统提示信息：\n\n";
	if(zh=='')
	{
		msg+="账号不能为空，请重新输入！\n";
		alert(msg);
		document.all.f1.account.focus();
		return false;
	}
	else if(mm=='')
	{
		msg+="密码不能为空，请重新输入！\n";
		alert(msg);
		document.f1.password.value="";
		document.all.f1.password.focus();
		return false;
	}
	else if(zh.length>10)
	{
		msg+="账号不能超过十位，请重新输入！\n";
		alert(msg);
		document.f1.account.value="";
		document.all.f1.account.focus();
		return false;
	}
	else if(mm.length>20)
	{
		msg+="密码不能超过二十位，请重新输入！\n";
		alert(msg);
		document.f1.password.value="";
		document.all.f1.password.focus();
		return false;
	}
    else
    {
    	msg+="注册成功！\n";
    	alert(msg);
    	window.location.href="王者荣耀.html";
    }
}
