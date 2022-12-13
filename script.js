//===============
//JavaScript Code
//===============
//function number system conversion
function convert()
{
    var iNum  = document.getElementById("ipNum").value;
    var iType = document.getElementById("ipType").value;
    var oType = document.getElementById("opType").value;
    var oNum;
    
    //conversion from binary to oct, dec, hex
    if(iType=="ipbin" && oType=="ipdec") oNum = bin2dec(iNum);
    if(iType=="ipbin" && oType=="ipoct") oNum = bin2oct(iNum);
    if(iType=="ipbin" && oType=="iphex") oNum = bin2hex(iNum);
    if(iType=="ipbin" && oType=="ipbin") oNum =iNum;
    //conversion from decimal to bin, oct, hex
    if(iType=="ipdec" && oType=="ipbin") oNum = dec2bin(iNum);
    if(iType=="ipdec" && oType=="ipoct") oNum = dec2oct(iNum);
    if(iType=="ipdec" && oType=="iphex") oNum = dec2hex(iNum);
    if(iType=="ipdec" && oType=="ipdec") oNum = iNum;
    //conversion from octal to bin, dec, hex
    if(iType=="ipoct" && oType=="ipbin") oNum = oct2bin(iNum);
    if(iType=="ipoct" && oType=="ipdec") oNum = oct2dec(iNum);
    if(iType=="ipoct" && oType=="iphex") oNum = oct2hex(iNum);
    if(iType=="ipoct" && oType=="ipoct") oNum = iNum;
    //conversion from hexadecimal to bin, dec, oct
    if(iType=="iphex" && oType=="ipbin") oNum = hex2bin(iNum);
    if(iType=="iphex" && oType=="ipoct") oNum = hex2oct(iNum);
    if(iType=="iphex" && oType=="ipdec") oNum = hex2dec(iNum);
    if(iType=="iphex" && oType=="iphex") oNum = iNum;

    document.getElementById("opNum").value = oNum;
}
function swapit()
	{
	var second=document.getElementById("opType");
	var first=document.getElementById("ipType");
	var temp;
	temp=second.value;
	second.value=first.value;
	first.value=temp;
	}
   
//=============================================================
//function binary to decimal conversion
function bin2dec(iNum)
{
    return parseInt(iNum, 2);
}
//function binary to octal conversion
function bin2oct(iNum)
{
    return parseInt(iNum, 2).toString(8);
}
//function binary to hexadecimal conversion
function bin2hex(iNum)
{
    return parseInt(iNum, 2).toString(16);
}
//===========================================
//function decimal to binary conversion
function dec2bin(iNum)
{
    return parseInt(iNum).toString(2);
}
//function decimal to octal conversion
function dec2oct(iNum)
{
    return parseInt(iNum).toString(8);
}
//function decimal to hexadecimal conversion
function dec2hex(iNum)
{
    return parseInt(iNum).toString(16);
}
//===========================================
//function octal to binary conversion
function oct2bin(iNum)
{
    return parseInt(iNum, 8).toString(2);
}
//function octal to decimal conversion
function oct2dec(iNum)
{
    return parseInt(iNum, 8).toString(10);
}
//function octal to hexadecimal conversion
function oct2hex(iNum)
{
    return parseInt(iNum, 8).toString(16);
}
//===========================================
//function hexadecimal to binary conversion
function hex2bin(iNum)
{
    return parseInt(iNum, 16).toString(2);
}
//function hexadecimal to octal conversion
function hex2oct(iNum)
{
    return parseInt(iNum, 16).toString(8);
}
//function hexadecimal to decimal conversion
function hex2dec(iNum)
{
    return parseInt(iNum, 16).toString(10);
}
