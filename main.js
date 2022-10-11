const responsive = document.getElementById('responsive');
const javascript = document.getElementById('javascript');
const all = document.getElementById('all');
const right = document.getElementById('right');
const left = document.getElementById('left');
const less = document.getElementById('less');
const more = document.getElementById('more');
const more2 = document.getElementById('more2');
const more3 = document.getElementById('more3');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
/* COPIAS DE BOTONES */
const menos = [less, left];
const mas = [more, right];
const mas2 = [more2, right]
const mas3 = [more3, right]
/* COLLECIONES HTML */
const allCards = document.querySelectorAll('.projectCard')
const onlyCards = document.querySelectorAll('.onlyCard')
const javascriptCards = document.querySelectorAll('.javascriptCard')
/* ARRAY DE CARDS */
const javascriptArray = [...javascriptCards]
const allArray = [...allCards]
const responsiveArray = [...onlyCards]
/* DESKTOP VERSION */
const threeall = allArray.slice(0,3)
const threeall2 = allArray.slice(3,6)
const threeall3 = allArray.slice(6)
const tresall = [threeall, threeall2, threeall3]
const threejs = javascriptArray.slice(0,3)
const restoall = allArray.slice(3,7)
const restojs = javascriptArray.slice(3,4)
const dosjs = [threejs, restojs]
/* MOBILE VERSION */
const allmulti = allArray.slice(1, 7)
const allonly = responsiveArray.slice(1, 3)
const alljs = javascriptArray.slice(1, 4)
console.log(tresall)

/* TAG ONLY */
responsive.addEventListener('click', () => {
    all.style.backgroundColor = '#FFFFFF';
    all.style.color = '#4F4F4F';
    javascript.style.backgroundColor = '#FFFFFF';
    javascript.style.color = '#4F4F4F';
    responsive.style.backgroundColor = '#2F80ED';
    responsive.style.color = '#FFFFFF';

    /* displays */
    onlyTag()
    reset() 
})

/* TAG JAVASCRIPT */
javascript.addEventListener('click', () => {
    
    all.style.backgroundColor = '#FFFFFF';
    all.style.color = '#4F4F4F';
    responsive.style.backgroundColor = '#FFFFFF';
    responsive.style.color = '#4F4F4F';
    javascript.style.backgroundColor = '#2F80ED';
    javascript.style.color = '#FFFFFF';

    /* display */
    jsTag()
    reset()
})

/* TAG ALL */
all.addEventListener('click', () => {
    all.style.backgroundColor = '#2F80ED';
    all.style.color = '#FFFFFF';
    responsive.style.backgroundColor = '#FFFFFF';
    responsive.style.color = '#4F4F4F';
    javascript.style.backgroundColor = '#FFFFFF';
    javascript.style.color = '#4F4F4F';

    /* display */
    allTag()
    reset() 
})

allTag();

function allTag() {
    more.style.display = 'block'
    more2.style.display = 'none'
    more3.style.display = 'none'
    if (innerWidth > 768) {
        dos.style.display = 'block';
        tres.style.display = 'block';
        threeall.forEach(element => {
            element.style.display = 'block'
        });
        restoall.forEach(element => {
            element.style.display = 'none'
        });
        let position = 0
        let next = 1
            less.addEventListener('click', () => {
                if (position > 0) {
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    tresall[next-1].forEach(element => {
                        element.style.display = 'none'
                    });
                    tresall[position-1].forEach(element => {
                        element.style.display = 'block'
                    });
                    position--;
                    next--;
                    if (position == 0) {
                        uno.style.backgroundColor = '#2F80ED'
                        uno.style.color = '#FFFFFF'
                        dos.style.backgroundColor = '#FFFFFF'
                        dos.style.color = '#4F4F4F'
                        tres.style.backgroundColor = '#FFFFFF'
                        tres.style.color = '#4F4F4F'
                    } 
                    if (position == 1) {
                        dos.style.backgroundColor = '#2F80ED'
                        dos.style.color = '#FFFFFF'
                        uno.style.backgroundColor = '#FFFFFF'
                        uno.style.color = '#4F4F4F'
                        tres.style.backgroundColor = '#FFFFFF'
                        tres.style.color = '#4F4F4F'
                    }  
                }           
            })
            more.addEventListener('click', () => {
                if (position < 2) {
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    tresall[position].forEach(element => {
                        element.style.display = 'none'
                    });
                    tresall[next].forEach(element => {
                        element.style.display = 'block'
                    });
                    position++;
                    next++;  
                    if (position == 1) {
                        dos.style.backgroundColor = '#2F80ED'
                        dos.style.color = '#FFFFFF'
                        uno.style.backgroundColor = '#FFFFFF'
                        uno.style.color = '#4F4F4F'
                        tres.style.backgroundColor = '#FFFFFF'
                        tres.style.color = '#4F4F4F'
                    } 
                    if (position == 2) {
                        tres.style.backgroundColor = '#2F80ED'
                        tres.style.color = '#FFFFFF'
                        dos.style.backgroundColor = '#FFFFFF'
                        dos.style.color = '#4F4F4F'
                        uno.style.backgroundColor = '#FFFFFF'
                        uno.style.color = '#4F4F4F'
                    }                  
                }            
            })
            tres.addEventListener('click', () => {
                threeall.forEach(element => {
                    element.style.display = 'none'
                });
                threeall2.forEach(element => {
                    element.style.display = 'none'
                });
                threeall3.forEach(element => {
                    element.style.display = 'block'
                });
                tres.style.backgroundColor = '#2F80ED'
                tres.style.color = '#FFFFFF'
                uno.style.backgroundColor = '#FFFFFF'
                uno.style.color = '#4F4F4F'
                dos.style.backgroundColor = '#2F80ED'
                dos.style.color = '#FFFFFF'
            })
            dos.addEventListener('click', () => {
                threeall.forEach(element => {
                    element.style.display = 'none'
                });
                threeall2.forEach(element => {
                    element.style.display = 'block'
                });
                threeall3.forEach(element => {
                    element.style.display = 'none'
                });
                dos.style.backgroundColor = '#2F80ED'
                dos.style.color = '#FFFFFF'
                uno.style.backgroundColor = '#FFFFFF'
                uno.style.color = '#4F4F4F'
                tres.style.backgroundColor = '#2F80ED'
                TransitionEvent.style.color = '#FFFFFF'
            })
            uno.addEventListener('click', () => {
                threeall.forEach(element => {
                    element.style.display = 'none'
                });
                threeall2.forEach(element => {
                    element.style.display = 'none'
                });
                threeall3.forEach(element => {
                    element.style.display = 'none'
                });
                uno.style.backgroundColor = '#2F80ED'
                uno.style.color = '#FFFFFF'
                tres.style.backgroundColor = '#FFFFFF'
                tres.style.color = '#4F4F4F'
                dos.style.backgroundColor = '#2F80ED'
                dos.style.color = '#FFFFFF'
            })
    } else {
        dos.style.display = 'none';
        tres.style.display = 'none';
        allArray[0].style.display = 'block'
        allmulti.forEach(element => {
            element.style.display = 'none'
        });
        let position = 0
        let next = 1
        menos.forEach(element => {
            element.addEventListener('click', () => {
                if (position > 0) {
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    allArray[next-1].style.display = 'none';
                    allArray[position-1].style.display = 'block';
                    position--;
                    next--;
                    uno.innerHTML = String(next)
                    if (next < 7) {
                        left.style.display = 'block'
                        right.style.display = 'block'
                    }
                    if (next === 1) left.style.display = 'none';
                    console.log('esto es la posicion' + position, 'esto es el que viene' + next) 
                }           
            })
        });
        mas.forEach(element => {
            element.addEventListener('click', () => {
                if (position < 6) {
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    allArray[position].style.display = 'none';
                    allArray[next].style.display = 'block';
                    position++;
                    next++;
                    uno.innerHTML = String(next)
                    if (next > 1) {
                        left.style.display = 'block'
                        right.style.display = 'block'
                    }
                    if (next === 7) right.style.display = 'none';
                    
                    console.log('esto es la posicion' + position, 'esto es el que viene' + next) 
                } else {
                    allArray[position].style.display = 'block';
                }            
            })
        });
    }
}

function onlyTag() {
    more.style.display = 'none'
    more2.style.display = 'block'
    more3.style.display = 'none'
    if (innerWidth > 768) {
        right.style.display = 'none'
        dos.style.display = 'none';
        tres.style.display = 'none';
        javascriptArray.forEach(element => {
            element.style.display = 'none'
        });
        responsiveArray.forEach(element => {
            element.style.display = 'block'
        });
        
    } else {
        dos.style.display = 'none';
        tres.style.display = 'none';
        responsiveArray[0].style.display = 'block'
        javascriptArray.forEach(element => {
            element.style.display = 'none';
        });
        allonly.forEach(element => {
            element.style.display = 'none';
        });
        let position = 0
        let next = 1
        menos.forEach(element => {
            element.addEventListener('click', () => {
                if (position > 0) {
                    allArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    responsiveArray[next-1].style.display = 'none';
                    responsiveArray[position-1].style.display = 'block';
                    position--;
                    next--;
                    uno.innerHTML = String(next) 
                    if (next < 3) {
                        left.style.display = 'block'
                        right.style.display = 'block'
                    };
                    if (next === 1) left.style.display = 'none';
                }           
            })
        });
        mas2.forEach(element => {
            element.addEventListener('click', () => {
                if (position < 2) {
                    allArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    responsiveArray[position].style.display = 'none';
                    responsiveArray[next].style.display = 'block';
                    position++;
                    next++;
                    uno.innerHTML = String(next) 
                    if (next > 1) {
                        left.style.display = 'block'
                        right.style.display = 'block'
                    };
                    if (next === 3) {
                        right.style.display = 'none'
                    };  
                }         
            })
        });
    }
}

function jsTag() {
    more.style.display = 'none'
    more2.style.display = 'none'
    more3.style.display = 'block'
    if (innerWidth > 768) {
        dos.style.display = 'block';
        tres.style.display = 'none';
        responsiveArray.forEach(element => {
            element.style.display = 'none'
        });
        threejs.forEach(element => {
            element.style.display = 'block'
        });
        restojs.forEach(element => {
            element.style.display = 'none'
        });
        let position = 0
        let next = 1
            less.addEventListener('click', () => {
                if (position > 0) {
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    allArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    dosjs[next-1].forEach(element => {
                        element.style.display = 'none'
                    });
                    dosjs[position-1].forEach(element => {
                        element.style.display = 'block'
                    });
                    position--;
                    next--;
                    if (position == 0) {
                        uno.style.backgroundColor = '#2F80ED'
                        uno.style.color = '#FFFFFF'
                        dos.style.backgroundColor = '#FFFFFF'
                        dos.style.color = '#4F4F4F'
                    } 
                }           
            })
            more3.addEventListener('click', () => {
                if (position < 1) {
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    dosjs[position].forEach(element => {
                        element.style.display = 'none'
                    });
                    dosjs[next].forEach(element => {
                        element.style.display = 'block'
                    });
                    position++;
                    next++; 
                    if (position == 1) {
                        dos.style.backgroundColor = '#2F80ED'
                        dos.style.color = '#FFFFFF'
                        uno.style.backgroundColor = '#FFFFFF'
                        uno.style.color = '#4F4F4F'
                    }             
                }            
            })
            dos.addEventListener('click', () => {
                threejs.forEach(element => {
                    element.style.display = 'none'
                });
                restojs.forEach(element => {
                    element.style.display = 'block'
                });
                dos.style.backgroundColor = '#2F80ED'
                dos.style.color = '#FFFFFF'
                uno.style.backgroundColor = '#FFFFFF'
                uno.style.color = '#4F4F4F'
            })
            uno.addEventListener('click', () => {
                threejs.forEach(element => {
                    element.style.display = 'none'
                });
                restojs.forEach(element => {
                    element.style.display = 'none'
                });
                uno.style.backgroundColor = '#2F80ED'
                uno.style.color = '#FFFFFF'
                dos.style.backgroundColor = '#FFFFFF'
                dos.style.color = '#4F4F4F'
            })
    } else {
        dos.style.display = 'none';
        tres.style.display = 'none';
        javascriptArray[0].style.display = 'block'
        responsiveArray.forEach(element => {
            element.style.display = 'none'
        });
        alljs.forEach(element => {
            element.style.display = 'none'
        });
        let position = 0
        let next = 1
        menos.forEach(element => {
            element.addEventListener('click', () => {
                if (position > 0) {
                    allArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray[next-1].style.display = 'none';
                    javascriptArray[position-1].style.display = 'block';
                    position--;
                    next--;
                    uno.innerHTML = String(next) 
                    if (next < 4) {
                        left.style.display = 'block'
                        right.style.display = 'block'
                    };
                    if (next === 1) left.style.display = 'none';
                }           
            })
        });
        mas3.forEach(element => {
            element.addEventListener('click', () => {
                if (position < 3) {
                    allArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    responsiveArray.forEach(element => {
                        element.style.display = 'none'
                    });
                    javascriptArray[position].style.display = 'none';
                    javascriptArray[next].style.display = 'block';
                    position++;
                    next++;
                    uno.innerHTML = String(next)
                    if (next > 1) {
                        left.style.display = 'block'
                        right.style.display = 'block'
                    };
                    if (next === 4) {
                        right.style.display = 'none'
                    };  
                }         
            })
        });
    }
    
}

function reset() {
    if (innerWidth > 768) { 
        uno.innerHTML = String(1)
        right.style.display = 'none'
        left.style.display = 'none'
    } else {
        uno.innerHTML = String(1)
        right.style.display = 'block'
        left.style.display = 'none'
    }
    
    
}

window.onresize = function(){ location.reload(); }