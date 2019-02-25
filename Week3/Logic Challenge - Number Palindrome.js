function angkaPalindrome(num) {
    // you can only write your code here!
    var cek = 0;
    while(cek === 0){
        num++
        var newnum = num.toString();
        var tampung = '';

        for(var i = newnum.length -1; i >= 0; i--){
            tampung+=newnum[i]
            if(tampung === newnum){
                return tampung
            }
        }
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  