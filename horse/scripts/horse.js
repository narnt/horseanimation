let Horse = {
    name: 'horse',
    el: document.querySelector('.horse'),
    marg: function() {
        if (Horse.el.style.animationName == 'horsee') {
            Horse.el.style.animationName = 'none';
        } else {
            Horse.el.style.animation = 'horsee 1s ease-in infinite alternate';
            return Horse.el.style.animation
        }
    },
    move() {
        Horse.marg();
        console.log(this)
    }
}

document.querySelector('button').addEventListener('click', Horse.move);