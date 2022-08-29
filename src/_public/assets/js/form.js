  const btnSubmit = document.getElementById('c-btnsubmit');
  const inputEles = document.querySelectorAll('.c-form__item');
  btnSubmit.addEventListener('click',function (e){
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();
    if (isValid){
      alert('リクエストを送信しました');
    }
    else{
      e.preventDefault();
    }
  });
  const fullName = document.getElementById('is-fullName');
  const phoneNumber = document.getElementById('is-phoneNumber');
  const email = document.getElementById('is-email');
  const request = document.getElementById('is-request');
  
  function checkValidate() {
    let fullNameValue = fullName.value;
    let phoneNumberValue = phoneNumber.value;
    let emailValue = email.value;
    let requestValue = request.value;
    let isCheck = true;
  
    if(fullNameValue == ''){
      setError(fullName, '『氏名』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(fullName);
    }
  
    if(phoneNumberValue == ''){
      setError(phoneNumber , '『電話番号』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(phoneNumber);
    }
  
    if(emailValue == ''){
      setError(email, '『メールアドレス』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(email);
    }
  
    if(requestValue == ''){
      setError(request, '『お問い合わせ内容』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(request);
    }
    return isCheck;
  }
  
  function setError(ele,message){
    let parentEle = ele.parentNode;
    let error1 = document.getElementById('is-error1');
    parentEle.classList.add('small');
    parentEle.querySelector('small').innerText = message;
    error1.style.display = 'block';
  }
  
  function setSuccess(ele){
    ele.parentNode.classList.add('success');
  }