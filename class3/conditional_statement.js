function launchbrowser(browsername){
let sname='chrome';
    if(sname===browsername){
        console.log('The browser is '+sname)
    }else{
        console.log('invalid browser')
    }

}

function runtest(testname){

    

    switch(testname){
        case 'smoke':
            console.log( `this is ${test2} test`)
        break;
         case 'sanity':
            console.log( `this is ${test2} test`)
        break;
         case 'regression':
            console.log( `this is ${test2} test`)
        break;
        default:
            console.log(`this is not valid test`)
            break;

    }
}
let browser='chrome'
launchbrowser(browser)
let test2='sanity'
runtest(test2)