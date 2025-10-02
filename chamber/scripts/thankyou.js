const getString = window.location.search;
console.log(getString);

const yourInfo = new URLSearchParams(getString);
console.log(yourInfo);

// console.log(yourInfo.get('first'));
// console.log(yourInfo.get('last'))
// console.log(yourInfo.get('email'))
// console.log(yourInfo.get('phone'))
// console.log(yourInfo.get('organization'));
// console.log(yourInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `
<p>First Name: ${yourInfo.get('first')}</p>
<p>Last Name: ${yourInfo.get('last')}</p>
<p>Email: ${yourInfo.get('email')}</p>
<p>Mobile Phone:${yourInfo.get('phone')}</p>
<p>Business/Organization ${yourInfo.get('organization')}</p>
<p>Form submitted at: ${yourInfo.get('timestamp')}</p>`