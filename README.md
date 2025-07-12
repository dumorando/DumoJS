# Dumo.JS
A new version of my old library also called dumo.js.<br><br>
It's just a library to manage libraries, made for me but you can use it too if you care enough.<br>
```js
DumoJS.load_library_sync("sweetalert2"); //not recommended
//or
DumoJS.load_library("sweetalert2")
    .then(() => {
        Swal.fire("hi!");
    });
```
