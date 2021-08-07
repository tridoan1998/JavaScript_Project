
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circles = createCircle(3)
circles.draw()
