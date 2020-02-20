const $buttonRight = document.querySelector('#button-right')
const $buttonLeft = document.querySelector('#button-left')
const $projects = document.querySelector('.c-projects')
const $workDescription = document.querySelector('#project-name')
const $burgerButton = document.querySelector('#burger')
const $header = document.querySelector('.c-header')

const data = {
    images: ['project-1.jpg', 'project-2.jpg', 'project-3.jpg'],
    descriptions: ['Proyecto 1', 'Proyecto 2', 'Proyecto 3']
}

const getCurrentImageIndex = () => {
    const backgroundImage = getComputedStyle($projects).backgroundImage
    const auxArray = backgroundImage.split('/img/')
    const auxArray2= auxArray[1].split('"')
    const currentImage = auxArray2[0]
    // console.log(currentImage)

    const currentIndex = data.images.indexOf(currentImage)
    console.log(currentIndex)
    return currentIndex
}

const getCurrentDescriptionIndex = () => {
    const currentDescription = $workDescription.textContent
    const currentIndex = data.descriptions.indexOf(currentDescription)
    return currentIndex
}

const changeImage = order => {
    let index = getCurrentImageIndex()
    if (order === 'inc') {
        index++
        if( index < data.images.length) {
            $projects.style.backgroundImage = `url('./img/${data.images[index]}')`
        } else {
            $projects.style.backgroundImage = `url('./img/${data.images[0]}`
        }
    } else if (order === 'dec') {
        index--
        if( index >= 0) {
            $projects.style.backgroundImage = `url('./img/${data.images[index]}')`
            console.log(`url('./img/${data.images[index]}')`)
        } else {
            console.log(`url('./img/${data.images[data.images.length - 1]})`)
            $projects.style.backgroundImage = `url('./img/${data.images[data.images.length - 1]}')`
        }
        
    }
}

const changeDescription = order => {
    let index = getCurrentDescriptionIndex()
    if (order === 'inc') {
        index++
        if( index < data.descriptions.length) {
            $workDescription.textContent = data.descriptions[index]
        } else {
            $workDescription.textContent = data.descriptions[0]
        }

    } else if (order === 'dec') {
        index--
        if(index >= 0) {
            $workDescription.textContent = data.descriptions[index]
        } else {
            $workDescription.textContent = data.descriptions[data.descriptions.length - 1]
        }
    } 
}

$buttonRight.addEventListener('click', () => {   
    changeImage('inc')
    changeDescription('inc')
})

$buttonLeft.addEventListener('click', () => {   
    changeImage('dec')
    changeDescription('dec')
})

$burgerButton.addEventListener('click', () => {
    $header.classList.toggle('c-header--active')
})

$header.addEventListener('click', event => {
    if (event.target.classList.contains('c-header__link')) {
        $header.classList.toggle('c-header--active')
    }
})

