function words(word) {
    let delimeters = [ ',', '.', '!', '?', ':', ";"]
    let myList = word.split(" ")
    let second_list = []

    for (value in myList) {
        let insideList = myList[value].split("")
        for (ch in insideList){
            if (delimeters.includes(insideList[ch])) {
                insideList.splice(ch, 1)
            } 
        }

        for (ch in insideList){
            insideList[ch] =  insideList[ch].toUpperCase()
        }
        second_list.push(insideList.join(''))
    }
    console.log(second_list.join(", "))
}

words('i.e. ho,ld other functions')