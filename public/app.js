function rnd() {
    return Math.floor((Math.random() * 1000000) + 1);
}

function upload() {

    const ref = firebase.storage().ref('uploadImg')
    const file = document.querySelector("#photo").files[0]
    const name = new Date() + '-' + file.name
    const metadata = {
        contentType: file.type
    }

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const task = ref.child("imgid=" + rnd()).put(file, metadata).then(function() {
        location.reload();
    });
}

function imgShow() {
    const images = firebase.storage().ref('uploadImg');
    images.listAll().then(function(snap) {
        var imgs = snap.items;
        for (let i = 0; i < imgs.length; i++) {
            const image = images.child(imgs[i].name);
            image.getDownloadURL().then((url) => {
                var imgComponent = document.createElement("img");
                imgComponent.src = url
                document.getElementById("thumbnailContainerId").appendChild(imgComponent);
                imgComponent.setAttribute('onmouseover', ("document.getElementById('previewId').src='" + url + "'"))
            });
        }
    });
}

imgShow();
// }
// const image = images.child('imgid-2020-3-7');
// image.getDownloadURL().then((url) => {
//     var el = document.getElementById('ousnik');
//     el.src = url;
// });


// var ref1 = firebase.storage().ref('uploadImg')
// ref1().getDownloadURL().then(function(url) {
//     console.log(url);
// });


// task
//         .then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {

//             console.log(url)
//             alert("Image Uploaded")

//             const image = document.querySelector("#image")
//             image.src = url
//             image.width = 150
//             image.height = 80
//             image.align = justify
//         })