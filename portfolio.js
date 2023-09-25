// let a = document.getElementsByClassName("navlink1")
// console.log(a[0]);

// let b = document.getElementsByTagName('section')
// console.log(b[0]);


// s3 $ s2 section rotate code

let c = document.getElementById("s2")
console.log(c);

let q = document.getElementById('ps3')
console.log(q);

let r = document.getElementById('s3')
console.log(r);



q.addEventListener('click',()=>{
    r.style.transform = "rotateX(180deg)"
    r.style.visibility = "hidden"
    c.style.visibility = "visible"
    p.classList.toggle('navh')


})

let a1 = document.getElementById('homes2')
console.log(a1);

a1.addEventListener('click',()=>{
    c.style.visibility = "hidden"
    c.style.transition = "0.2s"

    r.style.visibility = "visible"
    r.style.transform = "rotateX(0deg)"
    n.classList.toggle('navh')


})

// s1 $ s4 section rotate code


let t = document.getElementById('ps4')
console.log(t);

let u = document.getElementById('s4')
console.log(u);

let v = document.getElementById('s1')
console.log(v);


t.addEventListener('click',()=>{
    v.style.transform = "rotateX(180deg)"
    u.style.transform = "rotateX(-180deg)"

    v.style.visibility = "hidden"
    u.style.visibility = "visible"
    l.classList.toggle('navh')


})

let z = document.getElementById('s4scroll')
console.log(z)



z.addEventListener('click',()=>{
    v.style.visibility = "visible"
    u.style.visibility = "hidden"
    v.style.transform = "rotateX(0deg)"
    y.classList.toggle('navh')


})
// s1 $ s4 section rotate code ends








// a[0].addEventListener('click',()=>{
//     b[0].style.transform = "rotateX(180deg)"
//     b[0].style.visibility = "hidden"
//     .skill.style.visibility = "hidden"


// })

// a[0].addEventListener('click',()=>{
//     c.style.visibility = "visible"

// })
// a[0].addEventListener('click',()=>{
//     c.style.visibility = "visible"

// })


// project


// Projects Hover Code


let d = document.getElementsByClassName("s2d1")
console.log(d[0])

let f = document.getElementsByClassName('prop')
console.log(f[0])

let g = document.getElementsByClassName('img1')
console.log(g[0])



d[0].addEventListener('mouseover',()=>{
    f[0].style.display = "block"
    g[0].style.width = "20%"
    g[0].style.height = "20%"


})
d[0].addEventListener('mouseleave',()=>{
    f[0].style.display = "none";
    g[0].style.width = "25%"
    g[0].style.height = "25%"

})

d[1].addEventListener('mouseover',()=>{
    f[1].style.display = "block";
    g[1].style.width = "20%"
    g[1].style.height = "20%"
})
d[1].addEventListener('mouseleave',()=>{
    f[1].style.display = "none";
    g[1].style.width = "25%"
    g[1].style.height = "25%"
})



d[2].addEventListener('mouseover',()=>{
    f[2].style.display = "block";
    g[2].style.width = "20%"
    g[2].style.height = "20%"
})
d[2].addEventListener('mouseleave',()=>{
    f[2].style.display = "none";
    g[2].style.width = "25%"
    g[2].style.height = "25%"

})



d[3].addEventListener('mouseover',()=>{
    f[3].style.display = "block";
    g[3].style.width = "20%"
    g[3].style.height = "20%"
})
d[3].addEventListener('mouseleave',()=>{
    f[3].style.display = "none";
    g[3].style.width = "25%"
    g[3].style.height = "25%"

})

d[4].addEventListener('mouseover',()=>{
    f[4].style.display = "block"
    g[4].style.width = "20%"
    g[4].style.height = "20%"


})
d[4].addEventListener('mouseleave',()=>{
    f[4].style.display = "none";
    g[4].style.width = "25%"
    g[4].style.height = "25%"

})

d[5].addEventListener('mouseover',()=>{
    f[5].style.display = "block"
    g[5].style.width = "20%"
    g[5].style.height = "20%"


})
d[5].addEventListener('mouseleave',()=>{
    f[5].style.display = "none";
    g[5].style.width = "25%"
    g[5].style.height = "25%"

})

d[6].addEventListener('mouseover',()=>{
    f[6].style.display = "block"
    g[6].style.width = "20%"
    g[6].style.height = "20%"


})
d[6].addEventListener('mouseleave',()=>{
    f[6].style.display = "none";
    g[6].style.width = "25%"
    g[6].style.height = "25%"

})

d[7].addEventListener('mouseover',()=>{
    f[7].style.display = "block"
    g[7].style.width = "20%"
    g[7].style.height = "20%"


})
d[7].addEventListener('mouseleave',()=>{
    f[7].style.display = "none";
    g[7].style.width = "25%"
    g[7].style.height = "25%"

})

// Projects Hover Code Ends


// Navbar toggle list code 



let k = document.getElementById('nbt1')
console.log(k)

let l = document.getElementById('head1')
console.log(l)


k.addEventListener('click',()=>{
    l.classList.toggle('navh')

})





let m = document.getElementById('nbt2')
console.log(m)

let n = document.getElementById('head2')
console.log(n)


m.addEventListener('click',()=>{
    n.classList.toggle('navh')

})

let o = document.getElementById('nbt3')
console.log(o)

let p = document.getElementById('head3')
console.log(p)

let d1 = document.getElementById('move')
console.log(d1)




o.addEventListener('click',()=>{
    p.classList.toggle('navh')
 
        
})


let x = document.getElementById('nbt4')
console.log(x)

let y = document.getElementById('head4')
console.log(y)


x.addEventListener('click',()=>{
    y.classList.toggle('navh')

})

// Navbar toggle list code Ends


// Scroll code starts 


let s = document.getElementById('s3scroll');
console.log(s)


s.addEventListener('click',()=>{
    window.scrollBy(0,innerHeight)
})


let b1 = document.getElementById('s2scroll');
console.log(b1)


b1.addEventListener('click',()=>{
    window.scrollBy(0,innerHeight)
})



// Scroll code  Ends


// Projects Link  Start


let f1 = document.getElementById('cal1');
console.log(f1);

f1.addEventListener('click',()=>{
    window.open("Calculator/calculator\ \(2\).htm")
})

let f2 = document.getElementById('chess1');
console.log(f2);

f2.addEventListener('click',()=>{
    window.open("chess/chess.html")
})

let f3 = document.getElementById('myt1');
console.log(f3);

f3.addEventListener('click',()=>{
    window.open("Project-2 (3)/home.html")
})

let f4 = document.getElementById('mario1');
console.log(f4);

f4.addEventListener('click',()=>{
    window.open("Number guess/numberguess.html")

})



let f5 = document.getElementById('cal2');
console.log(f5);

f5.addEventListener('click',()=>{
window.open("Calculator/calculator\ \(2\).htm")
})

let f6 = document.getElementById('chess2');
console.log(f6);

f6.addEventListener('click',()=>{
    window.open("chess/chess.html")
})

let f7 = document.getElementById('myt2');
console.log(f7);

f7.addEventListener('click',()=>{
    window.open("Project-2 (3)/home.html")
})

let f8 = document.getElementById('mario2');
console.log(f8);

f8.addEventListener('click',()=>{
    window.open("Number guess/numberguess.html")

})


// toggle navbar starts
o.addEventListener('click',()=>{

    p.classList.toggle('navh')

    if(p.classList.toggle('navh')){
    o.innerHTML = "X"
    }
    else if(p.classList.toggle('navh')){
        o.innerHTML = "|||"
        p.classList.toggle('navh')
    }
        
})


k.addEventListener('click',()=>{
    l.classList.toggle('navh')

    if(l.classList.toggle('navh')){
        k.innerHTML = "X"
        }
        else if(l.classList.toggle('navh')){
            k.innerHTML = "|||"
            l.classList.toggle('navh')
        }

})


m.addEventListener('click',()=>{
    n.classList.toggle('navh')

    if(n.classList.toggle('navh')){
        m.innerHTML = "X"
        }
        else if(n.classList.toggle('navh')){
            m.innerHTML = "|||"
            n.classList.toggle('navh')
        }

})

x.addEventListener('click',()=>{
    y.classList.toggle('navh')


    if(y.classList.toggle('navh')){
        x.innerHTML = "X"
        }
        else if(y.classList.toggle('navh')){
            x.innerHTML = "|||"
            y.classList.toggle('navh')
        }


})












 







 











































