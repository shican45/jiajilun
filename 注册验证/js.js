function ismaill(strEmail){
	var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  		//文本框不为空，并且验证邮箱正则成功，给出正确提示
  	if(strEmail != null && strEmail.search(reg) != -1)
  	{
  		document.getElementById("prompt1").innerHTML = "<font color='green' size='4px'>√邮箱格式正确！</font>";
  	}else{
  		document.getElementById("prompt1").innerHTML = "<font color='red' size='4px'>邮箱格式错误！</font>";
  	}
}
function isright(strSec){
	var reg1=/^(.*([A-Z])[^\1]{3,}\1)$/;
	var reg2=/(?=.*?[0-1])/g;
	var reg3=/(?=.*?[9])/g;
	var reg4=/(?=.*?[#?&*])/g;
	var reg5=/^.{9,15}$/;
	//([a-zA-Z2-8]*)
  		//文本框不为空，并且验证邮箱正则成功，给出正确提示(?=.*[A-Z])(?=.*?[2-8])(?=.*?[#?&*])(?!.*(\d).*\1)\d+
  	if(strSec != null && strSec.search(reg1) != -1)
  	{
		if(strSec.search(reg2) != -1)
		{
			document.getElementById("prompt2").innerHTML = "<font color='red' size='4px'>密码不能包含数字0或1或9！</font>";
		}else{
			if(strSec.search(reg3) != -1)
			{
				document.getElementById("prompt2").innerHTML = "<font color='red' size='4px'>密码不能包含数字0或1或9！</font>";
			}else{
				if(strSec.search(reg4) != -1)
				{
					if(strSec.search(reg5) != -1)
					{
						if(isrepeat(strSec) === true)
						{
							document.getElementById("prompt2").innerHTML = "<font color='red' size='4px'>密码不能有重复字符！</font>";
						}else{
							document.getElementById("prompt2").innerHTML = "<font color='green' size='4px'>密码输入正确！</font>";
						}
					}else{
						document.getElementById("prompt2").innerHTML = "<font color='red' size='4px'>密码长度应为（9~15位）！</font>";
					}
				}else{
					document.getElementById("prompt2").innerHTML = "<font color='red' size='4px'>密码需至少包含特殊字符{#?&*}之一！</font>";
				}
			}
		}
  	}else{
  		document.getElementById("prompt2").innerHTML = "<font color='red' size='4px'>密码必须含有三个大写字母并且长度应为（9~15位）！！</font>";
  	}
}
function issame() {
	var pw1 = document.getElementById("pw1").value;
	var pw2 = document.getElementById("pw2").value;
	if(pw1 == pw2) {
		document.getElementById("prompt3").innerHTML="<font color='green'>两次密码相同</font>";
		document.getElementsByClassName("k1").disabled = false;
	}
	else {
		document.getElementById("prompt3").innerHTML="<font color='red'>两次密码不相同</font>";
		document.getElementsByClassName("k1").disabled = true;
	}
}

function isrepeat(str) {
	const len = str.length;
	for(let i = 0; i < len - 1; i++) {
		const index = str.charAt(i);
		for(let j = i + 1; j < len; j++) {
			if(index === str.charAt(j)) {
				return true;
			}
		}
	}
	return false;
}