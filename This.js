const photoSlideShow = {
    photoList: ["pic1", "pic2", "pic3"],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        if (this.photoList.length > 0 && this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
            } else {
                console.log("End of slideshow")
            };
    },
    prevPhoto: function () {
        if (this.photoList.length > 0 && this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex])
        } else {
            console.log("Beginning of slideshow")
        };
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },
};


// photoSlideShow.nextPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
console.log (photoSlideShow.getCurrentPhoto());