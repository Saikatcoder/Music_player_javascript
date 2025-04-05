let uploadImage= document.getElementById('upload-input');
let songTitle = document.getElementById('title');
uploadImage.onchange = (event)=>{
    // file show
    let file = event.target.files[0]
   let size = ((file.size/1000)/1000).toFixed(1) //file size calculation
   let sizedisplay = document.getElementById('size')
   sizedisplay.innerHTML = `size${size}MB`
   let songName = file.name;
   songTitle.innerHTML = songName;
   console.log(size);
   

}

