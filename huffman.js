//to find the frequency of letters

function frequency(strng)
{
  var freqs={}
  var len=strng.length;
  for(i=0;i<len;i++)
  {
   if (freqs[strng.charAt(i)]>=1)
     freqs[strng.charAt(i)]+=1
   else
     freqs[strng.charAt(i)]=1
  }
  return(freqs)
}

//to sort the dict of freqs

function sortfreq(freqs){
  var array=new Array()
  count=0
  for (i in freqs){
   array[count]=new Array()
   array[count][0]=freqs[i]
   array[count][1]=i
   count+=1
  } 
  array.sort()
  return(array)
}

//to build tree

function buildtree(array)
{
  while(array.length>1){
    node12=array.slice(0,2)
    rest=array.slice(2)
    cmbFre=[node12[0][0]+node12[1][0]]
    array=rest.concat([cmbFre.concat([node12])])
    }
    return(array[0])
}


function trimtree(tree1){
  p=tree1[1]
  if (typeof p==typeof ""){
    v=stack.pop()
    return p
  }
  else{
    stack.push(tree1[1])
    return[trimtree(p[0]),trimtree(v[1])]
  }
}

//to assign codes

function assigncode(nodes,p){
  if (typeof nodes==typeof ""){
    code[nodes]=p
  }
  else{
    assigncode(nodes[0],p+"0")
    assigncode(nodes[1],p+"1")
  }
}
function encode(strng){
  opt=""
  for (i=0;i<strng.length;i++){
    opt+=code[strng.charAt(i)]
  }
  return (opt)
}
function decode(tree1,strng){
  opt=""
  p=tree1
  for(i=0;i<strng.length;i++){
    if (strng.charAt(i)=="0")
      p=p[0]
    else
      p=p[1]
    if(typeof p==typeof ""){
      opt+=p
      p=tree1
    } 
  }
  return opt
}


strng="kgjgjgjg"
console.log("string is",strng);
freqs=frequency(strng);
console.log("frequency is",freqs);
fre=sortfreq(freqs)
console.log("sorted array is",fre);
tree1=buildtree(fre)


stack=[]
t=trimtree(tree1)

var code={}
assigncode(t,'')
enc=encode(strng)
console.log("encoded(compressed form is)....",enc)
dec=decode(t,enc)
console.log("decoded output is",dec)
