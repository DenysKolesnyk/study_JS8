let num = 266219;
num = num.toString().split('');
num = +num[0] * +num[1] * +num[2] * +num[3] * +num[4] * +num[5];
console.log(num);

num **= 3;
num = num.toString().split('');
alert(num[0] + num[1]);