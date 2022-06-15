// In a nested group of functions, the inner functions have access to the variables of the parent
// functions, but parent functions dont have access to variables of inner function

function grandfather() {
  let name = "Karamchand Gandhi";
  console.log(name2); //  This will not work

  function parent() {
    let name2 = "Gandhi Ji";
    console.log(name); // This will work
    console.log(name3); // This will not work

    function child() {
      let name3 = "Modi ji";
      console.log(name); // This will also work
    }
    child();
  }
  parent();
}

grandfather();
